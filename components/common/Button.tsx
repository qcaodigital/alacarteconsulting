import { MouseEvent, ReactElement } from 'react';

interface ButtonProps extends Partial<Omit<HTMLButtonElement, 'className' | 'children'>> {
	color?: 'white' | 'black' | 'cream';
	size?: 'sm' | 'base';
	children: string | ReactElement;
	className?: string;
	onClick?: (e: MouseEvent) => void;
}

export const Button = ({
	children,
	color = 'black',
	className,
	size = 'base',
	onClick,
}: ButtonProps) => {
	const baseStyles: string = 'text-xs uppercase tracking-wide border-2';
	let sizeModifier: string;
	let styles: string;

	switch (color) {
		case 'white':
			styles =
				'border-white text-white transition duration-200 | hover:duration-500 hover:bg-white hover:text-black';
			break;
		case 'cream':
			styles =
				'border-buttercream text-buttercream transition duration-200 | hover:duration-500 hover:bg-buttercream hover:text-black';
			break;
		case 'black':
		default:
			styles =
				'border-black text-black transition duration-200 | hover:duration-500 hover:bg-black hover:text-white';
	}

	switch (size) {
		case 'sm':
			sizeModifier = '!text-xs py-1 px-2 | md:text-sm md:px-4';
			break;
		case 'base':
		default:
			sizeModifier = 'px-4 py-2 | md:text-base md:px-8 md:py-3';
	}

	return (
		<button
			className={`relative ${baseStyles} ${styles} ${className} ${sizeModifier} text-center`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
