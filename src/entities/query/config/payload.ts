import { Method } from '@/shared/types/query';
import { PayloadAction } from '@reduxjs/toolkit';
import { Header, QueryState } from '../model/QuerySlice';

export type AddParamActionPayload = PayloadAction<{
	index: number;
	key: string;
	value: string;
}>;
export type ChangeQueryActionPayload = PayloadAction<string>;
export type ChangeMethodActionPayload = PayloadAction<Method>;
export type SetQueryActionPayload = PayloadAction<QueryState>;
export type SetNameActionPayload = PayloadAction<string>;
export type AddHeaderActionPayload = PayloadAction<Header>;
