import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { sitemap, ISubpathItem } from '@/utils/sitemap';
import { useState, ReactElement, useEffect } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

const FooterLink = ({ children }: { children: ReactElement }) => (
	<li className='cursor-pointer relative transition duration-200 | hover:opacity-50'>
		{children}
	</li>
);

const listAnimation = {
	initial: { opacity: 0 },
	exit: { opacity: 0 },
	animate: { opacity: 1 },
};

export default function Footer() {
	const [openSubpath, setOpenSubpath] = useState<ISubpathItem[] | undefined>();
	const router = useRouter();
	const history = router.pathname;
	const basePath = router.pathname.split('/')[1];

	const resetFooterNav = () => {
		setOpenSubpath(undefined);
	};

	useEffect(resetFooterNav, [history]);

	const containerClasses = (() => {
		switch (basePath) {
			case 'about':
				return 'bg-orange text-black';
			case 'contact':
				return 'bg-darkblue text-white';
			case 'services':
				return 'bg-lightmandarin text-white';
			default:
				return 'bg-white';
		}
	})();

	const logoClasses = (() => {
		switch (basePath) {
			case 'contact':
				return '';
			case 'services':
				return '';
			default:
				return 'filter grayscale brightness-0 ';
		}
	})();

	return (
		<footer className={containerClasses}>
			<div className='relative layout'>
				<div className='relative z-10 flex flex-col justify-center items-center gap-4 mx-4'>
					<Link href='/'>
						<img
							src='/assets/branding/full-logo-white.png'
							alt='A La Carte Consulting Logo'
							className={`w-60 cursor-pointer ${logoClasses}`}
						/>
					</Link>
					<div className='uppercase tracking-wide | sm:flex-row sm:gap-8'>
						<AnimatePresence exitBeforeEnter>
							<motion.ul
								key='main'
								className='flex flex-col items-center justify-center gap-2 | sm:flex-row sm:gap-8'
								{...listAnimation}
							>
								{sitemap.map(
									(item) =>
										(typeof item.label === 'string' || item.labelAsString) &&
										!openSubpath && (
											<FooterLink key={item.href}>
												{!item.subpaths && item.href ? (
													<Link href={item.href}>
														{typeof item.label === 'string'
															? item.label
															: item.labelAsString}
													</Link>
												) : (
													<div
														key={item.href}
														onClick={() => {
															setOpenSubpath(item.subpaths);
														}}
													>
														{typeof item.label === 'string'
															? item.label
															: item.labelAsString}
													</div>
												)}
											</FooterLink>
										)
								)}
							</motion.ul>
							{openSubpath && (
								<motion.ul
									key='subpath'
									className='flex flex-col items-center justify-center gap-2 | sm:flex-row sm:gap-8'
									{...listAnimation}
								>
									<li
										className='cursor-pointer transition duration-200 | hover:opacity-50'
										onClick={resetFooterNav}
										title='Back'
									>
										<FontAwesomeIcon icon={faArrowLeft} />
									</li>
									{openSubpath.map((item) => (
										<FooterLink key={item.href}>
											<Link href={item.href}>{item.label}</Link>
										</FooterLink>
									))}
								</motion.ul>
							)}
						</AnimatePresence>
					</div>
					<p className='text-center max-w-[45ch] font-mon text-xs font-medium italic'>
						A La Carte Consulting is a Washington, DC-based company dedicated to
						providing the hospitality-sector highly customizable business solutions and
						related services.
					</p>
				</div>
			</div>
		</footer>
	);
}
