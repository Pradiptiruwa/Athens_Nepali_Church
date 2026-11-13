
import { Link } from "react-router-dom";

const events = [
  {
    day: "SUNDAY",
    time: "11:00 AM – 1:00 PM",
    title: "Sunday Worship Service",
    description:
      "Join us for a time of worship, prayer, God's Word, and fellowship together.",
    type: "In-person",
    icon: "⛪",
  },
  {
    day: "MONDAY",
    time: "8:00 PM – 9:00 PM",
    title: "Online Fellowship",
    description:
      "Connect with our church family, share experiences, and encourage one another in faith.",
    type: "Online – Google Meet",
    icon: "🤝",
  },
  {
    day: "THURSDAY",
    time: "7:30 PM – 9:00 PM",
    title: "Online Bible Study",
    description:
      "Study the Bible together, understand God's teachings, and grow spiritually.",
    type: "Online – Google Meet",
    icon: "📖",
  },
];

function Events() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#101D35] px-6 py-24 text-center text-white">
        <p className="font-semibold uppercase tracking-[4px] text-amber-400">
          Worship • Fellowship • Growth
        </p>
        <h1 className="mt-5 text-4xl font-bold md:text-6xl">
          Events & Gatherings
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Find opportunities to worship, connect, and grow with our church family.
        </p>
      </section>

      {/* Schedule */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[3px] text-amber-600">
            Save Your Time
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#101D35] md:text-5xl">
            Our Weekly Schedule
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            We invite you to take part in our regular church gatherings.
            Everyone is welcome.
          </p>
        </div>

        <div className="space-y-7">
          {events.map((event) => (
            <div
              key={event.day}
              className="grid items-center gap-6 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-lg md:grid-cols-[150px_1fr_auto] md:p-9"
            >
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-2xl bg-[#101D35] text-white">
                <span className="text-3xl">{event.icon}</span>
                <span className="mt-2 text-sm font-bold tracking-widest text-amber-400">
                  {event.day}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#101D35]">
                  {event.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {event.description}
                </p>

                <p className="mt-4 font-semibold text-amber-600">
                  {event.time}
                </p>
              </div>

              <div>
                <span className="inline-block rounded-full bg-amber-50 px-5 py-2 text-sm font-semibold text-amber-700">
                  {event.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Invitation */}
      <section className="bg-[#F8F7F3] px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#101D35] md:text-4xl">
          We Look Forward to Seeing You!
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
          Whether you are joining us in person or online, you are always
          welcome to be part of our fellowship.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-block rounded-lg bg-amber-500 px-8 py-4 font-bold text-[#101D35] transition hover:bg-amber-400"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default Events;
