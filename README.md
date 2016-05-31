# jQuery Rooster

## Description
Rooster is a simple jquery plugin that injects a timer, manages the countdown, and handles a few events based on the timer state.


## Usage
Define an element in your DOM with optional data attributes.
```html
<div class="timer" data-rooster-seconds=60 data-rooster-oncomplete="alert('Timer complete!');">
```

[Optional] Initialize the plugin on your element on page load to load the unstarted timer with the full time.
```javascript
$(document).ready(function() {
  $('.timer').rooster();
});
```

Start the countdown!
```javascript
$('.timer').rooster('start');
```

[Optional] You can also select the element, define the countdown attributes, and start the timer all in a single call
```javascript
$('.different-timer').rooster(
  'start',
  {
    seconds: 60,
    oncomplete: function() {
      alert('Timer complete!');
    }
  }
);
```


## Examples
Basic example: http://mhotwagner.github.io/jquery-rooster/examples/basic.html


## Future additions

* onStart handling
* onStop handling
* onInterval handling
* onSecond handling
* Date/time formatting
* Support beyond minutes
  



