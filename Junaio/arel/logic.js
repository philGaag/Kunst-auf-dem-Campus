var artistProfileButton,
	informationButton,
	closeButton,
	galleryButton,
	appleButton,
	towerButton,
	kugelButton,
	domButton,
	humansButton,
	hintText,
	position,
	artistText,
	informationText,
	interval,
	rotation,
	layerNumberOneActive = true,
	layerNumberTwoActive = true,
	layerNumberThreeActive = true,
	activeObject,
	youTubeButton,
	tempCOSID,
	plexiModelIsVisible = false,
	dumlerGallery = false,
	isOpen = false;

arel.sceneReady(function(){
	stopLoadingScreen();
	arel.Events.setListener(arel.Scene, function(type, param){trackingHandler(type, param);});
	arel.Scene.getTrackingValues(function(trackingValues){receiveTrackingStatus(trackingValues);});	
	initialiseObjects();
	arel.Events.setListener(arel.Scene.getObject("artistProfileButton"),function(obj, type, params){displayText(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("informationButton"),function(obj, type, params){displayText(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("galleryButton"),function(obj, type, params){openImageGallery(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("appleButton"),function(obj, type, params){handleSound(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("towerButton"),function(obj, type, params){handleSound(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("kugelButton"),function(obj, type, params){handleSound(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("domButton"),function(obj, type, params){handleSound(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("humansButton"),function(obj, type, params){handleSound(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("closeButton"),function(obj, type, params){closeItem(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("plexiglasLayerButton"),function(obj, type, params){openNumberButtons(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("layerNumberOne"),function(obj, type, params){handleLayers(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("layerNumberTwo"),function(obj, type, params){handleLayers(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("layerNumberThree"),function(obj, type, params){handleLayers(obj, type, params);});
	arel.Events.setListener(arel.Scene.getObject("youTubeButton"),function(obj, type, params){playVideo(type);});
});
openImageGallery = function(obj, type, params){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
		if(dumlerGallery){
			arel.Media.openWebsite("http://homepages.uni-regensburg.de/~knb07554/DumlerGalerie/gallery.html");
		}else{
			arel.Media.openWebsite("http://homepages.uni-regensburg.de/~knb07554/LeberGalerie/gallery.html");
		}
	}
};
setPosition = function(target, x, y, z){
	position = target.getTranslation();
    position.setX(0 + x);
    position.setY(0 + y);
    position.setZ(0 + z);
    return position;
};
setCloseButton = function(target){
	position = target.getTranslation();
	position.setX(position.getX() + 350);
    position.setY(position.getY() + 500);
    position.setZ(position.getZ() + 25);
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
	}
};
hideThings = function(){
	artistTextObject.setVisibility(false);
	informationTextObject.setVisibility(false);
	closeButton.setVisibility(false);
	closePlexiModel();
};
handleToast = function(){
	$("#toastText").fadeIn(500, function(){
		setTimeout(function(){
			$("#toastText").fadeOut( "slow" );
		},5000);
	});
};
setCOS = function(id){
	artistProfileButton.setCoordinateSystemID(id);
	informationButton.setCoordinateSystemID(id);
	artistTextObject.setCoordinateSystemID(id);
	informationTextObject.setCoordinateSystemID(id);
	closeButton.setCoordinateSystemID(id);
};
checkTrackingChanged = function(id){
	if (tempCOSID != id) {
		hideThings();
	};
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
				// tempCOSID = 1;
				// checkTrackingChanged();
				// hideHtmlStuff();
				setCOS(1);
				artistText = "resources/Text/itten_text.png";
				informationText = "resources/Text/teppich_text.png";
				// artistTextObject.setTranslation(setPosition(artistTextObject, 300, 100, 0));
				// artistProfileButton.setScale(new arel.Vector3D(10.0,10.0,10.0));
				$("#toastText").text("Drücke auf den youtube knopf um zu sehen wie solche teppiche hergestellt werden!");
				handleToast();
				// Things to be defined in here
				// set the texts for artistText
				// set the text for informationText
				// set the translation of artistTextObject
				// set the translation of informationTextObject
			}
			// Kapelle
			if(param[0].getCoordinateSystemID() == 2){
				// tempCOSID = 2;
				// checkTrackingChanged();
				// hideHtmlStuff();
				$('#toastText').text('Kapelle');
				handleToast();
				setCOS(2);
				// TEXT TEXTURE
				artistText = "resources/Text/jones_text.png";
				informationText = "resources/Text/kapellen_text.png";

				// TEXT POSITION
				// artistTextObject.setPosition(artistTextObject, 100,100,20);
				// informationTextObject.setPositioin(informationTextObject, 100,100,20);

				// TEXT SCALE
				// artistTextObject.setScale(new arel.Vector3D(5.0,5.0,5.0));
				// informationTextObject.setScale(new arel.Vector3D(5.0,5.0,5.0));

				// BUTTON POSITION
				// artistProfileButton.setPosition(artistProfileButton, 100,100,20);
				// informationButton.setPosition(informationButton, 200, 100, 20);

				// BUTTON SCALE
				// artistProfileButton.setScale(new arel.Vector3D(5.0,5.0,5.0));
				// informationButton.setScale(new arel.Vector3D(5.0,5.0,5.0));

			}
			// Plexiglas
			if(param[0].getCoordinateSystemID() == 3){
				// tempCOSID = 3;
				// checkTrackingChanged();
				$('#toastText').text('Drücke den Ebenenknopf um den Aufbau der Plastik zu untersuchen');
				handleToast();
				// hideHtmlStuff();
				setCOS(3);
				artistText = "resources/Text/plexiglas_text.png";
				informationText = "resources/Text/gollwitzer_text.png";

				artistProfileButton.setTranslation(setPosition(artistProfileButton, -300, -600, 25));
				informationButton.setTranslation(setPosition(artistProfileButton, 0, -600, 25));
				closeButton.setTranslation(setPosition(closeButton, 700, -400, 25));
				artistProfileButton.setScale(new arel.Vector3D(2.0, 2.0, 2.0));
				informationButton.setScale(new arel.Vector3D(2.0, 2.0, 2.0));
				closeButton.setScale(new arel.Vector3D(2.0, 2.0, 2.0));
				artistTextObject.setScale(new arel.Vector3D(15.0, 15.0, 15.0));
				informationTextObject.setScale(new arel.Vector3D(15.0, 15.0, 15.0));
				artistTextObject.setTranslation(setPosition(artistTextObject, 0, 250, 15));
				informationTextObject.setTranslation(setPosition(informationTextObject, 0, 250, 15));

			}
			// Wandteppich links
			if(param[0].getCoordinateSystemID() == 4){
				$('#toastText').text('Drücke auf den YouTube Knopf um ein Video zu sehen wie solche Teppiche gewebt werden.');
				handleToast();
				// tempCOSID = 4;
				// checkTrackingChanged();
				// hideHtmlStuff();

			};
			// Wandteppich rechts
			if(param[0].getCoordinateSystemID() == 5){
				$('#toastText').text('Halte dein Smartphone auf den anderen Teppich um ein Video zu sehen.');
				handleToast();
				// tempCOSID = 5;
				// checkTrackingChanged();
				// hideHtmlStuff();
				setCOS(5);
				// TEXT TEXTURE
				artistText = "resources/Text/itten_text.png";
				informationText = "resources/Text/teppich_text.png";
				// TEXT SCALE
				artistTextObject.setScale(new arel.Vector3D(25.0, 25.0, 25.0));
				informationTextObject.setScale(new arel.Vector3D(25.0, 25.0, 25.0));
				artistTextObject.setTranslation(setPosition(artistTextObject, 300, 0, 15));
				informationTextObject.setTranslation(setPosition(informationTextObject, 300, 0, 15));

				// closeButton.setScale(new arel.Vector3D(5.0, 5.0, 5.0));
				// closeButton.setTranslation(setPosition(closeButton, 1300, 1700, 25));
				// BUTTON POSITION
				artistProfileButton.setTranslation(setPosition(artistProfileButton, -800, 200, 20));
				informationButton.setTranslation(setPosition(informationButton, -800, 500, 20));
				// BUTTON SCALE
				artistProfileButton.setScale(new arel.Vector3D(3.0, 3.0, 3.0));
				informationButton.setScale(new arel.Vector3D(3.0, 3.0, 3.0));
			}
			// Adam & Eva
			if(param[0].getCoordinateSystemID() == 6){
				// tempCOSID = 6;
				// checkTrackingChanged();
				hideHtmlStuff();
				setCOS(6);
				$("#toastText").text("Gemeinsamkeiten der Gemälde sind Rot eingekreist");
				handleToast();
				// define the text for the standard buttons
				artistText = "resources/Text/grieshaber.png";
				informationText = "resources/Text/adam_eva_text.png";

				//set Position and Scale for standard buttons
				closeButton.setScale(new arel.Vector3D(0.5,0.5,0.5));
				artistProfileButton.setTranslation(setPosition(artistProfileButton, 60, 180, 50));
				informationButton.setTranslation(setPosition(informationButton, -60, 180, 50));
				artistProfileButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
				informationButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
			}
			// Dumler
			if(param[0].getCoordinateSystemID() == 7){
				// tempCOSID = 7;
				// checkTrackingChanged();
				// hideHtmlStuff();
				setCOS(7);
				$("#toastText").text("Zur Bildergalerie auf den rechten Button tippen");
				handleToast();
				// define the text for the standard buttons
				artistText = "resources/Text/plexiglas_plastik.png";
				informationText = "resources/Text/different_text.png";
				//set Position and Scale for standard buttons
				closeButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
				artistProfileButton.setTranslation(setPosition(artistProfileButton, -200, 0, 20));
				informationButton.setTranslation(setPosition(informationButton, 0, 0, 20));
				artistProfileButton.setScale(new arel.Vector3D(1.5,1.5,1.5));
				informationButton.setScale(new arel.Vector3D(1.5,1.5,1.5));
				//Gallery
				dumlerGallery = true;
				galleryButton.setCoordinateSystemID(7);
				galleryButton.setVisibility(true);
				galleryButton.setTranslation(setPosition(galleryButton, 200, 0, 20));
				galleryButton.setScale(new arel.Vector3D(1.5,1.5,1.5));
			}
			// Leber
			if(param[0].getCoordinateSystemID() == 8){
				// tempCOSID = 8;
				// checkTrackingChanged();
				// hideHtmlStuff();
				setCOS(8);
				$("#toastText").text("Zur Bildergalerie auf den rechten Button tippen");
				handleToast();
				// define the text for the standard buttons
				artistText = "resources/Text/leber_text.png";
				informationText = "resources/Text/motiv_text.png";
				//set Position and Scale for standard buttons
				closeButton.setScale(new arel.Vector3D(1.5,1.5,1.5));
				artistProfileButton.setTranslation(setPosition(artistProfileButton, -250, -300, 20));
				informationButton.setTranslation(setPosition(informationButton, 0, -300, 20));
				artistProfileButton.setScale(new arel.Vector3D(2.0,2.0,2.0));
				informationButton.setScale(new arel.Vector3D(2.0,2.0,2.0));
				//Gallery
				dumlerGallery = false;
				galleryButton.setCoordinateSystemID(8);
				galleryButton.setVisibility(true);
				galleryButton.setTranslation(setPosition(galleryButton, 250, -300, 20));
				galleryButton.setScale(new arel.Vector3D(2.0,2.0,2.0));

			}

			// Numa
			if(param[0].getCoordinateSystemID() == 9){
				// tempCOSID = 9;
				// checkTrackingChanged();
				// hideHtmlStuff();
				setCOS(9);
				$("#toastText").text("Klicke auf die Elemente um Audio-Infos zu ihnen zu erhalten");
				handleToast();
				// define the text for the standard buttons
				artistText = "resources/Text/numa_text.png";
				informationText = "resources/Text/gemaelde_text.png";
				//set Position and Scale for standard buttons
				closeButton.setScale(new arel.Vector3D(2.0,2.0,2.0));
				artistProfileButton.setTranslation(setPosition(artistProfileButton, 180, 850, 20));
				informationButton.setTranslation(setPosition(informationButton, -180, 850, 20));
				artistProfileButton.setScale(new arel.Vector3D(3.0,3.0,3.0));
				informationButton.setScale(new arel.Vector3D(3.0,3.0,3.0));
			}

		}
		//if the pattern is lost tracking, show the information to hold your phone over the pattern
		else if(type && type == arel.Events.Scene.ONTRACKING && param[0].getState() == arel.Tracking.STATE_NOTTRACKING)
		{
			// showHtmlStuff();
			$("#toastText").text("Richte dein Smartphone auf ein Kunstwerk.");
			handleToast();
		}
	}
};
receiveTrackingStatus = function(trackingValues){
	if(trackingValues[0] === undefined)
		$('#info').fadeIn("fast");	
};
displayText = function(obj, type, params){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
    	// check which buttons must be hidden 
    	switch(obj){
    		case artistProfileButton: 
				if(isOpen){
					activeObject.setVisibility(false);
					activeObject.setTexture("resources/Text/empty.png");
    				artistProfileButton.setTexture("resources/Buttons/artist.png");
					obj.setVisibility(false);
					showAllButtons();
					isOpen = false;
				}else{
	    			activeObject = artistTextObject;
	    			artistProfileButton.setTexture("resources/Buttons/close.png");
	    			artistTextObject.setTexture(artistText);
	    			artistTextObject.setVisibility(true);
    				informationButton.setVisibility(false);
	    			galleryButton.setVisibility(false);
	    			plexiglasLayerButton.setVisibility(false);
	    			youTubeButton.setVisibility(false);
					isOpen = true;
				}
    		break;

    		case informationButton: 
    			if(isOpen){
					activeObject.setVisibility(false);
					activeObject.setTexture("resources/Text/empty.png");
    				informationButton.setTexture("resources/Buttons/information.png");
					obj.setVisibility(false);
					showAllButtons();
					isOpen = false;
				}else{
	    			activeObject = informationTextObject;
	    			informationButton.setTexture("resources/Buttons/close.png");
	    			informationTextObject.setTexture(informationText);
	    			informationTextObject.setVisibility(true);
	    			artistProfileButton.setVisibility(false);
	    			galleryButton.setVisibility(false);
	    			plexiglasLayerButton.setVisibility(false);
	    			youTubeButton.setVisibility(false);
					isOpen = true;
		    	}
    		break;
    	}
    }
};

handleSound = function(obj, type, params){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
    	// check which button is triggered
    	switch(obj){
    		case appleButton: 
    			arel.Media.startSound("resources/audio/Apfel.mp3");
    		break;

    		case towerButton: 
    			arel.Media.startSound("resources/audio/Fernsehturm.mp3");
    		break;

    		case kugelButton: 
    			arel.Media.startSound("resources/audio/Kugel.mp3");
    		break;

    		case domButton: 
    			arel.Media.startSound("resources/audio/Dom.mp3");
    		break;

    		case humansButton: 
    			arel.Media.startSound("resources/audio/Personen.mp3");
    		break;
    	}
    }
};
closeItem = function(obj, type, params){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
		if (plexiModelIsVisible) {
			closePlexiModel();
			artistProfileButton.setVisibility(true);
			informationButton.setVisibility(true);
			closeButton.setVisibility(false);
		};
	}
};
changeChannel = function(){
	arel.Scene.switchChannel(383691);
}; 
showHelp = function(){
	arel.Media.openWebsite("http://philg.avior.uberspace.de/helpText/index.html");
};
showAllButtons = function(){
	informationButton.setVisibility(true);
	galleryButton.setVisibility(true);
	artistProfileButton.setVisibility(true);
	plexiglasLayerButton.setVisibility(true);	
	youTubeButton.setVisibility(true);
};
// hideHtmlStuff = function(){
// 	$('#info').hide();
// 	$('#winning').show();
// };
// showHtmlStuff = function(){
// 	$('#info').show();
// 	$('#winning').hide();
// };
stopLoadingScreen = function(){
	$(".star").css('-webkit-animation-play-state' , 'paused');
	$("#loading_box").hide();
};
openNumberButtons = function(obj, type, params){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
		$("#toastText").text("Drücke die Zahlen um die jeweilige Ebene zu aktivieren.");
		handleToast();
		plexiglasLayerButton.setVisibility(false);
		layerNumberOne.setVisibility(true);
		layerNumberTwo.setVisibility(true);
		layerNumberThree.setVisibility(true);
		plexiObjectLevelOne.setVisibility(true);
		plexiObjectLevelTwo.setVisibility(true);
		plexiObjectLevelThree.setVisibility(true);

		artistProfileButton.setVisibility(false);
		informationButton.setVisibility(false);

		plexiModelIsVisible = true;
		closeButton.setVisibility(true);
	}
};
handleLayers = function(obj, type, params){
	if(type && type === arel.Events.Object.ONTOUCHSTARTED){
		switch(obj){
			case layerNumberOne:
				if(layerNumberOneActive){
					plexiObjectLevelOne.setVisibility(false);
					layerNumberOneActive = false;
					layerNumberOne.setTexture("resources/Buttons/number_one_grey.png");
				}else{
					plexiObjectLevelOne.setVisibility(true);
					layerNumberOneActive = true;
					layerNumberOne.setTexture("resources/Buttons/number_one.png");
				}
			break;
			case layerNumberTwo:
				if(layerNumberTwoActive){
					plexiObjectLevelTwo.setVisibility(false);
					layerNumberTwoActive = false;
					layerNumberTwo.setTexture("resources/Buttons/number_two_grey.png");
				}else{
					plexiObjectLevelTwo.setVisibility(true);
					layerNumberTwoActive = true;
					layerNumberTwo.setTexture("resources/Buttons/number_two.png");
				}
			break;
			case layerNumberThree:
				if(layerNumberThreeActive){
					plexiObjectLevelThree.setVisibility(false);
					layerNumberThreeActive = false;
					layerNumberThree.setTexture("resources/Buttons/number_three_grey.png");
				}else{
					plexiObjectLevelThree.setVisibility(true);
					layerNumberThreeActive = true;
					layerNumberThree.setTexture("resources/Buttons/number_three.png");
				}
			break;
		}
	}
};
closePlexiModel = function(){
	layerNumberOne.setVisibility(false);
	layerNumberTwo.setVisibility(false);
	layerNumberThree.setVisibility(false);
	plexiObjectLevelOne.setVisibility(false);
	plexiObjectLevelTwo.setVisibility(false);
	plexiObjectLevelThree.setVisibility(false);
	plexiglasLayerButton.setVisibility(true);
	plexiModelIsVisible = false;
};
function initialiseObjects(){
	artistProfileButton = arel.Object.Model3D.createFromImage("artistProfileButton", "resources/Buttons/artist.png");
	artistProfileButton.setVisibility(true);
	artistProfileButton.setCoordinateSystemID(1);
	artistProfileButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	artistProfileButton.setTranslation(setPosition(artistProfileButton, 0, 0, 20));
	arel.Scene.addObject(artistProfileButton);

	artistTextObject = arel.Object.Model3D.createFromImage("artistTextObject", "resources/Text/empty.png");
	artistTextObject.setVisibility(false);
	artistTextObject.setCoordinateSystemID(1);
	artistTextObject.setScale(new arel.Vector3D(10.0,10.0,10.0));
	artistTextObject.setTranslation(setPosition(artistTextObject, 0, 0, 15));
	arel.Scene.addObject(artistTextObject);

	informationButton = arel.Object.Model3D.createFromImage("informationButton", "resources/Buttons/information.png");
	informationButton.setVisibility(true);
	informationButton.setCoordinateSystemID(1);
	informationButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	informationButton.setTranslation(setPosition(informationButton, 100, 0, 20));
	arel.Scene.addObject(informationButton);

	informationTextObject = arel.Object.Model3D.createFromImage("informationTextObject", "resources/Text/empty.png");
	informationTextObject.setVisibility(false);
	informationTextObject.setCoordinateSystemID(1);
	informationTextObject.setScale(new arel.Vector3D(10.0,10.0,10.0));
	informationTextObject.setTranslation(setPosition(informationTextObject, 0, 0, 15));
	arel.Scene.addObject(informationTextObject);

	closeButton = arel.Object.Model3D.createFromImage("closeButton", "resources/Buttons/close.png");
	closeButton.setVisibility(false);
	closeButton.setCoordinateSystemID(1);
	closeButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	closeButton.setTranslation(setPosition(closeButton, 200, 150, 20));
	arel.Scene.addObject(closeButton);

	galleryButton = arel.Object.Model3D.createFromImage("galleryButton", "resources/Buttons/gallery.png");
	galleryButton.setVisibility(true);
	galleryButton.setCoordinateSystemID(10);
	galleryButton.setScale(new arel.Vector3D(1.0,1.0,1.0));
	galleryButton.setTranslation(setPosition(galleryButton, 200, 0, 20));
	arel.Scene.addObject(galleryButton);

	// Adam und Eva Objekte COS: 6

	duerer = arel.Object.Model3D.createFromImage("duerer", "resources/AdamEva/duerer.png");
	duerer.setVisibility(true);
	duerer.setCoordinateSystemID(6);
	duerer.setScale(new arel.Vector3D(3.0,3.0,3.0)); //größe
	duerer.setTranslation(setPosition(duerer, -210, 0, 50)); //koordinaten
	arel.Scene.addObject(duerer);

	eyck = arel.Object.Model3D.createFromImage("eyck", "resources/AdamEva/eyck.png");
	eyck.setVisibility(true);
	eyck.setCoordinateSystemID(6);
	eyck.setScale(new arel.Vector3D(3.0,3.0,3.0)); //größe
	eyck.setTranslation(setPosition(eyck, 160, 0, 50)); //koordinaten
	arel.Scene.addObject(eyck);


	// Numa Objekte COS: 9

	appleButton = arel.Object.Model3D.createFromImage("appleButton", "resources/Buttons/appleButton.png");
	appleButton.setVisibility(true);
	appleButton.setCoordinateSystemID(9);
	appleButton.setScale(new arel.Vector3D(4.0,4.0,4.0));
	appleButton.setTranslation(setPosition(appleButton, -150, -100, 30));
	arel.Scene.addObject(appleButton);

	towerButton = arel.Object.Model3D.createFromImage("towerButton", "resources/Buttons/towerButton.png");
	towerButton.setVisibility(true);
	towerButton.setCoordinateSystemID(9);
	towerButton.setScale(new arel.Vector3D(4.5,4.5,4.5));
	towerButton.setTranslation(setPosition(towerButton, 700, 240, 40));
	arel.Scene.addObject(towerButton);

	kugelButton = arel.Object.Model3D.createFromImage("kugelButton", "resources/Buttons/kugelButton.png");
	kugelButton.setVisibility(true);
	kugelButton.setCoordinateSystemID(9);
	kugelButton.setScale(new arel.Vector3D(2.5,2.5,2.5));
	kugelButton.setTranslation(setPosition(kugelButton, 1200, 180, 30));
	arel.Scene.addObject(kugelButton);

	domButton = arel.Object.Model3D.createFromImage("domButton", "resources/Buttons/domButton.png");
	domButton.setVisibility(true);
	domButton.setCoordinateSystemID(9);
	domButton.setScale(new arel.Vector3D(3.0,3.0,3.0));
	domButton.setTranslation(setPosition(domButton, 350, 320, 30));
	arel.Scene.addObject(domButton);

	humansButton = arel.Object.Model3D.createFromImage("humansButton", "resources/Buttons/humansButton.png");
	humansButton.setVisibility(true);
	humansButton.setCoordinateSystemID(9);
	humansButton.setScale(new arel.Vector3D(4.0,4.0,4.0));
	humansButton.setTranslation(setPosition(humansButton, -900, -50, 30));
	arel.Scene.addObject(humansButton);


	// Plexiglasplasik Objects COS:3
	// models
	plexiObjectLevelOne = arel.Object.Model3D.create("plexiObjectLevelOne", "resources/Models/level_1.md2", "resources/Models/blue.jpg");
	plexiObjectLevelOne.setCoordinateSystemID(3);
	plexiObjectLevelOne.setVisibility(false);
	plexiObjectLevelOne.setScale(new arel.Vector3D(0.4,0.4,0.4));
	plexiObjectLevelOne.setRotation(setObjectRotation(270,0,0));
	plexiObjectLevelOne.setTranslation(setPosition(plexiObjectLevelOne, -100, 130, 20));
	arel.Scene.addObject(plexiObjectLevelOne);

	plexiObjectLevelTwo = arel.Object.Model3D.create("plexiObjectLevelTwo", "resources/Models/level_2.md2", "resources/Models/green.jpg");
	plexiObjectLevelTwo.setCoordinateSystemID(3);
	plexiObjectLevelTwo.setVisibility(false);
	plexiObjectLevelTwo.setScale(new arel.Vector3D(0.4,0.4,0.4));
	plexiObjectLevelTwo.setRotation(setObjectRotation(270,0,0));
	plexiObjectLevelTwo.setTranslation(setPosition(plexiObjectLevelTwo, -100, 130, 20));
	arel.Scene.addObject(plexiObjectLevelTwo);

	plexiObjectLevelThree = arel.Object.Model3D.create("plexiObjectLevelThree", "resources/Models/level_3.md2", "resources/Models/red.jpg");
	plexiObjectLevelThree.setCoordinateSystemID(3);
	plexiObjectLevelThree.setVisibility(false);
	plexiObjectLevelThree.setScale(new arel.Vector3D(0.4,0.4,0.4));
	plexiObjectLevelThree.setRotation(setObjectRotation(270,0,0));
	plexiObjectLevelThree.setTranslation(setPosition(plexiObjectLevelThree, -100, 130, 20));
	arel.Scene.addObject(plexiObjectLevelThree);
	// BUTTONS
	//  Plexiglas layer button
	plexiglasLayerButton = arel.Object.Model3D.createFromImage("plexiglasLayerButton", "resources/Buttons/layer_button.png");
	plexiglasLayerButton.setVisibility(true);
	plexiglasLayerButton.setCoordinateSystemID(3);
	plexiglasLayerButton.setScale(new arel.Vector3D(2.0,2.0,2.0));
	plexiglasLayerButton.setTranslation(setPosition(plexiglasLayerButton, 300, -600, 25));
	arel.Scene.addObject(plexiglasLayerButton);

	// number buttons for 3d model
	layerNumberOne = arel.Object.Model3D.createFromImage("layerNumberOne", "resources/Buttons/number_one.png");
	layerNumberOne.setVisibility(false);
	layerNumberOne.setCoordinateSystemID(3);
	layerNumberOne.setScale(new arel.Vector3D(2.0,2.0,2.0));
	layerNumberOne.setTranslation(setPosition(layerNumberOne, -200, -400, 30));
	arel.Scene.addObject(layerNumberOne);

	layerNumberTwo = arel.Object.Model3D.createFromImage("layerNumberTwo", "resources/Buttons/number_two.png");
	layerNumberTwo.setVisibility(false);
	layerNumberTwo.setCoordinateSystemID(3);
	layerNumberTwo.setScale(new arel.Vector3D(2.0,2.0,2.0));
	layerNumberTwo.setTranslation(setPosition(layerNumberTwo, 100, -400, 30));
	arel.Scene.addObject(layerNumberTwo);

	layerNumberThree = arel.Object.Model3D.createFromImage("layerNumberThree", "resources/Buttons/number_three.png");
	layerNumberThree.setVisibility(false);
	layerNumberThree.setCoordinateSystemID(3);
	layerNumberThree.setScale(new arel.Vector3D(2.0,2.0,2.0));
	layerNumberThree.setTranslation(setPosition(layerNumberThree, 400, -400, 30));
	arel.Scene.addObject(layerNumberThree);

	// Wandteppich objects
	youTubeButton = arel.Object.Model3D.createFromImage("youTubeButton", "resources/Buttons/youtube.png");
	youTubeButton.setVisibility(true);
	youTubeButton.setCoordinateSystemID(4);
	youTubeButton.setScale(new arel.Vector3D(5.0,5.0,5.0));
	youTubeButton.setTranslation(setPosition(youTubeButton, 0, -600, 20));
	arel.Scene.addObject(youTubeButton);

	// kapelle
	kepellen_lines = arel.Object.Model3D.createFromImage("kepellen_lines", "resources/Kapelle/lines.png");
	kepellen_lines.setVisibility(true);
	kepellen_lines.setCoordinateSystemID(2);
	kepellen_lines.setScale(new arel.Vector3D(5.0,5.0,5.0));
	kepellen_lines.setTranslation(setPosition(kepellen_lines, 0, 0, 20));
	arel.Scene.addObject(kepellen_lines);
};