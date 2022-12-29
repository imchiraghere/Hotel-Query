function acroom()
{	image.src="AcRoom.png"
	result.innerHTML=Ac.value
}

function suroom()
{
	image.src="suitroom.png"
	result.innerHTML=Su.value
}

function preiroom()
{
	image.src="Preimum.png"
	result.innerHTML=prei.value
}

function res()
{	
	if(Ac.checked)
	{
		var pri=parseInt(Ac.value)
		
	}
	else if (Su.checked)
	{
		var pri=parseInt(Su.value)
	}
	else if(prei.value)
	{
		var pri=parseInt(prei.value)
	}
	
	var amt=parseInt(txt1.value)
	
	if (bre.checked)
	{
		var br=parseInt(bre.value)*amt
		var t=pri+br
	}
	else{
		var t=pri
	}
	
	result.innerHTML=t
}



/*
	var ac="<table border='1' cellpadding='2'>"
		ac+="<tr><td><img src='AcRoom.png' width='195'></td>"
		ac+="<td>"+aa+"</td></tr>"
		
		ac+="<table border='1' cellpadding='2'>"
		ac+="<tr><td><input type='text' id='txt1' placeholder='No. Of Person' size='52'></td></tr>"
		ac+="<tr><td><input type='Checkbox' id='lun' value='lunch'><b>Lunch</b>"
		ac+="<input type='Checkbox' id='brk' value='breakfast' align='right'><b>BreakFast</b>"
		ac+="<input type='Checkbox' id='din' value='dinner'><b>Dinner</b>"
		ac+="<tr><td align='center'><b>Amount : </b></td></tr></table>"
		
*/
