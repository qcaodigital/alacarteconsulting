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
			iconColor='text-red'
			iconBorderColor='hover:ring-red/50'
			iconList={[
				{
					icon: '/graphics/svg/icon-financial-analysis.svg',
					text: ['Menu', 'Development'],
				},
				{
					icon: '/graphics/svg/icon-waste-management.svg',
					text: ['Waste Reduction', '& Loss Prevention'],
				},
				{
					icon: '/graphics/svg/icon-food-cost-managing.svg',
					text: ['Food Cost', 'Management'],
				},
				{
					icon: '/graphics/svg/icon-plate-menu-cost.svg',
					text: ['Plate &', 'Menu Costing'],
				},
				{
					icon: '/graphics/svg/icon-purchasing-and-ordering-guide.svg',
					text: ['Purchasing &', 'Ordering Guide'],
				},
			]}
		/>
	);
}
