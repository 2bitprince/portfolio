'use client';

import { useState, useEffect, useCallback } from 'react';
import { v1 as uuidv1, v4 as uuidv4, v7 as uuidv7 } from 'uuid';
import { Copy, RefreshCw, Check, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

type UUIDVersion = 'v1' | 'v4' | 'v7';

export default function UUIDClient() {
    const [uuid, setUuid] = useState('');
    const [version, setVersion] = useState<UUIDVersion>('v4');
    const [copied, setCopied] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const generateUUID = useCallback((v: UUIDVersion = version) => {
        setIsLoading(true);
        setTimeout(() => {
            let newUuid = '';
            try {
                if (v === 'v1') newUuid = uuidv1();
                else if (v === 'v7') newUuid = uuidv7();
                else newUuid = uuidv4();
                setUuid(newUuid);
            } catch (error) {
                console.error('Generation error:', error);
                setUuid(uuidv4()); // Fallback
            }
            setIsLoading(false);
        }, 150);
    }, [version]);

    useEffect(() => {
        generateUUID();
    }, [generateUUID]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(uuid);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const versions: { id: UUIDVersion; label: string; desc: string }[] = [
        { id: 'v4', label: 'Version 4', desc: 'Randomly generated (standard)' },
        { id: 'v7', label: 'Version 7', desc: 'Timestamp-based & sortable' },
        { id: 'v1', label: 'Version 1', desc: 'Timestamp & node-based' },
    ];

    return (
        <main className='min-h-screen py-24 px-6 md:px-12 max-w-5xl mx-auto'>
            {/* Header section */}
            <div className='text-center mb-16'>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-5xl md:text-7xl font-bold font-bricolage mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 uppercase tracking-tight'
                >
                    UUID Generator
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className='text-lg md:text-xl font-inter max-w-2xl mx-auto'
                    style={{ color: 'var(--text-tertiary)' }}
                >
                    Generate unique identifiers instantly. Choose your version, copy with a click, and build with confidence.
                </motion.p>
            </div>

            {/* Main generation card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className='relative group mb-12'
            >
                {/* Background glow effect */}
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200' />
                
                <div 
                    className='relative flex flex-col items-center justify-center p-8 md:p-16 rounded-[2rem] border backdrop-blur-xl transition-colors'
                    style={{ 
                        backgroundColor: 'var(--surface-overlay)',
                        borderColor: 'var(--border)'
                    }}
                >
                    <div className='w-full flex justify-between items-center mb-12'>
                        <span 
                            className='px-4 py-1.5 rounded-full border text-xs font-kode-mono uppercase tracking-[0.2em]'
                            style={{ 
                                backgroundColor: 'var(--surface)',
                                borderColor: 'var(--border)',
                                color: 'var(--text-tertiary)'
                            }}
                        >
                            UUID {version}
                        </span>
                        <div className='flex gap-4'>
                            <button 
                                onClick={() => generateUUID()}
                                className='p-3 rounded-xl border transition-all transform active:scale-95'
                                style={{ 
                                    backgroundColor: 'var(--surface)',
                                    borderColor: 'var(--border)',
                                    color: 'var(--text-secondary)'
                                }}
                                title='Regenerate'
                            >
                                <motion.div animate={{ rotate: isLoading ? 360 : 0 }} transition={{ repeat: isLoading ? Infinity : 0, duration: 1, ease: 'linear' }}>
                                    <RefreshCw className='w-5 h-5' />
                                </motion.div>
                            </button>
                        </div>
                    </div>

                    <div className='w-full overflow-hidden text-center mb-12'>
                        <AnimatePresence mode='wait'>
                            <motion.span 
                                key={uuid}
                                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                                transition={{ duration: 0.4 }}
                                className='block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-kode-mono font-bold tracking-tight select-all'
                                style={{ color: 'var(--text-primary)' }}
                            >
                                {uuid || '••••••••-••••-••••-••••-••••••••••••'}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <button 
                        onClick={copyToClipboard}
                        className={clsx(
                            'w-full md:w-auto px-8 py-5 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all transform active:scale-95 overflow-hidden relative'
                        )}
                        style={{ 
                            backgroundColor: copied ? '#10b981' : 'var(--btn-primary-bg)',
                            color: copied ? '#ffffff' : 'var(--btn-primary-text)'
                        }}
                    >
                        <AnimatePresence mode='wait'>
                            {copied ? (
                                <motion.span 
                                    key="copied"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className='flex items-center gap-2'
                                >
                                    <Check className='w-5 h-5' /> COPIED TO CLIPPBOARD
                                </motion.span>
                            ) : (
                                <motion.span 
                                    key="copy"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className='flex items-center gap-2'
                                >
                                    <Copy className='w-5 h-5' /> COPY UUID
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </motion.div>

            {/* Version picker */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {versions.map((v, i) => (
                    <motion.button
                        key={v.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        onClick={() => {
                            setVersion(v.id);
                            generateUUID(v.id);
                        }}
                        className={clsx(
                            'p-6 rounded-[1.5rem] border text-left transition-all group relative overflow-hidden',
                            version === v.id 
                                ? 'ring-1 ring-purple-500/50' 
                                : 'hover:bg-zinc-900/5 hover:dark:bg-zinc-900/50'
                        )}
                        style={{ 
                            backgroundColor: version === v.id ? 'var(--surface)' : 'transparent',
                            borderColor: version === v.id ? 'var(--border-hover)' : 'var(--border)'
                        }}
                    >
                        <div className='relative z-10'>
                            <div className='flex items-center justify-between mb-4'>
                                <span 
                                    className='px-3 py-1 rounded-lg text-[10px] font-kode-mono font-bold uppercase tracking-widest'
                                    style={{ 
                                        backgroundColor: version === v.id ? 'var(--brand-primary)' : 'var(--surface)',
                                        color: version === v.id ? '#ffffff' : 'var(--text-tertiary)'
                                    }}
                                >
                                    {v.id}
                                </span>
                                {version === v.id && (
                                    <motion.div layoutId='indicator' className='w-2 h-2 rounded-full bg-purple-500' />
                                )}
                            </div>
                            <h3 className='text-lg font-bold mb-2' style={{ color: 'var(--text-primary)' }}>{v.label}</h3>
                            <p className='text-sm leading-relaxed' style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Footer / FAQ section */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='mt-24 p-8 rounded-3xl border transition-colors'
                style={{ 
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: 'var(--surface-elevated)'
                }}
            >
                <div className='flex items-start gap-4'>
                    <Info className='w-6 h-6 text-purple-400 mt-1' />
                    <div>
                        <h4 className='text-xl font-bold mb-2' style={{ color: 'var(--text-primary)' }}>Which version should I use?</h4>
                        <p className='leading-relaxed max-w-3xl' style={{ color: 'var(--text-tertiary)' }}>
                            <strong>v4</strong> is the industry standard for most applications because it&apos;s completely random. 
                            <strong>v7</strong> is great for databases because it contains a timestamp, making it sortable by creation time. 
                            <strong>v1</strong> is useful when you need to embed the time and origin (MAC address) into the identifier.
                        </p>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
