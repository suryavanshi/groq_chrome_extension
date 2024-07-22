// popup.js
document.getElementById('scrapeButton').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "scrape"}, function(response) {
      if (response && response.data) {
        callGroqAPI(response.data);
      }
    });
  });
});

function callGroqAPI(text) {
  chrome.runtime.sendMessage({
    action: "makeAPICall",
    data: {
      messages: [
        {
          role: "user",
          content: "Summarize following text :\n\n" + text
        }
      ],
      model: "llama3-8b-8192"
    }
  }, function(response) {
    if (response.success) {
      document.getElementById('result').innerText = response.data.choices[0].message.content;
    } else {
      document.getElementById('result').innerText = "Error: " + response.error;
    }
  });
}