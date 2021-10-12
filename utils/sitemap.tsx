import Image from 'next/image';

interface INavItem {
	href: string;
	label: string | JSX.Element;
	darkModeLabel?: string | JSX.Element;
}

export const sitemap: INavItem[] = [
	{
		href: '/about',
		label: 'About',
	},
	{
		href: '/services',
		label: 'Services',
	},
	{
		href: '/',
		label: (
			<Image
				src='/branding/logo-light.png'
				alt='A La Carte Consulting Logo'
				width={250}
				height={88.75}
			/>
		),
		darkModeLabel: (
			<Image
				src='/branding/logo-white.png'
				alt='A La Carte Consulting Logo'
				width={250}
				height={88.75}
			/>
		),
	},
	{
		href: '/work',
		label: (
			<div className='text-center leading-none cursor-pointer'>
				<p>Our</p>
				<p>Work</p>
			</div>
		),
	},
	{
		href: '/contact',
		label: 'Contact',
	},
];
