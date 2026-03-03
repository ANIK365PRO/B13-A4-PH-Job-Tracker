### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

	getElementById(): take id from DOM then return an element . But when can't found id from DOM then return null .

	getElementByClassName(): take class name from DOM then return an HTMLCollection . But when can't found class from DOM then return empty [] . It's give live collection.
	
	querySelector(): support id, class, tag and attribute. It's return first element from DOM . But when can't found target from DOM then return null .

	querySelectorAll(): support id, class, tag and attribute.  it's return NodeList. But when can't found class from DOM then return empty [] . It's a static collection.

### 2. How do you create and insert a new element into the DOM?

	Firstly, we can take a selector and then get document . Secondly, create an element and then set innerText or innerHtml. finally new element insert to the  parent document .

### 3. What is Event Bubbling? And how does it work?

	Event Bubbling is a process in the DOM where The event moves from the child element up to its parent, then to the grandparent, and so on. It works by starting the event on the clicked element and automatically passing it up to its parent elements in the DOM tree.

### 4. What is Event Delegation in JavaScript? Why is it useful?

	Event Delegation is a technique where you add a single event listener to a parent element instead of adding separate listeners to multiple child elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?	

	preventDefault(): Stops browser's automatic behavior.
	stopPropagation(): Stops event from going to parent .
