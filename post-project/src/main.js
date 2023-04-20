import "./style.css";
import { getUserWithPosts } from "./api.js";

const root = document.querySelector("#app");

root.innerHTML = `Loading...`;

getUserWithPosts(5).then((data) => {
  root.innerHTML = userPageComponent(data);
});

function userPageComponent({ user, posts }) {
  return `
    <div class="bg-green-500">
      <div>
        <h2>${user.name}</h2>
        <h4>${user.email}</h4>
      </div>
      <h2>Posts:</h2>
      <div>
        ${posts.map(postComponent).join("")}
      </div>
    </div>
  `;
}

function postComponent(post) {
  return `
    <div class="">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    </div>
  `;
}
