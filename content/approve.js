function getElementWithName(value, tag) {
  const elements = document.getElementsByTagName(tag);
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].textContent != value) continue;
    return elements[i];
  }
}

document.addEventListener("DOMNodeInserted", function (node) {
  if (node.target.className == "page-container") {
    const btn_approve = getElementWithName("Approve", "button");

    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        btn_approve.click(setTimeout(Math.random()*5000)+3000)
        // if (!mutation.target.disabled) {
        //   btn_approve.click();
        // }
      });
    });

    observer.observe(btn_approve, {
      attributes: true,
    });
  }
});
