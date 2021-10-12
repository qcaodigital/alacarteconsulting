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
			<section className='relative layout-tall bg-center bg-cover bg-home-hero'>
				<div className='absolute inset-0 z-0 bg-buttercream/80' />
				<div className='relative z-10 flex flex-col justify-center items-center gap-4'>
					<img src='/graphics/team-icon.png' alt='' className='w-28' />
					<h1 className='font-bold text-4xl'>Meet the Team</h1>
					<h2 className='max-w-prose text-center leading-relaxed font-mon font-medium px-4'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
						exercitationem modi laborum voluptates quisqua molestias.
					</h2>
				</div>
			</section>
			<section className='px-4 py-8 | md:py-16'>
				<ul className='flex justify-center gap-8 max-w-6xl mx-auto flex-col | md:gap-16 md:flex-row'>
					<Profile
						image='/images/portrait3.png'
						name='Takeshi Nishikawa'
						title='Operational Strategy'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem similique eos fuga enim, voluptatum, quam exercitationem adipisci odit eius quo repudiandae molestias nostrum unde beatae officiis consequuntur quia. Recusandae iure commodi libero minus eaque omnis quae error optio aut consequuntur soluta, earum, expedita enim? Cum, id reprehenderit, mollitia provident nisi porro blanditiis in a tempore neque ea at quo eius quos animi illo libero aut. Non vitae adipisci excepturi ducimus explicabo labore voluptatem neque.'
					/>
					<Profile
						image='/images/portrait1.png'
						name='Laura Nishikawa'
						title='Graphic Design'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem similique eos fuga enim, voluptatum, quam exercitationem adipisci odit eius quo repudiandae molestias nostrum unde beatae officiis consequuntur quia. Recusandae iure commodi libero minus eaque omnis quae error optio aut consequuntur soluta, earum, expedita enim? Cum, id reprehenderit, mollitia provident nisi porro blanditiis in a tempore neque ea at quo eius quos animi illo libero aut. Non vitae adipisci excepturi ducimus explicabo labore voluptatem neque.'
					/>
					<Profile
						image='/images/portrait3.png'
						name='Quan Cao'
						title='Software Engineering'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem similique eos fuga enim, voluptatum, quam exercitationem adipisci odit eius quo repudiandae molestias nostrum unde beatae officiis consequuntur quia. Recusandae iure commodi libero minus eaque omnis quae error optio aut consequuntur soluta, earum, expedita enim? Cum, id reprehenderit, mollitia provident nisi porro blanditiis in a tempore neque ea at quo eius quos animi illo libero aut. Non vitae adipisci excepturi ducimus explicabo labore voluptatem neque.'
					/>
				</ul>
			</section>
		</motion.main>
	);
}
