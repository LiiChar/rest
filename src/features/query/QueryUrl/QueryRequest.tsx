import { submitQuery } from '@/entities/query/model/QueryApi';
import { useAppDispatch } from '@/shared/lib/storeHook';
import { Button } from '@/shared/ui/button';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export const QueryRequest = () => {
	const dispatch = useAppDispatch();

	const handleRequest = () => {
		dispatch(submitQuery());
	};

	return (
		<Button onClick={handleRequest} className='w-10 p-1 h-full rounded-l-none'>
			<MagnifyingGlassIcon className='w-full h-full' />
		</Button>
	);
};
