'use client';
import { useEffect, useRef } from 'react';

export default function Home() {
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current.disconnect();
  }, []);

  const VideoGrid = ({ videos }) => {
    const horizontalVideos1 = videos.slice(0, 2); // First 2 videos are horizontal
    const verticalVideos = videos.slice(2, 5);    // Next 3 videos are vertical
    const horizontalVideos2 = videos.slice(5, 7); // Last 2 videos are horizontal

    return (
      <div className="mb-12 scroll-animate">
        {/* Row 1: 2 Horizontal Videos Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {horizontalVideos1.map((video, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg bg-black/40 aspect-video">
              {video.src ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  controls
                  preload="metadata"
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-12 w-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
                      <span className="text-xl">▶</span>
                    </div>
                    <p className="text-xs text-neutral-300">Horizontal Video (16:9)</p>
                    <p className="text-xs text-neutral-400 mt-1">{video.title}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Row 2: 3 Vertical Videos Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {verticalVideos.map((video, index) => (
            <div key={index + 2} className="relative overflow-hidden rounded-lg bg-black/40 aspect-[9/16]">
              {video.src ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  controls
                  preload="metadata"
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-8 w-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
                      <span className="text-sm">▶</span>
                    </div>
                    <p className="text-xs text-neutral-300">Vertical Video (9:16)</p>
                    <p className="text-xs text-neutral-400 mt-1">{video.title}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Row 3: 2 Horizontal Videos Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {horizontalVideos2.map((video, index) => (
            <div key={index + 5} className="relative overflow-hidden rounded-lg bg-black/40 aspect-video">
              {video.src ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  controls
                  preload="metadata"
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-12 w-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
                      <span className="text-xl">▶</span>
                    </div>
                    <p className="text-xs text-neutral-300">Horizontal Video (16:9)</p>
                    <p className="text-xs text-neutral-400 mt-1">{video.title}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const Banner = ({ title, subtitle }) => (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-600/20 to-cyan-600/20 border border-white/10 p-8 mb-12 scroll-animate">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-neutral-300 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );

  // Video data arrays - 7 videos each (2H + 3V + 2H pattern)
  const videoSet1 = [
    { title: "AI Brand Campaign", src: null, poster: null },        // Horizontal 1
    { title: "Product Showcase", src: null, poster: null },         // Horizontal 2
    { title: "Social Media Ad", src: null, poster: null },          // Vertical 1
    { title: "E-commerce Spot", src: null, poster: null },          // Vertical 2
    { title: "Corporate Video", src: null, poster: null },          // Vertical 3
    { title: "Brand Identity", src: null, poster: null },           // Horizontal 3
    { title: "Marketing Campaign", src: null, poster: null }        // Horizontal 4
  ];

  const videoSet2 = [
    { title: "Motion Graphics", src: null, poster: null },          // Horizontal 1
    { title: "Logo Animation", src: null, poster: null },           // Horizontal 2
    { title: "Instagram Story", src: null, poster: null },          // Vertical 1
    { title: "YouTube Pre-roll", src: null, poster: null },         // Vertical 2
    { title: "TikTok Ad", src: null, poster: null },                // Vertical 3
    { title: "Facebook Ad", src: null, poster: null },              // Horizontal 3
    { title: "LinkedIn Content", src: null, poster: null }          // Horizontal 4
  ];

  const videoSet3 = [
    { title: "AI Testimonial", src: null, poster: null },           // Horizontal 1
    { title: "Product Demo", src: null, poster: null },             // Horizontal 2
    { title: "Brand Story", src: null, poster: null },              // Vertical 1
    { title: "Event Promo", src: null, poster: null },              // Vertical 2
    { title: "Service Explainer", src: null, poster: null },        // Vertical 3
    { title: "Customer Journey", src: null, poster: null },         // Horizontal 3
    { title: "Success Metrics", src: null, poster: null }           // Horizontal 4
  ];

  const videoSet4 = [
    { title: "App Launch", src: null, poster: null },               // Horizontal 1
    { title: "Holiday Campaign", src: null, poster: null },         // Horizontal 2
    { title: "Recruitment Ad", src: null, poster: null },           // Vertical 1
    { title: "Partnership Announce", src: null, poster: null },     // Vertical 2
    { title: "Success Story", src: null, poster: null },            // Vertical 3
    { title: "Company Culture", src: null, poster: null },          // Horizontal 3
    { title: "Future Vision", src: null, poster: null }             // Horizontal 4
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-neutral-950 text-white">
      <style jsx global>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Hero / Large Banner */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
          <div className="absolute -bottom-24 right-1/3 h-72 w-[36rem] rounded-full bg-cyan-500/20 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 sm:pt-28 sm:pb-20">
          <div className="max-w-4xl scroll-animate">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
              MARTIVI DIGITAL · AI Ads
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
              AI-Powered Advertising
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-300 sm:text-2xl">
              Fast, affordable, and effective AI-generated content with professional human touch.
              Transform your advertising with our hybrid approach.
            </p>
          </div>
        </div>
      </section>

      {/* Main Banner Placeholder - 600px height */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-600/10 to-cyan-600/10 border-2 border-dashed border-white/20 scroll-animate" style={{height: '600px'}}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full border-2 border-dashed border-white/30 bg-white/5 flex items-center justify-center">
                <span className="text-2xl">🖼️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Main Banner Placeholder</h3>
              <p className="text-sm text-neutral-400 max-w-md">
                600px height banner space - Perfect for hero videos, main campaign visuals, or key messaging
              </p>
              <div className="mt-4 text-xs text-neutral-500">
                Dimensions: Full width × 600px height
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Message */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="max-w-4xl scroll-animate">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6">
            The Future of Content Creation is Here
          </h2>
          <div className="text-lg text-neutral-300 space-y-4">
            <p>
              <strong className="text-white">MARTIVI DIGITAL</strong> is a fast-growing expert in AI-related content creation
              combined with light human interactions. Our hybrid approach harnesses AI capabilities to create
              compelling content, then adds the professional human touch through logo integration, motion graphics,
              and post-production refinements.
            </p>
            <p>
              This unique methodology allows us to deliver <strong className="text-fuchsia-400">simple but highly effective advertisements</strong>
              that are both <strong className="text-cyan-400">affordable and lightning-fast</strong> to produce.
              We&apos;re revolutionizing how brands create and deploy video content at scale.
            </p>
          </div>
        </div>
      </section>

      {/* OUR WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12 scroll-animate">
          OUR WORKS
        </h2>

        {/* Video Set 1 - Row 1: 2H, Row 2: 3V */}
        <VideoGrid videos={videoSet1} />

        {/* Banner 1 */}
        <Banner
          title="AI + Human Creativity"
          subtitle="Every video combines cutting-edge AI generation with professional human post-production for maximum impact and brand consistency."
        />

        {/* Contact Form */}
        <section className="mx-auto max-w-2xl py-16 scroll-animate">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to Transform Your Advertising?
            </h2>
            <p className="mt-3 text-neutral-300">
              Get fast, affordable AI-powered video content with professional finishing touches.
            </p>
          </div>

          <form className="space-y-6" action="#" method="POST">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <input
                name="first-name"
                type="text"
                className="block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-neutral-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                placeholder="First Name"
                required
              />
              <input
                name="last-name"
                type="text"
                className="block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-neutral-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                placeholder="Last Name"
                required
              />
            </div>

            <input
              name="email"
              type="email"
              className="block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-neutral-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
              placeholder="Email Address"
              required
            />

            <input
              name="company"
              type="text"
              className="block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-neutral-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
              placeholder="Company Name"
            />

            <select
              name="budget"
              className="block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            >
              <option value="" className="bg-neutral-900">Project Budget</option>
              <option value="1k-5k" className="bg-neutral-900">$1,000 - $5,000</option>
              <option value="5k-15k" className="bg-neutral-900">$5,000 - $15,000</option>
              <option value="15k-50k" className="bg-neutral-900">$15,000 - $50,000</option>
              <option value="50k+" className="bg-neutral-900">$50,000+</option>
            </select>

            <textarea
              name="message"
              rows="4"
              className="block w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-neutral-400 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
              placeholder="Tell us about your project, target audience, and video content needs..."
              required
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-fuchsia-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-fuchsia-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200"
            >
              Get Started with AI Content
            </button>
          </form>
        </section>

        {/* Video Set 2 */}
        <VideoGrid videos={videoSet2} />

        {/* Banner 2 */}
        <Banner
          title="Lightning-Fast Delivery"
          subtitle="From concept to final video in days, not weeks. Our AI-powered workflow ensures rapid turnaround without compromising quality."
        />

        {/* Video Set 3 */}
        <VideoGrid videos={videoSet3} />

        {/* Banner 3 */}
        <Banner
          title="Affordable Excellence"
          subtitle="Premium-quality video content at a fraction of traditional production costs. Scale your advertising without breaking the budget."
        />

        {/* Video Set 4 */}
        <VideoGrid videos={videoSet4} />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30 scroll-animate">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">MARTIVI DIGITAL</h3>
            <p className="text-neutral-400 mb-4">AI-Powered Content Creation • Human-Perfected Results</p>
            <div className="text-sm text-neutral-500">
              © {new Date().getFullYear()} MARTIVI DIGITAL · Fast, Affordable, Effective AI Advertising
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}