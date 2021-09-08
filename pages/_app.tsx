import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Nav from 'components/nav';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='font-nun'>
			<Nav />
			<Component {...pageProps} />
			<footer></footer>
		</div>
	);
}

export default MyApp;
