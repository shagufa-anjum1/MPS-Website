import apiService from './api.service';
import { ContactFormData } from '../../types/index';

/**
 * Contact Service
 * Handles all contact-related API calls
 */
class ContactService {
  private readonly endpoint = '/contact';

  /**
   * Submit contact form
   */
  async submitContactForm(data: ContactFormData): Promise<{ message: string }> {
    try {
      const response = await apiService.post<{ message: string }>(`${this.endpoint}/submit`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get contact information
   */
  async getContactInfo(): Promise<any> {
    try {
      const response = await apiService.get<any>(`${this.endpoint}/info`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ContactService();
