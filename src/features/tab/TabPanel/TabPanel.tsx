import { cn } from '@/shared/lib';
import { useAppDispatch, useAppSelector } from '@/shared/lib/storeHook';
import { memo } from 'react';
import { TabsNameModal } from '../Modal/TabsNameModal';
import { NewTabModal } from '../Modal/NewTabModal';
import { changeCurrentTab } from '@/entities/tab/model/TabSlice';
import { setQuery } from '@/entities/query/model/QuerySlice';

export const TabPanel = memo(() => {
	const { currentTab, queries } = useAppSelector(state => state.tab);
	const query = useAppSelector(state => state.query);
	const dispatch = useAppDispatch();

	const handleCurrentTab = (i: number) => {
		dispatch(changeCurrentTab({ id: i, prevQuery: query }));

		dispatch(setQuery(queries[i]));
	};

	return (
		<section className='flex'>
			<div className='w-16 h-16'>
				<NewTabModal />
			</div>
			{currentTab == null && <div>(без названия)</div>}
			{queries.map((query, i) => (
				<div
					onClick={() => handleCurrentTab(i)}
					className={cn([
						'bg-secondary w-min text-nowrap',
						query.name == currentTab?.name && 'bg-accent',
					])}
					key={query.query + query.name}
				>
					{query.method} {query.name}
				</div>
			))}
			<TabsNameModal />
		</section>
	);
});
