
import axios from "axios";
export default defineEventHandler(async (event) => {
  try {
    const response = await axios.get("https://lulusmurni.com/api/product-list", {
    //   headers: {
    //     Authorization:
    //       "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsdWx1c211cm5pLmNvbSIsImF1ZCI6Imx1bHVzbXVybmkuY29tIiwiaWF0IjoxNzU0MjkyNDMyLCJuYmYiOjE3NTQyOTI0NDIsImV4cCI6MTc1NDI5NjAzMiwiZGF0YSI6W119.2Er1jsajP_I5mKlbo2ZBdzQipaqTZXNj5PJ2gLBeQBw",
    //   },
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Gagal axios dari API eksternal:", error);
    setResponseStatus(event, 500);
    return {
      success: false,
      message: "Gagal ambil data kategori",
      error: error.message,
    };
  }
});
