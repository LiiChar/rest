import { ThemeProvider } from '@/entities/theme/ui/ThemeProvider';
import { FC, PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store/Store';

export const Provider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<ReduxProvider store={store}>{children}</ReduxProvider>
		</ThemeProvider>
	);
};
