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
		href: '/',
		label: 'Home',
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
		href: '/work',
		label: 'Our Work',
	},
	{
		href: '/about',
		label: 'About',
	},
	{
		href: '/contact',
		label: 'Contact',
	},
];
