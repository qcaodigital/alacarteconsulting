import Link from 'next/link';
import { sitemap } from 'utils/sitemap';
import { motion } from 'framer-motion';

export default function NavMenu() {
	return (
		<motion.div
			key='menu'
			className='fixed -inset-10 z-30 bg-mandarin'
			initial={{ opacity: 0, scale: 1.5 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<ul
				key='menu-list'
				className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center text-2xl text-white uppercase font-mon font-semibold flex flex-col gap-y-2 | lg:left-[20%] lg:text-left lg:text-3xl | xl:text-4xl'
			>
				{sitemap.map((item) => (
					<li key={item.href} className='transition duration-300 | hover:text-darkblue'>
						<Link href={item.href}>{item.label}</Link>
					</li>
				))}
			</ul>
		</motion.div>
	);
}
