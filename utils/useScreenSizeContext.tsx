import { ScreenSizeContext, IUseCurrentScreenSizeData } from './useCurrentScreenSize';
import { useContext } from 'react';

export const useScreenSizeContext = (): IUseCurrentScreenSizeData => {
	return useContext(ScreenSizeContext) as IUseCurrentScreenSizeData;
};
