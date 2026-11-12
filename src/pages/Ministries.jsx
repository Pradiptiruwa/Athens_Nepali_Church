
import { Link } from "react-router-dom";

function Ministries() {
  const ministries = [
    {
      number: "01",
      title: "Worship Ministry",
      description:
        "Coming together to praise and worship God through songs, prayer, and heartfelt fellowship.",
    },
    {
      number: "02",
      title: "Bible Study Ministry",
      description:
        "Growing in faith and understanding God's Word through regular Bible study and discussion.",
    },
    {
      number: "03",
      title: "Fellowship Ministry",
      description:
        "Building meaningful relationships, encouraging one another, and growing together as one church family.",
    },
    {
      number: "04",
      title: "Prayer Ministry",
      description:
        "Coming together in prayer, supporting one another, and seeking God's guidance in our lives.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-slate-950 py-24 px-6 text-center">
        <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Serving Together
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mt-5">
          Our Ministries
        </h1>

        <p className="text-slate-300 mt-5 max-w-2xl mx-auto leading-7">
          Growing in faith, serving with love, and building a stronger
          community through Christ.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-700 uppercase tracking-widest text-sm font-semibold">
            What We Do
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
            Growing Together in God's Purpose
          </h2>

          <p className="text-slate-600 leading-8 mt-6">
            Our ministries provide opportunities to worship, learn
            God's Word, pray, and build relationships with one another.
            Every gathering is an opportunity to grow closer to God
            and serve one another in love.
          </p>
        </div>
      </section>

      {/* Ministry Cards */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-7">
          {ministries.map((ministry) => (
            <div
              key={ministry.number}
              className="bg-white rounded-xl p-8 md:p-10 shadow-sm hover:shadow-lg transition"
            >
              <p className="text-amber-600 text-3xl font-bold">
                {ministry.number}
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-5">
                {ministry.title}
              </h3>

              <p className="text-slate-600 leading-7 mt-4">
                {ministry.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Invitation */}
      <section className="bg-slate-950 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Be Part of Our Church Family
          </h2>

          <p className="text-slate-300 mt-5 leading-7">
            We welcome you to join our gatherings and grow together
            in faith, love, and fellowship.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-md font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Ministries;
