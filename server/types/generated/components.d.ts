import type { Schema, Attribute } from '@strapi/strapi';

export interface FooterFooterColumns extends Schema.Component {
  collectionName: 'components_footer_footer_columns';
  info: {
    displayName: 'footerColumns';
  };
  attributes: {
    footer_sections: Attribute.Relation<
      'footer.footer-columns',
      'oneToMany',
      'api::footer-section.footer-section'
    >;
  };
}

export interface FooterFooterCopyright extends Schema.Component {
  collectionName: 'components_footer_footer_copyrights';
  info: {
    displayName: 'footerCopyright';
  };
  attributes: {
    copyright: Attribute.String;
  };
}

export interface FooterFooterDevTag extends Schema.Component {
  collectionName: 'components_footer_footer_dev_tags';
  info: {
    displayName: 'footerDevTag';
  };
  attributes: {
    developerTag: Attribute.String;
    developerLink: Attribute.String;
  };
}

export interface FooterFooterLink extends Schema.Component {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'footerLink';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    target: Attribute.Enumeration<['_blank']>;
  };
}

export interface FooterFooterLogo extends Schema.Component {
  collectionName: 'components_footer_footer_logos';
  info: {
    displayName: ' footerLogo';
  };
  attributes: {
    companyLogo: Attribute.Media;
    companyName: Attribute.String;
  };
}

export interface FooterFooterSocial extends Schema.Component {
  collectionName: 'components_footer_footer_socials';
  info: {
    displayName: 'footerSocial';
  };
  attributes: {
    url: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
    name: Attribute.String;
  };
}

export interface GlobalNavigation extends Schema.Component {
  collectionName: 'components_global_navigations';
  info: {
    displayName: 'Navigation';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
    rightButton: Attribute.Component<'shared.link'>;
    leftButton: Attribute.Component<'shared.company-button'>;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']>;
    link: Attribute.Component<'shared.link'>;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SharedCompanyButton extends Schema.Component {
  collectionName: 'components_shared_company_buttons';
  info: {
    displayName: 'LogoButton';
    description: '';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    altText: Attribute.String & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'MetaSocial';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']>;
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'earth';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'footer.footer-columns': FooterFooterColumns;
      'footer.footer-copyright': FooterFooterCopyright;
      'footer.footer-dev-tag': FooterFooterDevTag;
      'footer.footer-link': FooterFooterLink;
      'footer.footer-logo': FooterFooterLogo;
      'footer.footer-social': FooterFooterSocial;
      'global.navigation': GlobalNavigation;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.company-button': SharedCompanyButton;
      'shared.link': SharedLink;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
