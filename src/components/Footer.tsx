import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className='footer-gradient relative overflow-hidden pt-20 pb-4'>
            <div className='pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-zinc-800/30 blur-3xl' />
            <div className='pointer-events-none absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-zinc-800/30 blur-3xl' />

            <div className='relative z-10 mx-auto max-w-7xl px-4'>
                <div className='mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4'>
                    <div>
                        <h4 className='header-font mb-5 font-semibold text-zinc-100'>Social</h4>
                        <ul className='space-y-3'>
                            <li>
                                <Link
                                    href='#'
                                    className='group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-zinc-100'
                                >
                                    <span>Linkedin</span>
                                    <ArrowRight className='h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-purple-500'
                                >
                                    <span>Github</span>
                                    <ArrowRight className='h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-purple-500'
                                >
                                    <span>Instagram</span>
                                    <ArrowRight className='h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-purple-500'
                                >
                                    <span>Email</span>
                                    <ArrowRight className='h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='header-font mb-5 font-semibold text-zinc-100'>Projects</h4>
                        <ul className='space-y-3'>
                            <li>
                                <Link
                                    href='/api-access'
                                    className='group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-purple-500'
                                >
                                    <span>Project 1</span>
                                    <ArrowRight className='h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/enterprise'
                                    className='group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-purple-500'
                                >
                                    <span>Project 2</span>
                                    <ArrowRight className='h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='header-font mb-5 font-semibold text-zinc-100'>Blogs</h4>
                        <ul className='space-y-3'>
                            <li>
                                <Link
                                    href='#'
                                    className='group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-purple-500'
                                >
                                    <span>Blog 1</span>
                                    <ArrowRight className='h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/features'
                                    className='group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-purple-500'
                                >
                                    <span>Blog 2</span>
                                    <ArrowRight className='h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='header-font mb-5 font-semibold text-zinc-100'>Tools</h4>
                        <ul className='space-y-3'>
                            <li>
                                <Link
                                    href='/terms'
                                    className='group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-purple-500'
                                >
                                    <span>N Length String</span>
                                    <ArrowRight className='h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/privacy-policy'
                                    className='group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-purple-500'
                                >
                                    <span>UUID Generator</span>
                                    <ArrowRight className='h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='group flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-purple-500'
                                >
                                    <span>Words Count</span>
                                    <ArrowRight className='h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 md:flex-row'>
                    <p className='text-sm text-zinc-500'>© 2026 2bitprince. All rights reserved.</p>
                    <div className='flex items-center gap-2 text-sm text-zinc-500'>
                        <span>Made with</span>
                        <span className='text-purple-500'>❤️</span>
                        <span>in India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
