
import { Link } from "react-router-dom";
import group from "../assets/gallery/group.jpeg";
import worship from "../assets/gallery/worship.jpeg";

function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#101D35] px-6 py-24 text-center text-white">
        <p className="font-semibold uppercase tracking-[4px] text-amber-400">
          Our Story & Our Faith
        </p>
        <h1 className="mt-5 text-4xl font-bold md:text-6xl">
          About Our Church
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          A church family growing together in faith, love, and fellowship
          through God's grace.
        </p>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-[3px] text-amber-600">
            Who We Are
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101D35] md:text-5xl">
            A Family United in Christ
          </h2>
          <p className="mt-6 leading-8 text-gray-600">
            Athens Nepali Church is a Christian community based in Athens,
            Greece. We gather to worship God, study the Bible, pray, and
            encourage one another in our journey of faith.
          </p>
          <p className="mt-4 leading-8 text-gray-600">
            Our church brings people together as one family, creating a place
            where everyone can experience fellowship, spiritual growth, and
            the love of Christ.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-lg bg-amber-500 px-7 py-3 font-bold text-[#101D35] transition hover:bg-amber-400"
          >
            Join Our Church
          </Link>
        </div>

        <img
          src={group}
          alt="Athens Nepali Church family gathering"
          className="h-[430px] w-full rounded-2xl object-cover shadow-xl"
        />
      </section>

      {/* Church History */}
      <section className="bg-[#F8F7F3] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="font-semibold uppercase tracking-[3px] text-amber-600">
              Our Journey
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#101D35] md:text-5xl">
              A Small Beginning, A Great Plan of God
            </h2>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
              <p className="font-bold text-amber-600">November 7, 2025</p>
              <h3 className="mt-3 text-2xl font-bold text-[#101D35]">
                The Beginning
              </h3>
              <p className="mt-4 leading-8 text-gray-600">
                Athens Nepali Church began with just five or six believers
                who came together with faith and a shared desire to worship
                God. The first worship and fellowship gathering took place
                at the home of Elder Sagar Sunar.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
              <p className="font-bold text-amber-600">Growing in Faith</p>
              <h3 className="mt-3 text-2xl font-bold text-[#101D35]">
                A Growing Church Family
              </h3>
              <p className="mt-4 leading-8 text-gray-600">
                What began as a small gathering continued to grow through
                God's grace. More people joined the fellowship, and the
                church family grew to approximately 50–60 believers.
              </p>
              <img
                src={worship}
                alt="Church members gathered in worship"
                className="mt-7 h-72 w-full rounded-xl object-cover"
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
              <p className="font-bold text-amber-600">First Anniversary</p>
              <h3 className="mt-3 text-2xl font-bold text-[#101D35]">
                Celebrating God's Faithfulness
              </h3>
              <p className="mt-4 leading-8 text-gray-600">
                The church celebrated its first anniversary with gratitude
                for God's faithfulness and all the blessings received
                throughout the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Verse */}
      <section className="bg-[#101D35] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-5xl text-amber-400">“</p>
          <h2 className="mt-4 text-2xl font-medium leading-relaxed md:text-4xl">
            The LORD has done great things for us, and we are filled with joy.
          </h2>
          <p className="mt-7 font-bold tracking-widest text-amber-400">
            PSALM 126:3
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#101D35] md:text-4xl">
          A Few Believers, A Great Faith
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
          Our journey continues by God's grace and for His glory.
          We welcome you to become part of our church family.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-lg bg-amber-500 px-8 py-4 font-bold text-[#101D35] transition hover:bg-amber-400"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default About;