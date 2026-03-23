const input = document.getElementById("include-goals-input");
const button = document.getElementById("include-goals-button");
const display = document.getElementById("tasksArray");

const storageTask = localStorage.getItem("tasks");

let tasksArray = [storageTask];

console.log(storageTask);
button.addEventListener("click", function () {
  const inputValue = input.value;

  if (inputValue || tasksArray.length > 0) {
    tasksArray = [...tasksArray, inputValue];
    display.innerHTML = "";

    tasksArray.forEach((task) => {
      const newTask = document.createElement("li");
      newTask.textContent = task;
      display.appendChild(newTask);
    });
    input.value = "";
    localStorage.setItem("tasks", JSON.stringify());
  } else {
    display.innerText = "Digite a tarefa que deseja adicionar";
  }
});
