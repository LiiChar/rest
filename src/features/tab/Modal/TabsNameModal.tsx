import { Button } from '@/shared/ui/button';
import { useAppDispatch, useAppSelector } from '@/shared/lib/storeHook';
import { memo, useEffect, useState } from 'react';
import { saveCurrentTab } from '@/entities/tab/model/TabSlice';
import { setQuery, setName as st } from '@/entities/query/model/QuerySlice';
import { InputModal } from './InputModal';
import { ArchiveIcon } from '@radix-ui/react-icons';

export const TabsNameModal = memo(() => {
	const dispatch = useAppDispatch();
	const query = useAppSelector(state => state.query);
	const currentTab = useAppSelector(state => state.tab.currentTab);

	const [visible, setVisible] = useState(false);
	const [name, setName] = useState('');

	useEffect(() => {
		document.addEventListener('keydown', handlerKeydown);

		function handlerKeydown(event: KeyboardEvent) {
			if (event.code === 'KeyS' && (event.ctrlKey || event.metaKey)) {
				event.preventDefault();
				if (!query.name) {
					setVisible(true);
				} else {
					handleSubmitName();
				}
			}
		}

		return () => {
			document.removeEventListener('keydown', handlerKeydown);
		};
	}, []);

	const handleSubmitName = () => {
		dispatch(
			saveCurrentTab({
				...query,
				name,
			})
		);
		dispatch(st(name));

		dispatch(setQuery(currentTab!));
		setVisible(false);
	};

	return (
		<InputModal
			CloseElement={<Button variant='outline'>Сохранить</Button>}
			value={name}
			onInput={e => setName(e)}
			visible={visible}
			onSubmit={handleSubmitName}
			title='Введите имя'
			placeholder='Введите название файла'
		>
			<ArchiveIcon />
		</InputModal>
	);
});
