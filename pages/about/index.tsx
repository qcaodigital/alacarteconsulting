import { fadeInOut } from '@/utils/fadeInOut';
import { motion } from 'framer-motion';
import Head from 'next/head';

interface ProfileProps {
	image: string;
	title: string;
	name: string;
	description: string;
}

function Profile({ image, title, name, description }: ProfileProps) {
	return (
		<li className='flex flex-col gap-8 w-full | md:w-72'>
			<img className='w-full object-cover | md:h-96 md:w-72' src={image} alt='' />
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
			<section className='relative layout-tall shadow-sm'>
				<div className='relative z-10 flex flex-col justify-center items-center gap-4'>
					<img src='/graphics/team-icon.png' alt='' className='w-28' />
					<h1 className='font-bold text-4xl'>Meet the Team</h1>
					<h2 className='max-w-prose text-center leading-relaxed font-mon font-medium px-4'>
						A La Carte Restaurant Business Solutions is a comprehensive resource for
						both startups and existing businesses. Our team holds years of experience in
						the foodservice industry from front of the house to the back of the house.
						Whether you’re struggling to reduce food waste, aren’t sure how to improve
						operating margins, or you just need guidance on how to set up your business
						for current and future success, we can work with you to find a solution.
					</h2>
				</div>
			</section>
			<section className='px-4 py-8 bg-white/30 | md:py-16'>
				<ul className='flex justify-center gap-8 max-w-6xl mx-auto flex-col | md:gap-16 md:flex-row'>
					<Profile
						image='/images/takeshi-nishikawa-alacarteconsulting.jpg'
						name='Takeshi Nishikawa'
						title='Operational Strategy'
						description='From an early age in Japan, Takeshi found his love for cooking through helping out his grandmother in the family kitchen. After moving to the US, he pursued his culinary career and graduated from the New England Culinary Institute. He’s worked in many high-profile D.C. restaurants including Maestro at Ritz-Carlton Tysons Corner, Restaurant Eve, VOLT, New Heights, PRG Hospitality, and Roses Restaurant Group. When he isn’t in his chef’s coat, you can find him studying foreign languages or biking the local trails.'
					/>
					<Profile
						image='/images/laura-nishikawa-alacarteconsulting.jpg'
						name='Laura Nishikawa'
						title='Graphic Design'
						description='Laura has always had a passion for art, starting with her very first pack of crayons. In high school, she found she could combine her love for art and computers within the field of Graphic Design. In her career she has lent her design and illustrative talents to many industries including retail, publication, and event production. She’s created front-end web graphics, corporate ebooks, video event graphic support, and multiple print collateral. When she’s not designing, you can find Laura painting or reading a sci-fi novel.'
					/>
					<Profile
						image='/images/quan-cao-alacarteconsulting.jpg'
						name='Quan Cao'
						title='Software Engineering'
						description='From hospitality management to software development, Quan comes to our team bringing expertise from both worlds. With nearly a decade of experience in managing FOH in restaurants, including working alongside Takeshi at PRG Hospitality, and three years as a developer, he knows what a restaurant needs to succeed and can bring digital business solutions to life. Short of spending time with his wife and golden retriever, you’ll usually find him out dining the city or fishing the Chesapeake Bay.'
					/>
				</ul>
			</section>
		</motion.main>
	);
}
