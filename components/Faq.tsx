import type { Faq } from "@/content/faq";

export function FaqLista({ items, titulo = "Preguntas frecuentes" }: { items: Faq[]; titulo?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.pregunta,
      acceptedAnswer: { "@type": "Answer", text: f.respuesta },
    })),
  };
  return (
    <section className="gs-light gs-section">
      <div className="gs-container">
        <h2 className="text-3xl md:text-4xl">{titulo}</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {items.map((f) => (
            <details key={f.pregunta} className="group rounded-gs border border-gs-gray-100 bg-white open:shadow-gs-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-lg font-semibold uppercase text-gs-navy [&::-webkit-details-marker]:hidden">
                {f.pregunta}
                <span aria-hidden="true" className="text-2xl font-light text-gs-copper-tx transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-5 pb-5 text-[0.9375rem] leading-relaxed text-gs-ink-soft">{f.respuesta}</p>
            </details>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </div>
    </section>
  );
}
