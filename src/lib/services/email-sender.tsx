import emailjs from "emailjs-com";

export const sendEmail = (formData: { name: string; email: string; message: string }) => {
  return emailjs.send(
    process.env.emailJS_SERVICE_ID || "",
    process.env.emailJS_TEMPLATE_ID || "",
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    process.env.emailJS_PUBLIC_KEY || ""
  );
};
