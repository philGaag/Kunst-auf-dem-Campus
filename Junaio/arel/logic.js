var artistProfile,
	informationText,
	closeButton,
	gallery,
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

	artistProfile = arel.Object.Model3D.createFromImage("artistProfile", "resources/Buttons/artist.png");
	artistProfile.setVisibility(true);
	artistProfile.setCoordinateSystemID(1);
	artistProfile.setScale(new arel.Vector3D(1.0,1.0,1.0));
	artistProfile.setTranslation(setPosition(artistProfile, 0, 0, 20));
	arel.Scene.addObject(artistProfile);

	// informationText = arel.Object.Model3D.createFromImage("informationText", "resources/Buttons/information.png");
	// informationText.setVisibility(true);
	// informationText.setCoordinateSystemID(1);
	// informationText.setScale(new arel.Vector3D(1.0,1.0,1.0));
	// informationText.setTranslation(setPosition(informationText, 100, 0, 20));
	// arel.Scene.addObject(informationText);

	// closeButton = arel.Object.Model3D.createFromImage("closeButton", "resources/Buttons/close.png");
	// closeButton.setVisibility(true);
	// closeButton.setCoordinateSystemID(1);
	// closeButton.setScale(new arel.Vector3D(2.0,2.0,2.0));
	// closeButton.setTranslation(setPosition(closeButton, 300, 0, 20));
	// arel.Scene.addObject(closeButton);

	// gallery = arel.Object.Model3D.createFromImage("gallery", "resources/Buttons/gallery.png");
	// gallery.setVisibility(true);
	// gallery.setCoordinateSystemID(1);
	// gallery.setScale(new arel.Vector3D(1.0,1.0,1.0));
	// gallery.setTranslation(setPosition(gallery, 200, 0, 20));
	// arel.Scene.addObject(gallery);

	// artistProfile = arel.Scene.getObject("artist_profile");	
	// informationText = arel.Scene.getObject("information");	
	// closeButton = arel.Scene.getObject("close");		
	// gallery = arel.Scene.grtObject('gallery');									
	// ***************************************************************************************
	// 																										currentObject, type, params, open)
	arel.Events.setListener(arel.Scene.getObject("artistProfile"), function(obj, type, params){openArtistInfo(obj, type, params, informationText);});
	arel.Events.setListener(arel.Scene.getObject("closeButton"), function(obj, type, params){closeStuff(obj, type, params, loremText, artistProfile);});
});

function setPosition(target, x, y, z){
	position = target.getTranslation();
    position.setX(position.getX() + x);
    position.setY(position.getY() + y);
    position.setY(position.getY() + y);
    return position;
};

function changeCoordinateSystemId(id){
	artistProfile.setCoordinateSystemID(id);
	informationText.setCoordinateSystemID(id);
	gallery.setCoordinateSystemID(id);
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
				changeCoordinateSystemId(1);
			}
			
			if(param[0].getCoordinateSystemID() == 2){
				hideHtmlStuff();
				changeCoordinateSystemId(2);
				// loremText.setTexture("resources/Text/lorem_text.png");
			}
			if(param[0].getCoordinateSystemID() == 3){
				// kunst
				hideHtmlStuff();
				changeCoordinateSystemId(3);
			}
			if(param[0].getCoordinateSystemID() == 4){
				hideHtmlStuff();
				changeCoordinateSystemId(4);
			}
			if(param[0].getCoordinateSystemID() == 5){
				changeCoordinateSystemId(5);
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