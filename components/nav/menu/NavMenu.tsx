import Link from 'next/link';
import { INavItem, sitemap } from 'utils/sitemap';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

export default function NavMenu() {
	const [currentMenu, setCurrentMenu] = useState(sitemap);
	const setMenu = (item: INavItem) => {
		if (item.subpaths) {
			setCurrentMenu(item.subpaths);
		} else return;
	};
	const isMainMenu = useMemo(() => _.isEqual(currentMenu, sitemap), [currentMenu, sitemap]);

	const router = useRouter();
	const path = router.pathname;

	return (
		<motion.div
			key='menu'
			className='fixed -inset-10 z-30 bg-mandarin'
			initial={{ opacity: 0, scale: 1.5 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<motion.ul
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				key={currentMenu[0].href || '1'}
				className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center text-2xl text-white uppercase font-mon font-semibold flex flex-col gap-y-2 | lg:left-[20%] lg:-translate-x-0 lg:text-left lg:text-3xl | xl:text-4xl'
			>
				<li className='cursor-pointer'>
					{!isMainMenu && (
						<p
							className='transition duration-300 justify-center | lg:justify-start | hover:text-darkblue'
							onClick={() => setCurrentMenu(sitemap)}
						>
							<span className='relative'>
								<span>Back</span>
								<span className='absolute pb-1 top-1/2 right-full -translate-y-1/2 -translate-x-1/2 | lg:pb-2 | xl:pb-3'>
									<FontAwesomeIcon icon={faArrowLeft} className='text-base' />
								</span>
							</span>
						</p>
					)}
				</li>
				{currentMenu.map((item) => (
					<motion.li
						key={item.href}
						className={`transition duration-300 whitespace-nowrap | hover:text-darkblue | ${
							path === item.href ? 'pointer-events-none opacity-30' : ''
						}`}
						onClick={() => setMenu(item)}
					>
						{item.href ? (
							<Link href={item.href}>{item.label}</Link>
						) : (
							<p className='cursor-pointer'>{item.label}</p>
						)}
					</motion.li>
				))}
			</motion.ul>
		</motion.div>
	);
}
