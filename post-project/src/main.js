import "./style.css";
import { getUserWithPosts } from "./api.js";
import { userPageComponent, loadingComponent } from "./components.js";
import { State } from "./state.js";

const appState = new State({ userId: 10 });
appState.setChangeListener(render);

async function render(appState) {
  const root = document.getElementById("app");
  root.innerHTML = loadingComponent();
  const data = await getUserWithPosts(appState.userId);
  root.innerHTML = userPageComponent(data);

  const leftButton = document.getElementById("leftButton");
  const rightButton = document.getElementById("rightButton");

  leftButton.addEventListener("click", () => appState.prevUser());
  rightButton.addEventListener("click", () => appState.nextUser());
}
