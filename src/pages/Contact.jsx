function Contact() {
    return (
      <section className="mx-auto max-w-6xl px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1px_1.2fr] md:gap-10">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/35">
              Let’s Connect
            </p>
  
            <h1 className="text-4xl font-medium text-white md:text-5xl">
              Contact
            </h1>
          </div>
  
          {/* Divider */}
          <div className="hidden md:block bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
  
          {/* Right */}
          <div className="max-w-xl">
            <div className="space-y-5 leading-8 text-white/65">
              <p>
                If you'd like to get in touch, feel free to reach out.
              </p>
  
              <p>
                I'm always open to new opportunities, creative collaborations,
                or custom portrait inquiries. Whether it's about frontend
                development, design, or artwork, I'd be happy to connect.
              </p>
            </div>
  
            <div className="mt-10 space-y-5">
              <div className="border-b border-white/10 pb-4">
                <p className="mb-1 text-sm uppercase tracking-[0.2em] text-white/35">
                  Email
                </p>
                <a
                  href="sitong678@outlook.com"
                  className="text-lg text-white/80 transition hover:text-white"
                >
                  sitong678@outlook.com
                </a>
              </div>
  
              <div className="border-b border-white/10 pb-4">
                <p className="mb-1 text-sm uppercase tracking-[0.2em] text-white/35">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/sitong-liu-302630326"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-white/80 transition hover:text-white"
                >
                  linkedin.com/in/sitong-liu-302630326
                </a>
              </div>
  
              {/* <div className="border-b border-white/10 pb-4">
                <p className="mb-1 text-sm uppercase tracking-[0.2em] text-white/35">
                  GitHub
                </p>
                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-white/80 transition hover:text-white"
                >
                  github.com/your-github
                </a>
              </div> */}
  
              <div className="pb-4">
                <p className="mb-1 text-sm uppercase tracking-[0.2em] text-white/35">
                  Artwork
                </p>
                <p className="text-lg text-white/80">
                  Custom portrait commissions available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;