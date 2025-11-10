/*
function klickreaction (parameter) {
    theDiv.style.color = "red";
    theDiv.style.backgroundColor = "blue"
    theDiv2.style.color = "white"
}

let theLink = document.getElementById("link1");
document.getElementById("link1").innerHTML = "neuer Text";
theLink.innerHTML = "neuster Text";
theLink.style.color = "red";
theLink.style.backgroundColor = "white"
theLink.style.fontSize = "30pt"

let theDiv = document.getElementById("div1")
document.getElementById("link1").addEventListener("click", klickreaction);

let theDiv2 = document.getElementById("div2")
document.getElementById("link1").addEventListener("click", klickreaction);
*/

/*
// --- dark mode toggle ---

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    // change the theme of the website
    document.body.classList.toggle("dark");
});

let 
*/

// --- array & for loop ---

const charactername = [
  "akuma",
  "ryu",
  "chun-li",
  "ken",
  "m.bison",
  "cammy",
  "vega",
  "sagat",
  "balrog",
  "dhalsim",
  "blanka",
  "zangief",
  "e.honda",
  "guile",
  "thawk",
  "feilong",
  "deejay",
  "t.hawk",
  "sakura",
  "oni",
  "evil ryu",
  "juri",
  "cody",
  "gouken",
  "gill",
];
document.getElementById("demo-liste").innerHTML = charactername;

const images = [
  (Image1 = "../img/akuma.png"),
  (Image2 = "../img/ryu.png"),
  (Image3 = "../img/chun-li.png"),
];

// was letzt endlich ausgespielt wird
let character = "";
for (let i = 0; i < charactername.length; i++) {
  character +=
    "<span class='sf6'>" +
    (i + 1) +
    ".) " +
    charactername[i] +
    "</span>" +
    "<br>";
}

document.getElementById("demo-liste").innerHTML = character;

let imageList = "";
for (let i = 0; i < images.length; i++) {
  imageList +=
    "<img src='" +
    images[i] +
    "' alt='character image' width='100px' height='100px'>" +
    " ";
}

document.getElementById("demo-images").innerHTML = imageList;
