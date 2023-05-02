import "./style.css";
import { getUserWithPosts, getUsers } from "./api.js";
import {
  userPageComponent,
  loadingComponent,
  usersPageComponent,
} from "./components.js";
import { State } from "./state.js";

const appState = new State();
appState.setChangeListener(render);

async function render(appState) {
  const root = document.getElementById("app");
  root.innerHTML = loadingComponent();

  const { page } = appState;

  if (page === "usersList") {
    usersListPage(root, appState);
  } else if (page === "user") {
    userPage(root, appState);
  }
}

async function usersListPage(root, appState) {
  const data = await getUsers();
  root.innerHTML = usersPageComponent(data);

  data.forEach(({ id }) => {
    const htmlId = `openPostsButton-${id}`;
    const element = document.getElementById(htmlId);
    element.addEventListener("click", () => appState.openUser(id));
  });
}

async function userPage(root, appState) {
  const data = await getUserWithPosts(appState.userId);
  root.innerHTML = userPageComponent(data);

  const leftButton = document.getElementById("leftButton");

  leftButton.addEventListener("click", () => appState.backToUsersList());
}
