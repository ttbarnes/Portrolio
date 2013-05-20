 $('div.item, div.item img');
						 
						 
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
							
							
							