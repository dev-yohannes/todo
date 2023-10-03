const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-todo");
const ul = document.querySelector("ul");

// adding input value to li
const mainFunction = () => {
  newLi = document.createElement("li");
  newLi.innerHTML = `
  <li>
    <span class="li-span-text">${todoInput.value.trim()}</span>
    <span class="icons">
      <i class="fa-solid fa-pen-to-square edit-icon"></i>
      <i class="fa-solid fa-check save-icon"></i>
      <i class="fa-solid fa-trash-can delete-icon"></i>
    </span>
  </li>`;

  const newLiSaveIcon = newLi.querySelector(".save-icon");
  newLiSaveIcon.style.display = "none";
  newLiSaveIcon.style.cursor = "pointer";

  const newLiDeleteIcon = newLi.querySelector(".delete-icon");
  newLiDeleteIcon.style.cursor = "pointer";

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

  // adding edit icon
  const newLiEditIcon = newLi.querySelector(".edit-icon");

  newLiSpan.addEventListener("click", (e) => {
    if (e.target.classList.contains("li-span-text")) {
      newLiEditIcon.style.visibility = "visible";
      newLiEditIcon.style.cursor = "pointer";
    }
  });

  // replacing span to input
  newLiEditIcon.addEventListener("click", () => {
    newLiEditIcon.style.visibility = "hidden";
    newLiSaveIcon.style.display = "inline";

    const newInput = document.createElement("input");

    newInput.setAttribute("placeholder", `${todoInput.value}`);
    newLi.appendChild(newInput);
    newLiSpan.replaceWith(newInput);

    // saving new input value and adding it to the li
    newLiSaveIcon.addEventListener("click", () => {
      if (newInput.value === "") {
        alert("You need to write somthing before you save");
      } else {
        newLiSpan.textContent = newInput.value;
        newInput.replaceWith(newLiSpan);
        newLiSaveIcon.style.display = "none";
      }
    });
  });

  newLiDeleteIcon.addEventListener("click", () => {
    newLi.remove();
  });
};

const checkIfInputEmpty = () => {
  if (todoInput.value === "") {
    alert("Sorry, You need to fill the input");
  } else {
    mainFunction();
    todoInput.value = "";
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
