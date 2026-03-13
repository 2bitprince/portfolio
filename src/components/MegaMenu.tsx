import Link from 'next/link';

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
        <div className='grid w-[800px] cursor-default grid-cols-3 gap-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-left shadow-lg'>
            {data.map((column, idx) => (
                <div key={idx}>
                    <h3 className='mb-4 text-xs font-semibold tracking-wider text-zinc-500 uppercase'>
                        {column.title}
                    </h3>
                    <div className='space-y-4'>
                        {column.items.map((item, itemIdx) => (
                            <Link
                                key={itemIdx}
                                href={item.href}
                                className='group -mx-2 block rounded-lg p-2 hover:bg-zinc-800'
                            >
                                <div className='font-semibold text-zinc-100 group-hover:text-zinc-50'>
                                    {item.title}
                                </div>
                                <div className='text-sm text-zinc-500'>{item.description}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
