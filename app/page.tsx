import Image from "next/image";
import FoundingHouses from "@/components/FoundingHouses";
import TheCode from "@/components/TheCode";
import { query } from "@/lib/db";

// 1. Function to get data from DB
async function getNextEvent() {
  const sql = `
    SELECT 
      e.event_date, 
      e.location_address, 
      e.description, 
      e.event_format,
      e.entry_cost,
      s.name as host_name,
      s.contact_email
    FROM events e
    JOIN schools s ON e.host_school_id = s.id
    WHERE e.event_date >= NOW()
    ORDER BY e.event_date ASC
    LIMIT 1;
  `;

  try {
    const result = await query(sql);
    return result.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    return null;
  }
}

// 2. Main Component
export default async function Home() {
  const nextEvent = await getNextEvent();

  return (
    <main className="min-h-screen flex flex-col items-center bg-[var(--bg-void)]">
      {/* HERO SECTION */}
      <section className="w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-10">
        {/* SWORD LOGO */}
        <div className="mb-8 relative">
          <Image
            src="/logos/rswordlogo.png"
            alt="Rudiarius Sword"
            width={500}
            height={100}
            className="w-64 md:w-96 h-auto"
            priority
          />
        </div>

        <h1 className="text-5xl md:text-7xl mb-4 text-[var(--text-bone)]">
          Rudiarius
        </h1>
        <p className="text-xl md:text-2xl mb-8 tracking-widest text-[var(--gladiator-gold)]">
          Jiu Jitsu
        </p>

        {/* DYNAMIC EVENT CARD */}
        {nextEvent ? (
          <div className="bg-[var(--bg-card)] border border-[var(--rudis-wood)] p-6 rounded-lg max-w-lg w-full mb-10 shadow-lg">
            {/* Header */}
            <h3 className="text-[var(--legion-red)] text-lg mb-2">
              Next Gathering
            </h3>

            {/* Date & Time */}
            <p className="text-2xl text-[var(--text-bone)] font-bold mb-1">
              {new Date(nextEvent.event_date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="text-xl mb-6 text-[var(--text-bone)]">
              @{" "}
              {new Date(nextEvent.event_date).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>

            <div className="p-6 rounded-lg max-w-lg w-full mb-10 shadow-lg">
              <div className=" text-center pt-4 pb-5 height:auto mb-6 flex justify-center">
                <span className="text-[var(--gladiator-gold)] uppercase tracking-wide block text-xs mb-5">
                  Entry Fee:
                </span>
                <span className="text-[var(--text-bone)] font-bold">
                  {nextEvent.entry_cost || "Free"}
                </span>
              </div>
            </div>

            {/* Host Info */}
            <div className="pt-5">
              <p className="text-[var(--gladiator-gold)] text-sm uppercase tracking-wide">
                Hosted By
              </p>
              <p className="text-lg mb-1">{nextEvent.host_name}</p>

              {/* Email Link (Only shows if email exists) */}
              {nextEvent.contact_email && (
                <a
                  href={`mailto:${nextEvent.contact_email}`}
                  className="text-sm text-[var(--legion-red)] hover:underline mb-3 block"
                >
                  {nextEvent.contact_email}
                </a>
              )}

              <p className="text-[var(--text-muted)] text-sm mt-2">
                {nextEvent.location_address}
              </p>

              {/* Description (FIXED QUOTES HERE) */}
              <p className="text-[var(--text-bone)] mt-4 pt-4  italic">
                &quot;{nextEvent.description}&quot;
              </p>
            </div>
          </div>
        ) : (
          <div className="mb-10 p-6 border border-dashed border-gray-600 rounded">
            <p className="text-[var(--text-muted)]">
              No upcoming events scheduled.
            </p>
          </div>
        )}

        <p className="max-w-2xl text-[var(--text-muted)] text-lg mb-10 leading-relaxed">
          The monthly gathering for the <strong>Rudiarii</strong>—men 40+ who
          have earned their freedom, but choose to stay in the fight. No egos.
          No 20-year-olds. Just survival.
        </p>

        <div className="flex gap-4">
          <button className="px-8 py-3 bg-[var(--rudis-wood)] text-white font-bold rounded hover:brightness-110 transition">
            Join the Ranks
          </button>
          <a
            href="#the-code"
            className="px-8 py-3 border border-[var(--legion-red)] text-[var(--legion-red)] font-bold rounded hover:bg-[var(--legion-red)] hover:text-white transition"
          >
            Read The Code
          </a>
        </div>
      </section>

      {/* FOUNDING HOUSES SECTION */}
      <FoundingHouses />

      {/* THE CODE SECTION */}
      <TheCode />
    </main>
  );
}
