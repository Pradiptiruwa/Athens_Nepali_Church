
const contacts = [
  {
    name: "Sagar Sunar",
    phone: "+30 694 965 1076",
  },
  {
    name: "Joseph Tiruwa",
    phone: "+30 697 236 6505",
  },
];

const schedule = [
  { day: "Sunday", time: "11:00 AM – 1:00 PM", type: "In-person Worship Service" },
  { day: "Monday", time: "8:00 PM – 9:00 PM", type: "Online Fellowship" },
  { day: "Thursday", time: "7:30 PM – 9:00 PM", type: "Online Bible Study" },
];

function Contact() {
  return (
    <div className="bg-white">
      <section className="bg-[#101D35] px-6 py-24 text-center text-white">
        <p className="mb-4 font-semibold uppercase tracking-[4px] text-amber-400">
          We Would Love to Hear From You
        </p>
        <h1 className="text-4xl font-bold md:text-6xl">Contact Us</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Have a question, need prayer, or want to visit us? Feel free to get
          in touch. You are always welcome.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-widest text-amber-600">
            Get in Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#101D35]">
            We'd Love to Connect With You
          </h2>
          <p className="mt-5 leading-8 text-gray-600">
            Whether you are new to Athens, looking for a church family, or
            simply want to learn more about us, please contact our church
            representatives.
          </p>

          <div className="mt-10 space-y-7">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl">
                📍
              </div>
              <div>
                <h3 className="font-bold text-[#101D35]">Our Location</h3>
                <p className="mt-1 text-gray-600">Patision 11, Athens, Greece</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Patision+11%2C+Athens%2C+Greece"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block font-semibold text-amber-600 hover:text-amber-700"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl">
                📞
              </div>
              <div>
                <h3 className="font-bold text-[#101D35]">Phone Contacts</h3>
                <div className="mt-2 space-y-3">
                  {contacts.map((person) => (
                    <div key={person.name}>
                      <p className="font-medium text-gray-700">{person.name}</p>
                      <a
                        href={`tel:${person.phone.replaceAll(" ", "")}`}
                        className="text-amber-600 hover:text-amber-700"
                      >
                        {person.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl">
                🎵
              </div>
              <div>
                <h3 className="font-bold text-[#101D35]">Follow Us</h3>
                <a
                  href="https://www.tiktok.com/@athens.nepali.chu"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block font-medium text-amber-600 hover:text-amber-700"
                >
                  Visit Our TikTok →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#101D35] p-8 text-white shadow-xl md:p-10">
          <p className="font-semibold uppercase tracking-widest text-amber-400">
            Join Us
          </p>
          <h2 className="mt-3 text-3xl font-bold">Weekly Gathering Schedule</h2>
          <p className="mt-4 leading-7 text-gray-300">
            We invite you to worship, fellowship, and study God's Word with us.
          </p>

          <div className="mt-8 space-y-5">
            {schedule.map((item) => (
              <div
                key={item.day}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-xl font-bold text-amber-400">
                  {item.day}
                </h3>
                <p className="mt-2 font-semibold">{item.time}</p>
                <p className="mt-1 text-sm text-gray-300">{item.type}</p>
              </div>
            ))}
          </div>

          <p className="mt-7 text-sm leading-6 text-gray-400">
            Online meetings are held through Google Meet. Please contact us
            for meeting details.
          </p>
        </div>
      </section>

      <section className="bg-amber-50 px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#101D35]">
          You Are Welcome Here
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
          We look forward to meeting you and sharing fellowship together.
        </p>
      </section>
    </div>
  );
}

export default Contact;
