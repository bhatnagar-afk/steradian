import * as fa from "react-icons/fa";
import { themes } from "@/config/theme";

export default function ContactTextPage() {
  const themeConfig = themes.dark;
  
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: themeConfig.text }}>
        Let&apos;s design something extraordinary together.
      </h1>

      <div className="space-y-4" style={{ color: themeConfig.textMuted }}>
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
          className="p-3 rounded-full hover:opacity-80 transition"
          style={{ backgroundColor: themeConfig.cardBackground }}
        >
          <fa.FaFacebookF style={{ color: themeConfig.textMuted }} />
        </a>
        <a
          href="https://www.linkedin.com/in/nitin-bhatnagar-7112457a/"
          className="p-3 rounded-full hover:opacity-80 transition"
          style={{ backgroundColor: themeConfig.cardBackground }}
        >
          <fa.FaLinkedinIn style={{ color: themeConfig.textMuted }} />
        </a>
        <a
          href="https://www.instagram.com/steradianarchitects/"
          className="p-3 rounded-full hover:opacity-80 transition"
          style={{ backgroundColor: themeConfig.cardBackground }}
        >
          <fa.FaInstagram style={{ color: themeConfig.textMuted }} />
        </a>
      </div>
    </div>
  );
}