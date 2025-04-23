function changeContent() {
  const msg = document.getElementById("message");
  msg.textContent = "The message and background have changed!";
  msg.style.backgroundColor = "#d1f7c4";
  msg.style.padding = "10px";
  msg.style.borderRadius = "8px";
}

function addElement() {
  const ul = document.getElementById("item-list");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${ul.children.length + 1}`;
  ul.appendChild(newItem);
}

function removeElement() {
  const ul = document.getElementById("item-list");
  if (ul.children.length > 0) {
    ul.removeChild(ul.lastChild);
  }
}
