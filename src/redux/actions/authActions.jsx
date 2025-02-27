import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestWithoutAuth } from "../../helpers/requests";


const ApiEndpoint = `${import.meta.env.VITE_APP_API_URL}`;
export const login = createAsyncThunk(
  "register",
  async ({ body, navigate, sendMessage }) => {
    try {
      const response = await requestWithoutAuth(
        "post",
        "/user/login",
        "",
        "",
        body
      );

      if (response.success == -500) {
        sendMessage("Sunucu Hatası", -1);
        return
      }
      if (response.success < 0) {
        sendMessage(
          response.message || "Giriş işlemi sırasında bir hata oluştu.",
          0
        );
      } else if (response.success == 1) {
        sendMessage("Başarıyla giriş yaptınız", 1);
        navigate("/");
      } else {
        sendMessage("Giriş işlemi sırasında bilinmeyen bir hata oluştu.", 0);
      }

      return response;
    } catch (error) {
      console.error("Login Error:", error);
      sendMessage("Giriş işlemi sırasında bir hata oluştu.", 0);
      throw error;
    }
  }
);

export const register = createAsyncThunk(
  "register",
  async ({ body, navigate, sendMessage }) => {
    try {
      const response = await requestWithoutAuth(
        "post",
        "/user/register",
        "",
        "",
        body
      );

      if (response.success == -500) {
        sendMessage("Sunucu Hatası", -1);
        return
      }
      if (response.success < 0) {
        sendMessage(
          response.message || "Kayıt işlemi sırasında bir hata oluştu.",
          0
        );
      } else if (response.success == 1) {
        sendMessage("Başarıyla kayıt oldunuz", 1);
        navigate("/login");
      } else {
        sendMessage("Kayıt işlemi sırasında bilinmeyen bir hata oluştu.", 0);
      }

      return response;
    } catch (error) {
      console.error("Register Error:", error);
      sendMessage("Kayıt işlemi sırasında bir hata oluştu.", 0);
      throw error;
    }
  }
);
