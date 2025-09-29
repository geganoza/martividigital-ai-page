export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-neutral-950 text-white">
      {/* Hero / Main Banner */}
      <section className="relative overflow-hidden">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
          <div className="absolute -bottom-24 right-1/3 h-72 w-[36rem] rounded-full bg-cyan-500/20 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 sm:pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              MARTIVI DIGITAL · AI Ads
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              MARTIVI DIGITAL AI Ads
            </h1>
            <p className="mt-6 text-base leading-7 text-neutral-300 sm:text-lg">
              We create cutting-edge AI-powered advertising campaigns that deliver
              exceptional results. From concept to execution, our AI-driven approach
              transforms how brands connect with their audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Intro / Main Text */}
      <section className="mx-auto max-w-7xl px-6 pb-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Our AI-Powered Creative Process</h2>
          <p className="mt-3 text-neutral-300">
            We harness artificial intelligence to revolutionize advertising creativity.
            From data-driven insights to personalized content generation, we deliver
            campaigns that resonate and convert. Explore our latest AI ad showcases below.
          </p>
        </div>
      </section>

      {/* Video Showcase Grid - replace placeholders with iframes or <video> tags */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-end justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Featured Work</h3>
          <p className="text-sm text-neutral-400">16:9 placeholders · Add your embeds</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <article className="rounded-xl border border-white/10 bg-white/5 p-2">
            <div className="relative w-full overflow-hidden rounded-lg bg-black/40 pt-[56.25%]">
              {/* Replace this block with an iframe or a <video> element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-2 h-10 w-10 rounded-full border border-white/20 bg-white/10"></div>
                  <p className="text-xs text-neutral-300">
                    Video Placeholder (16:9)
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2 pb-2 pt-3">
              <h4 className="font-medium">AI Brand Concept — 01</h4>
              <p className="mt-1 text-sm text-neutral-400">
                Replace with campaign reel or concept animation.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="rounded-xl border border-white/10 bg-white/5 p-2">
            <div className="relative w-full overflow-hidden rounded-lg bg-black/40 pt-[56.25%]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-2 h-10 w-10 rounded-full border border-white/20 bg-white/10"></div>
                  <p className="text-xs text-neutral-300">
                    Video Placeholder (16:9)
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2 pb-2 pt-3">
              <h4 className="font-medium">AI Product Spot — 02</h4>
              <p className="mt-1 text-sm text-neutral-400">
                Swap in a YouTube/Vimeo iframe or MP4 tag.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="rounded-xl border border-white/10 bg-white/5 p-2">
            <div className="relative w-full overflow-hidden rounded-lg bg-black/40 pt-[56.25%]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-2 h-10 w-10 rounded-full border border-white/20 bg-white/10"></div>
                  <p className="text-xs text-neutral-300">
                    Video Placeholder (16:9)
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2 pb-2 pt-3">
              <h4 className="font-medium">Campaign Montage — 03</h4>
              <p className="mt-1 text-sm text-neutral-400">
                Include titles, descriptions, and credits here.
              </p>
            </div>
          </article>

          {/* Card 4 */}
          <article className="rounded-xl border border-white/10 bg-white/5 p-2">
            <div className="relative w-full overflow-hidden rounded-lg bg-black/40 pt-[56.25%]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-2 h-10 w-10 rounded-full border border-white/20 bg-white/10"></div>
                  <p className="text-xs text-neutral-300">
                    Video Placeholder (16:9)
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2 pb-2 pt-3">
              <h4 className="font-medium">Gen Visuals — 04</h4>
              <p className="mt-1 text-sm text-neutral-400">
                Showcase style explorations and tests.
              </p>
            </div>
          </article>

          {/* Card 5 */}
          <article className="rounded-xl border border-white/10 bg-white/5 p-2">
            <div className="relative w-full overflow-hidden rounded-lg bg-black/40 pt-[56.25%]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-2 h-10 w-10 rounded-full border border-white/20 bg-white/10"></div>
                  <p className="text-xs text-neutral-300">
                    Video Placeholder (16:9)
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2 pb-2 pt-3">
              <h4 className="font-medium">Narrative Cut — 05</h4>
              <p className="mt-1 text-sm text-neutral-400">
                Add behind-the-scenes or process breakdowns.
              </p>
            </div>
          </article>

          {/* Card 6 */}
          <article className="rounded-xl border border-white/10 bg-white/5 p-2">
            <div className="relative w-full overflow-hidden rounded-lg bg-black/40 pt-[56.25%]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-2 h-10 w-10 rounded-full border border-white/20 bg-white/10"></div>
                  <p className="text-xs text-neutral-300">
                    Video Placeholder (16:9)
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2 pb-2 pt-3">
              <h4 className="font-medium">Case Study — 06</h4>
              <p className="mt-1 text-sm text-neutral-400">
                Link to long-form edits or interactive demos.
              </p>
            </div>
          </article>
        </div>

        {/* Helper: how to embed videos */}
        <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-neutral-300">
          Replace any placeholder with:
          <pre className="mt-3 overflow-auto rounded-md bg-black/50 p-3 text-xs">
{`{/* YouTube iframe example */}
<iframe
  className="absolute inset-0 h-full w-full"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>`}

{`

{/* MP4 example */}
<video className="absolute inset-0 h-full w-full" controls playsInline>
  <source src="/videos/your-file.mp4" type="video/mp4" />
</video>`}
          </pre>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to Transform Your Advertising?
          </h2>
          <p className="mt-3 text-neutral-300">
            Let&apos;s discuss how AI can elevate your brand&apos;s creative campaigns.
            Get in touch with our team for a personalized consultation.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form className="space-y-6" action="#" method="POST">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-white">
                  First Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-neutral-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-white">
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-neutral-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-neutral-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                placeholder="john@company.com"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-neutral-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-white">
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
              >
                <option value="" className="bg-neutral-900">Select budget range</option>
                <option value="5k-15k" className="bg-neutral-900">$5,000 - $15,000</option>
                <option value="15k-50k" className="bg-neutral-900">$15,000 - $50,000</option>
                <option value="50k-100k" className="bg-neutral-900">$50,000 - $100,000</option>
                <option value="100k+" className="bg-neutral-900">$100,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-2 block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-neutral-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                placeholder="Describe your advertising goals, target audience, and how AI could help your campaign..."
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-fuchsia-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-fuchsia-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} MartiVi Digital · AI Works
        </div>
      </footer>
    </main>
  );
}
