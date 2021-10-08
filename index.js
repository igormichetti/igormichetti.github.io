(function typer() {
  const typingArea = document.getElementById("typingText");
  const aboutMe = "Hi, my name is Igor and I'm working on this website.";
  let index = 0;
  let letter = aboutMe.slice(0, ++index);
  typingArea.innerText = letter;
  setTimeout(typer, 400);
})();
