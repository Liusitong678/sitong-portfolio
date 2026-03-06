import { galleryData } from "../data/galleryData";

function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-20 md:py-24">

      {/* Intro */}
      <div className="mb-16 max-w-3xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/35">
          Artwork & Portraits
        </p>

        <h1 className="text-4xl font-medium text-white md:text-5xl">
          Gallery
        </h1>

        <div className="mt-6 space-y-5 text-white/65 leading-8">
          <p>
            Drawing is one of the things I enjoy most outside of coding.
            I often spend my free time practicing portrait sketches,
            especially people and pet drawings.
          </p>

          <p>
            I also take custom portrait commissions. These drawings can
            become meaningful birthday gifts or special keepsakes for your home.
          </p>

          <p>
            If you're interested in a custom piece, feel free to contact me.
          </p>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">

        {galleryData.map((item) => (
          <div
            key={item.id}
            className="mb-6 overflow-hidden border border-white/10 bg-white/5 group"
          >
            <div className="relative mb-6 overflow-hidden border border-white/10 bg-white/[0.03] p-2">

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100 flex items-end">
                <div className="p-4">
                  <h3 className="text-white text-lg">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.category}</p>
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;