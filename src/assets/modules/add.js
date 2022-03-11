import { postData, getData } from "./api.js";

const addPoints = () => {
  const name = document.querySelector(".name");
  const point = document.querySelector(".point");
  const form = document.querySelector(".form");
  const raw = JSON.stringify({
    user: name.value,
    score: point.value,
  });
  postData(raw);
  form.reset();
  getData();
};

export default addPoints;
