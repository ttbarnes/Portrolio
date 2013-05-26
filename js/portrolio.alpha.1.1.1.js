/*
	* Portrolio Alpha v1.1.1
	* Plugin description to go here
	* URL to go here
	*
	* Author: Tony Barnes
	* http://tonybarnes.me
	* No license or copyright - do what you like
	*
	* Last updated: 26/05/2013
	* Original Release Date: XX/XX/2013
	* Reqruiments: 
	* 1: jQuery
	* 2: Enquire JS (URL HERE)
	* 3: Inview (URL HERE)
	*
*/
;(function($){
	
	var methods = {
		init : function(options) {
		
		  //default settings
			var defaultSettings = $.extend({ //default,public? settings
				columnsNo: 3, //no. of colums (3, X, X)
				columnsDiy: false, //cancel column width calculations
				activeHoverStates:true,
				/*
				activeHoverStates: {  //active hover states
					activeHoverDim:true, 
					activeHoverToolTipTitles:false,
					activeHoverToolTipFixedBtm:false,
					activeHoverToolTipSlide:true
				},
				*/
				pageSelectors: {
					header: 'div.header',
					footer: 'div.footer'
				},
				clrSchemes: true, //color schemes
				  clrScheme: { 
						darkBlue:true //darkBlue (lightBlue, darkBlue, black, white, grey)
				  }
			}, options);
			
			return this.each(function(){
				
				//private settings/vars
				var $parentElm = $(this).children('div.streamInnerWrapper'); //parent element
				var $elm = $parentElm.children('div.item'); //individual items
				var $elmImg = $elm.children('img')[0]; //item img
				var elmImgMaxHeight = $('img').height(); //img height
				
				//column layout				
				var $columnsAllowed = [2, 3, 6]; //allowed columns
				var $columnsNoResult = defaultSettings.columnsNo; //get columns result
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
				
				//active/hover states
				function activeHoverStates() { //items active/hover/dim states
					$parentElm.addClass('dimActive'); //add class
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
				
				
				function activeHoverToolTip() { //item tooltip - active tooltip
					$elm.each(function() {
						
						if ($(this).find('span.title').length > 0) { //if title exists
						  /*
							if (defaultSettings.activeHoverStates.activeHoverToolTipSlide == false) { //if slide setting is true
						
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
								*/
								$(this).hover(function(e){ //hover/mouseOver
									$parentElm.addClass('toolTipSlideIn'); //add parent class
									var $elmHover = $(this);
									var $toolTip = $('<div class="toolTip toolTipSlideIn"><span class="bg"/></div>').appendTo(this); //create toolTip and bg		
									$($elmHover).children('span.title').appendTo($toolTip); //append title
									$('div.toolTip').fadeIn(300).css('bottom', '0px');
								},
								function(e){ //mouseOut
									$elm.removeClass('active'); //remove class
									$('div.toolTip span.title').appendTo(this); //move title back to parent item
									$('div.toolTip').css('bottom', '-25px').fadeOut(200).remove(); //remove/reset tooltip
									$(this).removeClass('hovered'); //remove class
								});
								
								
							//}	
						}
						else {
							//do nothing - title doesn't exist
						}
						
					});
				} //item tooltip - active tooltip end
				
				function activeHoverToolTipFixedBtm() { //item tooltip - fixed bottom
					$parentElm.addClass('toolTipFixedBtm');
				}
				
				function activeHoverToolTipReset() { //item tooltip - reset
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
				
				var createOverlays = function createOverlays() { //create, append overlays
				  var $overlayTop = $('<div class="overlay overlayTop"/>', { //create overlay top, set height
						id: 'streamOverlayTop'
					}).insertBefore($parentElm.children(':eq(0)'));
					var $overlayBtm = $('<div class="overlay overlayBtm"/>', { //create overlay btm, set height
						id: 'streamOverlayBtm'
					}).appendTo($parentElm);	
				}
				
				function overlayInView() {  //in view - overlays
					
					//temporary selectors (POC)
					var $overlayTop = $('div.overlayTop');
					var $overlayBtm = $('div.overlayBtm');
					var $header = defaultSettings.pageSelectors.header;
					var $footer = defaultSettings.pageSelectors.footer;
					var $elmLast = $($parentElm).find('div.item:last'); //find last item, add class
					var $elm3 = $($parentElm).find('div.item:eq(2)'); //find 3rd item
					$elmLast.addClass('last');
							
					$($header).bind('inview', function(event, visible) { //if header in view
						if (visible) {
							$($overlayTop).css({'position': 'absolute', 'top':'0' });
							$($overlayBtm).css({'display': 'none' });
						} else {
							$($overlayTop).css({'position': 'fixed', 'top':'0' });
							$($overlayBtm).css({'display': 'block', 'position': 'fixed', 'bottom':'0'});
						}
					});
					
					$($elm3).bind('inview', function(event, visible) { //if 3rd item in view
						if (visible) {
							$($overlayBtm).css({'position': 'fixed', 'bottom':'0' });
						}
					});
					
					$($elmLast).bind('inview', function(event, visible) { //if last item in view
						if (visible) {
							$($overlayBtm).css({'position': 'absolute', 'bottom':'0' });
						} else {
							$($overlayBtm).css({'position': 'fixed', 'bottom':'0' });
						}
					});
					$($footer).bind('inview', function(event, visible) { //if footer in view (this will be the immediate item after #streamWrapper)
						if (visible) {
							$($overlayTop).css({'position': 'absolute', 'top':'0' });
						}
						else {
							$($overlayTop).css({'position': 'fixed', 'top':'0' });
						}
					});	
				}	
				
				function itemHeightCalcReset(){ //item/overlay height calc reset
					var $overlays = $('div.overlay'); //quickfix
					var $elmImg = $('img'); //quickfix
					$overlays.remove();
					if ($($elmImg).height == ('auto')) { //set auto height
					}
					else {
						$elmImg.height('auto');
					}
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
				
				function itemHeightCalc() { //item/overlay height calc
					var	windowHeight = $(window).height(); //window height
					var $overlays = $('div.overlay'); //get overlays
					var $elmImg = $('img'); //img (quickfix)
					
					if (defaultSettings.columnsNo == 2){ //2 columns
						var heightResult = windowHeight * 0.477; //do calc
						$('div.overlay').css({  //set heights
							'height': heightResult,
							'max-height': heightResult
						});
						$('div.item img').css({  //set heights
							'height': heightResult,
							'max-height': heightResult
						});
					}
					else if (defaultSettings.columnsNo == 3){ //3 columns
						var heightResult = windowHeight * 0.333; //do calc
						$('div.overlay').css({  //set heights
							'height': heightResult,
							'max-height': heightResult
						});
						$('div.item img').css({  //set heights
							'height': heightResult,
							'max-height': heightResult
						});
					}
					else if (defaultSettings.columnsNo == 6){ //6 columns
						var heightResult = windowHeight * 0.161; //do calc
						$('div.overlay').css({  //set heights
							'height': heightResult,
							'max-height': heightResult
						});
						$('div.item img').css({  //set heights
							'height': heightResult,
							'max-height': heightResult
						});
					}
				}
				
				function enquireMediaQ() { //enquire.js - awesome media queries (http://wicky.nillia.ms/enquire.js/) - custom - make it all dynamic.
				  enquire.register("screen and (min-width:768px)", {
					  match : function() {
						  itemHeightCalcReset(); //item/overlay height calc reset
						  activeHoverStates(); //items active/hover states, dim
							activeHoverToolTip(); //item tooltip,titles - active tooltip
					  }
				 }).register("screen and (max-width:768px)", {
					 match : function() { 
						 $elm.unbind('mouseenter mouseleave'); //unbind all hover events
						 $parentElm.removeClass('dimActive'); //remove class
						 $parentElm.removeClass('toolTipSlideIn'); //remove class
					 }
				
				 }).register("screen and (min-width:480px)", {
					 match : function() {
					 }
				 }).register("screen and (max-width:480px)", {	
					 match : function() {
					   $elm.hide().fadeIn(300); //hide and fade in
				     createOverlays(); //create, append overlays
						 itemHeightCalc(); //item/overlay height calc
						 overlayInView(); //in view - overlays
					 }
				
				 }).listen();
				}
				enquireMediaQ();
				
				var timerDelay = (function(){ //timer delay, see http://stackoverflow.com/questions/5489946/jquery-how-to-wait-for-the-end-or-resize-event-and-only-then-perform-an-ac
					var timer = 0;
					return function(callback, ms){
						clearTimeout (timer);
						timer = setTimeout(callback, ms);
					};
				})();
				
				$(window).resize(function() { //run after window resize is complete. Otherwise timer is reset.
					timerDelay(function(){
						function enquireMediaQTimed(){ //timed stuff - item height calculations
							//enquire.register("screen and (min-width:768px)", {
							//	match : function() {
							//	}		
						 //}).register("screen and (min-width:480px)", {
							enquire.register("screen and (min-width:480px)", {
								match : function() {
									itemHeightCalcReset(); //item/overlay height calc reset
									console.log('timer 2.2 active')
								}		
						 }).register("screen and (max-width:480px)", {
								match : function() {
									itemHeightCalc(); //item/overlay height calc
								}
						 }).listen();
						}
						enquireMediaQTimed();						
					}, 500);
				});

	      var $loading = $('<div id="loading">loading...</div>', {}).insertBefore($parentElm); //create loading element
				$loading.show(); //show the loading
				$parentElm.hide(); //hide the stream
				var $elmImg = $('div.item img'); //select images (quick-fix)
				$elmImg.load(function(){ //after images loaded
				  $loading.hide(); //hide the loading
					$parentElm.fadeIn(800); //fade in
				});
		
		  });
		}
	};
  $.fn.Portrolio = function(method) {
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