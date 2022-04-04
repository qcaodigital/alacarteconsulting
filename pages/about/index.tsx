import { fadeInOut } from '@/utils/fadeInOut';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { profiles } from './profiles';

interface ProfileProps {
	image: string;
	title: string;
	name: string;
	description: string;
}

function Profile({ image, title, name, description }: ProfileProps) {
	return (
		<li className='flex flex-col gap-8 w-full | md:w-72'>
			<img className='w-full object-cover | md:h-96 md:w-72' src={image} alt={name} />
			<div className='flex flex-col gap-2'>
				<p className='uppercase font-medium'>{title}</p>
				<p className='font-bold tracking-wider uppercase text-xl'>{name}</p>
				<p>{description}</p>
			</div>
		</li>
	);
}

export default function About() {
	return (
		<motion.main key='about' {...fadeInOut}>
			<Head>
				<title>A La Carte Consulting | About</title>
			</Head>
			<section className='bg-lightmandarin py-40 px-[10%] flex flex-col gap-y-8 | lg:h-screen lg:justify-center'>
				<header className='text-center text-white uppercase text-mon font-semibold tracking-wide text-3xl | md:text-5xl md:text-left md:font-bold | lg:text-5xl | 2xl:text-6xl'>
					<h1 className='flex flex-col'>
						<span>A team </span>
						<span>
							<span className='text-lightblue'>steeped </span>
							<span>in </span>
						</span>
						<span>
							<span>experience</span>
							<span className='text-lightblue'>.</span>
						</span>
					</h1>
				</header>
				<p className='text-white text-center | md:text-left md:w-2/3 | lg:w-1/2'>
					A La Carte Restaurant Business Solutions is a comprehensive resource for both
					startups and existing businesses. Our team holds years of experience in the
					foodservice industry from front of the house to the back of the house. Whether
					you’re struggling to reduce food waste, aren’t sure how to improve operating
					margins, or you just need guidance on how to set up your business for current
					and future success, we can work with you to find a solution.
				</p>
			</section>
			<section className='relative bg-white px-[10%] py-20 | lg:px-[15%]'>
				<div className='hidden absolute top-0 bottom-0 left-0 w-48 bg-orange | md:block | lg:w-[20%]' />
				<div className='flex flex-col gap-y-16 | md:justify-center'>
					{profiles.map((p) => (
						<article
							key={p.name}
							className='flex flex-col-reverse items-center gap-y-8 | md:flex-row md:gap-x-16 | md:first-of-type:pt-16 | md:last-of-type:pb-16'
						>
							<div className='w-64 | md:w-1/2 md:max-w-[24rem]'>
								<img src={p.image} alt='' className='border-2 border-darkblue/5' />
							</div>
							<div className='text-center | md:text-left md:w-1/2 md:max-w-2xl'>
								<div className='flex flex-row justify-center | md:block '>
									{p.name.split(' ').map((n) => (
										<p className='text-2xl uppercase font-semibold text-darkblue | md:text-4xl md:font-bold | 2xl:text-5xl'>
											{n}&nbsp;
										</p>
									))}
								</div>
								<p className='uppercase text-mandarin | md:font-semi-bold'>
									{p.title}
								</p>
								<p className='text-darkblue mt-4'>{p.description}</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</motion.main>
	);
}
