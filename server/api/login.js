import axios from "axios";

export default defineEventHandler(async (event) => {
  try {
    // const response = await $fetch("/api/login", {
    const response = await $fetch("https://lulusmurni.com/api/login", {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsdWx1c211cm5pLmNvbSIsImF1ZCI6Imx1bHVzbXVybmkuY29tIiwiaWF0IjoxNzU0MjkzMTAzLCJuYmYiOjE3NTQyOTMxMTMsImV4cCI6MTc1NDI5NjcwMywiZGF0YSI6W119.Gp-bWZvBHh3IuzZamqjUpx6AKLqmtoaXoRdiiDCae0U",
      },
      method: "POST",
    });

    console.log({ response });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Gagal fetch dari API eksternal:", error);
    setResponseStatus(event, 500);
    return {
      success: false,
      message: "Gagal ambil data kategori",
      error: error.message,
    };
  }
});
