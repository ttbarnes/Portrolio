function enquireMediaQforSmallScreens() {
				
				  enquire.register("screen and (max-width:480px)", {	
					  match : function() {
										
							var	windowHeight = $(window).height(); //window height
							
							 itemHeightCalc(); //item/overlay height calc
						 	
					  }
				 });
				
				}
				
			 //dynamic height calculation
			 $(window).resize(function() {
				 console.log('WINDOW RESZIED');
				 
				 enquireMediaQforSmallScreens();
				 console.log('should be run!');
				 
			 });