import "./style.css";
import { getUserWithPosts } from "./api.js";
import { userPageComponent, loadingComponent } from "./components.js";

const root = document.querySelector("#app");

async function render() {
  root.innerHTML = loadingComponent();
  const data = await getUserWithPosts(5);
  root.innerHTML = userPageComponent(data);
}

render();
