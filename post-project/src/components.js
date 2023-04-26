export function userPageComponent({ user, posts }) {
  return `
    <div class="">
      ${userComponent(user)}
      <hr class="m-4 border-gray-300">
      <div class="grid md:grid-cols-2 justify-center">
        ${posts.map(postComponent).join("")}
      </div>
    </div>
  `;
}

export function userComponent(user) {
  return `
    <div class="m-2 p-5 rounded-md shadow-lg flex gap-4 items-center justify-between">
      ${arrowButton("leftButton", true)}
      <div class="flex gap-4 items-center">
        <img class="rounded-full" src="https://placehold.co/100">
        <div class="text-left">
          <h2 class="font-bold">${user.name}</h2>
          <h4 class="text-slate-600">${user.email}</h4>
          <span class="text-slate-500">Website:</span> <a href="https://${
            user.website
          }">${user.website}</a>
        </div>
      </div>
      ${arrowButton("rightButton", false)}
    </div>
  `;
}

export function postComponent(post) {
  return `
    <div class="m-2 p-7 rounded-md shadow-lg max-w-md">
      <h3 class="text-lg font-bold mb-3">${post.title}</h3>
      <p class="text-left">${post.body}</p>
    </div>
  `;
}

export function loadingComponent() {
  return `<div class="lds-grid m-10"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
}

export function arrowButton(id, left) {
  let classNames = "h-12 cursor-pointer";
  if (left) {
    classNames += " rotate-180";
  }
  return `<img id="${id}" class="${classNames}" src="/arrow.svg">`;
}
