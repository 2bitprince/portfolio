import type { Metadata } from 'next';
import UUIDClient from './UUIDClient';

export const metadata: Metadata = {
    title: 'UUID Generator - 2bitprince',
    description: 'A premium, high-performance UUID generator supporting versions 1, 4, and 7. Generate unique identifiers instantly for your projects.',
    keywords: ['uuid', 'guid', 'generator', 'uuidv4', 'uuidv7', 'developer-tools'],
};

export default function UUIDPage() {
    return <UUIDClient />;
}
