import { GetfromLocalstorage, AddPost } from "./javascrip.js";

window.onload = PaintFromLocalStorage;

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  CreatepostDOM();
});

function PaintFromLocalStorage() {
  var dataFromLocalStorage = GetfromLocalstorage();

  dataFromLocalStorage.forEach((inlagg) => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");

    li.innerHTML = `
    <p type="text" value="${inlagg}">Titel:${inlagg.titel}</>
    <br>
    <p type="text" value="${inlagg.titel}">Inlägg: ${inlagg.inlagg}</>`;
    list.insertBefore(li, list.children[0]);
  });
}

function CreatepostDOM() {
  const inputData = document.getElementById("inputData").value;
  const inputTitel = document.getElementById("inputTitel").value;

  if (inputData === "" || inputTitel === "") {
    alert("lägg till titel och inlägg");
    return false;
  }
  var DataFromAddPost = AddPost(inputData, inputTitel);

  console.log(DataFromAddPost, "svarar denna alls?");

  if (inputData === "" || inputTitel === "") {
    return false;
  }

  document.getElementById("inputData").value = "";
  document.getElementById("inputTitel").value = "";

  const list = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerHTML = `
    <p type="text" value="${inputData}">Titel:${inputTitel}</>
    <br>
    <p type="text" value="${inputData}">Inlägg: ${inputData}</>`;
  list.insertBefore(li, list.children[0]);
}
