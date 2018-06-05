## What happens when you visit website?

# High-level Overview
The browser will connect to URL's servers, and send an HTTP request that includes a method verb indicating if it wants to read or write data. If I’ve been to the site before, the request will also send cookies as part of the headers including an expectation of how to send data back to the browser. The server will receive that request, process it, and send back an HTTP response that will include a status code indicating success or failure, and a payload of data which will typically be HTML. My browser will process that HTML and render it in the browser.

# Detailed Answer
When you are entering the URL in the browser, depending on the algorithms of your browser, various suggestions will be presented to you. Most of these algorithms sort and prioritize results based on search history, bookmarks, cookies, and popular searches from the internet as a whole. 
Once you press "Enter", a keydown event will be triggered and your browser will parse the URL and contain Protocol("http") and Resources(eg: "/" index page) information.
The browser checks its "preloaded HSTS (HTTP Strict Transport Security)" list. This is a list of websites that have requested to be contacted via HTTPS only. If the website is in the list, the browser sends its request via HTTPS instead of HTTP.
Your browser will consult cache and local hosts to find the IP address of the URL. If not found, DNS, or Domain Name System will be consulted.
Once your browser has used DNS to find the IP address of the website you want to connect to, it starts to establish a connection. To do this, it runs through a three-step handshake process:
- Your computer asks the website server if it's open to establishing new connections.
- If the website can do so, it acknowledges that you are clear to connect.
- Your computer then sends an acknowledgment that it received the confirmation.
Next, your browser sends a request to the website asking to download its data. This contains some additional information about what browser you're using and what the purpose of the connection is.
The server receives this request, and then generates a response in a particular format. It sends this response back to your browser.
Now comes the fun part! Your browser receives the response, and uses it to display the website you requested. You'll see the page in its entirety after just a moment, and can interact with it as needed.

## How does SSL or TLS work between the browser and a server?
SSL and TLS operate by having the browser and the server exchange encryption data and keys so that any information they transmit between one another is encrypted. It’s important so that anyone with access to the physical connecting wires/cables of the Internet (or access to wireless signals) are unable to read that data. While it first started for e-commerce, it’s gained a lot of popularity in recent years in light of man-in-the-middle attacks and other data breaches.