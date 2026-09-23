import Link from "next/link";

type BreadcrumbItem = Readonly<{
  label: string;
  href?: string;
}>;

type BreadcrumbsProps = Readonly<{
  items: readonly BreadcrumbItem[];
}>;

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumbs__list">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;

            return (
              <li className="breadcrumbs__item" key={item.label}>
                {item.href && !isCurrent ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <span aria-current={isCurrent ? "page" : undefined}>
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}