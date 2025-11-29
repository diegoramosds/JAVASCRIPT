document.addEventListener("click", (e) => {
  if (e.target.classlist.contains("include-goals")) {
    console.log("including");
  }
});
