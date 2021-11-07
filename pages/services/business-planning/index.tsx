import Services from 'components/layouts/Services';

export default function BusinessPlanning() {
	return (
		<Services
			componentKey='business-planning'
			header='Business Planning'
			subheaders={[
				'eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis',
				'vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu',
			]}
			backgroundImage='/images/business-planning-bg.jpeg'
			iconList={[
				{
					icon: '/graphics/svg/icon-financial-analysis.svg',
					text: 'Financial Analysis & Management',
				},
				{
					icon: '/graphics/svg/icon-employee-training.svg',
					text: 'Employee Training Material',
				},
				{
					icon: '/graphics/svg/icon-labor-costing.svg',
					text: 'Labor Costing, Projection, & Analysis',
				},
				{
					icon: '/graphics/svg/icon-catering-proposals.svg',
					text: 'Catering & Private Event Proposals',
				},
				{
					icon: '/graphics/svg/icon-inventory-management.svg',
					text: 'Inventory Management',
				},
			]}
		/>
	);
}
