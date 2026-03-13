'use client';

import Link from 'next/link';
import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className='page-gradient flex min-h-[calc(100vh-64px)] items-center justify-center p-4'>
            <div className='w-full max-w-lg'>
                <div className='relative overflow-hidden rounded-3xl border border-white/50 bg-zinc-900/70 p-8 text-center shadow-xl backdrop-blur-xl md:p-12'>
                    <div className='absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950' />
                    <div className='absolute -top-24 -right-24 h-48 w-48 rounded-full bg-zinc-800 opacity-50 blur-3xl' />
                    <div className='absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-zinc-800 opacity-50 blur-3xl' />

                    <div className='relative z-10'>
                        <h1 className='header-font mb-4 bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-9xl font-bold text-transparent'>
                            404
                        </h1>
                        <h2 className='header-font mb-4 text-2xl font-bold text-zinc-100'>
                            Page Not Found
                        </h2>
                        <p className='body-font mb-8 text-lg text-zinc-400'>
                            Oops! The page you are looking for has vanished into thin air. It looks
                            like you have ventured into uncharted territory.
                        </p>

                        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                            <Link
                                href='/'
                                className='inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3.5 font-medium text-zinc-300 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md'
                            >
                                <ArrowLeft className='h-5 w-5' />
                                Back Home
                            </Link>

                            <Link
                                href='/contact'
                                className='brand-gradient inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-medium text-zinc-900 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl'
                            >
                                <MessageCircle className='h-5 w-5' />
                                Email Me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
