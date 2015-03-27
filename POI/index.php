<?php
require_once 'ARELLibrary/arel_xmlhelper.class.php';
ArelXMLHelper::start(NULL, "/arel/index.html", ArelXMLHelper::TRACKING_GPS);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"1", //id
		"Traumlandschaft", //title
		array(48.988184, 12.091618, 0), //location
		"/resources/Traumlandschaft.jpg", //thumb
		"/resources/Traumlandschaft.jpg", //icon
		"Otmaer Alt\nPatientenbereich Zahnklinik\nFarbig beschichtete Platten mit bunten teils mechanischen Stahlkonstruktionen", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"8", //id
		"Das Abstrakte ist noch Gegenstand genug", //title
		array(48.99844, 12.09521, 0), //location
		"/resources/AbstrakteGegenstandgenug.jpg", //thumb
		"/resources/AbstrakteGegenstandgenug.jpg", //icon
		"Manfred Dinnes;1983\nPastellkreide\n in der Nähe von H10", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"9", //id
		"Arkadenwand", //title
		array(49.00006, 12.09654, 370), //location
		"/resources/Arkadenwand.jpg", //thumb
		"/resources/Arkadenwand.jpg", //icon
		"H. Dumler\nan der Außenwand der PT-Fakultät\nMalerei auf Beton", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"17", //id
		"Kapellenausstattung", //title
		array(48.987712, 12.090749, 0), //location
		"/resources/KapelleKlinik.jpg", //thumb
		"/resources/KapelleKlinik.jpg", //icon
		"Blasius Gerg\nKapelle Universitaetklinikum\nbestehend aus einem Tabernakel, einem Vortragekreuz, Sedilien, dem Altar, Ambo und einem Weihwasserbecken", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"21", //id
		"Plexiglasplastik", //title
		array(48.998533, 12.095129, 0), //location
		"/resources/Plexi.jpg", //thumb
		"/resources/Plexi.jpg", //icon
		"Josef Gollwitzer\n1973\nim Foyer des Auditorium Maximum", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"22a", //id
		"Hommage a Kepler", //title
		array(48.985982, 12.089639, 0), //location
		"/resources/HommageKepler.jpg", //thumb
		"/resources/HommageKepler.jpg", //icon
		"Elmar Göppl\nAußenbereich sündliches Arial\nEines von drei Stahlplastiken", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"22b", //id
		"Hommage a Kepler", //title
		array(48.986647, 12.089754, 0), //location
		"/resources/HommageKepler.jpg", //thumb
		"/resources/HommageKepler.jpg", //icon
		"Elmar Göppl \nAußenbereich sündliches Arial\nEines von drei Stahlplastiken", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"22c", //id
		"Hommage a Kepler", //title
		array(48.985973, 12.090741, 0), //location
		"/resources/HommageKepler.jpg", //thumb
		"/resources/HommageKepler.jpg", //icon
		"Elmar Göppl \nAußenbereich sündliches Arial\nEines von drei Stahlplastiken", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"23", //id
		"Adam und Eva", //title
		array(48.99409, 12.09419, 0), //location
		"/resources/Adam_und_Eva.jpg", //thumb
		"/resources/Adam_und_Eva.jpg", //icon
		"HAP Grieshaber;1970\nHolzschnitt\nim Treppenhaus der Biologischen Fakultät", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"25", //id
		"Landschaftsprojektionen", //title
		array(48.9878596, 12.0915968, 0), //location
		"/resources/Landschaftsprojektionen.jpg", //thumb
		"/resources/Landschaftsprojektionen.jpg", //icon
		"Eckard Hauser\nWartebereich Zahnklinik\n14 bewegliche Elemente, welche eine idyllische Landschaft zeigen.", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"26", //id
		"Bunter Maeander", //title
		array(48.998373, 12.094102, 373), //location
		"/resources/Maeander.jpg", //thumb
		"/resources/Maeander.jpg", //icon
		"R. Hensdorff\nSchlangenähnliche Bemalung auf Beton\nAußenwand des zentralen Hörsaalgebäude", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"29", //id
		"Wandteppiche", //title
		array(48.998652, 12.094792, 370), //location
		"/resources/Wandteppich.jpg", //thumb
		"/resources/Wandteppich.jpg", //icon
		"J. Itten;1974\nKnüfteppichZentrales\nHörsaalgebäude", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"32", //id
		"Angehaltene Bewegung", //title
		array(48.99828, 12.09515, 370), //location
		"/resources/Kugel.jpg", //thumb
		"/resources/Kugel.jpg", //icon
		"H. Kleinknecht;1977\nvor dem Eingang zum zentralen Hörsaalgebäude\nTombakblech", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"36", //id
		"Begehbarer Wuerfel", //title
		array(48.99479, 12.09525, 380), //location
		"/resources/Wuerfel.jpg", //thumb
		"/resources/Wuerfel.jpg", //icon
		"Helmut Langhammer;1978\nGranit\nauf einem Rasenstück hinter dem Chemiegebäude", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"37", //id
		"Auf dem Weg zum Motiv", //title
		array(48.998508, 12.094622, 0), //location
		"/resources/WegZumMotiv.jpg", //thumb
		"/resources/WegZumMotiv.jpg", //icon
		"H. Leber;2007\nan den Wänden des Zentralen Hörsaalgebäude\nAcryl und Kohle", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"38", //id
		"Lichtsaeule", //title
		array(48.998039, 12.095867, 0), //location
		"/resources/Lichtsaeule.jpg", //thumb
		"/resources/Lichtsaeule.jpg", //icon
		"Florian Lechner\nin der Vorhalle der Zentrabibliothek\nGlas und Stahl", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"40", //id
		"Hohlspiegelobjekte", //title
		array(48.998180, 12.094234, 0), //location
		"/resources/Hohlspiegelobjekte.jpg", //thumb
		"/resources/Hohlspiegelobjekte.jpg", //icon
		"Adolf Luther\nGlas,Spiegel und Metall\n1974-1975", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"50", //id
		"Komposition V/89", //title
		array(48.986672, 12.090312, 0), //location
		"/resources/Komposition.jpg", //thumb
		"/resources/Komposition.jpg", //icon
		"Heiner Riepl\nErdgeschoss\nÖl auf Leinwand", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"61", //id
		"Die Hockende", //title
		array(48.988006, 12.088281, 0), //location
		"/resources/Hockende.jpg", //thumb
		"/resources/Hockende.jpg", //icon
		"Wilhelm Uhlig\nAtrium der Physikalischen Therapie\nBrunnenanlage mit Bronzeskulptur", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"12", //id
		"Rechenmaschine", //title
		array(48.996994, 12.095545, 0), //location
		"/resources/Rechenmaschine.jpg", //thumb
		"/resources/Rechenmaschine.jpg", //icon
		"Hans Dumler;1975\nneben der Druckerei im Erdgeschoss des Rechenzentrums\nLochblech, Metallobjekt", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"2", //id
		"Kopf 77", //title
		array(48.997312,12.096569 , 0), //location
		"/resources/Kopf77.jpg", //thumb
		"/resources/Kopf77.jpg", //icon
		"Horst Antes;1977\nCortenstahl\nInnenhof des Rechenzentrums", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"31", //id
		"Brunnen", //title
		array(48.999954, 12.094101 , 0), //location
		"/resources/Brunnen.jpg", //thumb
		"/resources/Brunnen.jpg", //icon
		"Heinrich Kirchner\nin einem kleinen Hof im 1.OG des Rechtswissenschaftsgebäude", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"33", //id
		"Karyatide R", //title
		array(48.998951, 12.092456, 0), //location
		"/resources/Karyatide.jpg", //thumb
		"/resources/Karyatide.jpg", //icon
		"Fritz König\nDenkmal für den 11.09.2001\nvor dem Haupteingang der Universität", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"42", //id
		"Drei Stelen", //title
		array(49.00005, 12.09472, 0), //location
		"/resources/3Stelen.jpg", //thumb
		"/resources/3Stelen.jpg", //icon
		"Günter Mauermann;1977\nAluminium\n vor dem VG Gebäude", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"43", //id
		"Vierkantwuerfel", //title
		array(48.99332,12.09472, 0), //location
		"/resources/Vierkantwuerfel.jpg", //thumb
		"/resources/Vierkantwuerfel.jpg", //icon
		"Andreas Sobeck\nauf der Brücke zum Sportzentrum\nlackierter Stahl", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"45", //id
		"Menschliche Gestalten", //title
		array(48.99707,12.09525, 0), //location
		"/resources/MenschlicheGestalten.jpg", //thumb
		"/resources/MenschlicheGestalten.jpg", //icon
		"Herbert Peters;1977\nGranit\n5 meter hoch\nin der Nähe des Sees", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"57", //id
		"Schwimmende Pelikane", //title
		array(48.994393,12.093637, 0), //location
		"/resources/Pelikane.jpg", //thumb
		"/resources/Pelikane.jpg", //icon
		"Heinz Theuerjahr\n1973\nBronze", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"44", //id
		"Numa", //title
		array(48.998551,12.094577, 0), //location
		"/resources/Numa.jpg", //thumb
		"/resources/Numa.jpg", //icon
		"Ohne Titel\n1980\nÖl auf Leinwand", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

$oObject = ArelXMLHelper::createLocationBasedPOI(
		"30", //id
		"Kapellenfenster", //title
		array(48.998263,12.095743, 0), //location
		"/resources/kapellenFenster.jpg", //thumb
		"/resources/kapellenFenster.jpg", //icon
		"Graham Jones\n2003\nGlas", //description
		array()
	);
ArelXMLHelper::outputObject($oObject);

//end the output
ArelXMLHelper::end();

?>

