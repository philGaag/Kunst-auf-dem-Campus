<?php
require_once 'ARELLibrary/arel_xmlhelper.class.php';
ArelXMLHelper::start(NULL, "/arel/index.html", ArelXMLHelper::TRACKING_GPS);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"1", //id
		"Arkadenwand - H. Dumler", //title
		array(49.00006, 12.09654, 370), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"2", //id
		"Plexiglasplastik - J. Gollwitzer", //title
		array(49.00112, 12.08485, 373), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"3", //id
		"Adam und Eva - HAP Grieshaber", //title
		array(48.99409, 12.09419, 0), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"4", //id
		"Bunter Maeander - R. Hensdorff", //title
		array(49.0011, 12.08512, 373), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"5", //id
		"Wandteppiche - J. Itten", //title
		array(48.9985, 12.08781, 370), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"6", //id
		"Angehaltene Bewegung - H. Kleinknecht", //title
		array(48.99828, 12.09515, 370), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"7", //id
		"Begehbarer Wuerfel - H. Langhammer", //title
		array(48.99479, 12.09525, 380), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"8", //id
		"Auf dem Weg zum Motiv - H. Leber", //title
		array(49.00072, 12.09714, 373), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"9", //id
		"Lichtsaeule - F. Lechner", //title
		array(49.00072, 12.09717, 370), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"10", //id
		"Hohlspiegelbloecke - A. Luther", //title
		array(49.0011, 12.08512, 0), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

//end the output
ArelXMLHelper::end();

?>

