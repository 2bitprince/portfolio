import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter, Kode_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import SmoothScroll from '@/src/components/SmoothScroll';
import ThemeProvider from '@/src/components/ThemeProvider';

const bricolageGrotesque = Bricolage_Grotesque({
    subsets: ['latin'],
    variable: '--font-bricolage',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const kodeMono = Kode_Mono({
    subsets: ['latin'],
    variable: '--font-kode-mono',
});

export const metadata: Metadata = {
    title: '2bitprince - Full Stack Developer.',
    description: '2bitprince is a full stack developer with experience in various technologies.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' data-theme='dark' suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var theme = localStorage.getItem('theme');
                                    if (theme === 'light' || theme === 'dark') {
                                        document.documentElement.setAttribute('data-theme', theme);
                                    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                                        document.documentElement.setAttribute('data-theme', 'light');
                                    }
                                } catch(e) {}
                            })();
                        `,
                    }}
                />
            </head>
            <body
                className={`${bricolageGrotesque.variable} ${inter.variable} ${kodeMono.variable} antialiased`}
            >
                <ThemeProvider>
                    <SmoothScroll>
                        <Navbar />
                        {children}
                        <Footer />
                    </SmoothScroll>
                </ThemeProvider>
            </body>
        </html>
    );
}
