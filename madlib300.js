// JavaScript Document        


$(document).ready(function(){ 
  
function madlib(){	   
	   		var nameVal = new String($('#name').val());
			var nounVal = new String($('#noun').val());
			var verbVal = new String($('#verb').val());
	   		var nameText = new String("Hey "+ nameVal + "! I didn't know you like to "+ verbVal + " with a "+ nounVal +"!" );	   
	   		var strAllMadText = new String(nameText);	   
	   		var contentText=document.getElementById("output");	   
	   		contentText.innerHTML=strAllMadText;	 	     
		}
	   
		$('#submit').click(madlib);	
});