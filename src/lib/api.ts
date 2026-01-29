/**
 * API Configuration and Utility Functions
 * Centralized API client for making requests to the backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Generic API request function
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<{ success: boolean; data?: T; error?: string; message?: string }> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || data.message || 'An error occurred',
      };
    }

    return {
      success: true,
      data: data.data || data,
      message: data.message,
    };
  } catch (error) {
    console.error('API Request Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error. Please check if the server is running.',
    };
  }
}

/**
 * Contact API functions
 */
export const contactAPI = {
  /**
   * Submit contact form
   */
  submit: async (formData: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) => {
    return apiRequest<{ _id: string; name: string; email: string }>('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },
};

/**
 * Booking API functions
 */
export const bookingAPI = {
  /**
   * Submit booking/enquiry
   */
  submit: async (formData: {
    name: string;
    email: string;
    phone: string;
    organization?: string;
    type: 'engineer' | 'product_enquiry' | 'consultation' | 'other';
    department?: string;
    preferredDate?: string;
    timeSlot?: string;
    purpose: string;
    productId?: string;
    productName?: string;
  }) => {
    return apiRequest<{ _id: string; name: string; email: string }>('/bookings', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },
};

/**
 * Products API functions
 */
export const productsAPI = {
  /**
   * Get all products
   */
  getAll: async (params?: { category?: string; inStock?: boolean; search?: string }) => {
    const queryString = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return apiRequest<any[]>('/products' + queryString);
  },

  /**
   * Get single product by ID or slug
   */
  getById: async (id: string) => {
    return apiRequest<any>(`/products/${id}`);
  },
};

/**
 * Team API functions
 */
export const teamAPI = {
  /**
   * Get all team members
   */
  getAll: async (params?: { type?: string; isActive?: boolean }) => {
    const queryString = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return apiRequest<any[]>('/team' + queryString);
  },

  /**
   * Get single team member
   */
  getById: async (id: string) => {
    return apiRequest<any>(`/team/${id}`);
  },
};

/**
 * Projects API functions
 */
export const projectsAPI = {
  /**
   * Get all projects
   */
  getAll: async (params?: { status?: string; year?: string }) => {
    const queryString = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return apiRequest<any[]>('/projects' + queryString);
  },

  /**
   * Get single project
   */
  getById: async (id: string) => {
    return apiRequest<any>(`/projects/${id}`);
  },
};

/**
 * Health check
 */
export const healthCheck = async () => {
  return apiRequest<{ message: string; timestamp: string }>('/health');
};

