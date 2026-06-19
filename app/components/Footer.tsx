import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-obsidian-900 border-t border-border-primary py-6 md:py-6 px-6 md:px-0">
        <div className="container max-w-6xl mx-auto">
          {/* Added items-start to force top-alignment of all columns on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 items-start">
            {/* Branding Column */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-text-primary mb-4 text-base md:text-lg">
                Barkaat Software Solutions
              </h4>
              <p className="text-text-muted text-sm max-w-xs leading-relaxed">
                Engineering high-scale digital ecosystems.
              </p>
            </div>

            {/* Services Column */}
            <div>
              <h5 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
                SERVICES
              </h5>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>
                  <Link
                    href="/services"
                    className="hover:text-text-primary transition-colors"
                  >
                    Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-text-primary transition-colors"
                  >
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-text-primary transition-colors"
                  >
                    Infrastructure
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h5 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
                COMPANY
              </h5>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>
                  <Link
                    href="/work"
                    className="hover:text-text-primary transition-colors"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="hover:text-text-primary transition-colors"
                  >
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-text-primary transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h5 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
                CONTACT
              </h5>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>
                  {/* Cleaned up layout breaking for long domains on mobile */}
                  <a
                    href="mailto:test@barkaatsoftwaresolutions.com"
                    className="hover:text-text-primary transition-colors block max-w-[160px] sm:max-w-none"
                  >
                    test@barkaatsoftwaresolutions.com
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-text-primary transition-colors"
                  >
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border-primary pt-2 text-center text-text-muted text-sm">
            <p>© 2026 Barkaat Software Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
