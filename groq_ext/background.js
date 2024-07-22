// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "makeAPICall") {
    fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer GROQ_API_KEY'
      },
      body: JSON.stringify(request.data)
    })
    .then(response => response.json())
    .then(data => {
      sendResponse({success: true, data: data});
    })
    .catch(error => {
      console.error('Error:', error);
      sendResponse({success: false, error: error.toString()});
    });
    return true;  // Indicates that the response is asynchronous
  }
});