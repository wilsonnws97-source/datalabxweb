async function loadPartial(id, file) {
  const response = await fetch(file);
  const content = await response.text();
  document.getElementById(id).innerHTML = content;
}

loadPartial("header", "partials/header.html");
loadPartial("footer", "partials/footer.html");
