chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "scrape") {
    let pageContent = document.body.innerText;
    sendResponse({data: pageContent});
  }
});