import ContactTextPage from "@/components/contact/contact-details";
import ContactForm from "@/components/contact/contact-form";
import {themes} from "@/config/theme";
export default function ContactPage() {
 const themeConfig = themes.dark;
 const themeStyle ={
    backgroundColor: themeConfig.background,
    color: themeConfig.text,
 }
  return (
    <div className="min-h-screen py-16 px-6" style={themeStyle}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side: text */}
        <ContactTextPage />

        {/* Right side: form */}
        <ContactForm />
      </div>
    </div>
  );
}
