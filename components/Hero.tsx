import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full grid grid-cols-12 h-[80vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Left Column Container */}
      {/* Added 'relative' here so the absolute Sword logo positions itself relative to this box */}
      <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 lg:px-20 bg-[var(--bg-void)] relative">
        {/* Main Hero Image */}
        <Image
          src="/Images/Hero2.png"
          alt="Rudiarius Logo"
          width={1200}
          height={400}
          /* FIX: w-100% -> w-full, position-relative -> relative */
          className="w-full h-auto relative"
          priority
        />

        {/* SWORD LOGO OVERLAY */}
        {/* FIX: Moved specific positioning classes here. z-index-10 -> z-10 */}
        <div className="absolute top-0 left-0 z-10 mb-4 p-4">
          <Image
            src="/logos/rswordlogo.png"
            alt="Rudiarius Sword"
            width={500}
            height={100}
            /* FIX: position-absolute -> absolute (though redundant if parent is absolute) */
            className="w-64 md:w-96 h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
