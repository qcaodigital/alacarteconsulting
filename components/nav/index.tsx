import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
	return (
		<nav className='absolute top-4 left-1/2 -translate-x-1/2 tracking-wider z-50'>
			<ul className='flex items-center justify-center gap-12 uppercase'>
				<li>
					<a href='/about'>About</a>
				</li>
				<li>
					<a href='/services'>Services</a>
				</li>
				<li className='w-[250px] h-[88.75px] mb-5 cursor-pointer'>
					<a href='/'>
						<Image
							src='/images/logo-light.png'
							alt='A La Carte Consulting Logo'
							width={250}
							height={88.75}
						/>
					</a>
				</li>
				<li>
					<a href='/work'>
						<div className='text-center leading-none cursor-pointer'>
							<p>Our</p>
							<p>Work</p>
						</div>
					</a>
				</li>
				<li>
					<a href='/contact'>Contact</a>
				</li>
			</ul>
		</nav>
	);
}
