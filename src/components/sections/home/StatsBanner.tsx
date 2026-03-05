import { stats } from "@/data/stats";

export function StatsBanner() {
  return (
    <section className="bg-charcoal px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-[family-name:var(--font-lobster)] text-4xl text-lime sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-base text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
