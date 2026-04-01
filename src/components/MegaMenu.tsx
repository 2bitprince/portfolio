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
        <div
            className='grid w-[800px] cursor-default grid-cols-3 gap-8 rounded-xl p-6 text-left shadow-lg'
            style={{
                borderWidth: '1px',
                borderColor: 'var(--border)',
                backgroundColor: 'var(--megamenu-bg)',
            }}
        >
            {data.map((column, idx) => (
                <div key={idx}>
                    <h3
                        className='mb-4 text-xs font-semibold tracking-wider uppercase'
                        style={{ color: 'var(--text-muted)' }}
                    >
                        {column.title}
                    </h3>
                    <div className='space-y-4'>
                        {column.items.map((item, itemIdx) => (
                            <Link
                                key={itemIdx}
                                href={item.href}
                                className='group -mx-2 block rounded-lg p-2'
                                style={{ transition: 'background-color 0.2s' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--megamenu-hover)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                <div
                                    className='font-semibold'
                                    style={{ color: 'var(--text-hero-heading)' }}
                                >
                                    {item.title}
                                </div>
                                <div
                                    className='text-sm'
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    {item.description}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
