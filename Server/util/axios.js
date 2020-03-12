const axios = require("axios").default;
module.exports = axios.create({
  baseURL: "https://hn.algolia.com/api/v1/search_by_date?query=nodejs"
});
