
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[650px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/50" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-semibold mb-6">
              Welcome to Athens Nepali Church
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              A Place to Worship,
              <span className="block text-amber-400">
                Connect & Grow
              </span>
            </h1>

            <p className="text-slate-300 text-lg mt-8 leading-relaxed max-w-2xl">
              We are a family of believers growing together in faith,
              sharing God's love, and walking together in His grace.
              You are warmly welcome to worship with us.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/about"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-md font-semibold transition"
              >
                Discover Our Church
              </Link>

              <Link
                to="/contact"
                className="border border-white/40 hover:bg-white hover:text-slate-950 text-white px-8 py-4 rounded-md font-semibold transition"
              >
                Visit Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-amber-700 uppercase tracking-widest text-sm font-semibold">
            You Are Welcome Here
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
            Growing Together in Faith
          </h2>

          <p className="text-slate-600 leading-8 mt-6 text-lg">
            Athens Nepali Church is a Christian community in Athens,
            Greece. We come together to worship God, study His Word,
            encourage one another, and share the hope of Jesus Christ.
            Whether you are new to faith or have been following Christ
            for years, there is a place for you here.
          </p>
        </div>
      </section>

      {/* Service Section */}
      <section className="bg-amber-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-700 uppercase tracking-widest text-sm font-semibold">
              Join Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Worship & Fellowship
            </h2>
            <p className="text-slate-600 mt-4">
              There is always a place for you in our church family.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-amber-700 font-semibold">SUNDAY</p>
              <h3 className="text-xl font-bold text-slate-900 mt-3">
                Worship Service
              </h3>
              <p className="text-slate-600 mt-3">
                11:00 AM – 1:00 PM
              </p>
              <p className="text-slate-500 mt-2">
                In-person gathering
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-amber-700 font-semibold">MONDAY</p>
              <h3 className="text-xl font-bold text-slate-900 mt-3">
                Online Fellowship
              </h3>
              <p className="text-slate-600 mt-3">
                8:00 PM – 9:00 PM
              </p>
              <p className="text-slate-500 mt-2">
                Via Google Meet
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-amber-700 font-semibold">THURSDAY</p>
              <h3 className="text-xl font-bold text-slate-900 mt-3">
                Bible Study
              </h3>
              <p className="text-slate-600 mt-3">
                7:30 PM – 9:00 PM
              </p>
              <p className="text-slate-500 mt-2">
                Via Google Meet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-slate-950 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm uppercase tracking-widest">
            Come and Be Part of Our Family
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            We Would Love to Meet You
          </h2>

          <p className="text-slate-300 mt-5 leading-7">
            Join us as we worship, grow in faith, and experience
            God's love together.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-md font-semibold transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
