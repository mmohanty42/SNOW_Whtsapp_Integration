SNOW_Whtsapp_Integration
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	
	<a> <img src="whtsapp.png" width="22" title="Popup Teams" onclick="userWindow('${ref}')" tabindex="0"></img></a>
	
	<script>
		function userWindow(reference)
		{
		var resVal = reference.split('.');
		var fieldName = resVal[1];
		var sysId = g_form.getValue(fieldName);
		var user = new GlideRecord('sys_user');
		
		if(user.get(sysId)){
		mob = user.mobile_phone.toString();
		}
		mob='<Number>';
		if(mob){
		var w = getTopWindow();
		w.open('https://wa.me/' + mob,  '_top');
		<!-- open('sip: ' + 'mxxxxxxxxxxx.com',  '_top'); -->
		}
		}
	</script>
</j:jelly>
