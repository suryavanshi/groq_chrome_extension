# groq_chrome_extension
A Simple Chrome Extention which LLM to summarize the page


## Built at the Agents 2.0 Hackathon - https://lu.ma/ai-agents-2.0?tk=SKFIMt

Replace the GROQ_API_KEY in groq_ext/background.js with your own key.

## How to install and use the extension
To run and test this code as a Chrome extension, follow these steps:

Create a new directory for your extension with all the files in this repo. Make sure to update the Groq API key in popup.js. 

Open Google Chrome and go to chrome://extensions/.  
Enable "Developer mode" by toggling the switch in the top right corner.  
Click on "Load unpacked" and select the directory containing the extension files.  

The extension should now appear in Chrome toolbar.

To test the extension:

Navigate to any webpage.
Click on the extension icon in the toolbar to open the popup.  
Click the "Scrape and Analyze" button in the popup.  
The extension should scrape the page content, send it to the Groq API, and display the result in the popup.  
