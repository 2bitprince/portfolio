import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ActionButtons() {
    return (
        <div className='flex items-center gap-3'>
            <Link
                href='/resume'
                className='group brand-gradient flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-50 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-neutral-500/50'
            >
                Get Resume/CV
                <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
            </Link>
        </div>
    );
}
