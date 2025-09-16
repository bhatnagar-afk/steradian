import Image from 'next/image';
import Link from 'next/link';
export default function HomeHeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home-page-bg.jpeg"
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center blur-sm brightness-75"
        />
      </div>
      {/* Hero content */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-200 ring-1 ring-white/10 hover:ring-white/20 backdrop-blur-sm bg-white/10">
              Work in progress...{' '}
            </div>
          </div>

          <div className="text-center text-white">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              Steradian Architects
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-200 sm:text-xl">
              Architects | Consultants <br /> Interior Designers
              40+ years of Industry Experience
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/about"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                About us
              </Link>
              <Link href="/projects" className="text-sm font-semibold text-white">
                Our work<span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
