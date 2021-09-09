import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>A La Carte Consulting</title>
			</Head>
			<main>
				<div className='relative layout-tall bg-center bg-cover bg-home-hero'>
					<div className='absolute inset-0 z-0 bg-buttercream/80' />
					<header className='relative z-10 flex flex-col gap-8 justify-center items-center px-[10%] text-center'>
						<h1 className='font-mon font-medium text-2xl leading-normal | sm:text-3xl | md:max-w-[20ch]'>
							Lorem ipsum sit amet consec tetu{' '}
							<span className='font-semibold italic'>iscing seda </span>usmod tempor.
						</h1>
						<h2 className='font-light tracking-wider max-w-[50ch]'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo
							consequatur dolorum tempore! Minima aut, corporis quos ullam maxime.
						</h2>
						<button className='text-xs uppercase tracking-wide border-black border-2 px-4 py-2 | md:text-base md:px-8 md:py-3'>
							View Work
						</button>
					</header>
				</div>
				<div className='layout py-10 flex items-center justify-center bg-brown | md:py-32'>
					<div className='grid grid-rows-2 gap-8 | md:grid-rows-1 md:grid-cols-2 md:gap-[5vw] | lg:gap-24'>
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
						<div className='flex flex-col justify-center items-center gap-6 text-center | md:text-left md:items-start'>
							<h3 className='text-buttercream text-2xl max-w-[17ch] uppercase font-mon font-medium leading-tight'>
								Lorem ipsum sit amet consturect
							</h3>
							<p className='text-white leading-relaxed max-w-[40ch]'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo
								perspiciatis reprehenderit quibusdam vitae deserunt cupiditate ex
								maiores tenetur! Rerum, exercitationem in cumque dignissimos sed
								quam eum error corrupti animi consectetur totam quas, placeat
								doloribus nesciunt ea dolore libero incidunt eligendi. Quisquam
								beatae saepe nulla distinctio illum labore, corporis assumenda.
							</p>
							<p className='text-white leading-relaxed max-w-[40ch]'>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
								architecto quasi eveniet accusantium repellendus odit officiis porro
								hic est adipisci.
							</p>
							<button className='mt-2 text-xs text-white uppercase tracking-wide border-white border-2 px-4 py-2 w-40 | md:text-base md:px-8 md:py-3'>
								About Us
							</button>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
