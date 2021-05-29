function getElementWithName(value, tag) {
  const elements = document.getElementsByTagName(tag);
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].textContent != value) continue;
    return elements[i];
  }
}

document.addEventListener("DOMNodeInserted", function (node) {
  if (node.target.className == "page-container") {
    chrome.runtime.onMessage.addListener((data) => {
      if (data.action == "deny") {
        const btn_deny = getElementWithName("Deny", "button");
        btn_deny.click();
      }
    });
  }

  if (node.target.className == "solver-controls" && node.target.childElementCount == 1) {
    chrome.runtime.sendMessage({ action: "deny" });
    console.log("Deny");
  }
});
