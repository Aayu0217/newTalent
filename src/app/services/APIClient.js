
import { BANNER_LIST, SERVICE_LIST } from "./APIEndPoints";
import { getMethod } from "./APIInstance";


// App API: get category list
export const getCategoryList = async () => {
  try {
    const response = await getMethod(BANNER_LIST);
    return response;
  } catch (error) {
    console.error("Getting error in statistics api", error);
  }
};

// App API: get service list
export const getserviceList = async () => {
  try {
    const response = await getMethod(SERVICE_LIST);
    return response;
  } catch (error) {
    console.error("Getting error in statistics api", error);
  }
};




