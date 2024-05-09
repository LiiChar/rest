import { FC, FormEvent, ReactNode, memo } from 'react';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/ui/dialog';
import { Label } from '@/shared/ui/label';
import { Input } from '@/shared/ui/input';

type Props = {
	value: string;
	onInput: (value: string) => void;
	onSubmit: () => void;
	visible?: boolean;
	defaultVisible?: boolean;
	children?: ReactNode;
	title?: string;
	label?: string;
	description?: string;
	CloseElement?: ReactNode;
	placeholder?: string;
};

export const InputModal: FC<Props> = memo(
	({
		onInput,
		onSubmit,
		visible,
		defaultVisible,
		children,
		CloseElement,
		value,
		description,
		label,
		title,
		placeholder,
	}) => {
		const handleInputElement = (e: FormEvent<HTMLInputElement>) => {
			onInput(e.currentTarget.value);
		};

		const handleSubmitButton = () => {
			onSubmit();
		};

		return (
			<Dialog defaultOpen={defaultVisible} open={visible}>
				<DialogTrigger asChild>{children}</DialogTrigger>
				<DialogContent className='sm:max-w-md'>
					{description ||
						(title && (
							<DialogHeader>
								{title && <DialogTitle>{title}</DialogTitle>}
								{description && (
									<DialogDescription>{description}</DialogDescription>
								)}
							</DialogHeader>
						))}
					<div className='flex items-center space-x-2'>
						<div className='grid flex-1 gap-2'>
							{label && (
								<Label htmlFor='input' className='sr-only'>
									{label}
								</Label>
							)}
							<Input
								placeholder={placeholder}
								onInput={handleInputElement}
								id='input'
								value={value}
							/>
						</div>
						{CloseElement && (
							<DialogClose onClick={handleSubmitButton} asChild>
								{CloseElement}
							</DialogClose>
						)}
					</div>
				</DialogContent>
			</Dialog>
		);
	}
);
