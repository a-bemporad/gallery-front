import axios from "axios";
import { BASE_URL } from "../constants/requests";
import { goToHome } from "../routes/coordinator";

export const logInRequest = async (body, history, toast) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, body);
    localStorage.setItem("token", response.data.token);
    goToHome(history);
  } catch (error) {
    toast({
      position: "top",
      title: "Ooops!",
      description: error.response.data.message,
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  }
};
