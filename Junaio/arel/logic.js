var artistProfile,
	loremText,
	closeButton,
	position;

arel.sceneReady(function()
{
	arel.Events.setListener(arel.Scene, function(type, param){trackingHandler(type, param);});
	arel.Scene.getTrackingValues(function(trackingValues){receiveTrackingStatus(trackingValues);});	

	// ***************************************************************************************
	// OPTION 1 FOR CREATING OBJECTS
	// ***************************************************************************************

	// loremText = arel.Object.Model3D.createFromImage("loremText", "resources/lorem_text.png");
	// loremText.setVisibility(false);
	// loremText.setCoordinateSystemID(1);
	// loremText.setScale(new arel.Vector3D(10.0,10.0,10.0));
	// loremText.setTranslation(setPosition(loremText, 500, 0, 20));
	// arel.Scene.addObject(loremText);


	// ***************************************************************************************
	// OPTION  FOR CREATING OBJECTS - OBJECT IS DEFINED IN THE PHP FILE!
	// ***************************************************************************************
	loremText = arel.Scene.getObject("text");	
	closeButton = arel.Scene.getObject("close");											
	// ***************************************************************************************


	artistProfile = arel.Object.Model3D.createFromImage("artistProfile", "resources/Buttons/artist.png");
	artistProfile.setVisibility(true);
	artistProfile.setCoordinateSystemID(1);
	artistProfile.setScale(new arel.Vector3D(1.0,1.0,1.0));
	artistProfile.setTranslation(setPosition(artistProfile, 250, -150, 5));
	arel.Scene.addObject(artistProfile);

	// 																										currentObject, type, params, open)
	arel.Events.setListener(arel.Scene.getObject("artistProfile"), function(obj, type, params){openArtistInfo(obj, type, params, loremText);});
	arel.Events.setListener(arel.Scene.getObject("closeButton"), function(obj, type, params){closeStuff(obj, type, params, loremText, artistProfile);});
});

function setPosition(target, x, y, z){
	position = target.getTranslation();
    position.setX(position.getX() + x);
    position.setY(position.getY() + y);
    position.setY(position.getY() + y);
    return position;
};

function trackingHandler(type, param)
{
	//check if there is tracking information available
	if(param[0] !== undefined)
	{
		//if the pattern is found, hide the information to hold your phone over the pattern and start the appear information on the trooper (if not done so already)
		if(type && type == arel.Events.Scene.ONTRACKING && param[0].getState() == arel.Tracking.STATE_TRACKING)
		{
			
			if(param[0].getCoordinateSystemID() == 1){
				hideHtmlStuff();
			}
			
			if(param[0].getCoordinateSystemID() == 2){
				hideHtmlStuff();
				artistProfile.setCoordinateSystemID(2);
				loremText.setCoordinateSystemID(2);
				// loremText.setTexture("resources/Text/lorem_text.png");
			}
			if(param[0].getCoordinateSystemID() == 3){
				// kunst
				hideHtmlStuff();
				artistProfile.setCoordinateSystemID(3);
				loremText.setCoordinateSystemID(3);
				loremText.setTexture("resources/Text/plexitext.jpg");
			}
			if(param[0].getCoordinateSystemID() == 4){
				hideHtmlStuff();
			}
			if(param[0].getCoordinateSystemID() == 5){
				
			}
		}
		//if the pattern is lost tracking, show the information to hold your phone over the pattern
		else if(type && type == arel.Events.Scene.ONTRACKING && param[0].getState() == arel.Tracking.STATE_NOTTRACKING)
		{
			showHtmlStuff();
		}
	}
};

//needed only for the start. If no valid tracking information is returned, show the "what to track" information
function receiveTrackingStatus(trackingValues)
{
	//the user is currently not holding the phone over a valid reference image -> fade in the information what to track
	if(trackingValues[0] === undefined)
		$('#info').fadeIn("fast");
	
	
};
function openArtistInfo(obj, type, params, open){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
    	obj.setVisibility(false);
    	open.setVisibility(true);
    	closeButton.setVisibility(true);
    	closeButton.setParent(loremText);
    }
};
function closeStuff(obj, type, params, close, open){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
		obj.setVisibility(false);
		close.setVisibility(false);
		open.setVisibility(true);
	}
};
changeChannel = function(){
	arel.Scene.switchChannel(383691);
}; 

hideHtmlStuff = function(){
	$('#info').hide();
	$('#winning').show();
};
showHtmlStuff = function(){
	$('#info').show();
	$('#winning').hide();
};