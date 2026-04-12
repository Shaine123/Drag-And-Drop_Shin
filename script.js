const lists = document.querySelectorAll(".list");
const cards = document.querySelectorAll(".card");

for (const list of lists) {
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", drop);
  list.addEventListener("dragover", dragOver);
}

for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}

function dragStart(e) {
  const id = e.target.id;

  console.log(id);

  e.dataTransfer.setData("text/plain", id);
}

function drop(e) {
  e.preventDefault();

  const data = e.dataTransfer.getData("text/plain");

  const item = document.getElementById(data);

  e.target.append(item);
}

function dragEnter(e) {
  const listElement = e.target;

  console.log(listElement);

  listElement.classList.remove("over");
}

function dragLeave(e) {
  const listElement = e.target;

  listElement.classList.remove("over");
}

function dragEnd(e) {
  console.log(e.target);
}

function dragOver(e) {
  e.preventDefault();

  const listElement = e.target;

  listElement.classList.add("over");
}
