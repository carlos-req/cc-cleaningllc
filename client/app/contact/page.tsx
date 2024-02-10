"use client";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 ">
      <div className="gradient"></div>
      <form className="z-10 w-full max-w-lg">
        <h1 className="mb-2 text-4xl text-slate-950">Contact us</h1>
        <p className="mb-8 text-md text-neutral-600">
          We appreciate you taking the time to get in contact with us.
        </p>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="grid-password"
            >
              Full Name
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="nick"
              type="text"
            />
            <p className="text-xs italic text-gray-600">Ex: John Smith</p>
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
            />
            <p className="text-xs italic text-gray-600">
              Ex: Jsmith@example.com
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
            ></textarea>
            <p className="text-xs italic text-gray-600">
              Please include: Reason for inquiry, Number of rooms, sq ft and any
              other relevant information.
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="px-3.5 py-2.5 w-40 font-bold text-white rounded-full shadow bg-sky-500 hover:bg-sky-300 focus:shadow-outline focus:outline-none"
              type="button"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
