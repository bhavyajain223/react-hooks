import axios from "axios";
const token = "ping";
export const getCourses = async () => {
  try {
    const response = await axios.get(
      "https://example.thoughtindustries.com/incoming/v2/ping ",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error, "error occured");
  }
};
