export type Query = {
	name: string;
	method: Method;
	url: string;
	params?: Record<string, string>;
	body?: string;
};

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
