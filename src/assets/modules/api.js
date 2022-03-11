const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const postData = async (raw) => {
  await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0ANpM646Uh4lXIJEcl22/scores/",
    {
      method: "post",
      headers: {
        "Content-type": "application/json; charset= UTF-8",
      },
      body: raw,
      redirect: "follow",
    }
  );
};

const getData = async () => {
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0ANpM646Uh4lXIJEcl22/scores/",
    {
      method: "GET",
      redirect: "follow",
    }
  );
  const scoreBoard = document.querySelector(".score-div");
  const scoreList = await response.json();
  console.log(scoreList);
  scoreBoard.innerHTML = "";
  scoreList.result.forEach((event) => {
    // table.innerHTML += `<li>${event.user} : ${event.score} </li>`;
    scoreBoard.innerHTML += `<li class="user"><span>${event.user}: ${event.score}</span></li>`;
  });
};

export { postData, getData };
