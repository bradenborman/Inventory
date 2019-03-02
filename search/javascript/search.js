
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
					
		for (var x = 0; x < ALL_ITEMS.length; x ++) {
			
				if(ALL_ITEMS[x].upc == barcode_val) {			
						$("#itemDescription").text(ALL_ITEMS[x].description);
						$("#itemPrice").text(ALL_ITEMS[x].price);
						$("#itemPrevOrderDate").text(ALL_ITEMS[x].prevOrderDate);
						$("#itemProvider").text(ALL_ITEMS[x].provider);
						$("#itemOnHand").text(ALL_ITEMS[x].onHand);
						$("#itemCap").text(ALL_ITEMS[x].capacity);
						
						$('#item_img').attr('src', ALL_ITEMS[x].imgsrc);
						$('#itemLink').attr("href", ALL_ITEMS[x].url);
					
					
						$(".featured_Item").fadeIn(300);
						$(".Stock_details").fadeIn(300);
					return
				}
	
 		}
		
		//If didnt find will result in hidding
		$(".featured_Item").hide();
		$(".Stock_details").hide();
		
	
	}
	
	function showModal() {
		//target="_blank" href="https://www.amazon.com/Scrubbing-Bubbles-Antibacterial-Bathroom-Cleaner/dp/B00HY51IIM add to link
		$(".overlay").fadeIn(100);
		$(".submit_buy_modal").slideDown(100);
	}
	
	function CloseModal() {
		$(".overlay").fadeOut(100);
		$(".submit_buy_modal").slideUp(1000);
	}
	