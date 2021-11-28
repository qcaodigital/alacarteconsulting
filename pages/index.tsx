import { fadeInOut } from 'utils/fadeInOut';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
// @ts-ignore
import { Fade } from 'react-reveal';

export default function Home() {
	return (
		<motion.main key='home' {...fadeInOut}>
			<Head>
				<title>A La Carte Consulting</title>
			</Head>
			<section className='relative layout-tall'>
				<header className='relative z-10 flex flex-col gap-8 justify-center items-center px-[10%] text-center'>
					<h1 className='font-mon font-medium text-2xl leading-normal | sm:text-3xl | md:max-w-[20ch]'>
						Strategies & solutions
						<span className='font-semibold italic'> made to order.</span>
					</h1>
					<h2 className='font-light tracking-wider max-w-[50ch]'>
						By supporting business owners and operators with innovative solutions, we
						are empowering them to organize, revitalize, and navigate their businesses
						in a rapidly changing landscape.
					</h2>
					<button className='text-xs uppercase tracking-wide border-black border-2 px-4 py-2 | md:text-base md:px-8 md:py-3'>
						View Work
					</button>
				</header>
			</section>
			<section className='layout py-10 flex items-center justify-center bg-brown/90 | md:py-40'>
				<div className='grid grid-rows-2 gap-8 | md:grid-rows-1 md:grid-cols-2 md:gap-[5vw] | lg:gap-24'>
					<Fade duration={2500} cascade>
						<div className='relative scale-75 | md:scale-[unset] md:top-[-10%] lg:top-[-16%]'>
							<img
								className='absolute top-[10%] right-[7.5%] z-30 h-80 w-80 object-cover object-center | lg:right-[10%] lg:h-96 lg:w-96'
								src='/images/home-copy-one.jpeg'
								alt='Two masked restaurant employees with white aprons in front of a computer'
							/>
							<img
								className='absolute-center left-[40%] top-[60%] z-20 | sm:left-1/3 | md:scale-75 | lg:scale-[85%] lg:left-[10%] lg:top-2/3'
								src='/images/home-copy-shape.png'
								alt=''
							/>
							<img
								className='absolute right-0 top-[65%] z-10 h-52 w-52 object-cover object-center | lg:h-72 lg:w-72'
								src='/images/home-copy-two.jpeg'
								alt='Bistro food laid out in take out containers'
							/>
						</div>
					</Fade>
					<div className='flex flex-col justify-center items-center gap-6 text-center | md:text-left md:items-start'>
						<h3 className='text-buttercream text-2xl max-w-[17ch] uppercase font-mon font-medium leading-tight'>
							Our Mission
						</h3>
						<p className='text-white leading-relaxed max-w-[40ch]'>
							Our mission is to provide the hospitality sector with comprehensive
							business strategies that work to improve operations, increase
							profitability, and define an efficient path to success.
						</p>
						<p className='text-white leading-relaxed max-w-[40ch]'>
							As in the namesake of our business, we adapt to what you need so you’ll
							never pay for service that won’t significantly impact your operation.
							Our plans are 100% customizable so that everyone from startup businesses
							to minor event planning is able to take advantage of our expertise.
						</p>
						<Link href='/about'>
							<a className='mt-2 text-xs text-white uppercase tracking-wide border-white border-2 px-4 py-2 w-40 | md:text-base md:px-8 md:py-3'>
								About Us
							</a>
						</Link>
					</div>
				</div>
			</section>
		</motion.main>
	);
}
