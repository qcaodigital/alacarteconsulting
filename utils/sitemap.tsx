import Image from 'next/image';

export interface ISubpathItem {
	label: string;
	href: string;
}

export interface INavItem {
	href: string;
	label: string | JSX.Element;
	labelAsString?: string;
	subpaths?: ISubpathItem[];
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
		subpaths: [
			{ href: '/culinary-strategies', label: 'Culinary Strategies' },
			{ href: '/business-planning', label: 'Business Planning' },
			{ href: '/marketing', label: 'Marketing' },
		],
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
			<div className='flex flex-col text-center cursor-pointer'>
				<p>Our</p>
				<p>Work</p>
			</div>
		),
		labelAsString: 'Our Work',
	},
	{
		href: '/contact',
		label: 'Contact',
	},
];
