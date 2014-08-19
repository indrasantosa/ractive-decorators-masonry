# Ractive.js masonryjs decorator plugin

*Find more Ractive.js plugins at [docs.ractivejs.org/latest/plugins](http://docs.ractivejs.org/latest/plugins)*

[See the demo here.](TODO)

## Usage

Include this file on your page below Ractive, e.g:

```html
<script src='lib/ractive.js'></script>
<script src='lib/ractive-decorators-masonryjs.js'></script>
```

Or, if you're using a module loader, require this module:

```js
// requiring the plugin will 'activate' it - no need to use the return value
require( 'ractive-decorators-masonryjs' );
```

Create Masonry Container :
```
var container = document.querySelector("#container");
var msnry = new Masonry( container, {columnWidth: 250, itemSelector: ".item"});
```

Pass in masonry object(msnry) to parent Nodes then initialize Ractive accordingly :
```
Ractive.decorators.masonryItem.parentNodes = msnry;
var ractive = new Ractive({
	el: 'container',
	template: '#template',
	data: pageData
});
```

In template script, add decorator 'masonryItem' to render item accordingly
```
{{#each pageData}}
<div decorator='masonryItem' class="item" style="background-color: {{color}}; height: {{height}}px">{{name}}</div>
{{/each}}
```


## License

Copyright (c) 2014 Indra Santosa. Licensed MIT

Created with the [Ractive.js plugin template](https://github.com/ractivejs/plugin-template) for Grunt.
