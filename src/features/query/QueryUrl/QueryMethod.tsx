import { changeMethod } from '@/entities/query/model/QuerySlice';
import { useAppSelector } from '@/shared/lib/storeHook';
import { Method } from '@/shared/types/query';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/select';

export const QueryMethod = () => {
	const method = useAppSelector(state => state.query.method);

	const handleSelectMethod = (method: Method) => {
		changeMethod(method);
	};

	return (
		<Select defaultValue={method} onValueChange={handleSelectMethod}>
			<SelectTrigger className='w-full h-full border-0 border-r-[1px] rounded-r-none'>
				<SelectValue defaultValue={method} />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='GET'>GET</SelectItem>
				<SelectItem value='POST'>POST</SelectItem>
				<SelectItem value='PUT'>PUT</SelectItem>
				<SelectItem value='DELETE'>DELETE</SelectItem>
				<SelectItem value='PUTCH'>PUTCH</SelectItem>
			</SelectContent>
		</Select>
	);
};
