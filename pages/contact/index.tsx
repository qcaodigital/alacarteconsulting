import Head from 'next/head';
import { fadeInOut } from 'utils/fadeInOut';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import _ from 'lodash';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import ButtonNew from '@/components/common/ButtonNew';

export default function Contact() {
	const { handleSubmit, register, reset } = useForm();

	function onSubmit() {
		emailjs
			.sendForm(
				'service_vfs2rzd',
				'template_7j3udvq',
				'#contact-form',
				'user_8AMvQSEMa75Id2sxpfwAB'
			)
			.then(() => {
				reset();
				toast.success(
					'Thanks for reaching out. We will get back to you as soon as possible!',
					{
						type: toast.TYPE.SUCCESS,
						theme: 'light',
					}
				);
			})
			.catch((error) => {
				console.error(error);
				toast.error(
					'Email server error. Please contact us directly at info@alacarteconsulting.co',
					{
						type: toast.TYPE.ERROR,
						theme: 'light',
					}
				);
			});
	}

	return (
		<motion.main
			key='contact'
			className='relative layout-tall !pb-0 -mb-4 bg-darkblue'
			{...fadeInOut}
		>
			<Head>
				<title>A La Carte Consulting | Contact</title>
			</Head>
			<div className='mx-auto max-w-5xl | md:px-[5%]'>
				<header className='text-center text-white uppercase font-mon font-semibold tracking-wide text-3xl max-w-5xl flex flex-col gap-y-12 | md:text-5xl md:text-left md:font-bold | lg:text-5xl | 2xl:text-6xl'>
					<h1>
						<span>Contact Us</span>
						<span className='text-orange'>.</span>
					</h1>
					<h2 className='text-white text-base font-normal normal-case'>
						How can our team help you?
					</h2>
				</header>
				<form
					className='relative z-10 mt-16 px-4 py-8 bg-orange text-buttercream text-sm max-w-5xl | md:py-16 | lg:py-24'
					onSubmit={handleSubmit(onSubmit)}
					id='contact-form'
				>
					<div className='flex flex-col gap-8 max-w-2xl mx-auto'>
						<fieldset className='flex flex-col'>
							<label
								className='uppercase mb-1 text-sm tracking-wide font-nun font-bold text-darkblue'
								htmlFor='name'
							>
								First And Last Name
							</label>
							<input
								className='bg-white border-none py-2 text-sm | focus:ring-yellow'
								type='text'
								id='name'
								{...register('name')}
							/>
						</fieldset>
						<fieldset className='flex flex-col'>
							<label
								className='uppercase mb-1 text-sm tracking-wide font-nun font-bold text-darkblue'
								htmlFor='email'
							>
								Email
							</label>
							<input
								className='bg-white border-none py-2 text-sm | focus:ring-yellow'
								type='email'
								id='email'
								{...register('email')}
							/>
						</fieldset>
						<fieldset className='flex flex-col'>
							<label
								className='uppercase mb-1 text-sm tracking-wide font-nun font-bold text-darkblue'
								htmlFor='phone'
							>
								Telephone Number
							</label>
							<input
								className='bg-white border-none py-2 text-sm | focus:ring-yellow'
								type='text'
								id='phone'
								{...register('phone')}
							/>
						</fieldset>
						<fieldset className='flex flex-col'>
							<label
								className='uppercase mb-1 text-sm tracking-wide font-nun font-bold text-darkblue'
								htmlFor='message'
							>
								Give Us A Few Details About Your Project
							</label>
							<textarea
								className='bg-white border-none py-2 resize-none h-60 text-sm | focus:ring-yellow'
								id='message'
								{...register('message')}
							/>
						</fieldset>
						<ButtonNew
							mainBgColor='bg-lightblue'
							hoverTextColor='hover:text-lightblue'
							hoverBorderColor='hover:border-lightblue'
							className='border-lightblue w-32 | hover:bg-white'
						>
							Let's go
						</ButtonNew>
					</div>
				</form>
				<section>
					<p className='text-center italic font-semibold pt-8 text-sm text-white'>
						If you&apos;d like to reach out to us directly, please email
						<a
							href='mailto:info@alacarteconsulting.co'
							className='font-bold underline ml-[.4ch]'
						>
							info@alacarteconsulting.co
						</a>
					</p>
				</section>
			</div>
		</motion.main>
	);
}
