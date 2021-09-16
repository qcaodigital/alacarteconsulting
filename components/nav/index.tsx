import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
	return (
		<nav className='absolute top-4 left-1/2 -translate-x-1/2 tracking-wider z-50'>
			<ul className='flex items-center justify-center gap-12 uppercase'>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/services'>Services</Link>
				</li>
				<li className='w-[250px] h-[88.75px] mb-5 cursor-pointer'>
					<Link href='/'>
						<Image
							src='/images/logo-light.png'
							alt='A La Carte Consulting Logo'
							width={250}
							height={88.75}
						/>
					</Link>
				</li>
				<li>
					<Link href='/work'>
						<div className='text-center leading-none cursor-pointer'>
							<p>Our</p>
							<p>Work</p>
						</div>
					</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
