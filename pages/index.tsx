import { fadeInOut } from 'utils/fadeInOut';
import { motion, Variants } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'components/common/Button';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const fadeInOnView: Variants = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { staggerChildren: 0.25, duration: 1 } },
};

const fadeInOnViewProps = {
	initial: 'hidden',
	whileInView: 'show',
	variants: fadeInOnView,
	viewport: { margin: '100px' },
};

export default function Home() {
	return (
		<motion.main key='home' {...fadeInOut}>
			<Head>
				<title>A La Carte Consulting</title>
				<meta
					name='description'
					content='
					Build your hospitality business from the ground up with A La Carte Consulting
					the way you want, and how you want it.'
				/>
			</Head>
			<section className='relative layout-tall'>
				<motion.header
					className='relative z-10 flex flex-col gap-8 justify-center items-center px-[10%] text-center'
					{...fadeInOnViewProps}
				>
					<motion.h1
						className='font-mon font-medium text-2xl leading-normal | sm:text-3xl | md:max-w-[20ch]'
						variants={fadeInOnView}
					>
						Strategies & solutions
						<span className='font-semibold italic'> made to order.</span>
					</motion.h1>
					<motion.h2
						className='font-light tracking-wider max-w-[55ch]'
						variants={fadeInOnView}
					>
						By supporting business owners and operators with innovative solutions, we
						are empowering them to organize, revitalize, and navigate their businesses
						in a rapidly changing landscape.
					</motion.h2>
					<motion.div variants={fadeInOnView}>
						<Button>
							<Link href='/services/business-planning'>Our Services</Link>
						</Button>
					</motion.div>
				</motion.header>
			</section>
			<section className='layout py-10 flex items-center justify-center bg-brown/90 | md:py-40'>
				<div className='grid grid-rows-2 gap-8 | md:grid-rows-1 md:grid-cols-2 md:gap-[5vw] | lg:gap-24'>
					<motion.div
						className='relative scale-75 | md:scale-[unset] md:top-[-10%] lg:top-[-16%]'
						{...fadeInOnViewProps}
					>
						<Parallax>
							<motion.img
								variants={fadeInOnView}
								className='absolute top-[10%] right-[7.5%] z-30 h-80 w-80 object-cover object-center | lg:right-[10%] lg:h-96 lg:w-96'
								src='/images/home-copy-one.jpeg'
								alt='Two masked restaurant employees with white aprons in front of a computer'
							/>
						</Parallax>
						<motion.img
							variants={fadeInOnView}
							className='absolute-center left-[40%] top-[60%] z-20 | sm:left-1/3 | md:scale-75 | lg:scale-[85%] lg:left-[10%] lg:top-2/3'
							src='/images/home-copy-shape.png'
							alt='A La Carte Consulting Logo Minimzed'
						/>
						<motion.img
							variants={fadeInOnView}
							className='absolute right-0 top-[65%] z-10 h-52 w-52 object-cover object-center | lg:h-72 lg:w-72'
							src='/images/home-copy-two.jpeg'
							alt='Bistro food laid out in take out containers'
						/>
					</motion.div>
					<motion.div
						className='flex flex-col justify-center items-center gap-6 py-8 text-center | md:text-left md:items-start'
						{...fadeInOnViewProps}
					>
						<motion.div
							className='text-white leading-relaxed max-w-[40ch]'
							variants={fadeInOnView}
						>
							<h3 className='inline underline text-buttercream text-2xl max-w-[17ch] uppercase font-mon font-medium leading-tight mr-[.5ch]'>
								Our Mission
							</h3>
							<span>
								is to provide the hospitality sector with comprehensive business
								strategies that work to improve operations, increase profitability,
								and define an efficient path to success.
							</span>
						</motion.div>
						<motion.p
							className='text-white leading-relaxed max-w-[40ch]'
							variants={fadeInOnView}
						>
							As in the namesake of our business, we adapt to what you need so you’ll
							never pay for service that won’t significantly impact your operation.
							Our plans are 100% customizable so that everyone from startup businesses
							to minor event planning is able to take advantage of our expertise.
						</motion.p>
						<motion.div variants={fadeInOnView}>
							<Button color='white'>
								<Link href='/about'>About Us</Link>
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</motion.main>
	);
}
