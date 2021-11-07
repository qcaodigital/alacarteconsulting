import { useState, useEffect, useRef } from 'react';
import { useEventListener } from './useEventListener';

export const useIsHovered = () => {
	const ref = useRef<any>(null);
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [refState, setRefState] = useState<HTMLElement | undefined | null>(null);
	useEffect(() => {
		setRefState(ref.current);
	}, [ref]);
	useEventListener('mouseenter', () => setIsHovered(true), refState);
	useEventListener('mouseleave', () => setIsHovered(false), refState);
	return { isHovered: ref ? isHovered : false, ref };
};
