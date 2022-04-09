import axios from "axios";
import { parseCookies, setCookie } from "nookies";
import { ApiConstantes } from "./constantes/apiconstantes";
class BackendCalls {
  constructor() {
    const { CoinToken: token } = parseCookies();
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  }

  async BuscarCep(cep: any) {
    axios.defaults.headers.common = {};
    return axios({
      method: "get",
      url: `https://teste.com.br/ws/${cep}/json/`,
      timeout: 1000 * 350,
    })
      .then((response) => {
        console.log(response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  }
}

const BackendCallsObj = new BackendCalls();
export default BackendCallsObj;
