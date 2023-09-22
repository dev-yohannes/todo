const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-todo");
const ul = document.querySelector("ul");

const mainConditional = () => {
  const newLi = document.createElement("li");
  newLi.textContent = todoInput.value;
  ul.prepend(newLi);

  newLi.addEventListener("click", () => {
    console.log("li clicked");
    // newLi.style.textDecoration = "line-through";
    newLi.remove();
  });
};

const checkingEmptyInput = () => {
  if (todoInput.value === "") {
    alert("Enter a value.");
  } else {
    mainConditional();
    todoInput.value = "";
  }
};

addButton.addEventListener("click", () => {
  checkingEmptyInput();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkingEmptyInput();
  }
});
