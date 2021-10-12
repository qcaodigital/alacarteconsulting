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
					icon: '/graphics/icon-financial-analysis.png',
					text: 'Financial Analysis & Management',
				},
				{
					icon: '/graphics/Icon_Employee Training.png',
					text: 'Employee Training Material',
				},
				{
					icon: '/graphics/Icon_Labor Costing.png',
					text: 'Labor Costing, Projection, & Analysis',
				},
				{
					icon: '/graphics/Icon_Catering Proposals.png',
					text: 'Catering & Private Event Proposals',
				},
				{
					icon: '/graphics/Icon_Inventory Management.png',
					text: 'Inventory Management',
				},
			]}
		/>
	);
}
