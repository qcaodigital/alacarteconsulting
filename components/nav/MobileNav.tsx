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
			<ul>
				<li>
					<button>
						<a href='/'>
							<img
								src='/assets/branding/full-logo-white.png'
								alt='A La Carte Consulting Logo'
							/>
						</a>
					</button>
				</li>
				<li></li>
			</ul>
		</>
	);
}
