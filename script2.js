const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-todo");
const ul = document.querySelector("ul");

// adding input value to li
const mainFunction = () => {
  newLi = document.createElement("li");
  newLi.innerHTML = `
  <li>
    <span class="li-span-text">${todoInput.value.trim()}</span>
    <i class="fa-solid fa-pen-to-square edit-icon"></i>
  </li>`;

  ul.prepend(newLi);

  newLi.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("li-span-text") &&
      !e.target.classList.contains("edit-icon")
    ) {
      newLiSpan.classList.toggle("line-through");
    }
  });

  const newLiSpan = newLi.querySelector(".li-span-text");
  newLiSpan.style.cursor = "pointer";

  const newLiIcon = newLi.querySelector(".edit-icon");

  newLiSpan.addEventListener("click", (e) => {
    if (e.target.classList.contains("li-span-text")) {
      newLiIcon.style.visibility = "visible";
      newLiIcon.style.cursor = "pointer";
    }
  });
};

const checkIfInputEmpty = () => {
  if (todoInput.value === "") {
    alert("Sorry, You need to fill the input");
  } else {
    mainFunction();
  }
};

addButton.addEventListener("click", () => {
  checkIfInputEmpty();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkIfInputEmpty();
  }
});
