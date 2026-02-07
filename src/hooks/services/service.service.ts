import apiService from './api.service';
import { Service } from '@types/index';

/**
 * Service Service
 * Handles all service-related API calls
 */
class ServiceService {
  private readonly endpoint = '/services';

  /**
   * Get all services
   */
  async getAllServices(): Promise<Service[]> {
    try {
      const response = await apiService.get<Service[]>(this.endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get service by ID
   */
  async getServiceById(id: string): Promise<Service> {
    try {
      const response = await apiService.get<Service>(`${this.endpoint}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ServiceService();
