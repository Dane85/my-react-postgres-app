import React from 'react';
import Image from 'next/image';

type Partner = {
  id: number;
  name: string;
  logo: string;
};

// These paths match your exact file structure
const partners: Partner[] = [
  { id: 1, name: "Kalsamrit Martial Arts", logo: "/logos/kals.jpg" },
  { id: 2, name: "Bruckmann Martial Arts", logo: "/logos/bma.png" },
  { id: 3, name: "BJJ Guvna", logo: "/logos/Guv.png" },
  { id: 4, name: "Muay Thai Whitby", logo: "/logos/wmt.jpg" },
  { id: 5, name: "Four-Eleven BJJ", logo: "/logos/411.png" }
];

export default function FoundingHouses() {
  return (
    <section className="w-full py-16 border-t border-[var(--rudis-wood)] bg-[var(--bg-void)]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl mb-2 text-[var(--gladiator-gold)] tracking-widest">
          The Founding Houses
        </h2>
        <p className="text-[var(--text-muted)] italic mb-10">
          United by the Rudis. Separated by geography. Bound by the mat.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="w-40 h-40 bg-[var(--bg-card)] rounded-lg flex items-center justify-center p-4 border border-[#333] hover:border-[var(--rudis-wood)] transition-transform hover:-translate-y-1"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                 <Image 
                    src={partner.logo} 
                    alt={partner.name}
                    width={150}
                    height={150}
                    className="object-contain max-h-full w-auto opacity-90 hover:opacity-100"
                 />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}