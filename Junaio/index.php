<?php

error_reporting(E_ALL);			//for displaying errors
ini_set("display_errors", 1);

require_once 'ARELLibrary/arel_xmlhelper.class.php';
 
//start output
ArelXMLHelper::start(NULL, "arel/index.html", "resources/Tracking.zip");


// BUTTONS **********************************************************************************
// CLOSE
$oObject = ArelXMLHelper::createGlueModel3D(
	"close",															//ID
	NULL,																//Path to model
	"resources/Buttons/close.png",										//Path to texture
	array(500,0,5),													//translation
	array(10.0,10.0,10.0,),												//scale
	new ArelRotation(ArelRotation::ROTATION_EULERDEG, array(0,0,0)),	//rotation
	1																	//CoordinateSystemID
);
$oObject->setVisibility(true);
ArelXMLHelper::outputObject($oObject);
// GALLERY
$oObject = ArelXMLHelper::createGlueModel3D(
	"gallery",																//ID
	NULL,																//Path to model
	"resources/Buttons/gallery.png",											//Path to texture
	array(100,0,0),													//translation
	array(1.0,1.0,1.0,),												//scale
	new ArelRotation(ArelRotation::ROTATION_EULERDEG, array(0,0,0)),	//rotation
	1																	//CoordinateSystemID
);
ArelXMLHelper::outputObject($oObject);
// ARTIST PROFILE
// $oObject = ArelXMLHelper::createGlueModel3D(
// 	"artist_profile",													//ID
// 	NULL,																//Path to model
// 	"resources/Buttons/artist.png",											//Path to texture
// 	array(0,0,0),													//translation
// 	array(1.0,1.0,1.0,),												//scale
// 	new ArelRotation(ArelRotation::ROTATION_EULERDEG, array(0,0,0)),	//rotation
// 	1																	//CoordinateSystemID
// );
// $oObject->setVisibility(false);
// ArelXMLHelper::outputObject($oObject);
// INFORMATION
$oObject = ArelXMLHelper::createGlueModel3D(
	"information",																//ID
	NULL,																//Path to model
	"resources/Buttons/information.png",											//Path to texture
	array(200,0,0),													//translation
	array(1.0,1.0,1.0,),												//scale
	new ArelRotation(ArelRotation::ROTATION_EULERDEG, array(0,0,0)),	//rotation
	1																	//CoordinateSystemID
);
$oObject->setVisibility(false);
ArelXMLHelper::outputObject($oObject);
// BUTTONS END *******************************************************************************

ArelXMLHelper::end();
?>