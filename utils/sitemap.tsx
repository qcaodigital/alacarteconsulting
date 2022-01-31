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
			<div style={{ width: '250px', height: '88.75px', position: 'relative' }}>
				<Image
					quality={65}
					src='/branding/logo-light.png'
					alt='A La Carte Consulting Logo'
					layout='fill'
					objectFit='contain'
				/>
			</div>
		),
		darkModeLabel: (
			<div style={{ width: '250px', height: '88.75px', position: 'relative' }}>
				<Image
					src='/branding/logo-white.png'
					alt='A La Carte Consulting Logo'
					layout='fill'
					objectFit='contain'
				/>
			</div>
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
