/*
	* Portrolio Alpha v1.1.1
	* Plugin description to go here
	* URL to go here
	*
	* Copyright 2013, Tony Barnes
	* http://tonybarnes.me
	* Free license stuff to go here
	*
	* Date: 24/04/2013
	* Reqruiments: 
	* 1: jQuery
	* 2: XXXX
	* 3: XXXX
	*
*/

;(function($){
	
	var methods = {
		init : function(options) {
		
		  //default settings
			var defaultSettings = $.extend({ //default,public? settings
				columnsNo: 3, //no. of colums (3, X, X)
				columnsDiy: false, //cancel column width calculations
				activeHoverStatesAll: true, //active hover states (everything), on/off
				activeHoverStates: {  //active hover state specifics
					//activeHoverDim: true  //just the dim
					//activeHoverToolTipTitles: true //hover titles?
					//activeHoverToolTipFixedBtm: false //toolTip  fixed at the bottom
					//activeHoverToolTipSlide:true //toolTip titles slide in
				},
				pageSelectors: {
					header: 'div.header',
					footer: 'div.footer' 
				},
				clrSchemes: true, //color schemes
				  clrScheme: { 
						lightBlue:true //lightBlue (lightBlue, darkBlue, black, white, grey)
				  }
			}, options);
			
			return this.each(function(){
				
				//private settings/vars
				var $parentElm = $(this).children('div.streamInnerWrapper'); //parent element
				var $elm = $parentElm.children('div.item'); //individual items
				var $elmImg = $elm.children('img')[0]; //item img
				var elmImgMaxHeight = $('img').height(); //img height
				
				//column layout				
				var $columnsAllowed = [2, 3, 6], //allowed columns
				i = $columnsAllowed;
				if (defaultSettings.columnsDiy == false) {	
					var columsNoResult = defaultSettings.columnsNo; //get columns no/value
					//for(var i = 0; i < columnsAllowed.length; i++){ 
					if (defaultSettings.columsNoResult == $columnsAllowed[i]) { //need to figure out how to test this from the var instead of hard coded.
					
						if (defaultSettings.columnsNo == 2){ //2 columns
							$parentElm.addClass('col2');
						}
						else if (defaultSettings.columnsNo == 3){ //3 columns
							$parentElm.addClass('col3');
						} 
						else if (defaultSettings.columnsNo == 6){ //6 columns
							$parentElm.addClass('col6');
						}
						else {
							console.log('error - please enter 2, 3 or 6 columns') //error
							$parentElm.hide();
						}
					}
					else {
						console.log('error - please enter 2, 3 or 6 columns') //error
							$parentElm.hide();
					}
				}					
				//else if (defaultSettings.columnsDiy == true){
				//	console.log('columnsDiy active - no columns calculations')
				//}
				
				//image resizing (and potential for popup) to go here - something like...
				//get image src, store for the A HREF 
				//resize the image for a thumb, dynamic css (and enq.JS integration)? - or width:100%; then calc parent elm.. *something*...
				//click > popup
				//do other popup stuff like...
				//(will need to refactor a few things before hand) - create array, for NEXT/PREV buttons and arrow control stuff.
				//resizing/calculations for the responsive popup
				//thumbs in the popup? - prob no (mobile first?)
				//some fancy animation options or something?
			 
				//active/hover states
				function activeHoverStates() { //items active/hover/dim states
					$elm.each(function() {
						$(this).hover(function(e){ //hover/mouseOver
							$elm.addClass('active'); //add class
							var $elmHover = $(this);
							$($elmHover).addClass('hovered'); //add class			
						},
						function(e){ //mouseOut
							$elm.removeClass('active');
							$(this).removeClass('hovered');
						});
					});
				} //items active/hover states end
				
				function activeHoverStatesDim() { //items active/hover/dim states
					$parentElm.addClass('dimActive'); //add class
					$elm.each(function() {
						$(this).hover(function(e){ //hover/mouseOver
							$elm.addClass('active'); //add class
						},
						function(e){ //mouseOut
							$elm.removeClass('active');
						});
					});
				}
				
				//tooltip
				function activeHoverToolTip() {
					$elm.each(function() {
						
						if ($(this).find('span.title').length > 0) { //if title exists
						
							if (defaultSettings.activeHoverStates.activeHoverToolTipSlide == false) { //if slide setting is false
								$(this).hover(function(e){ //hover/mouseOver
									var $elmHover = $(this);
									var $toolTip = $('<div class="toolTip"><span class="bg"/></div>').appendTo(this); //create toolTip and bg		
									$($elmHover).children('span.title').appendTo($toolTip); //append title
									$('div.toolTip').fadeIn(300);
								},
								function(e){ //mouseOut
									//$elm.removeClass('active'); //remove class
									$('div.toolTip span.title').appendTo(this); //move title back to parent item
									$('div.toolTip').fadeOut(200).remove(); //remove/reset tooltip
									$(this).removeClass('hovered'); //remove class
								});
							}
							else { 
								$(this).hover(function(e){ //hover/mouseOver
									$parentElm.addClass('toolTipSlideIn'); //add parent class
									var $elmHover = $(this);
									var $toolTip = $('<div class="toolTip toolTipSlideIn"><span class="bg"/></div>').appendTo($elmHover); //create toolTip and bg		
									$($elmHover).children('span.title').appendTo($toolTip); //append title
									$('div.toolTip').fadeIn(300).css('bottom', '0px');
								},
								function(e){ //mouseOut
									$elm.removeClass('active'); //remove class
									$('div.toolTip span.title').appendTo(this); //move title back to parent item
									$('div.toolTip').css('bottom', '-25px').fadeOut(200).remove(); //remove/reset tooltip
									$(this).removeClass('hovered'); //remove class
								});
							}	
						}
						else {
							//do nothing - title doesn't exist
						}
						
					});
				} //tooltip - activeHoverToolTip end
				
				function activeHoverToolTipFixedBtm() { //tooltip fixed bottom
					$parentElm.addClass('toolTipFixedBtm');
				}
				
				function activeHoverToolTipReset() { //tooltip reset
					$('div.toolTip').remove();
					$('span.title').remove();
				}
				
				function activeHoverStatesReset() { //items active/hover states reset - remove classes
					$($elm).removeClass('active, hovered'); //remove classes
					$($parentElm).removeClass('dimActive');
					$($elm).hover(function(e){ //hover/mouseOver
						$($elm).removeClass('active', 'hovered');
					},
					function(e){ //mouseOut
						$($elm).removeClass('active', 'hovered');
					});
				}
			  
				function createOvelays() { //create, append overlays
				  var $overlayTop = $('<div class="overlay overlayTop"/>', { //create overlay top, set height
						id: 'streamOverlayTop'
					}).insertBefore($parentElm.children(':eq(0)'));
					var $overlayBtm = $('<div class="overlay overlayBtm"/>', { //create overlay btm, set height
						id: 'streamOverlayBtm'
					}).appendTo($parentElm);	
					var $overlays = $('div.overlay'); //get overlays
				}
				
				//color schemes
				if (defaultSettings.clrSchemes == true) {
				  if (defaultSettings.clrScheme.lightBlue == true){ //light blue
						$parentElm.addClass('clrSchemeLightBlue');
						}
					else if (defaultSettings.clrScheme.darkBlue == true){ //dark blue
						$parentElm.addClass('clrSchemeDarkBlue');
					}
					else if (defaultSettings.clrScheme.black == true){ //black
						$parentElm.addClass('clrSchemeBlack');
					}
					else if (defaultSettings.clrScheme.white == true){ //white
						$parentElm.addClass('clrSchemeWhite');
					}
					else if (defaultSettings.clrScheme.grey == true){ //grey
						$parentElm.addClass('clrSchemeGrey');
					}
					else if (defaultSettings.clrScheme.none == true){ //none
						$parentElm.addClass('clrSchemeNone');
					}
				}
				
				//enquire - make it all dynamic.	
				
				//enquire.js - awesome media queries (http://wicky.nillia.ms/enquire.js/) - custom dynamic
				function enquireMediaQ() {
				
				  enquire.register("screen and (min-width:768px)", {
					  match : function() {
						 
							//options init
							if (defaultSettings.activeHoverStatesAll ==  true) { //activeHover all
								 activeHoverStates();
								 activeHoverToolTip();
							}
							
							if (defaultSettings.activeHoverStates.activeHoverToolTipTitles == true) { //activeHover tooltip titles
								 activeHoverToolTip(); //toolTip titles only
							}
						 
							if (defaultSettings.activeHoverStates.activeHoverToolTipFixedBtm == true) { //activeHover fixed btm
								 activeHoverToolTipFixedBtm(); //toolTip fixed bottom
							}
							
							else if (defaultSettings.activeHoverStatesAll ==  false) { //activeHover false
								 //do nothing?
							}
							
							if (defaultSettings.activeHoverStates.activeHoverDim == true) { //activeHoverDim
								 activeHoverStates();
								 activeHoverStatesDim();
							}
							else if (defaultSettings.activeHoverStates.activeHoverDim == false) { //activeHoverDim false
								//do nothing?
							}
							else {
								activeHoverStatesDim();
							}
							
							if (defaultSettings.activeHoverStates.activeHoverToolTipTitles == true) { //activeHoverTitles
								 activeHoverToolTip(); //tooltip title stuff
							}
							else if (defaultSettings.activeHoverStates.activeHoverToolTipTitles == false) {
								//do nothing
							}
							 
					  }
				 }).register("screen and (max-width:768px)", {
					 match : function() { 
						 $elm.unbind('mouseenter mouseleave'); //unbind all hover events
					 }
				
				 }).register("screen and (min-width:480px)", {
					 match : function() {
						 
					 }
				 }).register("screen and (max-width:480px)", {
					 match : function() {
					   console.log('MAX-WIDTH:480PX ACTIVE')
				     createOvelays(); //create, append overlays
					 }
				
				 }).listen();
				
				}
				enquireMediaQ();
				
				
				/*
				$(window).resize(function() {	//window resize
				 enquireMediaDynamic(); //enquire.js - awesome media queries (http://wicky.nillia.ms/enquire.js/) - custom dynamic
				 ////////
				 ////
				 // ^ Don't use the exact same function. Possible to create 'minified'/simpler callback and depedancies? EG 'if options X + Y = Z, var I = yes...'?
				 ////
				 ////////
				});
				*/
	
		  });	
			
		}
	};
  $.fn.Portrolio = function( method ) {
    if (methods[method]) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } 
		else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } 
		else {
      $.error('Error!');
    } 
  };
	return this;
})(jQuery);