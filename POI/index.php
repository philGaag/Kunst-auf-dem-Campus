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
		"/resources/Arkadenwand.jpg", //thumb
		"/resources/Arkadenwand.jpg", //icon
		"H. Dumler \nan den Außenwänden der PT-Fakultät\nMalerei auf Beton", //description
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
		array(48.998533, 12.095129, 373), //location
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
		array(48.998373, 12.094102, 373), //location
		"/resources/Maeander.jpg", //thumb
		"/resources/Maeander.jpg", //icon
		"R. Hensdorff \nSchlangenähnliche Bemalung auf Beton in verschiedenen Farbabstufungen\nAußenwand des zentralen Hörsaalgebäude", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"29", //id
		"Wandteppiche", //title
		array(48.998652, 12.094792, 370), //location
		"/resources/Wandteppich.jpg", //thumb
		"/resources/Wandteppich.jpg", //icon
		"J. Itten \n This is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"32", //id
		"Angehaltene Bewegung", //title
		array(48.99828, 12.09515, 370), //location
		"/resources/Kugel.jpg", //thumb
		"/resources/Kugel.jpg", //icon
		"H. Kleinknecht \nKugel vor dem Eingang zum zentralen Hörsaalgebäude\n1977\nTombakblech", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"36", //id
		"Begehbarer Wuerfel", //title
		array(48.99479, 12.09525, 380), //location
		"/resources/Wuerfel.jpg", //thumb
		"/resources/Wuerfel.jpg", //icon
		"H. Langhammer\nThis is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"37", //id
		"Auf dem Weg zum Motiv", //title
		array(48.998508, 12.094622, 0), //location
		"/resources/thumb_image.png", //thumb
		"/resources/icon_image.png", //icon
		"H. Leber\nan den Wänden des Zentralen Hörsaalgebäude\n2007\nAcryl und Kohle", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"38", //id
		"Lichtsaeule", //title
		array(48.998039, 12.095867, 0), //location
		"/resources/Lichtsaeule.jpg", //thumb
		"/resources/Lichtsaeule.jpg", //icon
		"F. Lechner\nin der Vorhalle der Zentrabibliothek\nGlas und Stahl", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"40", //id
		"Hohlspiegelobjekte", //title
		array(48.998180, 12.094234, 0), //location
		"/resources/Hohlspiegelobjekte.jpg", //thumb
		"/resources/Hohlspiegelobjekte.jpg", //icon
		"A. Luther\nGlas,Spiegel und Metall\n1974-1975", //description
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

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"12", //id
		"Rechenmaschine", //title
		array(48.996994, 12.095545, 0), //location
		"/resources/Rechenmaschine.jpg", //thumb
		"/resources/Rechenmaschine.jpg", //icon
		"Hans Dumler\nneben der Druckerei im Erdgeschoss des Rechenzentrums\nLochblech, Metallobjekt\n1975", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"2", //id
		"Kopf 77", //title
		array(48.997312,12.096569 , 0), //location
		"/resources/Kopf77.jpg", //thumb
		"/resources/Kopf77.jpg", //icon
		"Horst Antes\nThis is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"31", //id
		"Brunnen", //title
		array(48.999954, 12.094101 , 0), //location
		"/resources/Brunnen.jpg", //thumb
		"/resources/Brunnen.jpg", //icon
		"Heinrich Kirchner\nin einem kleinen Hof im 1.OG des Rechtswissenschaftsgebäude", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"33", //id
		"Karyatide R", //title
		array(48.998951, 12.092456, 0), //location
		"/resources/Karyatide.jpg", //thumb
		"/resources/Karyatide.jpg", //icon
		"Fritz König\nDenkmal für den 11.09.2001\nvor dem Haupteingang der Universität", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"42", //id
		"Drei Stelen", //title
		array(49.00005, 12.09472, 0), //location
		"/resources/3Stelen.jpg", //thumb
		"/resources/3Stelen.jpg", //icon
		"Günter Mauermann\nThis is our Image POI\n\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"43", //id
		"Vierkantwuerfel", //title
		array(48.99332,12.09472, 0), //location
		"/resources/Vierkantwuerfel.jpg", //thumb
		"/resources/Vierkantwuerfel.jpg", //icon
		"Andreas Sobeck\nauf der Brücke zum Sportzentrum\nstatisch - geometrische Konstrukt eines Kubus\nlackierter Stahl", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"45", //id
		"Menschliche Gestalten", //title
		array(48.99707,12.09525, 0), //location
		"/resources/MenschlicheGestalten.jpg", //thumb
		"/resources/MenschlicheGestalten.jpg", //icon
		"Herbert Peters\n1977\nGranit\n5 meter hoch\nin der Nähe des Sees", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"57", //id
		"Schwimmende Pelikane", //title
		array(48.994393,12.093637, 0), //location
		"/resources/Pelikane.jpg", //thumb
		"/resources/Pelikane.jpg", //icon
		"Heinz Theuerjahr\nThis is our Image POI\nThe image source is: http://www.flickr.com/photos/ediamjunaio/5206110815/", //description
		array(array("Show Image", "imageButton", "http://farm5.static.flickr.com/4104/5206110815_7ea891be0b.jpg")) //buttons
	);
ArelXMLHelper::outputObject($oObject);


//end the output
ArelXMLHelper::end();

?>

