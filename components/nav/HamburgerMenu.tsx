import { sitemap } from '@/utils/sitemap';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface HamburgerMenuProps {
	toggleHbm: () => void;
}

const transition = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

export function HamburgerMenu({ toggleHbm }: HamburgerMenuProps) {
	return (
		<motion.section
			className='absolute top-0 left-0 w-full h-screen bg-buttercream'
			{...transition}
		>
			<ul className='absolute-center text-center flex flex-col gap-2'>
				{sitemap
					.filter((item) => item.labelAsString || typeof item.label === 'string')
					.map((item) => (
						<li
							className='font-mon text-lg transition duration-200 | hover:opacity-75'
							onClick={!item.subpaths ? toggleHbm : undefined}
						>
							{item.subpaths ? (
								<div className='cursor-pointer'>
									{item.labelAsString || item.label}
								</div>
							) : (
								<Link href={item.href}>{item.labelAsString || item.label}</Link>
							)}
						</li>
					))}
			</ul>
		</motion.section>
	);
}
