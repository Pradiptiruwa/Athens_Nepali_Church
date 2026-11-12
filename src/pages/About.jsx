
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-950 py-24 px-6 text-center">
        <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Get to Know Us
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mt-5">
          About Our Church
        </h1>

        <p className="text-slate-300 mt-5 max-w-2xl mx-auto leading-7">
          A community of believers united by faith, love, and the hope of Jesus Christ.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-700 uppercase tracking-widest text-sm font-semibold">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
              A Family Growing Together in Christ
            </h2>

            <p className="text-slate-600 leading-8 mt-6">
              Athens Nepali Church is a Christian community based in
              Athens, Greece. We are a family of believers who gather
              to worship God, learn from His Word, encourage one another,
              and share His love with others.
            </p>

            <p className="text-slate-600 leading-8 mt-4">
              Our desire is to grow spiritually, strengthen our faith,
              and serve God together as one church family.
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-10 md:p-14">
            <p className="text-amber-700 text-sm font-semibold uppercase tracking-widest">
              Our Beginning
            </p>

            <h3 className="text-5xl font-bold text-slate-900 mt-4">
              07 Nov 2025
            </h3>

            <p className="text-slate-600 mt-5 leading-7">
              What began with just five or six believers has grown
              into a community united by faith and God's grace.
            </p>
          </div>
        </div>
      </section>

      {/* Church History */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-700 uppercase tracking-widest text-sm font-semibold">
              Our Journey
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
              Our Church History
            </h2>
          </div>

          <div className="space-y-10">
            <div className="border-l-4 border-amber-500 pl-6">
              <p className="text-amber-700 font-semibold">7 November 2025</p>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                A Small Beginning
              </h3>
              <p className="text-slate-600 leading-7 mt-3">
                Athens Nepali Church began with five or six believers.
                The first worship and fellowship gathering was held
                at the home of Elder Sagar Sunar, which became the
                church's first place of worship.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <p className="text-amber-700 font-semibold">A Growing Community</p>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Growing Through God's Grace
              </h3>
              <p className="text-slate-600 leading-7 mt-3">
                As time passed, more people joined the fellowship.
                The church community grew to approximately 50–60
                believers, becoming a stronger family in Christ.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <p className="text-amber-700 font-semibold">First Anniversary</p>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Celebrating God's Faithfulness
              </h3>
              <p className="text-slate-600 leading-7 mt-3">
                We celebrated our first anniversary with gratitude
                for everything God has done. We look forward to
                continuing this journey in faith and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Verse */}
      <section className="bg-slate-950 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 uppercase tracking-widest text-sm font-semibold">
            Our Testimony
          </p>

          <h2 className="text-2xl md:text-4xl text-white font-semibold leading-relaxed mt-6">
            "The LORD has done great things for us, and we are filled with joy."
          </h2>

          <p className="text-amber-400 mt-6 font-semibold">
            Psalm 126:3
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            A Small Beginning, A Great Plan of God
          </h2>

          <p className="text-slate-600 mt-5 leading-7">
            Our journey continues by God's grace, and we invite
            you to become part of our church family.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-md font-semibold transition"
          >
            Connect With Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
