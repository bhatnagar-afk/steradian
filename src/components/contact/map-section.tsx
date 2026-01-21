"use client";

export default function MapSection() {
  return (
    <div className="w-full h-[450px]">
      <iframe
        title="Office Location"
        src="https://www.google.com/maps?q=SteradianArchitects&output=embed"
        width="100%"
        height="100%"
        style={{ borderRadius: 20 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
