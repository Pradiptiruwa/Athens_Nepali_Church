
import { Link } from "react-router-dom";

const activities = [
  {
    icon: "🎵",
    title: "Worship & Praise",
    description:
      "Coming together to worship God through songs, praise, and thanksgiving.",
  },
  {
    icon: "📖",
    title: "Bible Study",
    description:
      "Learning and understanding God's Word and applying its teachings to our daily lives.",
  },
  {
    icon: "🙏",
    title: "Prayer",
    description:
      "Spending time in prayer, seeking God's guidance, and supporting one another in faith.",
  },
  {
    icon: "🤝",
    title: "Fellowship",
    description:
      "Building meaningful relationships, sharing experiences, and growing together as a church family.",
  },
];

function Ministries() {
  return (
    <div className="bg-white">
      <section className="bg-[#101D35] px-6 py-24 text-center text-white">
        <p className="font-semibold uppercase tracking-[4px] text-amber-400">
          Growing Together
        </p>
        <h1 className="mt-5 text-4xl font-bold md:text-6xl">
          Our Church Activities
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Discover the different ways we worship, learn, pray, and connect
          with one another through Christ.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[3px] text-amber-600">
            Faith in Action
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#101D35] md:text-5xl">
            Growing in Christ Together
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            Our church activities help us strengthen our relationship with
            God and build a loving community of believers.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl">
                {activity.icon}
              </div>

              <h3 className="mt-7 text-xl font-bold text-[#101D35]">
                {activity.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8F7F3] px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#101D35] md:text-4xl">
          There Is a Place for You Here
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
          Come and experience worship, fellowship, and spiritual growth
          with our church family in Athens.
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

export default Ministries;