<?php
require_once 'ARELLibrary/arel_xmlhelper.class.php';
ArelXMLHelper::start(NULL, "/arel/index.html", ArelXMLHelper::TRACKING_GPS);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"8", //id
		"Das Abstrakte ist noch Gegenstand genug", //title
		array(48.99844, 12.09521, 0), //location
		"/resources/AbstrakteGegenstandgenug.png", //thumb
		"/resources/AbstrakteGegenstandgenug.png", //icon
		"Manfred Dinnes\nThis is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"9", //id
		"Arkadenwand", //title
		array(49.00006, 12.09654, 370), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"H. Dumler \n This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"21", //id
		"Plexiglasplastik", //title
		array(49.00112, 12.08485, 373), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"J. Gollwitzer \n This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"23", //id
		"Adam und Eva", //title
		array(48.99409, 12.09419, 0), //location
		"/resources/Adam_und_Eva.png", //thumb
		"/resources/Adam_und_Eva.png", //icon
		"HAP Grieshaber \n This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"26", //id
		"Bunter Maeander", //title
		array(49.0011, 12.08512, 373), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"R. Hensdorff \n This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"29", //id
		"Wandteppiche", //title
		array(48.9985, 12.08781, 370), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"J. Itten \n This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"32", //id
		"Angehaltene Bewegung", //title
		array(48.99828, 12.09515, 370), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"H. Kleinknecht \n This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"36", //id
		"Begehbarer Wuerfel", //title
		array(48.99479, 12.09525, 380), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"H. Langhammer\nThis is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"37", //id
		"Auf dem Weg zum Motiv", //title
		array(49.00072, 12.09714, 373), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"H. Leber\nThis is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"38", //id
		"Lichtsaeule", //title
		array(49.00072, 12.09717, 370), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"F. Lechner\nThis is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"40", //id
		"Hohlspiegelobjekte", //title
		array(49.0011, 12.08512, 0), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"A. Luther\nThis is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);



//end the output
//Bianca
ArelXMLHelper::end();
// phil was here

?>

