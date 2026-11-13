
import { useState } from "react";

import worship from "../assets/gallery/worship.jpeg";
import christmas from "../assets/gallery/christmass.jpeg";
import group from "../assets/gallery/group.jpeg";
import inchurch from "../assets/gallery/inchurch.jpeg";
import prayer from "../assets/gallery/prayer.jpeg";
import preaching from "../assets/gallery/preeching.jpeg";
import special from "../assets/gallery/special.jpeg";

const photos = [
  { image: worship, title: "Worship & Praise" },
  { image: christmas, title: "Christmas Celebration" },
  { image: group, title: "Our Church Family" },
  { image: inchurch, title: "Church Gathering" },
  { image: prayer, title: "Prayer & Worship" },
  { image: preaching, title: "Sharing God's Word" },
  { image: special, title: "Special Moments" },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#101D35] px-6 py-24 text-center text-white">
        <p className="font-semibold uppercase tracking-[4px] text-amber-400">
          Moments of Faith & Fellowship
        </p>
        <h1 className="mt-5 text-4xl font-bold md:text-6xl">
          Our Gallery
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          A collection of beautiful memories from our worship, celebrations,
          and church family gatherings.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[3px] text-amber-600">
            Our Memories
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#101D35] md:text-5xl">
            Moments We Cherish
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            Every moment is a blessing. Explore memories from our journey
            together as a church family.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(photo)}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 text-left shadow-sm"
            >
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <h3 className="text-xl font-bold text-white">
                  {photo.title}
                </h3>
                <span className="text-2xl text-amber-400">↗</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Image Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
            className="absolute right-6 top-6 text-4xl text-white hover:text-amber-400"
          >
            ×
          </button>

          <div
            className="max-h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[80vh] w-full rounded-xl object-contain"
            />
            <h3 className="mt-4 text-center text-xl font-bold text-white">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
