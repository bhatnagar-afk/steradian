import * as fa from "react-icons/fa";
import Link from "next/link";
export default function ContactTextPage() {
  return (
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
        <Link
          href="#"
          className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition"
        >
          <fa.FaFacebookF className="text-gray-300" />
        </Link>
        <Link
          href="#"
          className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition"
        >
          <fa.FaLinkedinIn className="text-gray-300" />
        </Link>
        <Link
          href="#"
          className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition"
        >
          <fa.FaInstagram className="text-gray-300" />
        </Link>
      </div>
    </div>
  );
}
