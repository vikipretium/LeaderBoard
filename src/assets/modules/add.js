const addPoints = (event) => {
  const scoreBoard = document.querySelector(".score-div");
  const name = document.querySelector(".name");
  const point = document.querySelector(".point");

  const userDetail = document.createElement("li");
  userDetail.className = "user";

  const inputDetail = document.createElement("span");
  inputDetail.innerText = `${name.value}: ${point.value}`;
  userDetail.appendChild(inputDetail);
  scoreBoard.appendChild(userDetail);
};

export default addPoints;
