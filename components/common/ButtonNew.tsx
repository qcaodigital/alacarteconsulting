import { ReactNode } from 'react';

export interface ButtonProps {
	mainBgColor: string;
	hoverTextColor: string;
	hoverBorderColor: string;
	className?: string;
	children: ReactNode;
}

export default function ButtonNew({
	mainBgColor,
	hoverTextColor,
	hoverBorderColor,
	className,
	children,
}: ButtonProps) {
	return (
		<button
			className={`py-1 px-3 font-mon text-lg font-bold text-white uppercase ${mainBgColor} border-white border-2 transition duration-300 | ${hoverBorderColor} ${hoverTextColor} ${className}`}
		>
			{children}
		</button>
	);
}
