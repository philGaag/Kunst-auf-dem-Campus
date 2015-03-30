<?php

error_reporting(E_ALL);			//for displaying errors
ini_set("display_errors", 1);

require_once 'ARELLibrary/arel_xmlhelper.class.php';
 
//start output
ArelXMLHelper::start(NULL, "arel/index.html", "resources/Tracking.zip");

// $oObject = ArelXMLHelper::createGlueModel3D(
// 	"textItem",															//ID
// 	NULL,																//Path to model
// 	"resources/Text/lorem_text.png",									//Path to texture
// 	array(200,0,5),														//translation
// 	array(10.0,10.0,10.0,),												//scale
// 	new ArelRotation(ArelRotation::ROTATION_EULERDEG, array(0,0,0)),	//rotation
// 	1																	//CoordinateSystemID
// );
// $oObject->setVisibility(true);
// ArelXMLHelper::outputObject($oObject);

ArelXMLHelper::end();
?>