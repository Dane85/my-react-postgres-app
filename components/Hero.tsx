import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container-fluid grid grid-cols-12 h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 lg:px-20 bg-[var(--bg-void)]">
        <Image
          src="/Images/Hero2.png"
          alt="Rudiarius Logo"
          width={1200}
          height={400}
          className="w-100% h-auto"
          priority
        />
      </div>
    </section>
  );
}
