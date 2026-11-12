
import worship from "../assets/gallery/worship.jpeg";
import christmas from "../assets/gallery/christmass.jpeg";
import group from "../assets/gallery/group.jpeg";
import churchGathering from "../assets/gallery/inchurch.jpeg";
import prayer from "../assets/gallery/prayer.jpeg";
import preaching from "../assets/gallery/preeching.jpeg";
import special from "../assets/gallery/special.jpeg";

function Gallery() {
  const photos = [
    {
      title: "Worship & Praise",
      category: "Church Worship",
      image: worship,
    },
    {
      title: "Christmas Celebration",
      category: "Special Celebration",
      image: christmas,
    },
    {
      title: "Our Church Family",
      category: "Fellowship",
      image: group,
    },
    {
      title: "Church Gathering",
      category: "Community",
      image: churchGathering,
    },
    {
      title: "Prayer & Worship",
      category: "Prayer",
      image: prayer,
    },
    {
      title: "Sharing God's Word",
      category: "Preaching",
      image: preaching,
    },
    {
      title: "Special Moments",
      category: "Church Memories",
      image: special,
    },
  ];

  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="bg-slate-950 py-24 px-6 text-center">
        <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Moments & Memories
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mt-5">
          Our Church Gallery
        </h1>

        <p className="text-slate-300 mt-5 max-w-2xl mx-auto leading-7">
          Capturing beautiful moments of worship, fellowship,
          celebrations, and our journey together in Christ.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-amber-700 uppercase tracking-widest text-sm font-semibold">
              Our Memories
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
              Life at Athens Nepali Church
            </h2>

            <p className="text-slate-600 mt-4">
              Every picture tells a story of faith, love, and togetherness.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {photos.map((photo) => (
              <div
                key={photo.title}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >

                <div className="h-64 overflow-hidden bg-slate-100">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <p className="text-amber-700 text-xs font-semibold uppercase tracking-widest">
                    {photo.category}
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-3">
                    {photo.title}
                  </h3>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-slate-950 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            A Journey of Faith and Fellowship
          </h2>

          <p className="text-slate-300 mt-5 leading-7">
            We thank God for every moment, every gathering,
            and every person who is part of our church family.
          </p>

        </div>
      </section>

    </main>
  );
}

export default Gallery;
