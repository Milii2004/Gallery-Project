let gallery = [];

$(".add").click(function() {
    if( $(".picture-url").val() !== "" ){
		
        let holidays = $(".picture-url").val();
    	gallery.push(holidays);
    	$(".gallery").append("<img src=" + holidays + ">");
    }
    
    else{
        alert("Invaild Link");
    }
    
});  

