import { useScreenSizeContext } from 'utils/useScreenSizeContext';
import Link from 'next/link';
import Image from 'next/image';
import { sitemap } from 'utils/sitemap';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import LinkWithSubpath from './LinkWithSubpath';

export default function Nav() {
	const { screenSizeNot } = useScreenSizeContext();
	const router = useRouter();
	const baseRoute = router.pathname.split('/')[1];

	return (
		<nav className='absolute top-4 left-1/2 -translate-x-1/2 tracking-wider z-50'>
			{screenSizeNot(['xs', 'sm']) ? (
				<ul className='flex items-center justify-center gap-12 uppercase'>
					{sitemap.map((n) => (
						<li
							key={n.href}
							className={`${
								n.href === '/' ? 'w-[250px] h-[88.75px] mb-5 cursor-pointer' : ''
							} ${baseRoute === 'services' ? 'text-white' : ''} cursor-pointer`}
						>
							{n.subpaths ? (
								<LinkWithSubpath
									path={n.href}
									subpaths={n.subpaths}
									label={n.label}
								/>
							) : (
								<div className='transition duration-200 | hover:opacity-75'>
									<Link href={n.href}>
										{baseRoute === 'services'
											? n.darkModeLabel || n.label
											: n.label}
									</Link>
								</div>
							)}
						</li>
					))}
				</ul>
			) : (
				<ul className='flex justify-between items-center w-[100vw] px-4 gap-4'>
					<li>
						<FontAwesomeIcon icon={faInstagram} size='2x' />
					</li>
					<li>
						<Image src='/branding/logo-light.png' width={200} height={71} />
					</li>
					<li className='pointer-cursor'>
						<FontAwesomeIcon icon={faBars} size='2x' />
					</li>
				</ul>
			)}
		</nav>
	);
}
