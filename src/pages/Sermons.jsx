
import { Link } from "react-router-dom";

const messages = [
  {
    title: "Growing Together in Faith",
    category: "Faith & Spiritual Growth",
    description:
      "Encouragement to grow in faith and walk together as followers of Christ.",
    icon: "✝",
  },
  {
    title: "The Power of Prayer",
    category: "Prayer & Worship",
    description:
      "Discover the importance of prayer and building a closer relationship with God.",
    icon: "🙏",
  },
  {
    title: "God's Grace in Our Lives",
    category: "God's Word",
    description:
      "Reflect on God's grace, love, and faithfulness in every season of life.",
    icon: "📖",
  },
];

function Sermons() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#101D35] px-6 py-24 text-center text-white">
        <p className="font-semibold uppercase tracking-[4px] text-amber-400">
          Listen • Learn • Grow
        </p>
        <h1 className="mt-5 text-4xl font-bold md:text-6xl">
          Sermons & Messages
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Be encouraged by God's Word and strengthen your faith through
          biblical teachings and messages.
        </p>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <p className="font-semibold uppercase tracking-[3px] text-amber-600">
          Spiritual Growth
        </p>
        <h2 className="mt-4 text-3xl font-bold text-[#101D35] md:text-5xl">
          Grow Through God's Word
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
          God's Word guides, strengthens, and encourages us in our daily lives.
          Explore the message topics below and join us in learning together.
        </p>
      </section>

      {/* Message Cards */}
      <section className="bg-[#F8F7F3] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {messages.map((message) => (
              <div
                key={message.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl">
                  {message.icon}
                </div>

                <p className="mt-7 text-sm font-bold uppercase tracking-wider text-amber-600">
                  {message.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#101D35]">
                  {message.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {message.description}
                </p>

                <div className="mt-7 border-t border-gray-100 pt-5">
                  <span className="text-sm font-medium text-gray-400">
                    Message coming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-4xl">
          ▶
        </div>

        <h2 className="mt-7 text-3xl font-bold text-[#101D35] md:text-4xl">
          Watch Our Sermons
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
          We look forward to sharing recorded sermons and video messages
          from our church gatherings here.
        </p>

        <p className="mt-5 text-sm font-medium text-gray-400">
          Video messages will be added soon.
        </p>
      </section>

      {/* Closing */}
      <section className="bg-[#101D35] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Let God's Word Guide Your Life
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">
          Join our church family for worship, prayer, and Bible study.
          Let's grow together in Christ.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-block rounded-lg bg-amber-500 px-8 py-4 font-bold text-[#101D35] transition hover:bg-amber-400"
        >
          Join Our Gatherings
        </Link>
      </section>
    </div>
  );
}

export default Sermons;
