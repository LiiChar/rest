import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { ParamsTable } from './QueryTable/ParamsTable';

export const QueryInfoPanel = () => {
	return (
		<Tabs defaultValue='param' className='w-full h-min'>
			<TabsList className='rounded-b-none -translate-x-2 bg-background pt-2 pb-0 flex h-min w-min px-2'>
				<TabsTrigger
					className='p-0 data-[state=active]:bg-secondary h-full bg-secondary w-full px-1 pt-1 rounded-b-none rounded-r-none'
					value='param'
				>
					Параметры
				</TabsTrigger>
				<TabsTrigger
					className='p-0 data-[state=active]:bg-secondary h-full bg-secondary w-full px-1 pt-1 rounded-b-none rounded-l-none rounded-r-none'
					value='header'
				>
					Заголовки
				</TabsTrigger>
				<TabsTrigger
					className='p-0 rounded-l-none data-[state=active]:bg-secondary h-full bg-secondary w-full px-1 pt-1 rounded-b-none'
					value='body'
				>
					Тело
				</TabsTrigger>
			</TabsList>
			<TabsContent value='param' className='m-0'>
				<ParamsTable />
			</TabsContent>
			<TabsContent value='header'>Заголовки</TabsContent>
			<TabsContent value='body'>Тело</TabsContent>
		</Tabs>
	);
};
