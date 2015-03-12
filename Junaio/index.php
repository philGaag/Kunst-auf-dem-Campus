<?php

error_reporting(E_ALL);			//for displaying errors
ini_set("display_errors", 1);

require_once 'ARELLibrary/arel_xmlhelper.class.php';
 
//start output
ArelXMLHelper::start(NULL, "arel/index.html", "resources/Tracking.zip");

$oObject = ArelXMLHelper::createGlueModel3D(
	"text",																//ID
	NULL,																//Path to model
	"resources/Text/lorem_text.png",											//Path to texture
	array(500,0,20),													//translation
	array(10.0,10.0,10.0,),												//scale
	new ArelRotation(ArelRotation::ROTATION_EULERDEG, array(0,0,0)),	//rotation
	1																	//CoordinateSystemID
);
$oObject->setVisibility(false);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createGlueModel3D(
	"gallery",																//ID
	NULL,																//Path to model
	"resources/Buttons/gallery.png",											//Path to texture
	array(200,-150,20),													//translation
	array(1.0,1.0,1.0,),												//scale
	new ArelRotation(ArelRotation::ROTATION_EULERDEG, array(0,0,0)),	//rotation
	1																	//CoordinateSystemID
);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createGlueModel3D(
	"information",																//ID
	NULL,																//Path to model
	"resources/BÚttons/information.png",										//Path to texture
	array(150,-150,20),													//translation
	array(1.0,1.0,1.0,),												//scale
	new ArelRotation(ArelRotation::ROTATION_EULERDEG, array(0,0,0)),	//rotation
	1																	//CoordinateSystemID
);
$oObject->setVisibility(false);
ArelXMLHelper::outputObject($oObject);
//end the output
ArelXMLHelper::end();

?>