var acor=document.getElementsByClassName("accordion");
i=0;


for(i=0;i<acor.length;i++){

	acor[i].onclick=function(){
		this.classList.toggle("active");

		var box=this.nextElementSibling;

		if(box.style.display=="block"){
        
        box.style.display="none";

		}else{
			box.style.display="block";
		}
	}
}

