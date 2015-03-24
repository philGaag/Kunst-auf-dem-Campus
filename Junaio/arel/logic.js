var artistProfileButton,
	textItem,
	informationButton,
	closeButton,
	galleryButton,
	appleButton,
	towerButton,
	kugelButton,
	position,
	artistText,
	informationText,
	interval,
	rotation,
	layerNumberOneActive = true,
	layerNumberTwoActive = true,
	layerNumberThreeActive = true,
	activeObject,
	youTubeButton;

arel.sceneReady(function(){
	stopLoadingScreen();
	arel.Events.setListener(arel.Scene, function(type, param){trackingHandler(type, param);});
	arel.Scene.getTrackingValues(function(trackingValues){receiveTrackingStatus(trackingValues);});	
	initialiseObjects();
	arel.Events.setListener(arel.Scene.getObject("artistProfileButton"),function(obj, type, params){displayText(obj, type, params, textItem);});
	arel.Events.setListener(arel.Scene.getObject("informationButton"),function(obj, type, params){displayText(obj, type, params, textItem);});
	arel.Events.setListener(arel.Scene.getObject("galleryButton"),function(obj, type, params){displayText(obj, type, params, textItem);});
	arel.Events.setListener(arel.Scene.getObject("appleButton"),function(obj, type, params){handleSound(obj);});
	arel.Events.setListener(arel.Scene.getObject("towerButton"),function(obj, type, params){handleSound(obj);});
	arel.Events.setListener(arel.Scene.getObject("kugelButton"),function(obj, type, params){handleSound(obj);});
	arel.Events.setListener(arel.Scene.getObject("closeButton"),function(obj, type, params){closeItem(obj, type, params, textItem, activeObject);});
	arel.Events.setListener(arel.Scene.getObject("plexiglasLayerButton"),function(obj, type, params){openNumberButtons(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("layerNumberOne"),function(obj, type, params){handleLayers(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("layerNumberTwo"),function(obj, type, params){handleLayers(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("layerNumberThree"),function(obj, type, params){handleLayers(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("youTubeButton"),function(obj, type, params){playVideo(type);});


});
setPosition = function(target, x, y, z){
	position = target.getTranslation();
    position.setX(position.getX() + x);
    position.setY(position.getY() + y);
    position.setY(position.getY() + y);
    return position;
};
setObjectRotation = function(x, y, z){
	rotation = new arel.Rotation();
	rotation.setFromEulerAngleDegrees(new arel.Vector3D(x, y, z));
	return rotation;
};
playVideo = function(type){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
		arel.Media.startVideo("http://philg.avior.uberspace.de/Video/test.mp4");
		// which is nicer?
		// arel.Media.openWebsite("https://www.youtube.com/watch?v=7b2f2kpTVao");
	}
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
		//if the pattern is found, hide the information to hold your phone over the pattern
		if(type && type == arel.Events.Scene.ONTRACKING && param[0].getState() == arel.Tracking.STATE_TRACKING)
		{
			// Awesome Face
			if(param[0].getCoordinateSystemID() == 1){
				hideHtmlStuff();
				setCOS(1);
			}
			// Kapelle
			if(param[0].getCoordinateSystemID() == 2){
				hideHtmlStuff();
				setCOS(2);
				// define the text for the standard buttons
				artistText = "resources/Text/plexitext.jpg";
				informationText = "resources/Text/gollwitz.png";
			}
			// Plexiglas
			if(param[0].getCoordinateSystemID() == 3){
				hideHtmlStuff();
				setCOS(3);
				// define the text for the standard buttons
				artistText = "resources/Text/plexiglas_plastik.png";
				informationText = "resources/Text/different_text.png";
			}
			// Wandteppich links
			if(param[0].getCoordinateSystemID() == 4){
				hideHtmlStuff();
				setCOS(4);
				// play vid
			}
			// Wandteppich rechts
			if(param[0].getCoordinateSystemID() == 5){
				hideHtmlStuff();
				setCOS(5);
			}
			// Adam & Eva
			if(param[0].getCoordinateSystemID() == 6){
				hideHtmlStuff();
				setCOS(6);
			}
			// Adam & Eva unten
			if(param[0].getCoordinateSystemID() == 7){
				hideHtmlStuff();
				setCOS(7);
			}
			// Leber
			if(param[0].getCoordinateSystemID() == 8){
				hideHtmlStuff();
				setCOS(8);
			}

			// Numa
			if(param[0].getCoordinateSystemID() == 9){
				hideHtmlStuff();
				setCOS(9);
				// define the text for the standard buttons
				artistText = "resources/Text/plexiglas_plastik.png";
				informationText = "resources/Text/different_text.png";
			}
		}
		//if the pattern is lost tracking, show the information to hold your phone over the pattern
		else if(type && type == arel.Events.Scene.ONTRACKING && param[0].getState() == arel.Tracking.STATE_NOTTRACKING)
		{
			showHtmlStuff();
		}
	}
};
receiveTrackingStatus = function(trackingValues){
	if(trackingValues[0] === undefined)
		$('#info').fadeIn("fast");	
};
displayText = function(obj, type, params, itemToOpen){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
    	// check which buttons must be hidden 
    	switch(obj){
    		case artistProfileButton: 
    			informationButton.setVisibility(false);
    			galleryButton.setVisibility(false);
    			setText(artistText);
    			textItem.setVisibility(true);
    		break;

    		case informationButton: 
    			artistProfileButton.setVisibility(false);
    			galleryButton.setVisibility(false);
    			setText(informationText);
    			textItem.setVisibility(true);
    		break;

    		case galleryButton: 
    			artistProfileButton.setVisibility(false);
    			informationButton.setVisibility(false);
    			arel.Media.openWebsite("https://www.facebook.com");
    		break;
    	}
    	closeButton.setParent(itemToOpen);
    	closeButton.setVisibility(true);
    }
};

handleSound = function(obj){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
    	// check which button is triggered
    	switch(obj){
    		case appleButton: 
    			arel.Media.startSound(resources/audio/beam.mp3)
    		break;

    		case towerButton: 
    			arel.Media.startSound(resources/audio/beam.mp3)
    		break;

    		case kugelButton: 
    			arel.Media.startSound(resources/audio/beam.mp3)
    		break;
    	}

    }
};

closeItem = function(obj, type, params, itemToClose, activeObject){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
		obj.setVisibility(false);
		itemToClose.setVisibility(false);
		showAllButotns();
		textItem.setTexture("resources/Text/empty.png");
	}
};
setText = function (replacementText){
	textItem.setTexture(replacementText);
};
changeChannel = function(){
	arel.Scene.switchChannel(383691);
}; 
smoothIn = function(){
	interval = setInterval(function(){ smoothingLogic() }, 1000);
};
showAllButotns = function(){
	informationButton.setVisibility(true);
	galleryButton.setVisibility(true);
	artistProfileButton.setVisibility(true);
};
hideHtmlStuff = function(){
	$('#info').hide();
	$('#winning').show();
};
showHtmlStuff = function(){
	$('#info').show();
	$('#winning').hide();
};
stopLoadingScreen = function(){
	$(".star").css('-webkit-animation-play-state' , 'paused');
	$("#loading_box").hide();
};
openNumberButtons = function(obj, type, params){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
		plexiglasLayerButton.setVisibility(false);
		layerNumberOne.setVisibility(true);
		layerNumberTwo.setVisibility(true);
		layerNumberThree.setVisibility(true);
		plexiObjectLevelOne.setVisibility(true);
		plexiObjectLevelTwo.setVisibility(true);
		plexiObjectLevelThree.setVisibility(true);
	}
};
handleLayers = function(obj, type, params){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
		// make instruction text visible
		// make number buttons visible
		switch(obj){
			case layerNumberOne:
				if(layerNumberOneActive){
					plexiObjectLevelOne.setVisibility(false);
					layerNumberOneActive = false;
				}else{
					plexiObjectLevelOne.setVisibility(true);
					layerNumberOneActive = true;
				}
			break;
			case layerNumberTwo:
				if(layerNumberTwoActive){
					plexiObjectLevelTwo.setVisibility(false);
					layerNumberTwoActive = false;
				}else{
					plexiObjectLevelTwo.setVisibility(true);
					layerNumberTwoActive = true;
				}
			break;
			case layerNumberThree:
				if(layerNumberThreeActive){
					plexiObjectLevelThree.setVisibility(false);
					layerNumberThreeActive = false;
				}else{
					plexiObjectLevelThree.setVisibility(true);
					layerNumberThreeActive = true;
				}
			break;
		}
	}
};
function initialiseObjects(){
	// ***************************************************************************************
	// getting objects from php file
	// artistProfileButton = arel.Scene.getObject("artist_profile");	
	// ***************************************************************************************

	artistProfileButton = arel.Object.Model3D.createFromImage("artistProfileButton", "resources/Buttons/artist.png");
	artistProfileButton.setVisibility(true);
	artistProfileButton.setCoordinateSystemID(1);
	artistProfileButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	artistProfileButton.setTranslation(setPosition(artistProfileButton, 0, 0, 20));
	arel.Scene.addObject(artistProfileButton);

	textItem = arel.Object.Model3D.createFromImage("textItem", "resources/Text/empty.png");
	textItem.setVisibility(false);
	textItem.setCoordinateSystemID(1);
	textItem.setScale(new arel.Vector3D(10.0,10.0,10.0));
	textItem.setTranslation(setPosition(textItem, 0, 0, 0));
	arel.Scene.addObject(textItem);

	informationButton = arel.Object.Model3D.createFromImage("informationButton", "resources/Buttons/information.png");
	informationButton.setVisibility(true);
	informationButton.setCoordinateSystemID(1);
	informationButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	informationButton.setTranslation(setPosition(informationButton, 100, 0, 20));
	arel.Scene.addObject(informationButton);

	closeButton = arel.Object.Model3D.createFromImage("closeButton", "resources/Buttons/close.png");
	closeButton.setVisibility(false);
	closeButton.setCoordinateSystemID(1);
	closeButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	closeButton.setTranslation(setPosition(closeButton, 200, 150, 30));
	arel.Scene.addObject(closeButton);

	galleryButton = arel.Object.Model3D.createFromImage("galleryButton", "resources/Buttons/gallery.png");
	galleryButton.setVisibility(true);
	galleryButton.setCoordinateSystemID(1);
	galleryButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	galleryButton.setTranslation(setPosition(galleryButton, 200, 0, 20));
	arel.Scene.addObject(galleryButton);

	// Adam und Eva Objekte

	duerer = arel.Object.Model3D.createFromImage("duerer", "resources/AdamEva/duerer.png");
	duerer.setVisibility(true);
	duerer.setCoordinateSystemID(6);
	duerer.setScale(new arel.Vector3D(5.0,5.0,5.0)); //größe
	duerer.setTranslation(setPosition(duerer, 50, 0, 30)); //koordinaten
	arel.Scene.addObject(duerer);

	eyck = arel.Object.Model3D.createFromImage("eyck", "resources/AdamEva/eyck.png");
	eyck.setVisibility(true);
	eyck.setCoordinateSystemID(6);
	eyck.setScale(new arel.Vector3D(5.0,5.0,5.0)); //größe
	eyck.setTranslation(setPosition(eyck, 250, 0, 30)); //koordinaten
	arel.Scene.addObject(eyck);

	// Numa Objekte

	appleButton = arel.Object.Model3D.createFromImage("appleButton", "resources/Buttons/appleButton.png");
	appleButton.setVisibility(true);
	appleButton.setCoordinateSystemID(9);
	appleButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	appleButton.setTranslation(setPosition(appleButton, -100, 0, 50));
	arel.Scene.addObject(appleButton);

	towerButton = arel.Object.Model3D.createFromImage("towerButton", "resources/Buttons/towerButton.png");
	towerButton.setVisibility(true);
	towerButton.setCoordinateSystemID(9);
	towerButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	towerButton.setTranslation(setPosition(towerButton, 200, 200, 50));
	arel.Scene.addObject(towerButton);

	kugelButton = arel.Object.Model3D.createFromImage("kugelButton", "resources/Buttons/kugelButton.png");
	kugelButton.setVisibility(true);
	kugelButton.setCoordinateSystemID(9);
	kugelButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	kugelButton.setTranslation(setPosition(kugelButton, 300, 150, 50));
	arel.Scene.addObject(kugelButton);

	// Plexiglasplasik Objects COS:3
	// models
	plexiObjectLevelOne = arel.Object.Model3D.create("plexiObjectLevelOne", "resources/Models/level_1.md2", "resources/Models/blue.jpg");
	plexiObjectLevelOne.setCoordinateSystemID(2);
	plexiObjectLevelOne.setVisibility(false);
	plexiObjectLevelOne.setScale(new arel.Vector3D(0.1,0.1,0.1));
	plexiObjectLevelOne.setRotation(setObjectRotation(270,0,0));
	plexiObjectLevelOne.setTranslation(setPosition(plexiObjectLevelOne, 0, 0, 20));
	arel.Scene.addObject(plexiObjectLevelOne);

	plexiObjectLevelTwo = arel.Object.Model3D.create("plexiObjectLevelTwo", "resources/Models/level_2.md2", "resources/Models/green.jpg");
	plexiObjectLevelTwo.setCoordinateSystemID(2);
	plexiObjectLevelTwo.setVisibility(false);
	plexiObjectLevelTwo.setScale(new arel.Vector3D(0.1,0.1,0.1));
	plexiObjectLevelTwo.setRotation(setObjectRotation(270,0,0));
	plexiObjectLevelTwo.setTranslation(setPosition(plexiObjectLevelTwo, 0, 0, 20));
	arel.Scene.addObject(plexiObjectLevelTwo);

	plexiObjectLevelThree = arel.Object.Model3D.create("plexiObjectLevelThree", "resources/Models/level_3.md2", "resources/Models/red.jpg");
	plexiObjectLevelThree.setCoordinateSystemID(2);
	plexiObjectLevelThree.setVisibility(false);
	plexiObjectLevelThree.setScale(new arel.Vector3D(0.1,0.1,0.1));
	plexiObjectLevelThree.setRotation(setObjectRotation(270,0,0));
	plexiObjectLevelThree.setTranslation(setPosition(plexiObjectLevelThree, 0, 0, 20));
	arel.Scene.addObject(plexiObjectLevelThree);
	// BUTTONS
	//  Plexiglas layer button
	plexiglasLayerButton = arel.Object.Model3D.createFromImage("plexiglasLayerButton", "resources/Buttons/layer_button.png");
	plexiglasLayerButton.setVisibility(true);
	plexiglasLayerButton.setCoordinateSystemID(3);
	plexiglasLayerButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	plexiglasLayerButton.setTranslation(setPosition(plexiglasLayerButton, -100, 50, 30));
	arel.Scene.addObject(plexiglasLayerButton);

	// number buttons for 3d model
	layerNumberOne = arel.Object.Model3D.createFromImage("layerNumberOne", "resources/Buttons/number_one.png");
	layerNumberOne.setVisibility(false);
	layerNumberOne.setCoordinateSystemID(3);
	layerNumberOne.setScale(new arel.Vector3D(1.0,1.0,1.0));
	layerNumberOne.setTranslation(setPosition(layerNumberOne, -100, 100, 30));
	arel.Scene.addObject(layerNumberOne);

	layerNumberTwo = arel.Object.Model3D.createFromImage("layerNumberTwo", "resources/Buttons/number_two.png");
	layerNumberTwo.setVisibility(false);
	layerNumberTwo.setCoordinateSystemID(3);
	layerNumberTwo.setScale(new arel.Vector3D(1.0,1.0,1.0));
	layerNumberTwo.setTranslation(setPosition(layerNumberTwo, -100, 150, 30));
	arel.Scene.addObject(layerNumberTwo);

	layerNumberThree = arel.Object.Model3D.createFromImage("layerNumberThree", "resources/Buttons/number_three.png");
	layerNumberThree.setVisibility(false);
	layerNumberThree.setCoordinateSystemID(3);
	layerNumberThree.setScale(new arel.Vector3D(1.0,1.0,1.0));
	layerNumberThree.setTranslation(setPosition(layerNumberThree, -100, 200, 30));
	arel.Scene.addObject(layerNumberThree);

	// Wandteppich objects
	youTubeButton = arel.Object.Model3D.createFromImage("youTubeButton", "resources/Buttons/youtube.png");
	youTubeButton.setVisibility(true);
	youTubeButton.setCoordinateSystemID(1);
	youTubeButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	youTubeButton.setTranslation(setPosition(youTubeButton, 100, 50, 20));
	arel.Scene.addObject(youTubeButton);
};