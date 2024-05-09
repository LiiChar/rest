import { Main } from '@/pages/Main/Main';
import { Post } from '@/pages/Post/Post';
import { RouterProvider, createHashRouter } from 'react-router-dom';

export const router = createHashRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/post',
		element: <Post />,
	},
	{
		path: '*',
		element: <Main />,
	},
]);

export const Router = () => <RouterProvider router={router} />;
