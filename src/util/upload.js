const FormData = require("form-data");
const Axios = require("axios");
const fs = require("fs");
const url = "https://api.anonymousfiles.io/";

export const uploadFile = async (fileDir) => {
  const form = new FormData();
  form.append("file", fs.createReadStream(fileDir));
  const request = await Axios.default.post(url, form, {
    headers: form.getHeaders()
  });
  return request.data;
}

module.exports = uploadFile;