import { Constants } from "../../constants/Constants";

// I typically try to make one of these nice generic functions for each 
// HTTP verb needed - POST, PATCH, etc.
export const get = async <T>(
  endpoint: string,
  onSuccess: (data: T) => void,
  onError: (status: number) => void
): Promise<void> => {
  try {
    const response = await fetch(
      `${Constants.API_BASE_URL}${endpoint}`
    );
    const data = await response.json();
    if (response.ok) {
      return onSuccess(data);
    }
    return onError(response.status);
  } catch (error) {
    // TODO: handle error
  }
};
