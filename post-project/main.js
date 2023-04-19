import "./style.css";
import { getUserWithPosts } from "./api.js";

const root = document.querySelector("#app");

root.innerHTML = `Loading...`;

getUserWithPosts(5).then((data) => {
  root.innerHTML = userPageComponent(data);
});

function userPageComponent({ user, posts }) {
  // div - page
  // user information - name, email
  // div > posts map postComponent join
  // posts.map(postComponent)
  // `${['qwe', 'asv'].join('')}`
  return `
    <div>
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
    <div class="post">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    </div>
  `;
}
