const FormData = require("form-data");
const fetch = require("node-fetch");
const fs = require("fs");

const url = "https://api.anonymousfiles.io/";
const file = "C:/Users/mgang/Desktop/Proyectos/AnonymousFiles/file.txt";

const form = new FormData();
form.append("file", fs.createReadStream(file));

fetch(url, { method: "POST", body: form }).then((result) =>
  result.json().then((response) => console.log(response))
);
