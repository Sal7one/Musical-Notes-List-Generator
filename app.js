
Array.prototype.shuffle = function() {
    let m = this.length, i;
    while (m) {
      i = (Math.random() * m--) >>> 0;
      [this[m], this[i]] = [this[i], this[m]]
    }
    return this;
  }

let timer = new easytimer.Timer({"precision": "secondTenths"});
timer.start();

timer.addEventListener('secondTenthsUpdated', function (e) {
document.querySelector(".timer").innerHTML = timer.getTimeValues().toString()
});

let notes = [
`<h1 class="note">A </h1>`,
`<h1 class="note">A# Bb </h1>`,
`<h1 class="note">B</h1>`,
`<h1 class="note">C</h1>`,
`<h1 class="note">C# Db </h1>`,
`<h1 class="note">D</h1>`,
`<h1 class="note">D# Eb</h1>`,
`<h1 class="note">E</h1>`,
`<h1 class="note">F</h1>`,
`<h1 class="note">F# Gb</h1>`,
`<h1 class="note">G</h1>`,
`<h1 class="note">G# Ab</h1>`];

function build(){
let elementsToBuild ="";
notes.shuffle();

notes.forEach(note=> {
  elementsToBuild += note;
});

document.querySelector(".NoteHolder").innerHTML = elementsToBuild;
timer.reset();
}
function cleanTimerAndBuild(){
document.querySelector(".lastTime").innerHTML = "Last Time: " +  timer.getTimeValues().toString();
build();
}



document.querySelector(".btn").addEventListener("click", cleanTimerAndBuild)
build();