import { LinkButton } from "@/components/ui/LinkButton";

type InternalCtaProps = Readonly<{
  title: string;
  buttonLabel: string;
  href: string;
}>;

export function InternalCta({
  title,
  buttonLabel,
  href,
}: InternalCtaProps) {
  return (
    <section className="internal-cta" aria-labelledby="internal-cta-title">
      <div className="container internal-cta__container">
        <p className="internal-cta__eyebrow">Atendimento</p>
        <div className="internal-cta__content">
          <h2 id="internal-cta-title">{title}</h2>
          <LinkButton href={href}>{buttonLabel}</LinkButton>
        </div>
      </div>
    </section>
  );
}