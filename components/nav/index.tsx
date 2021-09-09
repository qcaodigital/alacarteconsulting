import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
	return (
		<nav className='fixed top-4 left-1/2 -translate-x-1/2 font-nun font-light z-50'>
			<ul className='flex items-center justify-center gap-12 uppercase'>
				<li>
					<Link href='/'>About</Link>
				</li>
				<li>
					<Link href='/'>Services</Link>
				</li>
				<li className='w-[250px] h-[88.75px] mb-5'>
					<Image
						src='/images/logo-light.png'
						alt='A La Carte Consulting Logo'
						width={250}
						height={88.75}
					/>
				</li>
				<li>
					<Link href='/'>
						<div className='text-center leading-none'>
							<p>Our</p>
							<p>Work</p>
						</div>
					</Link>
				</li>
				<li>
					<Link href='/'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
