$(document).ready(function(){
	$('#subnext').click(function(){
		var comp=$('#company').val();
		var type=$('#type').val();
		var need=$('#need').val();
		console.log(comp)
		if (comp=='lenovo') 
		{
			if(type=='desk')
			{
				if(need=='game')
				{
					window.location.href='/computer_store/dell_desk_game/'	
				}
			}
		}
	});
});