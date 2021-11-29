import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { sitemap, ISubpathItem } from '@/utils/sitemap';
import { useState, ReactElement, useEffect } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

const FooterLink = ({ children }: { children: ReactElement }) => (
	<li className='cursor-pointer relative transition duration-200 | after:block after:absolute after:w-full after:h-[1px] after:bg-black after:scale-x-0 after:transition after:duration-300 | hover:after:scale-x-100 hover:opacity-75'>
		{children}
	</li>
);

const listAnimation = {
	initial: { opacity: 0 },
	exit: { opacity: 0 },
	animate: { opacity: 1 },
};

export default function Footer() {
	const [subpathParent, setSubpathParent] = useState<
		{ label: string; basePath: string } | undefined
	>();
	const [openSubpath, setOpenSubpath] = useState<ISubpathItem[] | undefined>();
	const router = useRouter();
	const history = router.pathname;
	// const basePath = router.pathname.split('/')[1];
	// const whiteFooter: boolean = ['work', 'contact'].includes(basePath);

	const resetFooterNav = () => {
		setOpenSubpath(undefined);
		setSubpathParent(undefined);
	};

	useEffect(resetFooterNav, [history]);

	return (
		<footer>
			<div className='relative layout shadow-xl-top'>
				{/* {whiteFooter ? <div className='absolute inset-0 bg-white/60' /> : null} */}
				<div className='relative z-10 flex flex-col justify-center items-center gap-4 mx-4'>
					<Link href='/'>
						<img
							src='/branding/logo-light.png'
							alt='A La Carte Consulting Logo'
							className='filter grayscale brightness-0 w-60 cursor-pointer'
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
												{!item.subpaths ? (
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
															setSubpathParent({
																label:
																	typeof item.label === 'string'
																		? item.label
																		: item.labelAsString ?? '',
																basePath: item.href,
															});
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
											<Link href={subpathParent?.basePath + item.href}>
												{item.label}
											</Link>
										</FooterLink>
									))}
								</motion.ul>
							)}
						</AnimatePresence>
					</div>
					{/* <div className='border-2 border-black rounded-full p-6 w-6 h-6 flex items-center justify-center mt-2'>
						<FontAwesomeIcon icon={faLinkedinIn} size='lg' />
					</div> */}
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
