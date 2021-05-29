chrome.runtime.onMessage.addListener((data, sender) => {
  const send = data;
  if (send.action) {
    chrome.tabs.sendMessage(sender.tab.id, send, { frameId: 0 });
  }
});
