var artistProfileButton,
	textItem,
	informationButton,
	closeButton,
	galleryButton,
	position;

arel.sceneReady(function()
{
	arel.Events.setListener(arel.Scene, function(type, param){trackingHandler(type, param);});
	arel.Scene.getTrackingValues(function(trackingValues){receiveTrackingStatus(trackingValues);});	
	initialiseObjects();
	//																						   displayText(obj, type, params, itemToOpen){
	arel.Events.setListener(arel.Scene.getObject("artistProfileButton"), function(obj, type, params){displayText(obj, type, params, textItem);});

	arel.Events.setListener(arel.Scene.getObject("informationButton"), function(obj, type, params){displayText(obj, type, params, textItem);});

	arel.Events.setListener(arel.Scene.getObject("galleryButton"), function(obj, type, params){displayText(obj, type, params, textItem);});
// 																							 closeItem(obj, type, params, itemToClose,		 itemToOpen)
	arel.Events.setListener(arel.Scene.getObject("closeButton"), function(obj, type, params){closeItem(obj, type, params, informationButton, artistProfileButton);});
});


setPosition = function(target, x, y, z){
	position = target.getTranslation();
    position.setX(position.getX() + x);
    position.setY(position.getY() + y);
    position.setY(position.getY() + y);
    return position;
};

setCOS = function(id){
	artistProfileButton.setCoordinateSystemID(id);
	informationButton.setCoordinateSystemID(id);
	galleryButton.setCoordinateSystemID(id);
	textItem.setCoordinateSystemID(id);
	closeButton.setCoordinateSystemID(id);
};

trackingHandler = function(type, param){
	//check if there is tracking information available
	if(param[0] !== undefined)
	{
		//if the pattern is found, hide the information to hold your phone over the pattern and start the appear information on the trooper (if not done so already)
		if(type && type == arel.Events.Scene.ONTRACKING && param[0].getState() == arel.Tracking.STATE_TRACKING)
		{
			if(param[0].getCoordinateSystemID() == 1){
				hideHtmlStuff();
				setCOS(1);
			}
			if(param[0].getCoordinateSystemID() == 2){
				hideHtmlStuff();
				setCOS(2);
				// loremText.setTexture("resources/Text/lorem_text.png");
			}
			if(param[0].getCoordinateSystemID() == 3){
				hideHtmlStuff();
				setCOS(3);
			}
			if(param[0].getCoordinateSystemID() == 4){
				hideHtmlStuff();
				setCOS(4);
			}
			if(param[0].getCoordinateSystemID() == 5){
				setCOS(5);
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
receiveTrackingStatus = function(trackingValues)
{
	//the user is currently not holding the phone over a valid reference image -> fade in the information what to track
	if(trackingValues[0] === undefined)
		$('#info').fadeIn("fast");	
};
displayText = function(obj, type, params, itemToOpen){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
    	obj.setVisibility(false);
    	itemToOpen.setVisibility(true);
    	setText("resources/Text/plexitext.png");
    	closeButton.setVisibility(true);
    	closeButton.setParent(itemToOpen);
    }
};
closeItem = function(obj, type, params, itemToClose, itemToOpen){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
		obj.setVisibility(false);
		close.setVisibility(false);
		open.setVisibility(true);
	}
};
setText = function (replacementText){
	textItem.setTexture(replacementText);
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
function initialiseObjects(){
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
	// getting objects
	// artistProfileButton = arel.Scene.getObject("artist_profile");	
	// informationButton = arel.Scene.getObject("information");	
	// closeButton = arel.Scene.getObject("close");		
	// galleryButton = arel.Scene.grtObject('galleryButton');		
	// textItem = arel.Scene.getObject("textItem");							
	// ***************************************************************************************

	artistProfileButton = arel.Object.Model3D.createFromImage("artistProfileButton", "resources/Buttons/artist.png");
	artistProfileButton.setVisibility(true);
	artistProfileButton.setCoordinateSystemID(1);
	artistProfileButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	artistProfileButton.setTranslation(setPosition(artistProfileButton, 0, 0, 20));
	arel.Scene.addObject(artistProfileButton);

	textItem = arel.Object.Model3D.createFromImage("textItem", "resources/Text/lorem_text.png");
	textItem.setVisibility(false);
	textItem.setCoordinateSystemID(1);
	textItem.setScale(new arel.Vector3D(10.0,10.0,10.0));
	textItem.setTranslation(setPosition(textItem, 0, 0, 0));
	arel.Scene.addObject(textItem);

	informationButton = arel.Object.Model3D.createFromImage("informationButton", "resources/Buttons/information.png");
	informationButton.setVisibility(true);
	informationButton.setCoordinateSystemID(1);
	informationButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	informationButton.setTranslation(setPosition(informationButton, 100, 0, 0));
	arel.Scene.addObject(informationButton);

	closeButton = arel.Object.Model3D.createFromImage("closeButton", "resources/Buttons/close.png");
	closeButton.setVisibility(false);
	closeButton.setCoordinateSystemID(1);
	closeButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	closeButton.setTranslation(setPosition(closeButton, 150, 0, 20));
	arel.Scene.addObject(closeButton);

	galleryButton = arel.Object.Model3D.createFromImage("galleryButton", "resources/Buttons/gallery.png");
	galleryButton.setVisibility(true);
	galleryButton.setCoordinateSystemID(1);
	galleryButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	galleryButton.setTranslation(setPosition(galleryButton, 200, 0, 20));
	arel.Scene.addObject(galleryButton);
};