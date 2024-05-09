import { FC } from 'react';

type Props = {
	message: string;
};

export const Tooltip: FC<Props> = ({ message }) => {
	return (
		<span className='tooltip'>
			<button className='tooltip-toggle' type='button'>
				<svg
					className='tooltip-icon'
					width='1'
					height='9'
					viewBox='0 0 1 9'
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g clip-path='url(#a)'>
						<path d='M0 9h1V3H0v6ZM1 0H0v1h1V0Z' />
					</g>
				</svg>
			</button>
			<span className='tooltip-text'>{message}</span>
		</span>
	);
};
