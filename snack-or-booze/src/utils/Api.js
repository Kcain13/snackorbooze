import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getItems(category) {
    const result = await axios.get(`${BASE_API_URL}/${category}`);
    return result.data;
  }
  // Add a new item to the specified category
  static async addItem(category, item) {
    const result = await axios.post(`${BASE_API_URL}/${category}`, item);
    return result.data;
  }
}

export default SnackOrBoozeApi;
