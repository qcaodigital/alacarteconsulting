import { Context, createContext, useEffect, useState } from 'react';
// @ts-ignore
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from 'tailwind.config';

type ScreenSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface IUseCurrentScreenSizeData {
	currentScreenSize: ScreenSizes;
	screens: Record<ScreenSizes, string>;
	screenSizeNot: (arr: ScreenSizes[]) => boolean;
	screenSizeIs: (arr: ScreenSizes[]) => boolean;
	screenSizeIsOrGreaterThan: (size: ScreenSizes) => boolean;
}

export interface IUseCurrentScreenSize {
	ScreenSizeContext: Context<{}>;
	screenSizeData: {
		value: IUseCurrentScreenSizeData;
	};
}

export const ScreenSizeContext = createContext({});

export const useCurrentScreenSize = (): IUseCurrentScreenSize => {
	const {
		theme: { screens },
	} = resolveConfig(tailwindConfig);
	const [currentScreenSize, setCurrentScreenSize] = useState<ScreenSizes>('xs');

	useEffect(() => {
		if (!window) return;
		function updateScreenSize() {
			const screenSizesToArray = Object.keys(screens)
				.map((key) => ({ size: key, maxWidth: parseInt(screens[key]) }))
				.sort((a, b) => (a.maxWidth > b.maxWidth ? 1 : -1));
			let current: ScreenSizes = 'xs';
			let count: number = 0;

			while (
				count < screenSizesToArray.length &&
				window.innerWidth >= screenSizesToArray[count].maxWidth
			) {
				current = screenSizesToArray[count].size as ScreenSizes;
				count++;
			}
			count = 0;
			setCurrentScreenSize(current);
		}

		// Update screen size on mount first
		updateScreenSize();

		// Update screen size on resize
		window.addEventListener('resize', updateScreenSize);
		return () => window.removeEventListener('resize', updateScreenSize);
	}, []);

	const screenSizeData: { value: IUseCurrentScreenSizeData } = {
		value: {
			currentScreenSize,
			screens,
			screenSizeNot: (sizes: ScreenSizes[]): boolean => {
				return !sizes.includes(currentScreenSize);
			},
			screenSizeIs: (sizes: ScreenSizes[]): boolean => {
				return sizes.includes(currentScreenSize);
			},
			screenSizeIsOrGreaterThan: (target: ScreenSizes): boolean => {
				const sortedSizes: ScreenSizes[] = ['sm', 'md', 'lg', 'xl', '2xl'];
				const indexOfCurrent = sortedSizes.indexOf(currentScreenSize);
				const indexOfTarget = sortedSizes.indexOf(target);

				return indexOfTarget <= indexOfCurrent;
			},
		},
	};

	return { ScreenSizeContext, screenSizeData };
};
