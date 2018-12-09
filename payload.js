// send the page title as a chrome message
//chrome.runtime.sendMessage(title:document.title);
//chrome.runtime.sendMessage(document.body.innerText);
chrome.runtime.sendMessage({method:'setTitle',title:document.title});
chrome.runtime.sendMessage({method:'setText',text:document.body.innerText});
//chrome.runtime.sendMessage(document.body.innerText);
