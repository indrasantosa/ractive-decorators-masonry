/*

	ractive-decorators-masonryjs
	============================

	Version 0.0.1.

	Ractive decorator for masonry.js

	==========================

	Troubleshooting: If you're using a module system in your app (AMD or
	something more nodey) then you may need to change the paths below,
	where it says `require( 'ractive' )` or `define([ 'ractive' ]...)`.

	==========================

	Usage: Include this file on your page below Ractive, e.g:

	    <script src='lib/ractive.js'></script>
	    <script src='lib/ractive-decorators-masonryjs.js'></script>

	Or, if you're using a module loader, require this module:

	    // requiring the plugin will 'activate' it - no need to use
	    // the return value
	    require( 'ractive-decorators-masonryjs' );

	<< more specific instructions for this plugin go here... >>

*/

(function ( global, factory ) {

	'use strict';

	// AMD environment
	if ( typeof define === 'function' && define.amd ) {
		define([ 'ractive', 'masonry' ], factory );
	}

	// Common JS (i.e. node/browserify)
	else if ( typeof module !== 'undefined' && module.exports && typeof require === 'function' ) {
		factory( require( 'ractive' ), require( 'masonry' ) );
	}

	// browser global
	else if ( global.Ractive && global.Masonry ) {
		factory( global.Ractive, global.Masonry );
	}

	else {
		throw new Error( 'Could not find Ractive or Masonry! It must be loaded before the ractive-decorators-masonryjs plugin' );
	}

}( typeof window !== 'undefined' ? window : this, function ( Ractive, Masonry ) {

	'use strict';

	var masonryItemDecorator = function(node, content) {
		//var container = document.querySelector(masonryItemDecorator.parentNodeId);
		//var msnry = new Masonry( container, masonryItemDecorator.masonryOptions );
		var msnry = masonryItemDecorator.parentNodes;
		msnry.addItems(node);

		return {
			teardown: function() {}
		}
	};

	//masonryItemDecorator.parentInfo = this;
	//masonryItemDecorator.parentNodeId = '#container';

	/* Default backup container to #container */
	var container = masonryItemDecorator.parentNodeId = '#container';
	masonryItemDecorator.masonryOptions = {
		columnWidth: 250,
		itemSelector: '.item'
	};
	if(container) {
		masonryItemDecorator.parentNodes = new Masonry(container, masonryItemDecorator.masonryOptions);	
	} else {
		masonryItemDecorator.parentNodes = null;
	}
	

	Ractive.decorators.masonryItem = masonryItemDecorator;
}));
