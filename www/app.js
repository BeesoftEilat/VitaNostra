// The base-page, nesseccery.
var page = tabris.create("Page", {
	style: ["FULLSCREEN"],
	topLevel: true
});

var address = "http://vitanostra.beesoft.co.il";

// requires an existing page in the UI
var xhr = new tabris.XMLHttpRequest();
xhr.onreadystatechange = function() {
	if(xhr.readyState === xhr.DONE) {
		if (xhr.status === 200) {
			var webview = tabris.create("WebView", {
				url: address,
				layoutData: {left: 0, top: 0, right: 0, bottom: 0}
			}).appendTo(page);
			page.open();
		} else {
			tabris.create("TextView", {
				layoutData: {left: 10, top: [page.children().last(), 10], right: 10},
				text: "You are offline, you must set up internet connection and then try again.",
				alignment: "left"
			}).appendTo(page);
			page.open();
		}
	}
};
xhr.open("GET", address);
xhr.send();