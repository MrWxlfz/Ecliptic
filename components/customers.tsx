import Image from 'next/image'
import CustomerImg01 from '@/public/images/customer-01.jpg'
import CustomerImg02 from '@/public/images/customer-02.jpg'
import CustomerImg03 from '@/public/images/customer-03.jpg'
import CustomerImg04 from '@/public/images/customer-04.jpg'
import CustomerImg05 from '@/public/images/customer-05.jpg'
import CustomerImg06 from '@/public/images/customer-06.jpg'
import CustomerImg07 from '@/public/images/customer-07.jpg'
import CustomerImg08 from '@/public/images/customer-08.jpg'
import CustomerImg09 from '@/public/images/customer-09.jpg'

export default function Customers() {

  const items = [
    {
      img: CustomerImg01,
      quote: "As a solo dev, Ecliptic saved me *months* of work. The anti-exploit works flawlessly and the dashboard is way cleaner than anything I could build myself.",
      name: 'Mike Smets',
      twitter: {
        handle: '@MikeSmets',
        link: '#0'
      }
    },
    {
      img: CustomerImg02,
      quote: "We manage a front-page Roblox game, and Ecliptic is the only security layer we trust. Fast, accurate, and always improving.",
      name: '[redacted]',
      twitter: {
        handle: '[redacted]',
        link: '#0'
      }
    },
    {
      img: CustomerImg03,
      quote: "Ecliptic helped us catch over 300 exploit attempts in the first week. The Portal logs *everything*—it’s a game-changer.",
      name: 'Liz Park',
      twitter: {
        handle: '@liz-park82',
        link: '#0'
      }
    },
    {
      img: CustomerImg04,
      quote: "Our studio has millions of visits a month. Ecliptic keeps things under control so our team can actually sleep at night.",
      name: 'Jessie Maison',
      twitter: {
        handle: '@jessiem9',
        link: '#0'
      }
    },
    {
      img: CustomerImg05,
      quote: "This is the first time I’ve felt truly confident launching a game. Ecliptic has my back—and my playerbase safe.",
      name: 'Devani Janssen',
      twitter: {
        handle: '@deva07p',
        link: '#0'
      }
    },
    {
      img: CustomerImg06,
      quote: "We switched from another anti-cheat and never looked back. Ecliptic is lighter, faster, and actually responsive to feedback.",
      name: 'Mark Gerkules',
      twitter: {
        handle: '@mark-gerk',
        link: '#0'
      }
    },
    {
      img: CustomerImg07,
      quote: "Ecliptic makes moderation feel effortless. The real-time logs and remote tools are a dream, especially when you're juggling multiple games.",
      name: 'Andrey Propenk',
      twitter: {
        handle: '@andrey-prok',
        link: '#0'
      }
    },
    {
      img: CustomerImg08,
      quote: "It’s the little things—like the clean UI, accurate detection, and detailed logs—that make Ecliptic feel premium. Worth every penny.",
      name: 'Jay Master',
      twitter: {
        handle: '@masterpro',
        link: '#0'
      }
    },
    {
      img: CustomerImg09,
      quote: "\"Got banned in 2 seconds. They detected my UI spoof, kicked me, and sent a log to the dev. 0/10 I miss when I could cheat in peace.\"",
      name: 'Some banned exploiter',
      twitter: {
        handle: '@definitelynotcheating',
        link: '#0'
      }
    },
  ]

  return (
    <section className="relative">
      {/* Radial gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Meet our customers</h2>
            <p className="text-lg text-slate-400">From indie devs to large-scale studios—even a few salty exploiters—Ecliptic is trusted by the people who care about security the most.</p>
          </div>
          {/* Customers */}
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-xs mx-auto lg:max-w-none">
            {items.map((item, index) => (
              <div key={index} className="relative p-5 before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl">
                <div className="flex items-center justify-between space-x-2 mb-4">
                  <div className="flex items-center space-x-4">
                    <Image className="shrink-0 rounded-full" src={item.img} width={44} height={44} alt={item.name} />
                    <div className="grow truncate">
                      <div className="font-bold text-slate-100 truncate">{item.name}</div>
                      <a className="text-sm text-slate-500 hover:text-slate-300 font-medium truncate transition-colors" href={item.twitter.link}>{item.twitter.handle}</a>
                    </div>
                  </div>
                  <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="90" height="14">
                    <path className="fill-purple-500" d="M7 0 5.006 5.368H0l4.232 3.221L2.195 14 7 10.344 11.82 14 9.768 8.589 14 5.368H8.98zM26 0l-1.994 5.368H19l4.232 3.221L21.195 14 26 10.344 30.82 14l-2.052-5.411L33 5.368h-5.02zM45 0l-1.994 5.368H38l4.232 3.221L40.195 14 45 10.344 49.82 14l-2.052-5.411L52 5.368h-5.02zM64 0l-1.994 5.368H57l4.232 3.221L59.195 14 64 10.344 68.82 14l-2.052-5.411L71 5.368h-5.02zM83 0l-1.994 5.368H76l4.232 3.221L78.195 14 83 10.344 87.82 14l-2.052-5.411L90 5.368h-5.02z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-400">{item.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
