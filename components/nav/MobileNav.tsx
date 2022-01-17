// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import HamburgerMenuIcon from './HamburgerMenuIcon';
import { HamburgerMenu } from './HamburgerMenu';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function MobileNav() {
	const [hbmOpened, setHbmOpened] = useState<boolean>(false);
	const router = useRouter();
	const colorMode = hbmOpened
		? 'dark'
		: router.pathname.split('/')[1] === 'services'
		? 'light'
		: 'dark';
	const toggleHbm = () =>
		setHbmOpened((curr) => {
			if (!curr) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'auto';
			}
			return !curr;
		});

	return (
		<>
			<ul
				className={`flex justify-between items-center w-[100vw] px-4 gap-4 relative z-40 ${
					colorMode === 'light' ? 'text-white' : ''
				}`}
			>
				{/* <li>
					<a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
						<FontAwesomeIcon icon={faInstagram} size='2x' className='scale-[.80]' />
					</a>
				</li> */}
				<li onClick={hbmOpened ? toggleHbm : undefined}>
					<Link href='/'>
						<Image
							src={`${
								colorMode === 'light'
									? '/branding/logo-short-white.png'
									: '/branding/logo-short.png'
							}`}
							width={110}
							height={49.5}
							className='cursor-pointer'
							alt='A La Carte Consulting Logo'
						/>
					</Link>
				</li>
				<li className='pointer-cursor'>
					<HamburgerMenuIcon
						opened={hbmOpened}
						onClick={toggleHbm}
						colorMode={colorMode}
					/>
				</li>
			</ul>
			<AnimatePresence>
				{hbmOpened && <HamburgerMenu key='hbm' toggleHbm={toggleHbm} />}
			</AnimatePresence>
		</>
	);
}
