import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6f825012d6464a42bf9354143a89fd09",
  },
});
