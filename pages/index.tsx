export default function Home() {
	return (
		<main>
			<div className='absolute z-0 inset-0 bg-center bg-cover bg-home-hero'>
				<div className='absolute z-0 inset-0 bg-buttercream/80' />
				<header className='absolute left-1/2 -translate-x-1/2 flex flex-col gap-8 justify-center items-center py-60 text-center '>
					<h1 className='font-mon font-medium text-3xl max-w-[20ch] leading-normal'>
						Lorem ipsum sit amet consec tetu{' '}
						<span className='font-semibold italic'>iscing seda </span>usmod tempor.
					</h1>
					<h2 className='font-light tracking-wider max-w-[50ch]'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo
						consequatur dolorum tempore! Minima aut, corporis quos ullam maxime.
					</h2>
					<button className='text-sm uppercase tracking-wide border-black border-2 px-8 py-3'>
						View Work
					</button>
				</header>
			</div>
		</main>
	);
}
