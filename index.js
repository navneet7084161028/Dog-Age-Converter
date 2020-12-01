 
function display()
{
	var a = document.getElementById('person').value;
	
	if(a>0&&a<=21)
	{
		a = a/10.5;
		b=parseInt(a);
		b1 = a-b;
		b2 = 12*b1;
		

		document.getElementById('dog').value=b+' '+'Year'+' '+parseInt(b2)+' '+'Month';
	}
	else
	{
		b = a-21;
		b1 = b/4;
		b2=parseInt(b1);
		b3=b1-b2;
		b4=12*b3;
		b5 = b1+2;
		document.getElementById('dog').value=parseInt(b5)+ ' ' +'Year' +' ' +b4 + ' ' +'Month';
	}
}