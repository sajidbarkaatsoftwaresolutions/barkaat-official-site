import { ArrowRight } from "lucide-react";
import Link from "next/link";
import NeuralMesh from "../NeuralMesh";

export default function Hero() {
  return (
    <>
      <section className="mt-16 lg:mt-[72px] py-10 md:py-[60px] pb-20 md:pb-[120px] px-5 md:px-10 bg-transparent relative overflow-hidden h-[90vh]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center">
          <div className="flex flex-col gap-5 md:gap-8">
            <h1 className="font-montserrat text-3xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em] text-text-primary uppercase mt-20 lg:mt-5">
              INNOVATION MEETS{" "}
              <span className="text-accent-crimson">EXCELLENCE</span>
            </h1>
            <p className="text-sm md:text-lg leading-relaxed md:leading-[1.8] text-text-secondary max-w-[650px]">
              Welcome to Barkaat Software Solutions. We specialize in crafting
              cutting-edge software solutions tailored to meet the diverse needs
              of our clients. With a dedicated team of industry experts, we push
              the boundaries of what&rsquo;s possible in the digital realm. From
              custom software development to AI-driven solutions.
            </p>
            <Link href="/contact">
              <button className="relative z-[100] inline-flex items-center gap-2 py-2.5 px-5 md:py-3 md:px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-sm md:text-base font-bold cursor-pointer transition-all duration-300 font-montserrat uppercase tracking-wider w-fit hover:bg-accent-crimson-light hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(211,65,78,0.4)]">
                Start Your Project{" "}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <NeuralMesh />
    </>
  );
}
