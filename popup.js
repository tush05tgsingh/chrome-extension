// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});
var console= chrome .extension.getBackgroundPage().console;
 console.log("hello");
// Listen to messages from the payload.js script and write to popout.html
/*chrome.runtime.onMessage.addListener(function (message) {
	document.getElementById('pagetitle').innerHTML = message;
	//var HTMLContent = document.getElementsByTagName('html')[0].innerHTML;
	//document.getElementsById('site-content').innerHTML = message;
});

chrome.runtime.onMessage.addListener(function (message) {
	document.getElementById('body').innerHTML = message;});*/

/*hrome.downloads.download(
            { url: "http://www.google.com",
              filename: "google.json" },
            function (x) { console.log(x); });*/

//JSON OBJECT:
var obj = [];
console.log("obj declared");
//console.log(obj);

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
						  if(message.method == 'setTitle')
							{
								var t=message.title;
								 document.getElementById('pagetitle').innerHTML = t;
               //console.log(t);
							obj.push({tittle:t});
							 //new_json=JSON.stringify(obj);
							 console.log(obj);
							 console.log("hi tushita 1");
							 document.getElementById('demo').innerHTML = new_json;
						 }
						 else if(message.method == 'setText')
						 {
							 var text=message.text;
							 document.getElementById('body').innerHTML = text;
							 //console.log(text);

							 obj.push({body:text});
							 //new_json=JSON.stringify(obj);
							 console.log(obj);
							 console.log("hi tushita");
							 document.getElementById('demo').innerHTML = new_json;
						 }
	});
