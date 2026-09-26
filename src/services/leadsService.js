import { apiClient } from './apiClient';

export const createLead = async (leadData) => {
  // TODO: Implementar POST /api/leads
  const response = await apiClient.post('/leads', leadData);
  return response.data;
};
