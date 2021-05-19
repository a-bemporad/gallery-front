import axios from "axios";
import { BASE_URL } from "../constants/urls";

// export const getAllUsersRequest = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/users`);
//     console.log("entrou no then", response.data);
//     localStorage.setItem("token", response.data.token);
//     return response;
//   } catch (error) {
//     console.log(error.response.data);
//   }
// };

export const getAllUsersRequest = () => {
  axios
    .get(`${BASE_URL}/users`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
