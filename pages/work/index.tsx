import { fadeInOut } from '@/utils/fadeInOut';
import { motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';

export default function Work() {
	return (
		<motion.main className='layout-tall !pb-20' {...fadeInOut}>
			<div className='flex flex-col gap-4 place-items-center'>
				<ReactSVG
					src='/graphics/svg/icon-coming-soon.svg'
					id='coming-soon-svg'
					className={`text-black fill-current h-32 w-32 z-50 relative`}
				/>
				<div className='relative font-bold text-4xl'>Page coming soon.</div>
			</div>
		</motion.main>
	);
}
