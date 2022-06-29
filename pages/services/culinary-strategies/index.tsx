import { useScreenSizeContext } from 'utils/useScreenSizeContext';
import { ReactSVG } from 'react-svg';
import { motion } from 'framer-motion';
import { fadeInOut } from 'utils/fadeInOut';
import Head from 'next/head';

export default function CulinaryStrategies() {
	const { screenSizeIsOrGreaterThan } = useScreenSizeContext();

	return (
		<motion.main key='services-culinary' {...fadeInOut}>
			<Head>
				<title>A La Carte Consulting | Culinary Strategies</title>
			</Head>
			<section className='bg-darkblue h-[50vh] px-[10%] flex flex-col justify-center pt-[5%] | md:py-72 | xl:px-[12.5%]'>
				<header className='text-white uppercase font-mon font-semibold tracking-wide text-4xl | md:text-5xl md:font-bold | lg:text-left | 2xl:text-6xl 2xl:px-[12.5%]'>
					<h1 className='flex items-center justify-center gap-x-4 | md:justify-start'>
						<div className='relative'>
							<ReactSVG
								src='/assets/graphics/service-icons/x.svg'
								className='w-16 | lg:w-20'
							/>
							<img
								src='/assets/graphics/service-icons/line-1.png'
								className='absolute top-full mt-8 left-1/2 -translate-x-4 hidden max-w-sm | md:block | xl:max-w-lg'
							/>
						</div>
						<div className='flex flex-col'>
							<span>Culinary&nbsp;</span>
							<span>
								<span>Strategies</span>
								<span className='text-skyblue'>.</span>
							</span>
						</div>
					</h1>
				</header>
			</section>
			<section className='flex flex-col gap-y-16 bg-lightmandarin px-[10%] pt-16 text-white | md:pb-16 md:pt-56 md:gap-y-4 md:-mb-96 | lg:gap-y-8 | xl:pt-80 xl:mb-[-36rem]'>
				<SubSection
					label={['Menu', 'development']}
					text='Menus are the core of every food and beverage operation. A well
							constructed menu is balanced, exciting, and seasonal. From pricing to
							logistics, there is so much to consider when engineering a well-thought
							out menu. Even seasoned chefs need someone who he/she can rely on to
							bounce ideas off during every menu change.'
					svg='/assets/graphics/service-icons/culinary-strategies/menu-development.svg'
				/>
				<img
					src='/assets/graphics/service-icons/line-2.png'
					className=' hidden max-w-sm mx-auto | md:block | xl:max-w-lg'
				/>
				<SubSection
					label={['Waste reduction', '& loss prevention']}
					text='We are constantly looking for ways to reduce wastes and losses. This has a meaningful impact in every operation and environment. How to maximize product? Are there more creative ways to cross utilize products? These are questions that every operator must be asking during this time of what appears to be high inflation.'
					svg='/assets/graphics/service-icons/culinary-strategies/waste-reduction.svg'
					reverse={screenSizeIsOrGreaterThan('md')}
					className='-mt-8 | xl:-mt-16'
				/>
				<img
					src='/assets/graphics/service-icons/line-3.png'
					className='hidden max-w-sm mx-auto | md:block | xl:max-w-lg'
				/>
				<SubSection
					label={['Food cost', 'management']}
					text="Well written recipes are the foundation of any successful culinary operation and an amazing collection of recipes is what creates memorable dishes and meals. Downloading recipes from celebrity chefs won't cut it anymore- they should be tailored to every business with intent. Let us develop your restaurant's personal recipe book."
					svg='/assets/graphics/service-icons/culinary-strategies/food-cost.svg'
					className='-mt-8'
				/>
				<img
					src='/assets/graphics/service-icons/line-4.png'
					className='hidden max-w-sm mx-auto -rotate-6 | md:block | xl:max-w-lg'
				/>
				<SubSection
					label={['Plate &', 'menu costing']}
					text='Costing out each and every plate and menu is a critical part of any profitable business., yet it doesn’t end there. Often forgotten part is tracking price fluctuations and adjusting prices accordingly in a timely manner. We track major commodity prices and other goods most businesses use on a daily basis so that when there is a sudden spike, every business can make informed decisions.'
					svg='/assets/graphics/service-icons/culinary-strategies/costing.svg'
					reverse
					className='-my-8 | xl:-mt-24 xl:-mb-16'
				/>
				<img
					src='/assets/graphics/service-icons/line-5.png'
					className='hidden max-w-sm mx-auto | md:block | xl:max-w-lg'
				/>
				<SubSection
					label={['Purchasing &', 'ordering guide']}
					text='Not all ingredients are made equal and everything is only getting more costly. Now, there are so many different product options: varieties, places of origin, producer, organic, etc. From A5 wagyu to a jug of fryer oil, there is nothing we can’t source for any business type. Creating a precise order list and pars with revenue projection will help you allocate your capital more efficiently.'
					svg='/assets/graphics/service-icons/culinary-strategies/ordering.svg'
					className='md:-mt-8 | lg:-my-16'
				/>
				<img
					src='/assets/graphics/service-icons/line-6.png'
					className='hidden max-w-sm mx-auto -translate-x-1/3 | md:block | xl:max-w-lg'
				/>
			</section>
		</motion.main>
	);
}

export const SubSection = ({
	label,
	text,
	svg,
	reverse,
	className,
}: {
	label: string[];
	text: string;
	svg: string;
	reverse?: boolean;
	className?: string;
}) => {
	return (
		<section
			className={`grid grid-rows-1 gap-y-4 items-start | md:grid-cols-2 md:grid-rows-1 md:flex-row md:items-center md:gap-x-12 | xl:gap-x-16 | 2xl:gap-x-32 ${className}`}
		>
			{reverse && (
				<ReactSVG
					src={svg}
					className='my-4 max-w-md justify-self-center hidden | md:block md:mb-auto | xl:justify-self-end'
				/>
			)}
			<div
				className={`flex flex-col gap-y-4 justify-self-center | ${
					!reverse ? 'xl:justify-self-end' : 'xl:justify-self-start'
				}`}
			>
				<strong className='flex flex-col uppercase font-mon text-white leading-tight text-2xl text-center | md:text-left | xl:text-3xl'>
					<span>{label[0]}</span>
					<span>
						<span>{label[1]}</span>
						<span className='text-darkblue'>.</span>
					</span>
				</strong>
				<p className='max-w-md text-center | md:text-left'>{text}</p>
			</div>
			{!reverse && (
				<ReactSVG
					src={svg}
					className='my-4 max-w-md justify-self-center hidden | md:block md:mb-auto | xl:justify-self-start'
				/>
			)}
		</section>
	);
};
