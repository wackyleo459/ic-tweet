import { actor_tweet } from "../../declarations/actor_tweet";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with actor_tweet actor, calling the greet method
  const greeting = await actor_tweet.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
