import axios from "axios";

export default defineEventHandler(async (event) => {
  try {
    const response = await axios.get("https://lulusmurni.com/api/add_ons");
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error:", error.response?.status, error.response?.data);
    setResponseStatus(event, 500);
    return {
      success: false,
      message: "Gagal ambil data voucher",
    };
  }
});
