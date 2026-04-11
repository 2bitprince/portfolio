import type { Metadata } from 'next';
import NLengthStringGenerator from './NLengthStringGenerator';

export const metadata: Metadata = {
    title: 'N Length String Generator - 2bitprince',
    description: 'A premium, high-performance N length string generator. Generate unique strings of specified length instantly for your projects.',
    keywords: ['n length string', 'generator', 'developer-tools'],
};

export default function NLengthStringGeneratorPage() {
    return <NLengthStringGenerator />;
}
