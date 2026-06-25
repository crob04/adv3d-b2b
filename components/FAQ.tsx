const faqs = [
  {
    q: 'How do you hold part quality consistent run-to-run?',
    a: 'Every batch is measured on the bench against the tolerances named in the quote. Dimensional accuracy and surface finish are documented per batch, not as a single first-article number. Material performance is checked against the data sheet for the lot. If a part drifts out of tolerance, we catch it before it ships. QA protocols and material certifications travel with every shipment on request. Repeatable output is the discipline we are built on; that is how a production line stays predictable.',
  },
  {
    q: 'Can your production floor handle my volume as I scale?',
    a: 'Yes. We run FDM, SLA, SLS, MJF, and powder-bed processes on a single coordinated shop floor in the United States — no outsourced production chain. Lead times are quoted per batch with named delivery windows, typically measured in business days, and we escalate to additional machine capacity as your order grows. Production volume and scalability are part of the engineering conversation at intake: if your demand is going to climb, we plan for it before the first run, not after the bottleneck.',
  },
  {
    q: 'Will you contact my clients, expose my margins, or leak my IP?',
    a: 'No. White-label fulfillment is a first-class engagement model, not an afterthought. NDA is signed at intake. We do not market to your customers, do not appear on your invoices, and do not bid on your RFPs. Partner confidentiality is the operating model: we are invisible to your clients and explicit with you. Margin-layer partnership is what we are built for, and we will walk away from an engagement rather than compete with you for the end customer.',
  },
  {
    q: 'Can OEM engagements also be opened under NDA?',
    a: 'Yes. OEM engagements can be opened under NDA on request, particularly where part geometry, tolerance windows, or material specifications are commercially sensitive. The NDA is mutual and signed before any file transfer, and it covers CAD, drawings, material data, and any production data exchanged thereafter. We do not share OEM part data with any third party, including white-label partners, and we keep a separate file-handling track per engagement.',
  },
  {
    q: 'What are the MOQs, lead times, and materials library?',
    a: 'MOQs are process-dependent. FDM and SLA start at single-unit functional prototypes; SLS and MJF are typically quoted at low double-digit batch minimums for powder-bed efficiency. Lead times are quoted per batch with named delivery windows, typically measured in business days, not weeks. The materials library is built around engineering-grade thermoplastics (ABS, ASA, PC, nylon variants), photopolymer resins, and TPU flexible material; specialty materials are quoted on request against your spec sheet.',
  },
  {
    q: 'Where are parts manufactured?',
    a: 'All parts are manufactured in the United States on our own production floor. We do not outsource to a vendor network. This matters for buyers with supply-chain concerns — defense, regulated medical, aerospace, heavy equipment — and for buyers who need a single accountable point of contact for batch QA documentation and material certifications. US-based production also means shorter and more predictable delivery windows than overseas alternatives.',
  },
];

export default function FAQ() {
  return (
    <section className="py-16 lg:py-20" id="faq">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Procurement questions</p>
            <h2 className="mt-6 font-display text-3xl leading-tight text-brand-text sm:text-4xl lg:text-5xl dark:text-brand-dark-text">
              Frequently asked questions
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-black/10 dark:divide-white/10">
              {faqs.map((item, idx) => (
                <details
                  key={item.q}
                  className="faq-item group py-6"
                  open={idx === 0}
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-lg text-brand-text outline-none lg:text-xl dark:text-brand-dark-text">
                    <span>{item.q}</span>
                  </summary>
                  <p className="mt-3 text-base leading-relaxed text-brand-muted dark:text-brand-dark-muted">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}