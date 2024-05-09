import { changeQuery } from '@/entities/query/model/QuerySlice';
import { ValidateUrlError, validateUrl } from '@/shared/lib/request/url';
import { useAppSelector, useAppDispatch } from '@/shared/lib/storeHook';
import { Input } from '@/shared/ui/input';
import { FormEvent, useState } from 'react';

export const QueryInput = () => {
	const query = useAppSelector(state => state.query.query);
	const [helper, setHelper] = useState<ValidateUrlError | null>(null);
	const dispatch = useAppDispatch();

	const handleInpurt = (e: FormEvent<HTMLInputElement>) => {
		setHelper(validateUrl(e.currentTarget.value));
		dispatch(changeQuery(e.currentTarget.value));
	};

	return (
		<div className='relative w-full h-full'>
			<Input
				className='w-full h-full border-0 rounded-none'
				onInput={handleInpurt}
				type='url'
				placeholder='https://example.com/v1/titles'
				value={query}
				onBlur={() => setHelper(null)}
			/>
			{helper && (
				<div
					className={`z-50 bg-secondary border-[1px] p-1 rounded-md text-xs absolute translate-y-full bottom-0 left-[${helper.place}%] after:content-[${helper.message}] after:left-[20px] after:bottom-[-20px] after:w-[20px] after:h-[20px] after:rotate-45`}
				>
					{helper.message}
				</div>
			)}
		</div>
	);
};
