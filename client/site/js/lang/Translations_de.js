/* 
 * 
 * Translations_cfg.js -- part of Quantum GIS Web Client 
 * 
 * Copyright (2010-2012), The QGIS Project All rights reserved. 
 * Quantum GIS Web Client is released under a BSD license. Please see 
 * https://github.com/qgis/qgis-web-client/blob/master/README 
 * for the full text of the license and the list of contributors. 
 * 
 */ 

var availableHelpLanguages = Array("en","es","de","hu","it","pl","fr","ro","sk");
var availableLanguages = [];
availableLanguages["en"] = {names:[], translator:"Andreas Neumann"}; //a (dot) neumann (at) carto (dot) net
availableLanguages["es"] = {names:[], translator:"Samuel Mesa, Diana Galindo, Germán Carrillo, Ignacio Serrano Ayllón"}; // samuelmesa (at) gmail (dot) com , drgalindog (at) linuxmail (dot) org
availableLanguages["de"] = {names:[], translator:"Andreas Neumann"}; //a(dot)neumann(at)carto(dot)net
availableLanguages["fr"] = {names:[], translator:"Mayeul Kauffmann, Amandine Schloupt (Aguram)"}; //mayeul (dot) kauffmann (at) free (dot) fr, aschloupt (at) aguram (dot) org
availableLanguages["it"] = {names:[], translator:"Paolo Cavallini (Faunalia), Giovanni Allegri (Gis3W), Alessandro Pasotti (ItOpen)"}; //cavallini (at) faunalia (dot) it
availableLanguages["pt_PT"] = {names:[], translator:"Nelson Silva, Giovanni Manghi (Faunalia)"}; //nelson (dot) jgs (at) gmail (dot) com>, giovanni (dot) manghi (at) faunalia (dot) pt
availableLanguages["uk"] = {names:[], translator:"Pavlo Taranov"}; //taranov (dot) pavel (at) gmail (dot) com>
availableLanguages["hu"] = {names:[], translator:"Szilárd Lajcsik"}; //szilajinfo (at) gmail (dot) com>
availableLanguages["ro"] = {names:[], translator:"Tudor Bărăscu"}; //tudorbarascu (at) gmail (dot) com>
availableLanguages["ru"] = {names:[], translator:"Nikolay Zhigalov"}; //jederlacht1 (at) gmail (dot) com>
availableLanguages["sl"] = {names:[], translator:"Uroš Preložnik"};	//uros00 (at) gmail (dot) com
availableLanguages["nl"] = {names:[], translator:"Carl Defevere"}; //carl (dot) defevere (at) gmail (dot) com>
availableLanguages["pl"] = {names:[], translator:"Sławomir Bienias"}; //slawomir (dot) bienias (at) gmail (dot) com>
availableLanguages["sk"] = {names:[], translator:"Mrtin Baloga"}; //slawomir (dot) bienias (at) gmail (dot) com>
availableLanguages["de"].names["de"] = "Deutsch";
var mapAppLoadingString = [];
mapAppLoadingString["de"] = "Kartenapplikation wird geladen...";
var mapLoadingString = [];
mapLoadingString["de"] = "Karte wird geladen...";
var modeNavigationString = [];
modeNavigationString["de"] = "Modus: Navigation. Shift/Rechteck aufziehen oder Mausrad zum zoomen.";
var modeZoomRectangle = [];
modeZoomRectangle["de"] = "Modus: Zoom mit Rechteck. Ziehen Sie die gewünschte Region auf.";
var modeObjectIdentificationString = [];
modeObjectIdentificationString["de"] = "Modus: Objektidentifikation. Bewegen Sie die Maus über das Objekt, um es zu identifizeren, klicken Sie es an, um seine Attributdaten anzuzeigen.";
var modeMapTipsString = [];
modeMapTipsString["de"] = "Modus: MapTips. Anzeige mit Mouseover über tooltips.";
var modeMeasureDistanceString = [];
modeMeasureDistanceString["de"] = "Modus: Distanzmessung. Beenden mit Doppelklick.";
var modeMeasureAreaString = [];
modeMeasureAreaString["de"] = "Modus: Flächenmessung. Beenden mit Doppelklick.";
var modeStreetViewString = [];
modeStreetViewString["de"] = "Mode: GoogleStreetView. Click on the road."; //FIXME
var modePrintingString = [];
modePrintingString["de"] = "Modus: Drucken. Verschieben oder Rotieren Sie den Kartenausschnitt. Drucken mit 'Drucken'-Knopf.";
var printLoadingString = [];
printLoadingString["de"] = "Der Druckauftrag ist erfolgt. Bitte haben sie etwas Geduld...";
var leftPanelTitleString = [];
leftPanelTitleString["de"] = "Infos und Werkzeuge";
var searchPanelTitleString = [];
searchPanelTitleString["de"] = "Suche";
var mapThemeButtonTitleString = [];
mapThemeButtonTitleString["de"] = "Kartenthemen";
var themeSwitcherWindowTitleString = [];
themeSwitcherWindowTitleString["de"] = "Kartenthemenwechsel";
var themeSwitcherFilterLabelString = [];
themeSwitcherFilterLabelString["de"] = "Filterung nach Kartentitel: ";
var themeSwitcherAllThemesListViewString = [];
themeSwitcherAllThemesListViewString["de"] = "Alle Kartenthemen";
var themeSwitcherTooltipResponsibleString = [];
themeSwitcherTooltipResponsibleString["de"] = "Verantwortlich: ";
var themeSwitcherTooltipTagString = [];
themeSwitcherTooltipTagString["de"] = "Stichwörter: ";
var themeSwitcherTooltipMapThemeString = [];
themeSwitcherTooltipMapThemeString["de"] = "Kartenthema: ";
var themeSwitcherTooltipUpdateString = [];
themeSwitcherTooltipUpdateString["de"] = "Aktualisierung: ";
var themeSwitcherTooltipLastUpdateString = [];
themeSwitcherTooltipLastUpdateString["de"] = "Letze Aktualisierung: ";
var themeSwitcherTooltipPwProtectedString = [];
themeSwitcherTooltipPwProtectedString["de"] = "passwortgeschützt";
var emptyThemeSearchFieldString = [];
emptyThemeSearchFieldString["de"] = "Filtertext eingeben";
var resetThemeSearchFieldTooltipString = [];
resetThemeSearchFieldTooltipString["de"] = "Kartenthemenfilter zurücksetzen";
var mapPanelTitleString = [];
mapPanelTitleString["de"] = "Karte";
var layerTreeTitleString = [];
layerTreeTitleString["de"] = "Kartenebenen";
var backgroundLayerTitleString = [];
backgroundLayerTitleString["de"] = "Hintergrundebenen";
var externalLayerTitleString = [];
externalLayerTitleString["de"] = "External Layers"; //FIXME
var layerOrderPanelTitleString = [];
layerOrderPanelTitleString["de"] = "Ebenenreihenfolge";
var layerOrderPanelLayerSettingsTooltipString = [];
layerOrderPanelLayerSettingsTooltipString["de"] = "Einstellungen";
var layerOrderPanelVisibilityChangeTooltipString = [];
layerOrderPanelVisibilityChangeTooltipString["de"] = "Ebenensichtbarkeit ändern";
var layerOrderPanelMoveLayerTextString = [];
layerOrderPanelMoveLayerTextString["de"] = "Ebene verschieben";
var layerOrderPanelTransparencyTooltipString = [];
layerOrderPanelTransparencyTooltipString["de"] = "Transparenz {0}%";
var legendTabTitleString = [];
legendTabTitleString["de"] = "Legende";
var legendTabLoadingString = [];
legendTabLoadingString["de"] = "Legende"; //FIXME
var metadataTabTitleString = [];
metadataTabTitleString["de"] = "Metadaten";
var helpWindowTitleString = [];
helpWindowTitleString["de"] = "Hilfe";
var legendMetadataWindowTitleString = [];
legendMetadataWindowTitleString["de"] = "Legende und Metadaten der Ebene";
var metadataSectionTitleString = [];
metadataSectionTitleString["de"] = "Metadaten der Ebene";
var abstractString = [];
abstractString["de"] = "Zusammenfassung:";
var layerQueryable = [];
layerQueryable["de"] = "Diese Ebene ist abfragbar: ";
var yesString = [];
yesString["de"] = "ja";
var noString = [];
noString["de"] = "nein";
var layerGroupString = [];
layerGroupString["de"] = "Ebenengruppe";
var displayFieldString = [];
displayFieldString["de"] = "Anzeigefeld";
var coordinateSystemsString = [];
coordinateSystemsString["de"] = "Verfügbare Koordinatensysteme";
var geographicExtentString = [];
geographicExtentString["de"] = "Geographischer Ausschnitt";
var westString = [];
westString["de"] = "Westen";
var eastString = [];
eastString["de"] = "Osten";
var northString = [];
northString["de"] = "Norden";
var southString = [];
southString["de"] = "Süden";
var attributesString = [];
attributesString["de"] = "Attribute / Felder";
var attributeNameString = [];
attributeNameString["de"] = "Attributname";
var attributeTypeString = [];
attributeTypeString["de"] = "Typ";
var attributeCommentString = [];
attributeCommentString["de"] = "Kommentar";
var attributeLengthString = [];
attributeLengthString["de"] = "Länge";
var attributePrecisionString = [];
attributePrecisionString["de"] = "Präzision";
var objectIdentificationTextLabel = [];
objectIdentificationTextLabel["de"] = "Objektidentifikation: ";
var coordinateTextLabel = [];
coordinateTextLabel["de"] = "Koordinate:";
var searchFieldDefaultTextString = [];
searchFieldDefaultTextString["de"] = "Suche (Adressen, Parzellenr, Flurnamen, etc.)";
var searchButtonString = [];
searchButtonString["de"] = "Suchen";
var resetButtonString = [];
resetButtonString["de"] = "Zurücksetzen";
var pleaseWaitString = [];
pleaseWaitString["de"] = "Bitte warten";
var searchResultString = [];
searchResultString["de"] = "Suchresultat";
var networkErrorString = [];
networkErrorString["de"] = "Netzwerkfehler";
var missingOrInvalidSearchParams = [];
missingOrInvalidSearchParams["de"] = "Fehlende oder ungültige Werte im Suchformular";
var searchErrorString = [];
searchErrorString["de"] = "Fehler bei Suche";
var searchNoRecordsFoundString = [];
searchNoRecordsFoundString["de"] = "Fehler bei Suche"; // FIXME
var printSettingsToolbarTitleString = [];
printSettingsToolbarTitleString["de"] = "Druckeinstellungen";
var printSettingsRotationTextlabelString = [];
printSettingsRotationTextlabelString["de"] = "Rotation: ";
var printButtonTextString = [];
printButtonTextString["de"] = "Drucken";
var printCancelButtonTextString = [];
printCancelButtonTextString["de"] = "Abbrechen";
var objectIdentificationModeString = [];
objectIdentificationModeString["topMostHit"] = [];
objectIdentificationModeString["topMostHit"]["de"] = "Oberster Treffer";
objectIdentificationModeString["allLayers"] = [];
objectIdentificationModeString["allLayers"]["de"] = "Alle Ebenen";
objectIdentificationModeString["activeLayers"] = [];
objectIdentificationModeString["activeLayers"]["de"] = "Aktive Ebene";
var measureDistanceResultPrefixString = [];
measureDistanceResultPrefixString["de"] = "Distanz";
var measureAreaResultPrefixString = [];
measureAreaResultPrefixString["de"] = "Fläche";
var zoomRectangleTooltipString = [];
zoomRectangleTooltipString["de"] = "Zoom Rechteck aufziehen";
var zoomFullViewTooltipString = [];
zoomFullViewTooltipString["de"] = "Zoom zum maximalen Kartenausschnitt";
var navigationHistoryBackwardTooltipString = [];
navigationHistoryBackwardTooltipString["de"] = "Navigationshistorie zurück";
var navigationHistoryForwardTooltipString = [];
navigationHistoryForwardTooltipString["de"] = "Navigationshistorie vorwärts";
var zoomInTooltipString = [];
zoomInTooltipString["de"] = "Einzoomen (eine Stufe)";
var zoomOutTooltipString = [];
zoomOutTooltipString["de"] = "Rauszoomen (eine Stufe)";
var objIdentificationTooltipString = [];
objIdentificationTooltipString["de"] = "Objektidentifizierung (Attributdaten)";
var mapTipsTooltipString = [];
mapTipsTooltipString["de"] = "MapTips anzeigen (Attributdaten)";
var measureDistanceTooltipString = [];
measureDistanceTooltipString["de"] = "Distanz messen";
var measureAreaTooltipString = [];
measureAreaTooltipString["de"] = "Fläche messen";
var printMapTooltipString = [];
printMapTooltipString["de"] = "Karte drucken";
var printMapDisabledTooltipString = [];
printMapDisabledTooltipString["de"] = "Drucken nicht möglich, da keine Layouts im QGIS-Projekt definiert wurden";
var sendPermalinkTooltipString = [];
sendPermalinkTooltipString["de"] = "Create permalink to current map"; //FIXME
var sendPermalinkLinkFromString = [];
sendPermalinkLinkFromString["de"] = "Link to current map"; //FIXME
var showHelpTooltipString = [];
showHelpTooltipString["de"] = "Hilfe öffnen";
var showLocationTooltipString = [];
showLocationTooltipString["de"] = "Show Location";  //FIXME
var geonamesLoadingString = [];
geonamesLoadingString["de"] = "Suche...";
var geonamesEmptyString = [];
geonamesEmptyString["de"] = "Suche";
var resetSearchFieldTooltipString = [];
resetSearchFieldTooltipString["de"] = "Suchfeld zurücksetzen";
var printWindowTitleString = [];
printWindowTitleString["de"] = "PDF wird vom Server generiert. Für massstäbliches Drucken deaktivieren Sie bitte das 'Anpassen der Seitengrösse'!";
var printingObjectDataAlternativeString1 = [];
printingObjectDataAlternativeString1["de"] = 'Es sieht so aus als ob Ihr Browser kein PDF Plugin unterstützt. Kein Problem, Sie können die <a href="';
var printingObjectDataAlternativeString2 = [];
printingObjectDataAlternativeString2["de"] = '">PDF-Datei hier herunterladen</a>.</p></object>';
var printButtonTooltipString = [];
printButtonTooltipString["de"] = "Drucken (PDF generieren)";
var printCancelButtonTooltipString = [];
printCancelButtonTooltipString["de"] = "Druck abbrechen (Schliesen)";
var mapThemeButtonTooltipString = [];
mapThemeButtonTooltipString["de"] = "Klicken Sie um das Kartenthema zu wechseln";
var tooltipLayerTreeLayerOutsideScale = [];
tooltipLayerTreeLayerOutsideScale["de"] = "Sichtbar in den Massstäben";
var clickPopupTitleString = [];
clickPopupTitleString["de"] = "Results"; //FIXME
var contextZoomLayerExtent = [];
contextZoomLayerExtent["de"] = "Zoom to layer extent"; //FIXME
var contextOpenTable = [];
contextOpenTable["de"] = "Open attribute table"; //FIXME
var contextDataExport = [];
contextDataExport["de"] = "Export layer to..."; //FIXME
var contextUseExtent = [];
contextUseExtent["de"] = "Use current map extent"; //FIXME
var errMessageStartupMapParamString = [];
errMessageStartupMapParamString["de"] = "Start-Parameter 'map' fehlt!";
var errMessageStartupNotAllParamsFoundString = [];
errMessageStartupNotAllParamsFoundString["de"] = "Es wurden nicht alle notwendigen Web-GIS-Parameter gefunden oder ein optionaler Start-Parameter ist falsch.";
var errMessageExtentParamWrongPart1 = [];
errMessageExtentParamWrongPart1["de"] = "Start-Parameter '";
var errMessageExtentParamWrongPart2 = [];
errMessageExtentParamWrongPart2["de"] = "' muss im OpenLayers.Bounds format sein: 'left,bottom,right,top'.";
var errMessageInvalidLanguageCodeString1 = [];
errMessageInvalidLanguageCodeString1["de"] = "Falscher Sprachparameter übergeben: ";
var errMessageInvalidLanguageCodeString2 = [];
errMessageInvalidLanguageCodeString2["de"] = "Wechsle zurück zur Standardsprache ";
var errMessageSearchComboNetworkRequestFailureTitleString = [];
errMessageSearchComboNetworkRequestFailureTitleString["de"] = "Netzwerk-Request fehlgeschlagen";
var errMessageSearchComboNetworkRequestFailureString = [];
errMessageSearchComboNetworkRequestFailureString["de"] = "Netzwerk-Request für Geometrie des gesuchten Objekts fehlgeschlagen:\n";
