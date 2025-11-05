export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Digital Strategy', href: '#strategy' },
      { name: 'Web Development', href: '#web-dev' },
      { name: 'Cloud Solutions', href: '#cloud' },
      { name: 'Consulting', href: '#consulting' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'News', href: '#news' },
    ],
    resources: [
      { name: 'Knowledge Center', href: '#knowledge' },
      { name: 'Case Studies', href: '#cases' },
      { name: 'Events', href: '#events' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  const offices = [
    { city: 'Oslo', address: 'Storgata 1, 0155 Oslo', phone: '+47 12 34 56 78' },
    { city: 'Bergen', address: 'Vågen 5, 5003 Bergen', phone: '+47 12 34 56 79' },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-semibold text-white">
                Proxima
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-md">
              Professional digital solutions and consulting services. We help businesses succeed with modern technology and expert guidance.
            </p>

            {/* Offices */}
            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.city}>
                  <h4 className="text-white font-semibold text-sm mb-1">{office.city}</h4>
                  <p className="text-gray-400 text-sm">{office.address}</p>
                  <p className="text-gray-400 text-sm">{office.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[var(--accent-primary)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[var(--accent-primary)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[var(--accent-primary)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} Proxima. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
