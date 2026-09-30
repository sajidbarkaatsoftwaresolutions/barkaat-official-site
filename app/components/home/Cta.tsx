import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-12 md:py-20 px-5 md:px-10 bg-obsidian-800 border-t border-border-primary">
      <div className="max-w-[1400px] px-5 md:px-10 text-center max-w-2xl mx-auto">
        <h2 className="font-montserrat text-2xl md:text-3xl lg:text-[48px] font-extrabold text-text-primary mb-12 uppercase tracking-[-0.5px]">
          Ready to Scale?
        </h2>
        <p className="text-base md:text-lg text-text-secondary mb-8 leading-relaxed max-w-[800px] mx-auto">
          Let&rsquo;s discuss your engineering challenges and build the system
          that powers the next generation of your product.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link href="/contact">
            <button className="py-3 px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]">
              Start Project <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/work">
            <button className="py-3 px-6 bg-accent-crimson text-text-primary border-none rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 font-montserrat uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-accent-crimson-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(211,65,78,0.3)]">
              View Our Work <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
