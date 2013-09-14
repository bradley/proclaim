Proclaim 
------
Proclaim is a lightweight alternative to some of the popular modal options made available by Bootstrap and Foundation. The javascript is made lighter by relying on CSS3 animations for modal transitions. I've found that this makes implementation highly customizable and understandable. However, this does have drawbacks. If you need to support older browsers, for example, this option may not be for you.

## Basic Usage
First off, you'll need to include the proclaim css and js files in your project along with a recent copy of jQuery. ;)

To use Proclaim modals, all you need to do is define the markup you want within a modal and add the `proclaim-modal` class to its container. Like so:

```
<div id="my-modal" class="proclaim-modal">
	<a class='modal-closer' href="#">x</a>
	<h1> Modal </h1>
  <p>
  	Praesent gravida condimentum mauris sit amet placerat. Vivamus dui massa, mollis id dolor eu, viverra placerat tellus. Nam sagittis facilisis sagittis. Praesent tempor sem justo, sed vehicula erat ultricies id. Duis quis imperdiet tortor. 
  </p>
</div>
```

Note that if you want to have multiple modals on the same page, you should give each of them a unique id attribute. This will allow you to open and close them indepently.

To open your modal, simply select it using jQuery and call the `#proclaim` method on it, like so:

```
$('#my-modal').proclaim();
```

Closing your modal is handled by default if the user clicks the background that appears behind an open modal. If you want to trigger this manually, such as would be the case if you wanted to add a custom close button like we did in the previous example, you can do so using the `#conceal` method like so:

```
$('#my-modal').conceal();
```

*There is a working example of proclaim modals in this repo's index.html project.*

## Other Considerations
I started this project because I wanted my modals to take up the full screen with a little padding and to be fixed to the screen so that scrolling did not effect the modal's positioning. If you want to make your modals fit their content, just change their height attribute to 'auto' or whatever fixed height you desire.