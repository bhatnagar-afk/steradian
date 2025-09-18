import BackgroundAnimation from "@/components/bg-animation/blueprint-animation";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-center text-3xl font-bold py-10 text-white bg-blue-800">
        Scroll Down to See the Blueprint Animation
      </h1>
      <BackgroundAnimation />
    </main>
  );
}