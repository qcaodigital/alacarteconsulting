import { useScreenSizeContext } from 'utils/useScreenSizeContext';
import { ReactSVG } from 'react-svg';

export default function CulinaryStrategies() {
	const { screenSizeIsOrGreaterThan } = useScreenSizeContext();

	return (
		<main>
			<section className='bg-darkblue h-[50vh] px-[10%] flex flex-col justify-center pt-[5%] | lg:pt-[2%] lg:h-[75vh] | xl:px-[12.5%]'>
				<header className='text-white uppercase font-mon font-semibold tracking-wide text-4xl | md:text-5xl md:font-bold | lg:text-left | 2xl:text-6xl 2xl:px-[12.5%]'>
					<h1 className='flex items-center justify-center gap-x-4 | md:justify-start'>
						<ReactSVG
							src='/assets/graphics/service-icons/x.svg'
							className='w-16 | lg:w-20'
						/>
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
			<section className='flex flex-col gap-y-16 bg-lightmandarin px-[10%] py-16 text-white | md:py-24 | 2xl:gap-y-32'>
				<SubSection
					label={['Menu', 'development']}
					text='Menus are the core of every food and beverage operation. A well
							constructed menu is balanced, exciting, and seasonal. From pricing to
							logistics, there is so much to consider when engineering a well-thought
							out menu. Even seasoned chefs need someone who he/she can rely on to
							bounce ideas off during every menu change.'
					svg='/assets/graphics/service-icons/culinary-strategies/menu-development.svg'
				/>
				<SubSection
					label={['Waste reduction', '& loss prevention']}
					text='We are constantly looking for ways to reduce wastes and losses. This has a meaningful impact in every operation and environment. How to maximize product? Are there more creative ways to cross utilize products? These are questions that every operator must be asking during this time of what appears to be high inflation.'
					svg='/assets/graphics/service-icons/culinary-strategies/waste-reduction.svg'
					reverse={screenSizeIsOrGreaterThan('md')}
				/>
			</section>
		</main>
	);
}

export const SubSection = ({
	label,
	text,
	svg,
	reverse,
}: {
	label: string[];
	text: string;
	svg: string;
	reverse?: boolean;
}) => {
	return (
		<section className='grid grid-rows-1 gap-y-4 | md:grid-cols-2 md:grid-rows-1 md:flex-row md:items-center md:gap-x-12 | xl:gap-x-16 | 2xl:gap-x-32'>
			{reverse && (
				<ReactSVG
					src={svg}
					className='my-4 max-w-sm | md:justify-self-center | xl:justify-self-end'
				/>
			)}
			<div
				className={`flex flex-col gap-y-4 | md:justify-self-center | ${
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
					className='my-4 max-w-sm | md:justify-self-center | xl:justify-self-start'
				/>
			)}
		</section>
	);
};
