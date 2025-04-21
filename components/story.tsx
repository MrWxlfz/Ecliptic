import Image from 'next/image'
import Team from '@/public/images/team.jpg'

export default function Story() {
  return (
    <section className="relative">

      {/* Blurred shape */}
      <div className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7"></stop>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
        </svg>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">The story of Ecliptic</h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src={Team} width={420} height={280} alt="Team" />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                    Ecliptic started with one goal in mind: to give Roblox developers real tools to fight back. Not just against exploiters, but against the stress of managing a live game without the right systems in place.
                  </p>
                  <p>
                    We built what we needed—then made it better for everyone else. <strong className="text-slate-50 font-medium">EclipseGuard became our first line of defense</strong>, and the Ecliptic Portal followed, letting developers watch their game in real time, moderate players, and stay ahead of problems.
                  </p>
                  <p>
                    We’re not some corporate behemoth. We’re just developers—like you—who were tired of getting nuked by cheaters, or losing sleep over moderation logs. So we built the tools we wished existed, and made sure they felt fast, clean, and kind of fun to use.
                  </p>
                  <p>
                    Everything is invite-only and closed-source to keep it secure and tight-knit. But if you're building something serious, something with potential—we want to support that. <strong className="text-slate-50 font-medium">You bring the game. We'll keep it safe.</strong>
                  </p>
                  <p>
                    Ecliptic is just getting started. We’re constantly experimenting with new tech, working directly with studios, and pushing updates almost obsessively. We're not here to follow trends—we're here to set new standards in how Roblox security and studio management should be done.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
