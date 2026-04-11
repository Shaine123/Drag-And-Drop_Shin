const lists = document.querySelectorAll(".list");
const cards = document.querySelectorAll(".card");

for (const list of lists) {
  list.addEventListener("dragstart", dragStart);
  list.addEventListener("dragend", dragEnd);
}

for (const card of cards) {
  card.addEventListener("dragover", dragOver);
}

function dragStart(e) {
  const id = e.target.id;

  e.dataTransfer.setData("text/plain", id);
}
