import * as fa from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
            Let&apos;s design something extraordinary together.
          </h1>

          <div className="space-y-4 text-gray-300">
            <p>
              <span className="font-bold">Office Address:</span> <br />
              123 Creative Lane, Design City, 56789
            </p>
            <p>
              <span className="font-bold">Email:</span> <br />
              contact@brotherswebsite.com
            </p>
            <p>
              <span className="font-bold">Phone:</span> <br />
              +1 (234) 567-890
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex space-x-4">
            <a
              href="#"
              className="p-3 bg-gray-200 rounded-full hover:bg-gray-900 transition"
            >
              <fa.FaFacebookF className="text-gray-300" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              <fa.FaTwitter className="text-gray-300" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              <fa.FaLinkedinIn className="text-gray-300" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              <fa.FaInstagram className="text-gray-300" />
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-md">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                placeholder="Your message..."
                rows={4}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
