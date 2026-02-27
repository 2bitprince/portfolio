import Link from "next/link";

interface MenuItem {
  title: string;
  description: string;
  href: string;
}

interface MenuColumn {
  title: string;
  items: MenuItem[];
}

interface MegaMenuProps {
  data: MenuColumn[];
}

export default function MegaMenu({ data }: MegaMenuProps) {
  return (
    <div className="w-[800px] bg-zinc-900 rounded-xl shadow-lg border border-zinc-800 p-6 grid grid-cols-3 gap-8 cursor-default text-left">
      {data.map((column, idx) => (
        <div key={idx}>
          <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
            {column.title}
          </h3>
          <div className="space-y-4">
            {column.items.map((item, itemIdx) => (
              <Link
                key={itemIdx}
                href={item.href}
                className="block hover:bg-zinc-800 -mx-2 p-2 rounded-lg group"
              >
                <div className="font-semibold text-zinc-100 group-hover:text-zinc-50">
                  {item.title}
                </div>
                <div className="text-sm text-zinc-500">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
