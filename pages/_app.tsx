import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Nav from 'components/nav';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from '@/components/footer';
import Head from 'next/head';
import { useCurrentScreenSize } from 'utils/useCurrentScreenSize';
import { AnimatePresence } from 'framer-motion';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
	const { ScreenSizeContext, screenSizeData } = useCurrentScreenSize();

	return (
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
			<div className='relative font-nun text-black bg-home-hero bg-cover'>
				<div className='absolute inset-0 z-0 bg-buttercream/70' />
				<div className='relative z-50'>
					<Nav />
					<AnimatePresence>
						<Component {...pageProps} />
					</AnimatePresence>
					<Footer />
				</div>
			</div>
		</ScreenSizeContext.Provider>
	);
}

export default MyApp;
