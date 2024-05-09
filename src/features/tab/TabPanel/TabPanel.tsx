import { cn } from '@/shared/lib';
import { useAppDispatch, useAppSelector } from '@/shared/lib/storeHook';
import { memo } from 'react';
import { TabsNameModal } from '../Modal/TabsNameModal';
import { NewTabModal } from '../Modal/NewTabModal';
import { changeCurrentTab } from '@/entities/tab/model/TabSlice';
import { setQuery } from '@/entities/query/model/QuerySlice';
import { Button } from '@/shared/ui/button';

export const TabPanel = memo(() => {
	const { currentTab, queries } = useAppSelector(state => state.tab);
	const query = useAppSelector(state => state.query);
	const dispatch = useAppDispatch();

	const handleCurrentTab = (i: number) => {
		dispatch(changeCurrentTab({ id: i, prevQuery: query }));

		dispatch(setQuery(queries[i]));
	};

	return (
		<section className='flex text-sm h-8 justify-between gap-0 items-center'>
			<div className='m-1 h-full py-1'>
				<Button className='h-full p-0 px-1 rounded-r-none'>
					<NewTabModal />
				</Button>
			</div>
			<div className='w-full flex justify-between gap-1 overflow-x-auto items-center'>
				{currentTab == null && (
					<div className='bg-secondary min-w-min h-full w-full text-center text-nowrap'>
						(без названия)
					</div>
				)}
				{queries.map((query, i) => (
					<div
						onClick={() => handleCurrentTab(i)}
						className={cn([
							'bg-secondary h-full min-w-min w-full text-center text-nowrap',
							query.name == currentTab?.name && 'bg-accent',
						])}
						key={query.query + query.name}
					>
						{query.method} {query.name}
					</div>
				))}
			</div>
			<div className='h-full py-1'>
				<Button className='h-full p-0 px-1 rounded-l-none'>
					<TabsNameModal />
				</Button>
			</div>
		</section>
	);
});
