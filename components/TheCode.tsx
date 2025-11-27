import React from "react";

export default function TheCode() {
  return (
    <section
      id="the-code"
      className="w-full py-20 bg-[var(--bg-card)] border-t border-[#333]"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl mb-12 text-[var(--legion-red)] tracking-widest">
          The Code of the Rudiarius
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* RULE 1 */}
          <div className="p-6 border border-[var(--rudis-wood)] rounded bg-[var(--bg-void)] hover:border-[var(--gladiator-gold)] transition-colors">
            <h3 className="text-xl font-bold mb-3 text-[var(--gladiator-gold)]">
              I. Respect the Rudis
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              We are all free men here. Leave the belt rank and the ego at the
              door. We respect the commitment to the art, not the color of the
              fabric around your waist.
            </p>
          </div>

          {/* RULE 2 */}
          <div className="p-6 border border-[var(--rudis-wood)] rounded bg-[var(--bg-void)] hover:border-[var(--gladiator-gold)] transition-colors">
            <h3 className="text-xl font-bold mb-3 text-[var(--gladiator-gold)]">
              II. Survival First
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              We train to fight another day. If you rip a submission like it’s
              the Mundials finals, you will be exiled. We have jobs to go to in
              the morning.
            </p>
          </div>

          {/* RULE 3 */}
          <div className="p-6 border border-[var(--rudis-wood)] rounded bg-[var(--bg-void)] hover:border-[var(--gladiator-gold)] transition-colors">
            <h3 className="text-xl font-bold mb-3 text-[var(--gladiator-gold)]">
              III. The Open Gate
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              All affiliations welcome. The patch on your back does not matter
              here. Only your willingness to roll and share knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
