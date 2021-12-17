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
			accentColor='text-mandarin'
			iconBorderColor='hover:ring-mandarin/50'
			iconList={[
				{
					icon: '/graphics/svg/icon-logo-and-packaging-design.svg',
					headerText: ['Logo & Packaging', 'Design'],
					bodyText:
						"Packaging always plays a big part in determining how your customers interact with your restaurant's products whether it be a label on a bottle of signature sauce, or the to-go box after their meal. We know that how you present yourself through packaging design helps to attract more customers to your signature style.",
				},
				{
					icon: '/graphics/svg/icon-menu-design.svg',
					headerText: ['Print & Digital', 'Menu Design'],
					bodyText:
						'We know that creating a menu that is well-designed and thoughtfully laid out is crucial to your customer’s experience at your restaurant. We can help you create a menu that will be organized, brand coordinated, and eye-catching, whether it be on a single sheet or a fold-out. Well-crafted menus can help to boost sales and drive business! Any other print pieces needed such as coupons or table sign promotions? We can help to create those as well.',
				},
				{
					icon: '/graphics/svg/icon-interactive-web-design.svg',
					headerText: ['Interactive', 'Web Design'],
					bodyText:
						"Online presence is everything in this modern world and that means your website needs to be up to par. Interactive menus, sophisticated online ordering system, modern presentation, and so much more are a huge part of establishing your business in the digital realm. Let us show your customers your business' personal flair and style by building your ideal website.",
				},
				{
					icon: '/graphics/svg/icon-seo.svg',
					headerText: ['Search Engine', 'Optimization'],
					bodyText:
						"An impressive website isn't worth anything when there are millions of other websites that exist on the internet. Many businesses fail to pay mind to how they're discovered by potential customers browsing the web. Let us assist driving customers to your business by making sure you show up first in line in a Google search.",
				},
				{
					icon: '/graphics/svg/icon-photo-and-video.svg',
					headerText: ['Photography', '& Video'],
					bodyText:
						'A photo can be worth a thousand words they say, and that remains true when it comes to a successful business. Drop the iPhone and let high quality photos create a sense of trust with your customers and make that first impression that makes people want to be a patron with your business.',
				},
			]}
		/>
	);
}
