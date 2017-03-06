var count=1;
var total=5;
function slides(x){
	count+=x
	var image= document.getElementById('img')
	if(count > total){count = 1;}
	if(count <1 ){ count = total;}
	image.src="images/img"+ count+".jpeg";
}