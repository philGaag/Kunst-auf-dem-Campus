arel.sceneReady(function()
{
	// create variable to work with a certain POI
    //var customPoi = arel.Scene.getObject("1");
    // commit a function to the POI
	// arel.Events.setListener(customPoi, function(obj, type, params){handleCustomPoiEvent(obj, type, params);});
});

function handleCustomPoiEvent(obj, type, param)
{
	//check if there is tracking information available
	if(type && type === arel.Events.Object.ONTOUCHSTARTED)
	{
		// $('#info .text').html(obj.getParameter("description"));
		// $('#info .buttons').html("<div class=\"button\" onclick=\"arel.Media.openWebsite('" + obj.getParameter("url") + "')\">" + obj.getParameter("url") + "</div>");
		// $('#info').show();
	}
};


function changeChannel(){
	arel.Scene.switchChannel(382664);
};