interface HamburgerMenuIconProps {
	opened: boolean;
	onClick: React.MouseEventHandler;
	colorMode: 'light' | 'dark';
}

function HamburgerMenuIcon({ opened, onClick, colorMode }: HamburgerMenuIconProps) {
	const color = colorMode === 'light' ? 'bg-white' : 'bg-black';
	return (
		<div
			onClick={onClick}
			className={`flex flex-col justify-center gap-y-1 cursor-pointer opacity-90 | xl:hidden | transition duration-300 ${
				opened ? 'transform rotate-45 relative z-50' : ''
			}`}
		>
			<div
				className={`w-6 h-0.5 ${color} transition duration-300 ${
					opened ? 'transform translate-y-[7.5px] rotate-90' : ''
				}`}
			/>
			<div
				className={`w-6 h-0.5 ${color} transition duration-200 ${
					opened ? 'transform scale-y-0 opacity-0' : ''
				}`}
			/>
			<div
				className={`w-6 h-0.5 ${color} transition duration-300 ${
					opened ? 'transform -translate-y-1' : ''
				}`}
			/>
		</div>
	);
}

export default HamburgerMenuIcon;
