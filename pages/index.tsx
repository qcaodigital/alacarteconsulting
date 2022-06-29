import { fadeInOut } from 'utils/fadeInOut';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useScreenSizeContext } from 'utils/useScreenSizeContext';
import Link from 'next/link';
import ButtonNew from '@/components/common/ButtonNew';

export default function Home() {
	const { screenSizeIsOrGreaterThan } = useScreenSizeContext();

	return (
		<motion.main key='home' {...fadeInOut} className='overflow-x-hidden'>
			<Head>
				<title>A La Carte Consulting</title>
				<meta
					name='description'
					content='
					Build your hospitality business from the ground up with A La Carte Consulting
					the way you want, and how you want it.'
				/>
			</Head>
			<section className='relative flex flex-col py-40 px-[10%] bg-darkblue | md:px-[5%] md:pl-[50%] md:py-56 | lg:pl-[45%] lg:h-screen lg:justify-center'>
				<header className='relative z-20 text-white flex flex-col gap-y-8 text-center | md:translate-x-[-10%] md:text-left | lg:translate-x-0'>
					<h1 className='relative z-20 flex flex-col text-2xl font-mon uppercase font-semibold tracking-wide | sm:text-3xl | md:text-4xl | lg:text-5xl | 2xl:text-6xl'>
						<span className='flex flex-col items-center justify-center | sm:flex-row | md:flex-col md:items-start'>
							<span>Strategies&nbsp;</span>
							<span className='text-mandarin flex'>
								&&nbsp;<span className='text-white'>Solutions</span>
							</span>
						</span>
						<span>
							<span>Made To Order</span>
							<span className='text-mandarin'>.</span>
						</span>
					</h1>
					<p className='md:w-5/6 | lg:w-96'>
						By supprting small business owners and operators with innovative solutions,
						we are empowering them to organize, revitalize, and navigate their
						businesses in a rapdily changing landscape.
					</p>
				</header>
				{screenSizeIsOrGreaterThan('md') && (
					<div className='absolute bottom-0 left-[7.5%] w-full pointer-events-none translate-y-[20%] | lg:translate-y-[27.5%]'>
						<img src='/assets/graphics/frying-pan.png' className='h-auto w-[2000px]' />
					</div>
				)}
			</section>
			<section className='py-20 px-[10%] text-center | md:py-40 md:text-left | lg:h-screen lg:flex lg:flex-col lg:justify-center'>
				<header className='text-darkblue inline-flex items-center flex-col gap-y-8 | md:items-start'>
					<h2 className='text-darkblue text-2xl font-mon uppercase font-semibold tracking-wide | sm:text-3xl | md:text-4xl md:flex md:items-end | lg:text-5xl | 2xl:text-6xl'>
						<span className='md:flex md:flex-col'>
							<span>Our&nbsp;</span>
							<span>Mission</span>
						</span>
						<span className='text-mandarin'>.</span>
					</h2>
					<div className='flex flex-col gap-y-4 | md:w-3/4 | lg:w-1/2 | xl:w-5/12'>
						<p>
							To provide the hospitality sector with comprehensive business strategies
							that work to improve operations, increase profitability, and define an
							efficient path to success.
						</p>
						<p>
							As in the namesake of our business, we adapt to what you need so
							you&apos;ll never pay for the service that won&apos;t significantly
							impact your operation. Our plans are 100% customizable so that everyone
							from startup businesses to minor event planning is able to take
							advantage of our expertise.
						</p>
					</div>
					<ButtonNew
						mainBgColor='bg-darkblue'
						hoverTextColor='hover:text-mandarin'
						hoverBorderColor='hover:border-mandarin'
						className='hover:bg-opacity-0'
					>
						<Link href='/about'>About Us</Link>
					</ButtonNew>
				</header>
			</section>
			<section className='relative overflow-hidden bg-lightmandarin text-white font-mon py-20 px-[10%] text-center flex flex-col gap-y-8 | md:py-40 md:text-left md:gap-y-16 | lg:h-screen lg:justify-center'>
				<header className='md:grid md:grid-cols-8'>
					<h3 className='text-2xl font-mon uppercase font-semibold tracking-wide | sm:text-3xl | md:text-4xl md:col-start-5 md:col-span-4 md:flex md:items-end | lg:text-5xl | 2xl:text-6xl'>
						<span className='md:flex md:flex-col'>
							<span>Firing up</span>
							<span> our process</span>
						</span>
						<span className='ml-0.5 text-darkblue'>.</span>
					</h3>
				</header>
				<div className='flex flex-col items-center gap-y-8 | md:grid md:grid-cols-8 md:gap-y-4'>
					<img
						className='h-20 | md:col-start-5'
						src='/assets/graphics/heart-hands.png'
						alt='Blue hands holding and making a heart'
					/>
					<p className='text-xl font-semibold uppercaseq | md:col-start-5 md:col-span-4 | lg:text-2xl'>
						<span>Reaching out to us</span>
						<span className='ml-1 text-darkblue'>.</span>
					</p>
					<p className='md:col-start-5 md:col-span-4'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quaerat,
						eius molestiae ex aspernatur ullam iusto explicabo eaque dolorem sequi est
						molestias praesentium modi inventore magni commodi reprehenderit quisquam
						odio quidem nihil debitis ea qui? Amet perferendis facere voluptatibus quis
						facilis. Fugit distinctio nihil expedita sed ratione, cum nobis iusto?
					</p>
					<ButtonNew
						className='w-48 border-opacity-100 border-white md:col-start-5 md:col-span-2 md:mt-2 | hover:bg-darkblue hover:bg-opacity-100'
						mainBgColor=''
						hoverTextColor='hover:text-white'
						hoverBorderColor='hover:border-darkblue'
					>
						<Link href='/contact'>Contact Us</Link>
					</ButtonNew>
					<img
						className='hidden absolute bottom-0 left-[25%] -translate-x-1/2 z-50 | md:block md:h-[85%] | lg:h-[95%] | 2xl:scale-105'
						src='/assets/graphics/flame.png'
						alt='vector graphic flame'
					/>
				</div>
			</section>
		</motion.main>
	);
}
