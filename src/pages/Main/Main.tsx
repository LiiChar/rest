import { QueryInfoPanel } from '@/features/query/QueryInfo/QueryInfoPanel';
import { useAppSelector } from '@/shared/lib/storeHook';
import { ObjectVisualize } from '@/shared/ui/objectVisualize';
import { QueryPanel } from '@/widgets/query/QueryPanel';
import { TabPanel } from '@/features/tab/TabPanel/TabPanel';

export const Main = () => {
	const { loading, response } = useAppSelector(state => state.query);
	return (
		<main className='px-4 flex'>
			<div className='w-1/4'></div>
			<div className='w-3/4'>
				<TabPanel />
				<QueryPanel />
				<QueryInfoPanel />
				{loading
					? 'Loading'
					: response && <ObjectVisualize object={JSON.parse(response)} />}
			</div>
		</main>
	);
};
