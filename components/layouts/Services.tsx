import { fadeInOut } from '@/utils/fadeInOut';
import { motion } from 'framer-motion';
import Head from 'next/head';

interface IIconItem {
	icon: string;
	text: string;
}

interface ServicesProps {
	componentKey: string;
	backgroundImage: string;
	header: string;
	subheaders: string[];
	iconList: IIconItem[];
}

export default function Services({
	componentKey,
	backgroundImage,
	header,
	subheaders,
	iconList,
}: ServicesProps) {
	return (
		<motion.main key={componentKey} {...fadeInOut}>
			<Head>
				<title>A La Carte Consulting | {header}</title>
			</Head>
			<section
				className='relative layout-tall bg-center bg-cover'
				style={{ backgroundImage: `url(${backgroundImage}` }}
			>
				<div className='absolute inset-0 z-0 bg-brown/75' />
				<header className='relative z-10 flex flex-col gap-8 justify-center items-center px-[10%] text-center text-white'>
					<h1 className='font-nun font-extrabold tracking-wider text-2xl leading-normal capitalize text-white | sm:text-3xl | md:max-w-[20ch]'>
						{header}
					</h1>
					{subheaders.map((subheader) => (
						<p
							key={subheader}
							className='font-light capitalize tracking-wider max-w-[50ch]'
						>
							{subheader}
						</p>
					))}
				</header>
			</section>
			<section className='py-24 bg-white'>
				<ul className='grid grid-cols-6 max-w-4xl mx-auto items-end gap-y-24 gap-x-24'>
					{iconList.map(({ icon, text }, idx) => (
						<li
							key={text}
							className={`flex flex-col justify-center items-center gap-8 ${
								idx === 3 ? 'col-start-2 col-end-4' : 'col-span-2'
							}`}
						>
							<img src={icon} alt={text} className='object-contain h-[100px]' />
							<p className='font-mon font-medium tracking-wide uppercase text-center max-w-[30ch]'>
								{text}
							</p>
						</li>
					))}
				</ul>
			</section>
		</motion.main>
	);
}
