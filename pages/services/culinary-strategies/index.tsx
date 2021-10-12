import Services from 'components/layouts/Services';

export default function CulinaryStrategies() {
	return (
		<Services
			componentKey='culinary-strategies'
			header='Culinary Strategies'
			subheaders={[
				'eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis',
				'vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu',
			]}
			backgroundImage='/images/business-planning-bg.jpeg'
			iconList={[
				{
					icon: '/graphics/icon-financial-analysis.png',
					text: 'Menu Development',
				},
				{
					icon: '/graphics/Icon_Employee Training.png',
					text: 'Waste Reduction & Loss Prevention',
				},
				{
					icon: '/graphics/Icon_Labor Costing.png',
					text: 'Food Cost Management',
				},
				{
					icon: '/graphics/Icon_Catering Proposals.png',
					text: 'Plate & Menu Costing',
				},
				{
					icon: '/graphics/Icon_Inventory Management.png',
					text: 'Purchasing & Ordering Guide',
				},
			]}
		/>
	);
}
