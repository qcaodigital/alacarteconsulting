import { useScreenSizeContext } from 'utils/useScreenSizeContext';
import _ from 'lodash';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface NavProps {
	toggleNavMenu: () => void;
	isNavMenuOpen: boolean;
}

export default function Nav({ toggleNavMenu, isNavMenuOpen }: NavProps) {
	const { screenSizeIsOrGreaterThan, currentScreenSize, screens } = useScreenSizeContext();
	const [logoSizeModifier, setLogoSizeModifier] = useState<number>(1.6);

	const router = useRouter();
	const basePath = router.pathname.split('/')[1];

	const textColor = (() => {
		switch (basePath) {
			case 'work':
				return !isNavMenuOpen ? 'bg-black' : 'bg-white';
			default:
				return 'bg-white';
		}
	})();

	useEffect(() => {
		if (screenSizeIsOrGreaterThan('2xl')) {
			setLogoSizeModifier(1.35);
		} else if (screenSizeIsOrGreaterThan('md')) {
			setLogoSizeModifier(1.6);
		} else {
			setLogoSizeModifier(2);
		}
	}, [currentScreenSize]);

	return (
		<>
			<motion.nav
				className={`top-0 left-0 right-0 z-50 px-2 | md:px-4 md:pt-2 | lg:px-8 | ${
					isNavMenuOpen ? 'fixed' : 'absolute'
				}`}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.75 }}
			>
				<ul className='flex justify-between items-center'>
					<li>
						<button onClick={() => (router.pathname === '/' ? toggleNavMenu() : false)}>
							<Link href='/'>
								<Image
									height={141 / logoSizeModifier}
									width={401 / logoSizeModifier}
									src='/assets/branding/full-logo-white.png'
									alt='A La Carte Consulting Logo'
									className={`${
										basePath === 'work' && !isNavMenuOpen
											? 'filter brightness-0 grayscale'
											: ''
									} transition duration-200`}
								/>
							</Link>
						</button>
					</li>
					<li>
						<button className='flex flex-col items-center' onClick={toggleNavMenu}>
							<div className='group flex flex-col gap-y-1.5'>
								<div
									className={`${textColor} ml-auto w-8 h-0.5 rounded transition duration-300 | group-hover:bg-mandarin | ${
										isNavMenuOpen
											? 'rotate-45 -translate-y-1 group-hover:bg-darkblue'
											: ''
									}`}
								/>
								<div
									className={`${textColor} ml-auto w-8 h-0.5 rounded transition duration-300 | group-hover:bg-mandarin | ${
										isNavMenuOpen
											? 'rotate-[135deg] -translate-y-3 group-hover:bg-darkblue'
											: ''
									}`}
								/>
								<div
									className={`${textColor} w-10 h-0.5 rounded transition duration-300 | group-hover:bg-mandarin | ${
										isNavMenuOpen ? 'group-hover:bg-darkblue' : ''
									}`}
								/>
							</div>
						</button>
					</li>
				</ul>
			</motion.nav>
			<div className='fixed z-10 bottom-0 left-0 bg-black text-white px-2'>
				{currentScreenSize} -{' '}
				{currentScreenSize !== 'xs' ? screens[currentScreenSize] : '> 640px'}
			</div>
		</>
	);
}
