<?php
require_once 'ARELLibrary/arel_xmlhelper.class.php';
ArelXMLHelper::start(NULL, "/arel/index.html", ArelXMLHelper::TRACKING_GPS);
// dea
$oObject = ArelXMLHelper::createLocationBasedPOI(
		"1", //id
		"Traumlandschaft", //title
		array(48.988184, 12.091618, 0), //location
		"/resources/Traumlandschaft.png", //thumb
		"/resources/Traumlandschaft.png", //icon
		"Otmaer Alt\nPatientenbereich Zahnklinik\n\nFarbig beschichtete Platten mit bunten teils mechanischen Stahlkonstruktionen", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

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
		"17", //id
		"Kapellenausstattung", //title
		array(48.987712, 12.090749, 0), //location
		"/resources/KapelleKlinik.png", //thumb
		"/resources/KapelleKlinik.png", //icon
		"Blasius Gerg\nKapelle Universitätklinikum\nbestehend aus einem Tabernakel, einem Vortragekreuz, Sedilien, dem Altar, Ambo und einem Weihwasserbecken", //description
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
		"22a", //id
		"Hommage a Kepler", //title
		array(48.985982, 12.089639, 0), //location
		"/resources/HommageKepler.png", //thumb
		"/resources/HommageKepler.png", //icon
		"Elmar Göppl \nAußenbereich sündliches Arial\nEines von drei Stahlplastiken", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"22b", //id
		"Hommage a Kepler", //title
		array(48.986647, 12.089754, 0), //location
		"/resources/HommageKepler.png", //thumb
		"/resources/HommageKepler.png", //icon
		"Elmar Göppl \nAußenbereich sündliches Arial\nEines von drei Stahlplastiken", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"22c", //id
		"Hommage a Kepler", //title
		array(48.985973, 12.090741, 0), //location
		"/resources/HommageKepler.png", //thumb
		"/resources/HommageKepler.png", //icon
		"Elmar Göppl \nAußenbereich sündliches Arial\nEines von drei Stahlplastiken", //description
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
		"25", //id
		"Landschaftsprojektionen", //title
		array(48.9878596, 12.0915968, 0), //location
		"/resources/Landschaftsprojektionen.png", //thumb
		"/resources/Landschaftsprojektionen.png", //icon
		"Eckard Hauser\nWartebereich Zahnklinik\n14 bewegliche Elemente, welche eine idyllische Landschaft zeigen.", //description
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

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"50", //id
		"Komposition V/89", //title
		array(48.986672, 12.090312, 0), //location
		"/resources/Komposition.png", //thumb
		"/resources/Komposition.png", //icon
		"Heiner Riepl\nErdgeschoss\nÖl auf Leinwand", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"61", //id
		"Die Hockende", //title
		array(48.988006, 12.088281, 0), //location
		"/resources/Hockende.png", //thumb
		"/resources/Hockende.png", //icon
		"Wilhelm Uhlig\nAtrium der Physikalischen Therapie\nBrunnenanlage mit Bronzeskulptur", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

//end the output
ArelXMLHelper::end();

?>

