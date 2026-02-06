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
    <div className="w-[800px] bg-white rounded-xl shadow-lg border border-gray-100 p-6 grid grid-cols-3 gap-8 cursor-default text-left">
      {data.map((column, idx) => (
        <div key={idx}>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            {column.title}
          </h3>
          <div className="space-y-4">
            {column.items.map((item, itemIdx) => (
              <Link
                key={itemIdx}
                href={item.href}
                className="block hover:bg-gray-50 -mx-2 p-2 rounded-lg group"
              >
                <div className="font-semibold text-gray-900 group-hover:text-black">
                  {item.title}
                </div>
                <div className="text-sm text-gray-500">{item.description}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
