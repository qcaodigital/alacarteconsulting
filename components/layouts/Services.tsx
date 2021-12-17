import { fadeInOut } from '@/utils/fadeInOut';
import { motion } from 'framer-motion';
import _ from 'lodash';
import Head from 'next/head';
import { ReactSVG } from 'react-svg';
import { useScreenSizeContext } from 'utils/useScreenSizeContext';

interface IIconItem {
	icon: string;
	headerText: string | string[];
	bodyText?: string;
}

interface ServicesProps {
	componentKey: string;
	backgroundImage: string;
	header: string;
	subheaders: string[];
	iconList: IIconItem[];
	accentColor?: string;
	iconBorderColor?: string;
}

export default function Services({
	componentKey,
	backgroundImage,
	header,
	// subheaders,
	iconList,
}: // accentColor = 'text-black',
ServicesProps) {
	const { screenSizeIs } = useScreenSizeContext();

	return (
		<motion.main key={componentKey} {...fadeInOut}>
			<Head>
				<title>A La Carte Consulting | {header}</title>
			</Head>
			<section
				className='relative layout-tall bg-center bg-cover shadow-xl'
				style={{ backgroundImage: `url(${backgroundImage}` }}
			>
				<div className='absolute inset-0 z-0 bg-brown/75' />
				<header className='relative z-10 flex flex-col gap-8 justify-center items-center px-[10%] text-center text-white'>
					<h1 className='font-nun font-extrabold tracking-wider text-2xl leading-normal capitalize text-white | sm:text-3xl | md:max-w-[20ch]'>
						{header}
					</h1>
					{/* {subheaders.map((subheader) => (
						<p
							key={subheader}
							className='font-light capitalize tracking-wider max-w-[50ch]'
						>
							{subheader}
						</p>
					))} */}
				</header>
			</section>
			<section className='py-24 px-12 bg-grey'>
				<ul className='grid grid-cols-2 items-start gap-y-16 text-center | md:grid-cols-4 md:gap-x-10 | lg:px-[10%] lg:grid-cols-6 lg:gap-20'>
					{iconList.map(({ icon, headerText, bodyText }, idx) => (
						<li
							key={_.isArray(headerText) ? headerText.join(' ') : headerText}
							className={`grid gap-y-4 ${
								(idx === 4 && screenSizeIs(['xs', 'sm', 'md'])) ||
								(idx === 3 && !screenSizeIs(['xs', 'sm', 'md']))
									? 'col-start-2 col-span-2'
									: 'col-span-2'
							} ${idx === 4 && screenSizeIs(['xs']) ? 'col-start-1 col-span-2' : ''}`}
						>
							<ReactSVG
								src={icon}
								id='services-svg'
								className={`text-black fill-current opacity-90 mx-auto`}
							/>
							<p
								className={`font-mon font-medium text-sm mx-auto tracking-wide uppercase text-center max-w-[30ch] text-cayenne`}
							>
								{_.isArray(headerText)
									? headerText.map((text) => (
											<span key={text} className='block whitespace-nowrap'>
												{text}
											</span>
									  ))
									: headerText}
							</p>
							<p className='mx-auto max-w-[415px]'>{bodyText}</p>
						</li>
					))}
				</ul>
			</section>
		</motion.main>
	);
}
