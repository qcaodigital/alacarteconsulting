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
			accentColor='text-cayenne'
			iconBorderColor='hover:ring-cayenne/50'
			iconList={[
				{
					icon: '/graphics/svg/icon-financial-analysis.svg',
					headerText: ['Financial Analysis', '& Management'],
					bodyText:
						'Financial data has never been more accessible and abundant with advancement in software technology. However, information without true understanding of what they mean can often lead to bad decision making. Navigating through rising operating expenses is imperative to increasing bottom line revenue.',
				},
				{
					icon: '/graphics/svg/icon-employee-training.svg',
					headerText: ['Employee Training', 'Material'],
					bodyText:
						'Training, teaching, guiding, mentoring, and empowering employees is one of the many missions of being a leader. People are the biggest asset of every business. Providing proper expectations, training manuals, areas of responsbility, and much more are requirements for everyone to succeed.',
				},
				{
					icon: '/graphics/svg/icon-labor-costing.svg',
					headerText: ['Labor Costing,', 'Projection, & Analysis'],
					bodyText:
						'Recently, managing labor costs has become one of the biggest challenges of the hospitality sector. As wages rise, operators must be able to project, schedule, and analyze labor appropriately. Profits heavily depend on labor management as labor cost is one of the largest investments.',
				},
				{
					icon: '/graphics/svg/icon-catering-proposals.svg',
					headerText: ['Catering & Private', 'Event Proposals'],
					bodyText:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eligendi magnam ipsa provident earum, consectetur ipsam porro totam vero magni sunt et nam neque harum corporis repellendus numquam debitis unde. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium expedita consequatur nobis..',
				},
				{
					icon: '/graphics/svg/icon-inventory-management.svg',
					headerText: ['Inventory', 'Management'],
					bodyText:
						'Keeping track of inventory quantities and cost is an incredibly important aspect of running a profitable business. Owners and operators must know where they are at all times. Without accurate inventory management, there is no way of knowing what is true food and beverage costs are.',
				},
			]}
		/>
	);
}
