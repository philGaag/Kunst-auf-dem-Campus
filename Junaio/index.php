<?php

error_reporting(E_ALL);			//for displaying errors
ini_set("display_errors", 1);

require_once 'ARELLibrary/arel_xmlhelper.class.php';
 
//start output
ArelXMLHelper::start(NULL, "arel/index.html", "resources/Tracking.zip");

$oObject = ArelXMLHelper::createGlueModel3D(
	"text",																//ID
	NULL,																//Path to model
	"resources/lorem_text.png",											//Path to texture
	array(500,0,20),														//translation
	array(10.0,10.0,10.0,),												//scale
	new ArelRotation(ArelRotation::ROTATION_EULERDEG, array(0,0,0)),	//rotation
	1																	//CoordinateSystemID
);
$oObject->setVisibility(false);
ArelXMLHelper::outputObject($oObject);
//end the output
ArelXMLHelper::end();

?>