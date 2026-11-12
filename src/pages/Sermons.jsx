
const sermons = [
  {
    title: "Growing Together in Faith",
    description:
      "Discover the importance of growing in faith and walking together as followers of Christ.",
    category: "Faith & Spiritual Growth",
    icon: "✝",
  },
  {
    title: "The Power of Prayer",
    description:
      "A reminder of the importance of prayer and building a closer relationship with God.",
    category: "Prayer",
    icon: "🙏",
  },
  {
    title: "God's Grace in Our Lives",
    description:
      "Reflect on God's grace, love, and faithfulness in every season of life.",
    category: "God's Word",
    icon: "📖",
  },
];

function Sermons() {
  return (
    <div className="bg-white">
      <section className="bg-[#101D35] px-6 py-24 text-center text-white">
        <p className="mb-4 font-semibold uppercase tracking-[4px] text-amber-400">
          Listen & Grow
        </p>
        <h1 className="text-4xl font-bold md:text-6xl">Sermons</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Be encouraged through God's Word and grow stronger in faith every day.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-amber-600">
            Spiritual Messages
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#101D35] md:text-4xl">
            Messages to Inspire Your Faith
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore messages and reflections that encourage us to know God
            more deeply and live according to His Word.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-2xl">
                {sermon.icon}
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-600">
                {sermon.category}
              </p>

              <h3 className="mb-4 text-xl font-bold text-[#101D35]">
                {sermon.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {sermon.description}
              </p>

              <div className="mt-6 border-t border-gray-100 pt-5">
                <span className="text-sm font-medium text-gray-400">
                  Sermon content coming soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#101D35]">
          Grow in God's Word With Us
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
          Join our church gatherings and Bible study as we learn, pray, and
          grow together in Christ.
        </p>
      </section>
    </div>
  );
}

export default Sermons;
