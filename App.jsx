import { useState } from 'react'

export default function AnthonyPraganoGolfWebsite() {
  const [activePage, setActivePage] = useState('home')
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gradient-to-r from-[#ff7a00] via-[#ffb347] to-[#ff7a00] selection:text-black font-black italic uppercase tracking-[-0.06em] ">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-[#ff8c1a]/70">
        <div className="max-w-[90rem] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-black italic uppercase skew-x-[-6deg] tracking-[-0.08em]">
            Anthony <span className="text-[#ff8c1a]">Pragano</span> Golf
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.24em] text-zinc-200">
            <button onClick={() => setActivePage('about')} className="hover:text-[#ff8c1a] transition-colors cursor-pointer">About</button>
            <button onClick={() => setActivePage('instructor')} className="hover:text-[#ff8c1a] transition-colors cursor-pointer">Meet The Instructor</button>
            <button onClick={() => setActivePage('programs')} className="hover:text-[#ff8c1a] transition-colors cursor-pointer">Programs</button>
            <button onClick={() => setActivePage('contact')} className="hover:text-[#ff8c1a] transition-colors cursor-pointer">Contact</button>
          </div>
        </div>
      </nav>
      <>
{/* Hero Section */}
      <section className="relative overflow-hidden border-b-4 border-[#ff7a00]/80 before:absolute before:left-0 before:top-0 before:h-2 before:w-full before:bg-gradient-to-r before:from-[#ff7a00] before:via-[#ffb347] before:to-[#ff7a00]">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(251,146,60,0.06),transparent_35%)]" />

        <div className="relative max-w-[90rem] mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-none clip-path-slant border-[2px] border-[#ffb067] bg-gradient-to-r from-[#ff7a00] via-[#ffb347] to-[#ff7a00] text-black text-sm font-black italic uppercase skew-x-[-6deg] tracking-[0.18em] mb-6 shadow-[0_0_8px_rgba(255,140,26,0.12)]">
              CLAIM THE THRONE
            </div>

            <h1 className="text-5xl lg:text-[5rem] font-black italic uppercase skew-x-[-6deg] tracking-[-0.06em] leading-[1.05]">
              DOMINATE YOUR
              <span className="block text-[#ff8c1a]">GAME</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-200 max-w-xl leading-relaxed">
              Premium golf coaching, elite performance training, and championship-level mindset development with Anthony Pragano Golf.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={() => setActivePage('contact')} className="bg-gradient-to-r from-[#ff7a00] via-[#ffb347] to-[#ff7a00] hover:scale-[1.03] border-[3px] border-[#ffb067] text-black font-black italic uppercase skew-x-[-6deg] px-8 py-4 rounded-none clip-path-slant transition-all duration-150 shadow-[0_0_10px_rgba(255,140,26,0.15)] uppercase tracking-[0.2em]">
                Book Coaching
              </button>

              <button onClick={() => setActivePage('programs')} className="bg-gradient-to-r from-[#ff7a00] via-[#ffb347] to-[#ff7a00] hover:scale-[1.03] border-[3px] border-[#ffb067] text-black font-black italic uppercase skew-x-[-6deg] px-8 py-4 rounded-none clip-path-slant transition-all duration-150 shadow-[0_0_10px_rgba(255,140,26,0.15)] tracking-[0.2em]">
                View Programs
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a00] via-[#ffb347] to-[#ff7a00] blur-xl opacity-5 rounded-full" />

              <div className="relative w-full max-w-3xl overflow-hidden rounded-none border border-[#ff8c1a]/70 shadow-[0_0_12px_rgba(249,115,22,0.08)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a00] via-[#ffb347] to-[#ff7a00] blur-xl opacity-5 z-0" />

                <div className="relative z-10 aspect-[4/3] bg-[linear-gradient(to_bottom_right,#000,#111,#2a1205)] flex items-center justify-center p-10 border-y-4 border-[#ff7a00]/80">
                  <div className="text-center">
                    <div className="text-[6rem] lg:text-[8rem] font-black italic uppercase skew-x-[-6deg] tracking-[-0.06em] leading-[1.05] drop-shadow-[0_0_8px_rgba(249,115,22,0.15)]">
                      <span className="text-[#ff8c1a]">A</span>
                      <span className="text-white">P</span>
                    </div>

                    <div className="mt-4 text-3xl lg:text-5xl font-black italic uppercase skew-x-[-6deg] tracking-[-0.06em]">
                      Anthony <span className="text-[#ff8c1a]">Pragano</span> Golf
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-4 text-[#ff8c1a] uppercase tracking-[0.4em] text-sm font-bold">
                      <div className="h-[2px] w-16 bg-gradient-to-r from-[#ff7a00] via-[#ffd089] to-[#ff7a00]" />
                      CLAIM THE THRONE
                      <div className="h-[2px] w-16 bg-gradient-to-r from-[#ff7a00] via-[#ffd089] to-[#ff7a00]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-[90rem] mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[#ff8c1a] uppercase tracking-[0.55em] italic text-sm font-black mb-4">
            About Anthony Pragano Golf
          </div>

          <h2 className="text-5xl lg:text-6xl font-black italic uppercase skew-x-[-6deg] tracking-[-0.08em] mb-6 leading-tight">
            Train Like a Champion.
          </h2>

          <p className="text-zinc-200 leading-relaxed text-lg mb-6">
            Anthony Pragano Golf combines elite coaching techniques, master club fitting expertise, and a relentless competitive mindset. Every session is designed to sharpen your mechanics, improve consistency, optimize your equipment, and build confidence on the course.
          </p>

          <p className="text-zinc-300 leading-relaxed">
            Whether you're a beginner or a competitive golfer, the mission stays the same: dominate your game and claim the throne.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            'Private Coaching',
            'Performance Training',
            'Tournament Prep',
            'Junior Development'
          ].map((item) => (
            <div
              key={item}
              className="bg-[linear-gradient(to_bottom_right,#050505,#000,#140800)] border-[1.5px] border-zinc-700 hover:border-[#ffb347] hover:-translate-y-1 hover:scale-[1.03] rounded-none p-8 transition-all duration-150"
            >
              <div className="w-14 h-14 rounded-none clip-path-slant bg-gradient-to-r from-[#ff7a00] via-[#ffb347] to-[#ff7a00]/20 border border-[#ff8c1a]/20 mb-6 flex items-center justify-center text-[#ff8c1a] text-2xl font-black italic uppercase skew-x-[-6deg] tracking-[-0.08em]">
                AP
              </div>

              <h3 className="font-bold text-xl mb-3">{item}</h3>

              <p className="text-zinc-300 text-sm leading-relaxed">
                Customized golf training built for measurable results and long-term growth.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet The Instructor */}
      <section id="instructor" className="max-w-[90rem] mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative overflow-hidden rounded-none border border-[#ff8c1a]/20 bg-[linear-gradient(to_bottom_right,#050505,#000,#140800)] aspect-[4/5] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-black" />

          <div className="relative text-center px-8">
            <div className="text-zinc-500 uppercase tracking-[0.4em] text-sm mb-4">
              Instructor Photo Area
            </div>

            <div className="text-6xl font-black italic uppercase skew-x-[-6deg] tracking-[-0.08em] mb-4">
              YOUR
              <span className="block text-[#ff8c1a]">PHOTO</span>
            </div>

            <p className="text-zinc-300 max-w-sm mx-auto leading-relaxed">
              You can replace this section later with professional coaching photos, tournament shots, or swing images.
            </p>
          </div>
        </div>

        <div>
          <div className="text-[#ff8c1a] uppercase tracking-[0.55em] italic text-sm font-black mb-4">
            Meet The Instructor
          </div>

          <h2 className="text-5xl lg:text-[5rem] font-black italic uppercase skew-x-[-6deg] tracking-[-0.08em] leading-tight mb-6">
            Built Around Competitive Excellence.
          </h2>

          <p className="text-zinc-200 text-lg leading-relaxed mb-6">
            Anthony Pragano Golf is focused on building complete golfers through elite coaching, professional club fitting, technical development, and a championship mindset. Every lesson is structured around measurable improvement and long-term growth.
          </p>

          <p className="text-zinc-300 leading-relaxed mb-10">
            As your brand grows, this section can include your story, certifications, tournament experience, coaching philosophy, and media content.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              ['Tournament Experience', 'Competitive Development'],
              ['Private Lessons', '1-on-1 Coaching'],
              ['Junior Athletes', 'Skill Progression'],
              ['Mental Game', 'Confidence & Focus'],
              ['Master Club Fitter', 'Precision Equipment Fitting'],
              ['Group Clinics', 'Team & Group Instruction']
            ].map(([title, desc]) => (
              <div key={title} className="rounded-none clip-path-slant border-[1.5px] border-zinc-700 bg-zinc-950 p-6">
                <div className="text-[#ff8c1a] font-bold mb-2">{title}</div>
                <div className="text-zinc-300 text-sm">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Brand Experience */}
      <section className="border-y border-zinc-800 bg-[linear-gradient(to_right,#050505,#120700,#050505)]">
        <div className="max-w-[90rem] mx-auto px-8 py-20">
          <div className="text-center mb-14">
            <div className="text-[#ff8c1a] uppercase tracking-[0.55em] italic text-sm font-black mb-4">
              Certifications & Technology
            </div>

            <h2 className="text-4xl lg:text-5xl font-black italic uppercase skew-x-[-6deg] tracking-[-0.08em] mb-6">
              Built on Data. Driven by Performance.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              ['TrackMan Level 1', 'Certified Performance Analysis'],
              ['TrackMan Level 2', 'Advanced Player Development'],
              ['Master Club Fitter', 'Precision Equipment Optimization'],
              ['Elite Coaching', 'Competitive Development']
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-none clip-path-slant border border-[#ff8c1a]/30 bg-[linear-gradient(to_bottom_right,#050505,#000,#140800)] p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-none clip-path-slant border border-[#ffb347] bg-gradient-to-r from-[#ff7a00] via-[#ffb347] to-[#ff7a00] flex items-center justify-center text-black font-black text-xl italic">
                  AP
                </div>

                <div className="text-[#ff8c1a] font-bold text-lg mb-2">{title}</div>
                <div className="text-zinc-300 text-sm leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#ff8c1a]/20 pt-10 text-center">
            <div className="text-zinc-500 uppercase tracking-[0.4em] text-xs mb-8">
              Sponsored & Fitting Partners
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="border border-[#ff8c1a]/30 bg-[linear-gradient(to_bottom_right,#050505,#000,#140800)] p-8 rounded-none clip-path-slant">
                <div className="text-[#ff8c1a] uppercase tracking-[0.25em] text-sm mb-6 font-black italic">
                  Sponsored By
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'PUMA GOLF', logo: null },
                    { name: 'COBRA GOLF', logo: null }
                  ].map((brand) => (
                    <div
                      key={brand.name}
                      className="border border-[#ff8c1a]/20 bg-black/50 py-6 px-4 text-center text-zinc-200 text-lg font-black italic tracking-[0.12em] hover:border-[#ffb347] transition-all duration-150"
                    >
                      <div className="flex flex-col items-center justify-center gap-4">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="h-12 object-contain opacity-90"
                        />
                        {!brand.logo && <div>{brand.name}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#ff8c1a]/30 bg-[linear-gradient(to_bottom_right,#050505,#000,#140800)] p-8 rounded-none clip-path-slant">
                <div className="text-[#ff8c1a] uppercase tracking-[0.25em] text-sm mb-6 font-black italic">
                  Current Fitting Brands
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: 'COBRA', logo: null },
                    { name: 'TITLEIST', logo: null }
                  ].map((brand) => (
                    <div
                      key={brand.name}
                      className="border border-zinc-800 bg-black/50 py-6 px-4 text-center text-zinc-200 text-base font-black italic tracking-[0.1em] hover:border-[#ffb347] hover:text-white transition-all duration-150"
                    >
                      <div className="flex flex-col items-center justify-center gap-4">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="h-12 object-contain opacity-90"
                        />
                        {!brand.logo && <div>{brand.name}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-[90rem] mx-auto px-8 py-24 border-t border-[#ff8c1a]/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[#ff8c1a] uppercase tracking-[0.55em] italic text-sm font-black mb-4">
            Testimonials
          </div>

          <h2 className="text-5xl lg:text-6xl font-black italic uppercase skew-x-[-6deg] tracking-[-0.08em] mb-6">
            Results That Speak For Themselves
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            Real feedback from golfers improving their confidence, consistency, and performance through Anthony Pragano Golf.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Tournament Player',
              text: 'Anthony completely changed the way I approach competitive golf. My consistency and confidence improved immediately.'
            },
            {
              name: 'Ethan Dean',
              text: 'Working with Anthony has helped me improve my consistency, confidence, and overall understanding of the game. Every lesson pushes me to get better.'
            },
            {
              name: 'Cody Long',
              text: 'The combination of TrackMan data, coaching, and club fitting made a huge difference in my ball striking.'
            },
            {
              name: 'Blake Gonzales',
              text: 'Anthony creates a high-level training environment that pushes you to improve every session. The attention to detail and confidence-building has been huge for my game.'
            },
            {
              name: 'College Prospect',
              text: 'Every lesson is structured with purpose. The coaching, feedback, and competitive mindset training have helped elevate my game to another level.'
            },
            {
              name: 'Tournament Golfer',
              text: 'Anthony helped me become more confident under pressure and more consistent throughout every round. The improvement has been noticeable fast.'
            }
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-none border-[1.5px] border-zinc-700 bg-[linear-gradient(to_bottom_right,#050505,#000,#140800)] p-8 hover:border-[#ffb347] hover:-translate-y-1 transition-all duration-150"
            >
              <div className="text-[#ff8c1a] text-5xl font-black leading-none mb-6">“</div>

              <p className="text-zinc-200 leading-relaxed mb-8 text-lg">
                {testimonial.text}
              </p>

              <div className="text-[#ff8c1a] uppercase tracking-[0.2em] text-sm font-black italic">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className="max-w-[90rem] mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            ['500+', 'Students Coached'],
            ['15+', 'Years Experience'],
            ['98%', 'Client Satisfaction'],
            ['24/7', 'Competitive Mindset']
          ].map(([number, label]) => (
            <div key={label}>
              <div className="text-5xl font-black italic uppercase skew-x-[-6deg] tracking-[-0.08em] text-[#ff8c1a]">{number}</div>
              <div className="mt-3 text-zinc-300 uppercase tracking-[0.24em] text-sm">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="max-w-[90rem] mx-auto px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[#ff8c1a] uppercase tracking-[0.55em] italic text-sm font-black mb-4">
            Programs
          </div>

          <h2 className="text-5xl lg:text-6xl font-black italic uppercase skew-x-[-6deg] tracking-[-0.08em] mb-6">
            Coaching Built for Every Level
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            Structured development programs designed to maximize performance, confidence, and consistency. Pricing and lesson structure can easily be updated later as your coaching business evolves.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Starter Program',
              price: '$115',
              juniorPrice: 'Juniors $85',
              features: ['Swing Fundamentals', 'Short Game Basics', '1-on-1 Session']
            },
            {
              title: 'Elite Performance',
              price: '$250',
              juniorPrice: 'Juniors $175',
              features: ['Advanced Mechanics', 'Course Strategy', 'Mental Performance']
            },
            {
              title: 'Champion Package',
              price: '$799',
              features: ['Full Coaching Access', 'Tournament Prep', 'Weekly Evaluations']
            }
          ].map((program) => (
            <div
              key={program.title}
              className="rounded-none border-[1.5px] border-zinc-700 bg-[linear-gradient(to_bottom_right,#050505,#000,#140800)] p-8 hover:border-[#ffb347] hover:-translate-y-1 hover:scale-[1.03] transition-all duration-150"
            >
              <div className="text-[#ff8c1a] uppercase text-sm tracking-[0.18em] mb-4">
                {program.title}
              </div>

              <div className="mb-8">
                <div className="text-5xl font-black italic uppercase skew-x-[-6deg] tracking-[-0.08em] text-white">
                  {program.price}
                </div>

                {program.juniorPrice && (
                  <div className="mt-2 text-[#ff8c1a] text-sm uppercase tracking-[0.25em]">
                    {program.juniorPrice}
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-10">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-zinc-200">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#ff7a00] via-[#ffb347] to-[#ff7a00]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-none clip-path-slant bg-gradient-to-r from-[#ff7a00] via-[#ffb347] to-[#ff7a00] text-black font-bold hover:bg-orange-400 hover:scale-[1.03] transition-all duration-150">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-500/5 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-8 py-24 text-center">
          <div className="text-[#ff8c1a] uppercase tracking-[0.55em] italic text-sm font-black mb-4">
            Ready to Compete?
          </div>

          <h2 className="text-5xl lg:text-[5rem] font-black italic uppercase skew-x-[-6deg] tracking-[-0.08em] leading-tight mb-6">
            It’s Time to
            <span className="block text-[#ff8c1a]">CLAIM THE THRONE</span>
          </h2>

          <p className="text-zinc-200 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Start your journey with Anthony Pragano Golf and build the confidence, precision, and mindset needed to dominate the course.
          </p>

          <button className="bg-[#ff6a00] hover:bg-[#ff7f24] hover:scale-[1.03] border-2 border-orange-300 text-black font-black italic uppercase skew-x-[-6deg] tracking-[-0.08em] px-10 py-5 rounded-none clip-path-slant text-lg transition-all duration-150 shadow-lg shadow-orange-500/30">
            Book Your First Session
          </button>
        </div>
      </section>

      {/* Footer */}
      <style>{`
  * {
    letter-spacing: -0.03em;
  }

  h1, h2, h3 {
    text-transform: uppercase;
  }

  .clip-path-slant {
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    border-radius: 0;
  }

  body {
    background: black;
  }

  .crown-glow {
    text-shadow: 0 0 10px rgba(251,146,60,0.45);
  }
`}</style>

      

      

      </>

{activePage === 'about' && (
  <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto">
    <div className="max-w-5xl mx-auto px-8 py-24 relative">
      <button onClick={() => setActivePage('home')} className="absolute top-8 right-8 text-[#ff8c1a] text-sm uppercase tracking-[0.3em]">
        Close
      </button>

      <div className="text-[#ff8c1a] uppercase tracking-[0.5em] text-sm mb-6">About Anthony Pragano Golf</div>
      <h1 className="text-6xl font-black italic uppercase mb-8">Built For Competitive Golfers.</h1>
      <p className="text-zinc-300 text-xl leading-relaxed mb-10">Anthony Pragano Golf combines elite coaching, TrackMan data analysis, championship development systems, and precision club fitting to help golfers dominate every aspect of their game.</p>
    </div>
  </div>
)}

{activePage === 'instructor' && (
  <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto">
    <div className="max-w-5xl mx-auto px-8 py-24 relative">
      <button onClick={() => setActivePage('home')} className="absolute top-8 right-8 text-[#ff8c1a] text-sm uppercase tracking-[0.3em]">
        Close
      </button>

      <div className="text-[#ff8c1a] uppercase tracking-[0.5em] text-sm mb-6">Meet The Instructor</div>
      <h1 className="text-6xl font-black italic uppercase mb-8">Anthony Pragano</h1>
      <p className="text-zinc-300 text-xl leading-relaxed">TrackMan Level 1 & 2 certified coach, Master Club Fitter, and competitive golf performance specialist focused on helping athletes build elite-level consistency and confidence.</p>
    </div>
  </div>
)}

{activePage === 'programs' && (
  <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto">
    <div className="max-w-6xl mx-auto px-8 py-24 relative">
      <button onClick={() => setActivePage('home')} className="absolute top-8 right-8 text-[#ff8c1a] text-sm uppercase tracking-[0.3em]">
        Close
      </button>

      <div className="text-[#ff8c1a] uppercase tracking-[0.5em] text-sm mb-6">Programs</div>
      <h1 className="text-6xl font-black italic uppercase mb-12">Training Programs</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {['Private Coaching','Elite Performance','Group Clinics'].map((program) => (
          <div key={program} className="border border-[#ff8c1a]/30 p-8 bg-black/50">
            <div className="text-2xl text-[#ff8c1a] mb-4">{program}</div>
            <p className="text-zinc-400">Custom performance-focused golf development built around your goals.</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

{activePage === 'contact' && (
  <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto">
    <div className="max-w-4xl mx-auto px-8 py-24 relative text-center">
      <button
        onClick={() => setActivePage('home')}
        className="absolute top-8 right-8 text-[#ff8c1a] text-sm uppercase tracking-[0.3em]"
      >
        Close
      </button>

      <div className="text-[#ff8c1a] uppercase tracking-[0.5em] text-sm mb-6">
        Contact
      </div>

      <h1 className="text-6xl font-black italic uppercase mb-8">
        Start Training
      </h1>

      <p className="text-zinc-300 text-xl leading-relaxed mb-10">
        Book lessons, fittings, or performance evaluations with Anthony Pragano Golf.
      </p>

      <div className="max-w-2xl mx-auto text-left border-[3px] border-[#ffb067] bg-gradient-to-r from-[#ff7a00] via-[#ff9d2f] to-[#ff7a00] p-[3px] shadow-[0_0_10px_rgba(255,140,26,0.12)]">
        <div className="bg-black/95 p-8 md:p-10">
          <div className="space-y-6">
            <div>
              <div className="text-[#ff8c1a] text-sm uppercase tracking-[0.3em] mb-2">
                Instructor
              </div>
              <div className="text-2xl font-black italic uppercase">
                Anthony Pragano
              </div>
            </div>

            <div>
              <div className="text-[#ff8c1a] text-sm uppercase tracking-[0.3em] mb-2">
                Phone
              </div>
              <a
                href="tel:18632219424"
                className="text-xl text-zinc-200 hover:text-[#ff8c1a] transition-colors block"
              >
                (863) 221-9424
              </a>
            </div>

            <div>
              <div className="text-[#ff8c1a] text-sm uppercase tracking-[0.3em] mb-2">
                Email
              </div>
              <a
                href="mailto:anthony.pragano.golf@gmail.com"
                className="text-lg text-zinc-200 hover:text-[#ff8c1a] transition-colors break-all"
              >
                anthony.pragano.golf@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}





    </div>
  )
}
