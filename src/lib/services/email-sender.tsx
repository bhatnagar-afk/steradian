import emailjs from "emailjs-com";
export const sendEmail = (formData: { name: string; email: string; message: string }) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
  );
};
