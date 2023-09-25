const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-todo");
const ul = document.querySelector("ul");

const mainConditional = () => {
  const newLi = document.createElement("li");
  newLi.textContent = todoInput.value;
  localStorage.setItem("userValue", todoInput.value);
  ul.prepend(newLi);

  newLi.addEventListener("click", () => {
    newLi.remove();
  });

  const editButton = document.createElement("button");
  const saveButton = document.createElement("button");
  saveButton.classList.add("hidden");

  newLi.addEventListener("mouseenter", () => {
    editButton.textContent = "Edit";
    newLi.append(editButton);

    editButton.addEventListener("click", () => {
      const newInputEdit = document.createElement("input");
      newInputEdit.style.marginRight = "5px";
      newInputEdit.classList.add("new-input-edit-input");
      newLi.innerHTML = newInputEdit.value;
      newInputEdit.setAttribute(
        "placeholder",
        `${localStorage.getItem("userValue")}`
      );
      newLi.replaceWith(newInputEdit);

      saveButton.classList.remove("hidden");
      saveButton.textContent = "Save";
      ul.append(saveButton);

      saveButton.addEventListener("click", () => {});
    });
  });
};

// newLi.addEventListener("mouseleave", () => {
//   editButton.style.display = "none";
// });

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
