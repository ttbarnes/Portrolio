/*
	* Portrolio 1.1.1
	* A responsive portfolio layout with vertical overlay, dynamic height calculation/resizing, tooltips, colour schemes and more
	* URL to go here
	*
	* Author: Tony Barnes
	* http://tonybarnes.me
	* No license or copyright - do what you like
	*
	* Last updated: 09/06/2013
	* Reqruiments: 
	* 1: jQuery
	* 2: Media.match (https://github.com/weblinc/media-match)
	* 3: Inview (http://github.com/protonet/jquery.inview)
	*
*/
;(function($){

	var methods = {
		init : function(options) {
		
		  //default settings
			var defaultSettings = $.extend({ //default,public? settings
				columnsNo: 3, //no. of colums (3, X, X)
				columnsDiy: false, //cancel column width calculations
				activeHoverStates: {
					dim:true,
					dimOnly:false,
					toolTip:true, //tooltip, no slide
					toolTipFixedBtm:false, //tooltip fixed at bottom (default will slide but can be switched off)
					toolTipSlide:true, //tooltip and slide
				},
				
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
					var columsNoResult = defaultSettings.columnsNo; //get columns
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
				
				function aHStatesDefault() { //active hover states
					$elm.each(function() {
						if (defaultSettings.activeHoverStates.dim == true || defaultSettings.activeHoverStates.dimOnly == true){
							$parentElm.addClass('dimActive');
							$(this).hover(function(e){
								$elm.addClass('active');
								var $elmHover = $(this);
								$($elmHover).addClass('hovered');
							},
							function(e){
								$elm.removeClass('active');		
								$(this).removeClass('hovered');
							});
						}
						
						if(defaultSettings.activeHoverStates.toolTip == true) {
							$parentElm.addClass('dimActive');
							$parentElm.addClass('ttipTitleActive');
							if ($(this).find('span.title').length > 0) {
								$(this).hover(function(e){
									var $elmHover = $(this);
									var $toolTip = $('<div class="toolTip"><span class="bg"/></div>').appendTo(this); //create toolTip and bg
									$('div.toolTip').show();
									$($elmHover).children('span.title').appendTo('div.toolTip');
								},
								function(e){
									$elm.removeClass('active');
									$(this).removeClass('hovered');										
									$('div.toolTip span.title').appendTo(this); //move title back to parent item
									$('div.toolTip').remove();
									$(this).removeClass('hovered');
									$('div.toolTip').hide();
								});		
							}
						}	
								
						if (defaultSettings.activeHoverStates.toolTipSlide == true) { //tooltip slide
							$(this).hover(function(e){
								var $elmHover = $(this);
								$('div.toolTip').addClass('toolTipSlideIn').animate({ bottom: "0" },200);							
							},
							function(e){
								$('div.toolTip').animate({ bottom: "-25px" }); //remove/reset tooltip
							});
						}
						
						if(defaultSettings.activeHoverStates.toolTipFixedBtm == true){ //toolTip fixed bottom
							$($parentElm).addClass('toolTipFixedBtm');
						}
						
						if (defaultSettings.activeHoverStates.dim == false || defaultSettings.activeHoverStates.dimOnly == true){
							$parentElm.addClass('dimActive');
							$(this).hover(function(e){
								$elm.addClass('active');
								var $elmHover = $(this);
								$($elmHover).addClass('hovered');
							},
							function(e){
								$elm.removeClass('active');		
								$(this).removeClass('hovered');
							});
						}
						
						
						if (defaultSettings.activeHoverStates.dim == false) { //dim false
							if(($parentElm).hasClass('dimActive')){
								$parentElm.removeClass('dimActive');
							}
						}
						
					});
				} //active hover states END
				
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
					
					if ((defaultSettings.columnsNo == 2) || (defaultSettings.columnsNo == 3)) { //2 or columns
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
						var heightResult1 = windowHeight * 0.161; //do calc
						var heightResult2 = heightResult1 * 2;
						$('div.overlay').css({  //set heights
							'height': heightResult2,
							'max-height': heightResult2
						});
						$('div.item img').css({  //set heights
							'height': heightResult2,
							'max-height': heightResult2
						});
					}
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
				 
				function enquireMediaQ() { //matchMedia - make it all dynamic.
					
					var mql1 = window.matchMedia('screen and (min-width: 768px)');
					var mql2 = window.matchMedia('screen and (max-width: 768px)');
					//var mql3 = window.matchMedia('screen and (min-width: 480px)');
					var mql4 = window.matchMedia('screen and (max-width: 480px)');
					
					window.matchMedia('screen and (min-width: 768px)')
						.addListener(function(mql1) {
							if (mql1.matches) {
								console.log('mql1 matches')
								itemHeightCalcReset(); //item/overlay height calc reset
								aHStatesDefault();
							}
						});
						if (mql1.matches) {
							console.log('mql1 matches')
							itemHeightCalcReset(); //item/overlay height calc reset
							aHStatesDefault();
						}
					
					window.matchMedia('screen and (max-width: 768px)')
						.addListener(function(mql2) {
							if (mql2.matches) {
							  $elm.unbind('mouseenter mouseleave'); //unbind all hover events
							  $parentElm.removeClass('dimActive'); //remove class
							  $parentElm.removeClass('toolTipSlideIn'); //remove class
							}
					});
					
				  window.matchMedia('screen and (max-width: 480px)')
					  .addListener(function(mql4) {
							if (mql4.matches) {							 
								if ($('div.toolTip').length > 0){ 
									 $('div.toolTip').remove();
								}
							  $elm.hide().fadeIn(300);
							  createOverlays(); //create, append overlays
							  itemHeightCalc(); //item/overlay height calc
							  overlayInView(); //in view - overlays
							}
					});
					if (mql4.matches) {							 
						if ($('div.toolTip').length > 0){ 
							 $('div.toolTip').remove();
						}
						$elm.hide().fadeIn(300);
						createOverlays(); //create, append overlays
						itemHeightCalc(); //item/overlay height calc
						overlayInView(); //in view - overlays
					}
					
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
						function enquireMediaQTimed(){ //item height calculations
							
							var mql1 = window.matchMedia('screen and (min-width: 480px)');
							var mql2 = window.matchMedia('screen and (max-width: 480px)');
							window.matchMedia('screen and (min-width: 480px)')
								if (mql1.matches) {
									itemHeightCalcReset(); //item/overlay height calc reset
								}
							window.matchMedia('screen and (max-width: 480px)')
								if (mql2.matches) {
									itemHeightCalc(); //item/overlay height calc
								}
						}
						enquireMediaQTimed();						
					}, 500);
				});
				
				//loading fails in Opera (mac)
				/*
	      var $loading = $('<div id="loading">loading...</div>', {}).insertBefore($parentElm); //create loading element
				$loading.show(); //show the loading
				$parentElm.hide(); //hide the stream
				var $elmImg = $('div.item img'); //select images (quick-fix)
				$elmImg.load(function(){ //after images loaded
				  $loading.hide(); //hide the loading
					$parentElm.fadeIn(800).show(); //fade in
				});
				*/
				
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