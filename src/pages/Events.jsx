
import { Link } from "react-router-dom";

function Events() {
  const events = [
    {
      day: "SUNDAY",
      title: "Sunday Worship Service",
      time: "11:00 AM – 1:00 PM",
      type: "In-Person Gathering",
      description:
        "Join us for worship, prayer, God's Word, and fellowship with our church family.",
    },
    {
      day: "MONDAY",
      title: "Online Fellowship",
      time: "8:00 PM – 9:00 PM",
      type: "Online via Google Meet",
      description:
        "Connect with fellow believers, share encouragement, and grow together in faith.",
    },
    {
      day: "THURSDAY",
      title: "Online Bible Study",
      time: "7:30 PM – 9:00 PM",
      type: "Online via Google Meet",
      description:
        "Study the Bible together, understand God's Word, and strengthen your spiritual life.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-slate-950 py-24 px-6 text-center">
        <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Stay Connected
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mt-5">
          Events & Gatherings
        </h1>

        <p className="text-slate-300 mt-5 max-w-2xl mx-auto leading-7">
          Come together in worship, fellowship, and the study of God's Word.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-700 uppercase tracking-widest text-sm font-semibold">
            Weekly Schedule
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
            Join Our Weekly Gatherings
          </h2>

          <p className="text-slate-600 mt-5 leading-8">
            We invite you to be part of our regular gatherings.
            Whether in person or online, there is always an opportunity
            to worship, learn, pray, and connect.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {events.map((event) => (
            <div
              key={event.day}
              className="bg-white rounded-xl shadow-sm p-7 md:p-9 grid md:grid-cols-[150px_1fr] gap-6"
            >
              <div className="bg-amber-50 rounded-lg p-5 flex items-center justify-center">
                <span className="text-amber-700 font-bold tracking-widest">
                  {event.day}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {event.title}
                </h3>

                <p className="text-amber-700 font-semibold mt-3">
                  {event.time}
                </p>

                <p className="text-slate-500 text-sm mt-2">
                  {event.type}
                </p>

                <p className="text-slate-600 leading-7 mt-4">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">
            Join Us This Sunday
          </h2>

          <p className="text-slate-600 mt-4">
            Patision 11, Athens, Greece
          </p>

          <Link
            to="/contact"
            className="inline-block mt-7 bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-md font-semibold transition"
          >
            Get Directions & Contact
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Events;
