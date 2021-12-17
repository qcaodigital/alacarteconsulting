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
			accentColor='text-red'
			iconBorderColor='hover:ring-red/50'
			iconList={[
				{
					icon: '/graphics/svg/icon-menu-development.svg',
					headerText: ['Menu', 'Development'],
					bodyText:
						'Menus are the core of every food and beverage operation. Well constructed menu is balanced, exciting, and seasonal. From pricing to logistics to execution, There is so much to consider when engineering a well-thought out menu. Even seasoned chefs need someone who he/she can rely on to bounce ideas off during every menu change.',
				},
				{
					icon: '/graphics/svg/icon-waste-management.svg',
					headerText: ['Waste Reduction', '& Loss Prevention'],
					bodyText:
						'We are constantly looking for ways to reduce wastes and losses. This has a meaningful impact in every operation and environment. How to maximize product? Are there more creative ways to cross utilize products? These are questions that every operator must be asking during this time of what appears to be high inflation.',
				},
				{
					icon: '/graphics/svg/icon-food-cost-managing.svg',
					headerText: ['Food Cost', 'Management'],
					bodyText:
						'Well written recipes are the foundation of any successful culinary operations. Collection of amazing recipes is what creates memorable dishes and meals. Downloading recipes from celebrity chefs are just not going to cut it anymore. They should be tailored to every business with intent. There are restaurants generating millions of dollars with few incredible, well-kept recipes and honestly, everyone knows it.',
				},
				{
					icon: '/graphics/svg/icon-plate-menu-cost.svg',
					headerText: ['Plate &', 'Menu Costing'],
					bodyText:
						'Costing out each and every plate and menu is a critical part of any profitable business., yet it doesn’t end there. Often forgotten part is tracking price fluctuations and adjusting prices accordingly in a timely manner. We track major commodity prices and other goods most businesses use on a daily basis so that when there is a sudden spike, every business can make informed decisions.',
				},
				{
					icon: '/graphics/svg/icon-purchasing-and-ordering-guide.svg',
					headerText: ['Purchasing &', 'Ordering Guide'],
					bodyText:
						'Not all ingredients are made equal. Never mind getting what is cheaper and more expensive. Now, there are so many different product options: varieties, places of origin, producer, organic, etc. From A5 wagyu to a jug of fryer oil, there is nothing we can’t source for any business types. Creating a precise order list and pars with revenue projection will help you allocate your capitals more efficiently.',
				},
			]}
		/>
	);
}
