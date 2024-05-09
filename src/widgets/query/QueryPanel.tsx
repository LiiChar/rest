import { QueryMethod } from '@/features/query/QueryUrl/QueryMethod';
import { QueryInput } from '@/features/query/QueryUrl/QueryInput';
import { QueryRequest } from '@/features/query/QueryUrl/QueryRequest';

export const QueryPanel = () => {
	return (
		<section className='flex justify-between w-full h-8 border-[1px] rounded-md'>
			<div className='flex w-full'>
				<div className='w-min'>
					<QueryMethod />
				</div>
				<QueryInput />
			</div>
			<QueryRequest />
		</section>
	);
};
