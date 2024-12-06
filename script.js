let listItems = document.querySelectorAll("li");
let sortedAscending = false;

function sortList() {
  let values = [];
  let index = 0;

  for (const li of listItems) {
    values.push(li.innerHTML);
  }

  if (sortedAscending) {
    values.sort().reverse();
    sortedAscending = false;
  } else {
    values.sort();
    sortedAscending = true;
  }

  for (const li of listItems) {
    li.innerHTML = values[index];
    index++;
  }
}
