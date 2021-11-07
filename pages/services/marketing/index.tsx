import Services from 'components/layouts/Services';

export default function Marketing() {
	return (
		<Services
			componentKey='marketing'
			header='Marketing'
			subheaders={[
				'eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis',
				'vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu',
			]}
			backgroundImage='/images/business-planning-bg.jpeg'
			iconList={[
				{
					icon: '/graphics/svg/icon-logo-and-packaging-design.svg',
					text: 'Logo & Packaging Design',
				},
				{
					icon: '/graphics/svg/icon-menu-design.svg',
					text: 'Print & Digital Menu Design',
				},
				{
					icon: '/graphics/svg/icon-interactive-web-design.svg',
					text: 'Interactive Web Design',
				},
				{
					icon: '/graphics/svg/icon-seo.svg',
					text: 'Search Engine Optimization',
				},
				{
					icon: '/graphics/svg/icon-photo-and-video.svg',
					text: 'Photography & Video',
				},
			]}
		/>
	);
}
