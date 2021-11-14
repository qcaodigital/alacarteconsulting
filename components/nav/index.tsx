import { useScreenSizeContext } from 'utils/useScreenSizeContext';
import Link from 'next/link';
import { sitemap } from 'utils/sitemap';
import _ from 'lodash';
import { useRouter } from 'next/router';
import LinkWithSubpath from './LinkWithSubpath';
import MobileNav from './MobileNav';

export default function Nav() {
	const { screenSizeNot } = useScreenSizeContext();
	const router = useRouter();
	const baseRoute = router.pathname.split('/')[1];

	return (
		<nav className='absolute pt-4 left-1/2 -translate-x-1/2 tracking-wider z-50'>
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
									darkLabel={baseRoute === 'services'}
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
				<MobileNav />
			)}
		</nav>
	);
}
