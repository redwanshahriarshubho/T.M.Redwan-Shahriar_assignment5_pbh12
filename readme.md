
### Answer the following questions clearly:

1.What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById finds one element by its ID  like finding someone by their unique name. It's fast because IDs should be unique.

getElementsByClassName finds multiple elements by their class name and gives you a live list that updates automatically when the page changes.

querySelector finds the first element that matches any CSS selector you give it. It's flexible because you can use any CSS selector.

querySelectorAll finds all elements matching a CSS selector and gives you a list that doesn't change even if the page updates later.

2.How do you **create and insert a new element into the DOM**?

To create a new element,we use document.createElement('tagName'), like const div = document.createElement('div').
Then set its properties like div.textContent = 'Hello' or div.classList.add('class').
To add it to the page, we use parentElement.appendChild(div) to add it at the end, or parentElement.insertBefore(div, referenceElement) to put it before another element.

3.What is **Event Bubbling** and how does it work?

Event bubbling happens when an event starts at the target element and moves up through its parent elements. When something happens, the target element handles it first, then its parent, then the parent's parent, and so on up to the document. This lets parent elements handle events from their children.


4.What is **Event Delegation** in JavaScript? Why is it useful?

Event delegation means putting one event listener on a parent element instead of many listeners on child elements. You check event.target to see which child was actually clicked. It's useful because it uses less memory, works with elements added later, and is more efficient.

5.What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() stops the browser from doing its default action (like submitting a form or following a link), but the event still bubbles up to parent elements.
stopPropagation() stops the event from bubbling up to parent elements, but doesn't stop the browser's default action.

