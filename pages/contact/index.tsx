import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { useScreenSizeContext } from 'utils/useScreenSizeContext';
import { fadeInOut } from 'utils/fadeInOut';
import { motion } from 'framer-motion';
import { Button } from 'components/common/Button';
import { toast } from 'react-toastify';
import _ from 'lodash';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export default function Contact() {
	const { screenSizeIs } = useScreenSizeContext();
	// function submitDisabled(e: MouseEvent) {
	// 	e.preventDefault();
	// 	toast.error(
	// 		'Email server error. Please contact us directly at info@alacarteconsulting.co',
	// 		{
	// 			type: toast.TYPE.ERROR,
	// 			theme: 'light',
	// 		}
	// 	);
	// }

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
			.catch(() => {
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
		<motion.main key='contact' className='relative layout-tall !pb-24' {...fadeInOut}>
			<Head>
				<title>A La Carte Consulting | Contact</title>
			</Head>
			<div className='relative z-10 flex flex-col justify-center items-center gap-4'>
				<FontAwesomeIcon
					icon={faEnvelopeOpen}
					size={screenSizeIs(['xs', 'sm', 'md']) ? '2x' : '3x'}
				/>
				<h1 className='font-bold text-4xl'>Contact Us</h1>
				<h2 className='max-w-prose text-center leading-relaxed font-mon font-medium px-4'>
					How can we help you?
				</h2>
			</div>
			<form
				className='relative z-10 mt-16 px-4 py-8 bg-wine text-buttercream text-sm max-w-5xl mx-auto | md:py-16 | lg:py-24'
				onSubmit={handleSubmit(onSubmit)}
				id='contact-form'
			>
				<div className='flex flex-col gap-4 max-w-2xl mx-auto'>
					<fieldset className='flex flex-col'>
						<label
							className='uppercase mb-1 text-sm tracking-wide font-nun font-bold'
							htmlFor='name'
						>
							First And Last Name
						</label>
						<input
							className='bg-wine_light border-none py-2 text-sm | focus:ring-yellow'
							type='text'
							id='name'
							{...register('name')}
						/>
					</fieldset>
					<fieldset className='flex flex-col'>
						<label
							className='uppercase mb-1 text-sm tracking-wide font-nun font-bold'
							htmlFor='email'
						>
							Email
						</label>
						<input
							className='bg-wine_light border-none py-2 text-sm | focus:ring-yellow'
							type='email'
							id='email'
							{...register('email')}
						/>
					</fieldset>
					<fieldset className='flex flex-col'>
						<label
							className='uppercase mb-1 text-sm tracking-wide font-nun font-bold'
							htmlFor='phone'
						>
							Telephone Number
						</label>
						<input
							className='bg-wine_light border-none py-2 text-sm | focus:ring-yellow'
							type='text'
							id='phone'
							{...register('phone')}
						/>
					</fieldset>
					<fieldset className='flex flex-col'>
						<label
							className='uppercase mb-1 text-sm tracking-wide font-nun font-bold'
							htmlFor='message'
						>
							Give Us A Few Details About Your Project
						</label>
						<textarea
							className='bg-wine_light border-none py-2 resize-none h-60 text-sm | focus:ring-yellow'
							id='message'
							{...register('message')}
						/>
					</fieldset>
					<Button
						color='cream'
						size='sm'
						className='text-sm uppercase tracking-wider font-semibold self-start'
						type='submit'
					>
						Submit
					</Button>
				</div>
			</form>
			<section>
				<p className='text-center italic font-semibold pt-8 text-sm'>
					If you&apos;d like to reach out to us directly, please email
					<a
						href='mailto:info@alacarteconsulting.co'
						className='font-bold underline ml-[.4ch]'
					>
						info@alacarteconsulting.co
					</a>
				</p>
			</section>
		</motion.main>
	);
}
