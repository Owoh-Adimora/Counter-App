let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;


function increment() {
  //this function is for the count increment!
  count += 1;
  //replaces the default 0 in count with new increased number!
  countEl.textContent = count;
}

function save() {
  //concatenates the count and Entry display strings!
  let countStr = count + " - ";
  //updates the entries once the save button is clicked!
  saveEl.textContent += countStr;
  //reset the value of count to 0 but the count will start from where it stopped previously!
  countEl.textContent = 0;
  //Resets count to 0 once save already and count Starts afresh!
  count = 0;
  
}
console.log(count)