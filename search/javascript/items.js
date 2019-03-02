
var ALL_ITEMS = [];

function Item(upc, description, price, prevOrderDate, provider, onHand, capacity, url, imgsrc) {
  this.upc = upc;
  this.description = description;
  this.price = price;
  this.prevOrderDate = prevOrderDate;
  this.provider = provider;
  this.onHand = onHand;
  this.capacity = capacity;
  this.url = url
  this.imgsrc = imgsrc
  ALL_ITEMS.push(this)
}



function loadItems() {
	
	var items1 = new Item("12345", "Scrubbing Bubbles", "$6.99", "Mon Feb 25 2019", "Amazon", "0", "5", "https://www.amazon.com/Scrubbing-Bubbles-Antibacterial-Bathroom-Cleaner/dp/B00HY51IIM", "https://target.scene7.com/is/image/Target/GUEST_0f5b151c-6b57-4aec-83e2-d4f378db67ce?wid=488&hei=488&fmt=pjpeg");
	
	var item2= new Item("2", "Bug Zapper", "$17.90", "", "Amazon", "0", "1", "https://www.amazon.com/Elucto-Electric-Mosquito-DURACELL-Batteries/dp/B073PXV2GW/ref=gbps_img_s-5_5baf_e07cbe28?smid=A3QLLBS1AWZW7U&pf_rd_p=a7e1c818-e7bc-4318-ae47-1f5300505baf&pf_rd_s=slot-5&pf_rd_t=701&pf_rd_i=gb_main&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=8PK8N1B6GD3KQ5WBHMGZ", "https://images-na.ssl-images-amazon.com/images/I/6107YxwL7kL._SL1250_.jpg");
	
	
	var items3 = new Item("15", "Dawn Soap", "$11.11", "", "Amazon", "0", "2", "https://www.amazon.com/Dawn-Soap-Blue-21-6-Fl/dp/B001XQ7LOS?th=1", "https://images-na.ssl-images-amazon.com/images/I/81ppQ8Mm8FL._SX522AA522_PIbundle-2,TopRight,0,0_AA522_SH20_.jpg");
	

}