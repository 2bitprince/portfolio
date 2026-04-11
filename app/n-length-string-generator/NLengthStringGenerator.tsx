'use client';

import { useMemo, useState } from 'react';
import { Check, Copy, RefreshCw } from 'lucide-react';

const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SPECIAL = '!@#$%^&*()-_=+[]{};:,.<>?/|~';
const QUICK_LENGTHS = [10, 20, 100, 300, 500, 1000, 2000] as const;

function randomChar(pool: string): string {
	const index = Math.floor(Math.random() * pool.length);
	return pool[index] ?? '';
}

function createRandomString(
	length: number,
	options: { includeNumbers: boolean; includeSpecial: boolean; includeSpaces: boolean }
): string {
	if (length <= 0) return '';

	const basePool = LOWERCASE + UPPERCASE;
	let poolWithoutSpace = basePool;

	if (options.includeNumbers) poolWithoutSpace += NUMBERS;
	if (options.includeSpecial) poolWithoutSpace += SPECIAL;

	if (!poolWithoutSpace) return '';

	if (!options.includeSpaces || length < 3) {
		return Array.from({ length }, () => randomChar(poolWithoutSpace)).join('');
	}

	const middlePool = `${poolWithoutSpace} `;
	let result = '';

	for (let i = 0; i < length; i += 1) {
		const isEdge = i === 0 || i === length - 1;
		result += randomChar(isEdge ? poolWithoutSpace : middlePool);
	}

	return result;
}

export default function NLengthStringGenerator() {
	const [length, setLength] = useState<number>(20);
	const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
	const [includeSpecial, setIncludeSpecial] = useState<boolean>(false);
	const [includeSpaces, setIncludeSpaces] = useState<boolean>(false);
	const [generatedString, setGeneratedString] = useState<string>('');
	const [copied, setCopied] = useState<boolean>(false);

	const helperText = useMemo(() => {
		if (!includeSpaces) return 'Spaces are disabled.';
		if (length < 3) return 'Length below 3 cannot contain internal spaces.';
		return 'Spaces can appear only in the middle, never at start or end.';
	}, [includeSpaces, length]);

	const generateString = () => {
		const next = createRandomString(length, {
			includeNumbers,
			includeSpecial,
			includeSpaces,
		});
		setGeneratedString(next);
		setCopied(false);
	};

	const handleCopy = async () => {
		if (!generatedString) return;
		await navigator.clipboard.writeText(generatedString);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<main className='min-h-screen py-20 px-6 md:px-10 max-w-5xl mx-auto'>
			<section className='mb-10'>
				<h1
					className='text-4xl md:text-6xl font-bold tracking-tight mb-4'
					style={{ color: 'var(--text-hero-heading)' }}
				>
					N Length String Generator
				</h1>
				<p className='text-lg' style={{ color: 'var(--text-tertiary)' }}>
					Generate random strings of exact length with optional numbers,
					special characters, and internal spaces.
				</p>
			</section>

			<section
				className='rounded-3xl border p-6 md:p-8 mb-8'
				style={{
					borderColor: 'var(--border)',
					backgroundColor: 'var(--surface-overlay)',
				}}
			>
				<div className='grid gap-5 md:grid-cols-[1fr_auto] md:items-end'>
					<label className='block'>
						<span
							className='block text-sm font-semibold mb-2'
							style={{ color: 'var(--text-secondary)' }}
						>
							Length (N)
						</span>
						<input
							type='number'
							min={1}
							max={2000}
							value={length}
							onChange={(event) => {
								const value = Number(event.target.value);
								if (Number.isNaN(value)) return;
								setLength(Math.min(2000, Math.max(1, value)));
							}}
							className='w-full rounded-xl border px-4 py-3 outline-none transition-colors'
							style={{
								borderColor: 'var(--border)',
								backgroundColor: 'var(--surface)',
								color: 'var(--text-primary)',
							}}
						/>
					</label>

					<button
						type='button'
						onClick={generateString}
						className='inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold'
						style={{
							backgroundColor: 'var(--btn-primary-bg)',
							color: 'var(--btn-primary-text)',
						}}
					>
						<RefreshCw className='h-4 w-4' />
						Generate
					</button>
				</div>

				<div className='mt-5'>
					<p
						className='text-sm font-medium mb-3'
						style={{ color: 'var(--text-secondary)' }}
					>
						Quick Length
					</p>
					<div className='flex flex-wrap gap-2'>
						{QUICK_LENGTHS.map((size) => (
							<button
								key={size}
								type='button'
								onClick={() => setLength(size)}
								className='rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors'
								style={{
									borderColor:
										length === size
											? 'var(--border-hover)'
											: 'var(--border)',
									backgroundColor:
										length === size
											? 'var(--surface-elevated)'
											: 'transparent',
									color: 'var(--text-primary)',
								}}
							>
								{size}
							</button>
						))}
					</div>
				</div>

				<div className='mt-6 grid gap-3 sm:grid-cols-3'>
					<label className='flex items-center gap-2 text-sm font-medium'>
						<input
							type='checkbox'
							className='h-5 w-5'
							checked={includeNumbers}
							onChange={(event) => setIncludeNumbers(event.target.checked)}
						/>
						Allow numbers
					</label>

					<label className='flex items-center gap-2 text-sm font-medium'>
						<input
							type='checkbox'
							className='h-5 w-5'
							checked={includeSpecial}
							onChange={(event) => setIncludeSpecial(event.target.checked)}
						/>
						Allow special characters
					</label>

					<label className='flex items-center gap-2 text-sm font-medium'>
						<input
							type='checkbox'
							className='h-5 w-5'
							checked={includeSpaces}
							onChange={(event) => setIncludeSpaces(event.target.checked)}
						/>
						Allow empty spaces
					</label>
				</div>

				<p className='mt-3 text-sm' style={{ color: 'var(--text-tertiary)' }}>
					{helperText}
				</p>
			</section>

			<section
				className='rounded-3xl border p-6 md:p-8'
				style={{
					borderColor: 'var(--border-subtle)',
					backgroundColor: 'var(--surface-elevated)',
				}}
			>
				<div className='mb-4 flex items-center justify-between gap-4'>
					<h2 className='text-xl font-semibold' style={{ color: 'var(--text-primary)' }}>
						Generated String
					</h2>
					<button
						type='button'
						onClick={handleCopy}
						disabled={!generatedString}
						className='inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium disabled:opacity-50'
						style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
					>
						{copied ? <Check className='h-4 w-4' /> : <Copy className='h-4 w-4' />}
						{copied ? 'Copied' : 'Copy'}
					</button>
				</div>

				<textarea
                    cols={100}
                    rows={25}
					readOnly
					value={generatedString}
					placeholder='Click Generate to create a string'
					className='w-full min-h-52 rounded-2xl border p-4 text-sm md:text-base leading-relaxed resize-y outline-none'
					style={{
						borderColor: 'var(--border)',
						backgroundColor: 'var(--surface)',
						color: 'var(--text-primary)',
					}}
				/>
			</section>
		</main>
	);
}
