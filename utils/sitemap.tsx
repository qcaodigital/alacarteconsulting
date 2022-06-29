export interface ISubpathItem {
	label: string;
	href: string;
}

export interface INavItem {
	href?: string;
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
		label: 'Services',
		subpaths: [
			{ href: '/services/culinary-strategies', label: 'Culinary Strategies' },
			{ href: '/services/business-planning', label: 'Business Planning' },
			{ href: '/services/marketing', label: 'Marketing' },
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
