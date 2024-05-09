import { Param } from '@/entities/query/model/QuerySlice';

export type ValidateUrlError = {
	part: 'protocol' | 'domain';
	place: number;
	message: string;
};

export const validateUrl = (url: string): null | ValidateUrlError => {
	const [protocol, domain] = url.split('://');
	if (protocol !== 'http' && protocol !== 'https') {
		return {
			part: 'protocol',
			place: 0,
			message: 'URL должен начинаться с http или https',
		};
	}
	if (!domain || domain == '') {
		return {
			part: 'domain',
			place: protocol === 'http' ? 7 : 8,
			message: 'Доменное имя не должно быть пустым',
		};
	}
	return null;
};

export const addParams = (url: string, params: Param[]) => {
	const [host, _param] = url.split('?');
	const resArray: string[] = [];

	params.forEach(({ key, value }) => {
		if (key != '') {
			resArray.push(`${key}=${value}`);
		}
	});
	console.log(resArray);
	return host + '?' + resArray.join('&');
};

export const parseUtlToParam = (url: string): Param[] => {
	const [_host, params] = url.split('?');

	if (!params) {
		return [];
	}

	const entiresParams = params.split('&');

	return entiresParams.map((param, i) => {
		const [key, value] = param.split('=');
		return {
			index: i,
			key,
			value,
		};
	});
};
