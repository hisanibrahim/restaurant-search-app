import axios from "axios";

export default axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1",
  headers: {
    // Zomato API not using Authorization header nor Bearer token
    "user-key": "2318d85c352670fb2c24596aab3620ee"
    // entity_id: 9 // Location ID is hardcoded to Kochi, i.e. 9
  }
});
