document.getElementById("paragraph1").innerHTML = "Trbalhando em algo top";
document.getElementsByTagName("div")[0].style.backgroundColor = "rgb(76,164,109)";
document.getElementsByTagName("div")[1].style.backgroundColor = "white";
document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";

function toUppercase() {
  let uppercase = document.getElementsByTagName("p")[0];
  uppercase.innerHTML = uppercase.innerHTML.toUpperCase();
}
toUppercase();

function showParagraphsContent() {
  let paragraphs = document.getElementsByTagName("p");
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerHTML);
  }
}
showParagraphsContent();