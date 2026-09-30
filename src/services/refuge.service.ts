import { api } from './api.client';
import type { RefugeProfile } from '../types/refuge.types';

export const getRefugeProfile = () => api<RefugeProfile>('/public/refuge');
