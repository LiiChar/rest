import { PlusIcon } from '@radix-ui/react-icons';
import { useAppDispatch, useAppSelector } from '@/shared/lib/storeHook';
import { memo, useState } from 'react';
import { saveCurrentTab } from '@/entities/tab/model/TabSlice';
import { InputModal } from './InputModal';
import { Button } from '@/shared/ui/button';
import { setQuery } from '@/entities/query/model/QuerySlice';

export const NewTabModal = memo(() => {
	const dispatch = useAppDispatch();
	const query = useAppSelector(state => state.query);
	const currentTab = useAppSelector(state => state.tab.currentTab);
	const [name, setName] = useState('');

	const handleNameInput = () => {
		dispatch(
			saveCurrentTab({
				...query,
				name,
			})
		);

		dispatch(setQuery(currentTab!));
	};

	return (
		<InputModal
			CloseElement={<Button variant='outline'>Сохранить</Button>}
			value={name}
			onInput={e => setName(e)}
			visible={false}
			onSubmit={handleNameInput}
			title='Введите имя'
		>
			<PlusIcon className='w-full h-full' />
		</InputModal>
	);
});
