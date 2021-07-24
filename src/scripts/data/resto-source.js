import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestoSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async reviewRestaurant(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
    return response;
  }
}

export default RestoSource;
