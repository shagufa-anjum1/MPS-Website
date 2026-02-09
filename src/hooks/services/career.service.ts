import apiService from './api.service';
import { JobPosting } from '../../types/index';

/**
 * Career Service
 * Handles all career-related API calls
 */
class CareerService {
  private readonly endpoint = '/careers';

  /**
   * Get all job postings
   */
  async getAllJobs(): Promise<JobPosting[]> {
    try {
      const response = await apiService.get<JobPosting[]>(`${this.endpoint}/jobs`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get job by ID
   */
  async getJobById(id: string): Promise<JobPosting> {
    try {
      const response = await apiService.get<JobPosting>(`${this.endpoint}/jobs/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Submit job application
   */
  async applyForJob(jobId: string, formData: FormData): Promise<{ message: string }> {
    try {
      const response = await apiService.post<{ message: string }>(
        `${this.endpoint}/jobs/${jobId}/apply`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new CareerService();
