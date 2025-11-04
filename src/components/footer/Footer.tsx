export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Changelog', href: '#changelog' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Community', href: '#community' },
      { name: 'Support', href: '#support' },
      { name: 'API Reference', href: '#api' },
      { name: 'Status', href: '#status' },
    ],
    legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'Licenses', href: '#licenses' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: '󰊤' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '𝕏' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '' },
    { name: 'YouTube', href: 'https://youtube.com', icon: '' },
  ];

  return (
    <footer className="relative bg-[#D1CEC8] border-t border-gray-300">
      <div className="relative z-10 max-w-[1088px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {/* Brand column */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Epinova
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 font-light">
                Modern CMS platform powered by Optimizely and Next.js
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-white hover:bg-[#75E6DA] border border-gray-300 hover:border-[#75E6DA] flex items-center justify-center text-gray-700 hover:text-white transition-all duration-200"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-700 hover:text-[#75E6DA] transition-colors duration-200 font-light"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-700 hover:text-[#75E6DA] transition-colors duration-200 font-light"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-700 hover:text-[#75E6DA] transition-colors duration-200 font-light"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-700 hover:text-[#75E6DA] transition-colors duration-200 font-light"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 font-light">
              <span>&copy; {currentYear} Epinova</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">All rights reserved</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600 font-light">
              <a href="#" className="hover:text-[#75E6DA] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#75E6DA] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#75E6DA] transition-colors duration-200">
                Cookie Settings
              </a>
            </div>
          </div>

          {/* Tech stack badge */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-300">
              <span className="text-xs text-gray-500 font-light">Built with</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-normal text-gray-700">Next.js 16</span>
                <span className="text-gray-400">•</span>
                <span className="text-xs font-normal text-gray-700">React 19</span>
                <span className="text-gray-400">•</span>
                <span className="text-xs font-normal text-gray-700">Optimizely</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
