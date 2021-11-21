import { INavItem, sitemap } from 'utils/sitemap';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface HamburgerMenuProps {
	toggleHbm: () => void;
}

interface IHBMLink extends INavItem {
	color?: string;
}

const transition = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const homeSiteItem: IHBMLink = { href: '/', label: 'Home', color: 'text-red' };
const defaultLinks: IHBMLink[] = [homeSiteItem, ...sitemap];

export function HamburgerMenu({ toggleHbm }: HamburgerMenuProps) {
	const [activeLinks, setActiveLinks] = useState<IHBMLink[]>(defaultLinks);
	const [currentBasePath, setCurrentBasePath] = useState<string | null>();

	return (
		<motion.section
			className='absolute top-0 left-0 w-full h-screen bg-cover bg-white'
			{...transition}
		>
			<div className='absolute inset-0 bg-home-hero bg-cover border-[6px] border-white opacity-20' />
			<ul className='absolute-center text-center flex flex-col gap-3'>
				{activeLinks
					.filter((item) => item.labelAsString || typeof item.label === 'string')
					.map((item) => (
						<li
							key={item.href}
							className={`font-mon text-lg uppercase transition duration-200 | hover:opacity-75 ${
								item.color ? item.color : ''
							} ${item.label === 'Contact' ? 'text-white bg-black py-1.5' : ''}`}
							onClick={!item.subpaths ? toggleHbm : undefined}
						>
							{item.subpaths ? (
								<div
									className='cursor-pointer'
									onClick={() => {
										if (item.subpaths) {
											setActiveLinks(item.subpaths);
											setCurrentBasePath(item.href);
										}
									}}
								>
									{item.labelAsString || item.label}
								</div>
							) : (
								<Link href={(currentBasePath ?? '') + item.href}>
									{item.labelAsString || item.label}
								</Link>
							)}
						</li>
					))}
				{activeLinks !== defaultLinks && (
					<li
						onClick={() => {
							setActiveLinks(defaultLinks);
							setCurrentBasePath(null);
						}}
						className='cursor-pointer transition duration-200 | hover:opacity-75'
					>
						<FontAwesomeIcon icon={faArrowLeft} />
					</li>
				)}
			</ul>
		</motion.section>
	);
}
