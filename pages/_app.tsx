import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { AppProps } from 'next/app';
import Nav from 'components/nav';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from '@/components/footer';
import Head from 'next/head';
import { useCurrentScreenSize } from 'utils/useCurrentScreenSize';
import { AnimatePresence, motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import { fadeInOut } from '@/utils/fadeInOut';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';
import { NavMenu } from 'components/nav/menu';
import { useRouter } from 'next/router';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
	const { ScreenSizeContext, screenSizeData } = useCurrentScreenSize();
	const { route } = useRouter();
	const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		setIsNavMenuOpen(false);
	}, [route]);

	return (
		<ParallaxProvider>
			<ScreenSizeContext.Provider {...screenSizeData}>
				<Head>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/favicons/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicons/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicons/favicon-16x16.png'
					/>
					<link rel='manifest' href='/favicons/site.webmanifest' />
				</Head>
				<motion.div className='font-nun text-black' {...fadeInOut}>
					<Nav
						toggleNavMenu={() => setIsNavMenuOpen((curr) => !curr)}
						isNavMenuOpen={isNavMenuOpen}
					/>
					<AnimatePresence>{isNavMenuOpen && <NavMenu />}</AnimatePresence>
					<ToastContainer limit={1} />
					<AnimatePresence>
						<Component {...pageProps} />
					</AnimatePresence>
					<Footer />
				</motion.div>
			</ScreenSizeContext.Provider>
		</ParallaxProvider>
	);
}

export default MyApp;
