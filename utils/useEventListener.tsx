import { useEffect } from 'react';

export function useEventListener(
	name: string,
	callback: (...any: any[]) => void,
	providedRef?: HTMLElement | null
) {
	useEffect(() => {
		const ref = providedRef || window;
		ref.addEventListener(name, callback);
		return () => ref.removeEventListener(name, callback);
	}, [name, callback, providedRef]);
}
