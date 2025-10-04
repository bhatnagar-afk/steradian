import ContactTextPage from "@/components/contact/contact-details";
import ContactForm from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side: text */}
        <ContactTextPage />

        {/* Right side: form */}
        <ContactForm />
      </div>
    </div>
  );
}
