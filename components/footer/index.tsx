import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<footer>
			<div className='relative layout bg-bottom bg-cover bg-home-hero'>
				<div className='absolute inset-0 z-0 bg-buttercream/80' />
				<div className='relative z-10 flex flex-col justify-center items-center gap-4 mx-4'>
					<img
						src='/images/logo-light.png'
						alt='A La Carte Consulting Logo'
						className='filter grayscale brightness-0 w-60'
					/>
					<ul className='flex flex-col items-center justify-center gap-2 uppercase tracking-wide | sm:flex-row sm:gap-8'>
						<li>
							<a href='/about'>About</a>
						</li>
						<li>
							<a href='/services'>Services</a>
						</li>
						<li>
							<a href='/work'>Our Work</a>
						</li>
						<li>
							<a href='/contact'>Contact</a>
						</li>
					</ul>
					<div className='border-2 border-black rounded-full p-6 w-6 h-6 flex items-center justify-center mt-2'>
						<FontAwesomeIcon icon={faLinkedinIn} size='lg' />
					</div>
					<p className='text-center max-w-[45ch] font-mon text-sm font-medium'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat
						nihil nesciunt sed, quisquam fuga tempora. Lorem ipsum dolor sit amet.
					</p>
				</div>
			</div>
		</footer>
	);
}
