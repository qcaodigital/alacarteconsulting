import { ReactElement } from 'react';
import { useIsHovered } from 'utils/useIsHovered';
import { ISubpathItem } from 'utils/sitemap';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

interface LinkWithSubpathProps {
	path: string;
	subpaths: ISubpathItem[];
	label: string | ReactElement;
}

export default function LinkWithSubpath({ path, label, subpaths }: LinkWithSubpathProps) {
	const { isHovered, ref } = useIsHovered();

	return (
		<div ref={ref} className='relative'>
			<p className={isHovered ? 'opacity-50' : ''}>{label}</p>
			<AnimatePresence>
				{isHovered && (
					<motion.ul
						className='flex flex-col gap-1 absolute top-full left-1/2 -translate-x-1/2'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
					>
						{subpaths.map((sub) => (
							<li
								key={sub.label}
								className='whitespace-nowrap text-center transition duration-200 | hover:opacity-75'
							>
								<Link href={path + sub.href}>{sub.label}</Link>
							</li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
}
