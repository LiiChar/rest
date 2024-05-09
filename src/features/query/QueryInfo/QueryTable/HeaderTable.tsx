import { addHeader } from '@/entities/query/model/QuerySlice';
import { useAppDispatch, useAppSelector } from '@/shared/lib/storeHook';
import { Input } from '@/shared/ui/input';
import { Table, TableBody, TableCell, TableRow } from '@/shared/ui/table';

export const HeaderTable = () => {
	const header = useAppSelector(state => state.query.header);
	const dispatch = useAppDispatch();

	const handleParams = (index: number, key: string, value: string) => {
		dispatch(addHeader({ key, value, index }));
	};

	return (
		<Table className='border-border border-[1px]'>
			<TableBody className='border-[1px]'>
				{header.map(({ index, key, value }) => (
					<TableRow key={index}>
						<TableCell className=' border-separate p-0'>
							<Input
								className='focus:border-[1px] focus:border-primary p-2 w-full m-0 h-full rounded-none z-50'
								value={key}
								onInput={e => handleParams(index, e.currentTarget.value, value)}
							/>
						</TableCell>
						<TableCell className=' border-separate p-0'>
							<Input
								className=' focus:border-[1px] focus:border-primary p-2 w-full m-0 h-full rounded-none z-50'
								value={value}
								onInput={e => handleParams(index, key, e.currentTarget.value)}
							/>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};
