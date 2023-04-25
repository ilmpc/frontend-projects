import "./style.css";
import { getUserWithPosts } from "./api.js";

const root = document.querySelector("#app");

root.innerHTML = `Loading...`;

getUserWithPosts(5).then((data) => {
  root.innerHTML = userPageComponent(data);
});

function userPageComponent({ user, posts }) {
  return `
    <div class="">
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
    <div class="m-2 p-5 rounded-md shadow-lg max-w-sm">
      <h3 class="text-lg font-bold mb-3">${post.title}</h3>
      <p class="text-left">${post.body}</p>
    </div>
  `;
}
