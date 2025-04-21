export default function Faqs() {
  return (
  <section className="relative">

    {/* Blurred shape */}
    <div className="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
        <defs>
          <linearGradient id="bs3-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path fill="url(#bs3-a)" fillRule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)" />
      </svg>
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div>
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">Getting started with Ecliptic</div>
          </div>
          <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Everything you need to know</h2>
        </div>

        {/* Columns */}
        <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">

          {/* Column */}
          <div className="w-full md:w-1/2 space-y-8">

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What is Ecliptic?</h4>
              <p className="text-slate-400">Ecliptic is a security and game management platform built by Roblox developers, for Roblox developers. At its core, Ecliptic helps you protect your game from exploiters, track what’s going on in real-time, and manage your player base smarter—all without needing to build complicated systems from scratch. Ecliptic gives you the same high-end tools used by top-tier games—without the bloat or complexity. </p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What's an affordable alternative to Ecliptic?</h4>
              <p className="text-slate-400">It might sound we're saying this because we want you to buy our product.. but spoiler alert- there is no affordable alternative!</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Can I remove the 'Powered by Ecliptic' branding?</h4>
              <p className="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </div>

          </div>

          {/* Column */}
          <div className="w-full md:w-1/2 space-y-8">

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What kind of data can I collect from my customers?</h4>
              <p className="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Can I use Ecliptic for free?</h4>
              <p className="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Is Ecliptic affordable for small businesses?</h4>
              <p className="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
  )
}