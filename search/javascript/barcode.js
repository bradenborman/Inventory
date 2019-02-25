var barcodes = [];
var lastUPC_Length = 0;
var scannedCount = 0;




$(document).ready(function(){
var isEnterDown = false	
var isLetter_S_Down = false	

var barcodeStr = [];
	
		$(document).on('keydown','body',function(e) {
						
			if(e.keyCode==13)
				isEnterDown = true;
			if(e.keyCode==83)
				isLetter_S_Down = true;	

			if(isEnterDown && isLetter_S_Down)	
				showLoggedIn()
				
				
			barcodeStr.push(returnKeyCodeValue(e.keyCode))			
			
				if(scannedCount == 1) {		
					setTimeout(function(){ parseBarcodes(barcodeStr.join("")) }, 100);
					setTimeout(function(){ showLast() }, 200);
				}
		});
		
		$(document).on('keyup','body',function(e) {
			if(e.keyCode==13)
				isEnterDown = false;
			if(e.keyCode==83)
				isLetter_S_Down = false;	
		});
			
});


function showLoggedIn() {
	$("#user").slideDown("slow").delay(2000).slideUp("slow");
}

function parseBarcodes(barcodeStr) {
	scannedCount++
	var barcodesLocal = barcodeStr.split(" ");
	var endResults = []
	
	
	for(var x = 0; x < barcodesLocal.length; x++) {
		if(barcodesLocal[x].length > 4)
			endResults.unshift(barcodesLocal[x])
	
	}
		
	barcodes = endResults
	if(scannedCount == lastUPC_Length){
	scannedCount = 0
	lastUPC_Length = 0
	}
	
}

function showLast() {
	
	if(!$('#barcodeINPUT').is(':focus')) 
	{
		var x = barcodes.length
		$('#barcodeINPUT').val(barcodes[0])
	}
}

function returnKeyCodeValue(keyEntered) {
	
lastUPC_Length++	
	
console.log("Keycode: " + keyEntered)
	
	switch(keyEntered) {
	  case 48:
		return "0"
	  case 49:
		return "1"
	  case 50:
		return "2"
	  case 51:
		return "3"
	  case 52:
		return "4"
	  case 53:
		return "5"
	  case 54:
		return "6"
	  case 55:
		return "7"
	  case 56:
		return "8"
      case 57:
		return "9"
	  case 189:
		return "-"
	  default:
		return " "
	}

}

	function validateBarCode(x) {
		return x.length > 4 ? true : false
	}











