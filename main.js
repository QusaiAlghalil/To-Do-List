let add = document.querySelector(".container .top .add");
let input = document.querySelector(".container .top input");
let tasksList = document.querySelector(".container .tasks");
let noTasks = document.querySelector(".no-tasks");
let numOfTasks = document.querySelector(".tasks-count span");
let completedTask = document.querySelector(".completed span");

add.onclick = () => {
  if (input.value != "") {
    // remove no tasks to show
    noTasks.classList.add("hide");
    // create ner task
    tasksList.appendChild(document.createElement("p"));
    document.querySelector(
      ".tasks p:last-child"
    ).innerHTML = `${input.value} <span class="delete">Delete</span>`;

    //********add class name to all tasks
    document
      .querySelectorAll(".tasks p:not(:first-child)")
      .forEach((p) => p.classList.add("task"));

    // increase tasks counter
    numOfTasks.innerHTML++;
  }
  input.value = "";
};
// remove task
document.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    e.target.parentElement.remove();
    numOfTasks.innerHTML--;
  }
  //   show no tasks message
  if (tasksList.childElementCount == 1) {
    noTasks.classList.remove("hide");
  }
  if (e.target.className == "task") {
    e.target.classList.add("done");
    completedTask.innerHTML++;
  }
});
document.body.addEventListener("click", (e) => {
  if (e.target.parentElement.classList[1] == "done") {
    completedTask.innerHTML--;
  }
});
