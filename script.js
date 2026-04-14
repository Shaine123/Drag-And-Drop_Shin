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

  e.dataTransfer.setData("text/plain", id);
}

function drop(e) {
  e.preventDefault();

  e.target.classList.remove("over");

  const data = e.dataTransfer.getData("text/plain");

  const item = document.getElementById(data);

  e.target.append(item);
}

function dragEnter(e) {
  const listElement = e.target;

  listElement.classList.add("over");
}

function dragLeave(e) {
  const listElement = e.target;

  listElement.classList.remove("over");
}

function dragEnd(e) {
  console.log("ended");
}

function dragOver(e) {
  e.preventDefault();
}
