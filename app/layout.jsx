import './globals.css';
import { Noto_Sans } from '@next/font/google';

const noto_sans = Noto_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-family',
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className={`${noto_sans.className} mx-10`}>{children}</body>
        </html>
    );
}
