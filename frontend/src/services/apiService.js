import axiosInstance from "./axiosInstance";

// Create (POST)
export const createResource = async (endpoint, data) => {
  const response = await axiosInstance.post(endpoint, data);
  return response.data;
};

// Read (GET)
export const getResource = async (endpoint) => {
  const response = await axiosInstance.get(endpoint);
  return response.data;
};

// Update (PUT)
export const updateResource = async (endpoint, data) => {
  const response = await axiosInstance.put(endpoint, data);
  return response.data;
};

// Delete (DELETE)
export const deleteResource = async (endpoint) => {
  const response = await axiosInstance.delete(endpoint);
  return response.data;
};
