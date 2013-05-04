function itemHeightCalc(){ //item/overlay height calc
	var	windowHeight = $(window).height(); //window height
	var $elmImg = $('img'); //img (quickfix)
	
	if (defaultSettings.columnsNo == 2){ //2 columns
		var col2HeightCalc = windowHeight * 0.477; //do calc
		var overlayTop = 'div.overlayTop'; //get overlay
		$($overlays).css({  //set heights
			'height': col2HeightCalc,
			'max-height': elmImgMaxHeight
		});
		$($elmImg).css({  //set heights
			'height': col2HeightCalc,
			'max-height': elmImgMaxHeight
		});
	}
	
	else if (defaultSettings.columnsNo == 3){ //3 columns
		var col3HeightCalc = windowHeight * 0.333; //do calc
		$($overlays).css({  //set heights
			'height': col3HeightCalc,
			'max-height': elmImgMaxHeight
		});
		$($elmImg).css({  //set heights
			'height': col3HeightCalc,
			'max-height': elmImgMaxHeight
		});
	}
	
	else if (defaultSettings.columnsNo == 6){ //6 columns
		var col6HeightCalc = windowHeight * 0.161; //do calc
		$($overlays).css({  //set heights
			'height': col6HeightCalc,
			'max-height': elmImgMaxHeight
		});
		$($elmImg).css({  //set heights
			'height': col6HeightCalc,
			'max-height': elmImgMaxHeight
		});
	}
}
function itemHeightCalcReset(){ //item/overlay height calc reset
	$($overlays).height('auto');
	$($elmImg).height('auto');
}