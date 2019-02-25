
	function searchViaInput() {
		
		var barcode = $('#barcodeINPUT').val()
		
		if(validateBarCode(barcode))
			barcodes.unshift(barcode)
			
		if(barcodes.length > 0) {
			console.log(barcodes)
			lookup(barcode)
		}
	}
	
	
	function lookup(barcode_val) {
		//alert("Lookup of " + barcode_val)
		$(".featured_Item").fadeIn(300);
		$(".Stock_details").fadeIn(300);
	}
	
	function showModal() {
		//target="_blank" href="https://www.amazon.com/Scrubbing-Bubbles-Antibacterial-Bathroom-Cleaner/dp/B00HY51IIM add to link
		$(".overlay").fadeIn(100);
		$(".submit_buy_modal").slideDown(1000);
	}
	
	function CloseModal() {
		$(".overlay").fadeOut(100);
		$(".submit_buy_modal").slideUp(1000);
	}
	