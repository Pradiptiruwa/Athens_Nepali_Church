
import { Link } from "react-router-dom";
import worship from "../assets/gallery/worship.jpeg";
import beginning from "../assets/gallery/beginning.jpeg";

function Home() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[650px] items-center bg-[#101D35]">
        <div className="absolute inset-0">
          <img
            src={worship}
            alt="Athens Nepali Church worship gathering"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101D35] via-[#101D35]/80 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-5 font-semibold uppercase tracking-[4px] text-amber-400">
              Welcome to Athens Nepali Church
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              A Place to Worship,
              <span className="block text-amber-400">
                Connect & Grow
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-200">
              Growing together in faith, sharing God's love, and building a
              church family in Athens, Greece.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-amber-500 px-8 py-4 font-bold text-[#101D35] transition hover:bg-amber-400"
              >
                Join Us
              </Link>

              <Link
                to="/about"
                className="rounded-lg border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#101D35]"
              >
                Discover Our Church
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-[3px] text-amber-600">
            You Are Welcome Here
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101D35] md:text-5xl">
            Growing Together as One Family in Christ
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Athens Nepali Church is a Christian community in Athens, Greece.
            We come together to worship God, study His Word, pray, and
            encourage one another in faith.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Whether you are new to Athens or looking for a church family,
            you are welcome to join us.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-block font-bold text-amber-600 transition hover:text-amber-700"
          >
            Learn More About Us →
          </Link>
        </div>

        <div className="relative">
          <img
            src={beginning}
            alt="Athens Nepali Church family"
            className="h-[420px] w-full rounded-2xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-amber-500 p-6 text-[#101D35] shadow-lg sm:block">
            <p className="text-3xl font-bold">2025</p>
            <p className="mt-1 text-sm font-semibold">Our Beginning</p>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="bg-[#F8F7F3] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="font-semibold uppercase tracking-[3px] text-amber-600">
              Come and Join Us
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#101D35] md:text-5xl">
              Our Weekly Gatherings
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Spend time with us in worship, fellowship, and learning God's Word.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {[
              {
                day: "Sunday",
                time: "11:00 AM – 1:00 PM",
                activity: "Worship Service",
                detail: "Join us for in-person worship and fellowship.",
                icon: "⛪",
              },
              {
                day: "Monday",
                time: "8:00 PM – 9:00 PM",
                activity: "Online Fellowship",
                detail: "Connect and encourage one another through Google Meet.",
                icon: "🤝",
              },
              {
                day: "Thursday",
                time: "7:30 PM – 9:00 PM",
                activity: "Bible Study",
                detail: "Study God's Word and grow together in faith.",
                icon: "📖",
              },
            ].map((item) => (
              <div
                key={item.day}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-6 text-2xl font-bold text-[#101D35]">
                  {item.day}
                </h3>
                <p className="mt-2 font-bold text-amber-600">{item.time}</p>
                <h4 className="mt-5 font-semibold text-gray-800">
                  {item.activity}
                </h4>
                <p className="mt-3 leading-7 text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Online meeting details are available by contacting the church.
          </p>
        </div>
      </section>

      {/* Closing Invitation */}
      <section className="bg-[#101D35] px-6 py-20 text-center">
        <p className="font-semibold uppercase tracking-[3px] text-amber-400">
          You Are Invited
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-white md:text-5xl">
          Let's Worship and Grow Together
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">
          We look forward to welcoming you into our church family.
          Come and be part of our journey of faith.
        </p>

        <Link
          to="/contact"
          className="mt-9 inline-block rounded-lg bg-amber-500 px-9 py-4 font-bold text-[#101D35] transition hover:bg-amber-400"
        >
          Visit Our Church
        </Link>
      </section>
    </div>
  );
}

export default Home;
