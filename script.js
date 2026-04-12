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
  // console.log("test");
}

function dragEnd(e) {
  // console.log("end");
}

function dragLeave(e) {
  // console.log("practice");
}

function dragOver(e) {
  e.preventDefault();
}
