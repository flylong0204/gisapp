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
availableLanguages["hu"].names["hu"] = "Magyar";
var mapAppLoadingString = [];
mapAppLoadingString["hu"] = "Térkép kliens betöltése";
var mapLoadingString = [];
mapLoadingString["hu"] = "Térkép betöltése folyamatban...";
var modeNavigationString = [];
modeNavigationString["hu"] = "Mód: navigáció. Shift / téglalappal vagy egér görgővel lehet nagyítani.";
var modeZoomRectangle = [];
modeZoomRectangle["hu"] = "Mód: nagyítás kijelöléssel. Rajzolj egy téglalapot a nagyítani kívánt területre.";
var modeObjectIdentificationString = [];
modeObjectIdentificationString["hu"] = "Mód: térképi elem azonosítás. Mozgasd az egeret a kívánt térképi elem fölé, klikkelj rá.";
var modeMapTipsString = [];
modeMapTipsString["hu"] = "Mód: Térkép tipp. Megjelenik az egér fölött a buborék információ."; //FIXME
var modeMeasureDistanceString = [];
modeMeasureDistanceString["hu"] = "Mód: távolság mérés. Befejezés dupla kattintással.";
var modeMeasureAreaString = [];
modeMeasureAreaString["hu"] = "Mód: terület mérés. Befejezés dupla kattintással.";
var modeStreetViewString = [];
modeStreetViewString["hu"] = "Mode: GoogleStreetView. Click on the road."; //FIXME
var modePrintingString = [];
modePrintingString["hu"] = "Mód: nyomtatás. Mozgatható, forgatható a nyomtatási terület.";
var printLoadingString = [];
printLoadingString["hu"] = "Printing initialised. Please wait..."; //FIXME
var leftPanelTitleString = [];
leftPanelTitleString["hu"] = "Információk és Eszközök";
var searchPanelTitleString = [];
searchPanelTitleString["hu"] = "Keres";
var mapThemeButtonTitleString = [];
mapThemeButtonTitleString["hu"] = "Tematikus térképek";
var themeSwitcherWindowTitleString = [];
themeSwitcherWindowTitleString["hu"] = "Tematikus térkép választó";
var themeSwitcherFilterLabelString = [];
themeSwitcherFilterLabelString["hu"] = "Szűrés térkép cím alapján:";
var themeSwitcherAllThemesListViewString = [];
themeSwitcherAllThemesListViewString["hu"] = "Összes tematikus térkép";
var themeSwitcherTooltipResponsibleString = [];
themeSwitcherTooltipResponsibleString["hu"] = "Felelős: ";
var themeSwitcherTooltipTagString = [];
themeSwitcherTooltipTagString["hu"] = "Címkék: ";
var themeSwitcherTooltipMapThemeString = [];
themeSwitcherTooltipMapThemeString["hu"] = "Tematikus térkép: ";
var themeSwitcherTooltipUpdateString = [];
themeSwitcherTooltipUpdateString["hu"] = "Frissítés intervalluma: ";
var themeSwitcherTooltipLastUpdateString = [];
themeSwitcherTooltipLastUpdateString["hu"] = "Utolsó frissítés: ";
var themeSwitcherTooltipPwProtectedString = [];
themeSwitcherTooltipPwProtectedString["hu"] = "jelszóval védett";
var emptyThemeSearchFieldString = [];
emptyThemeSearchFieldString["hu"] = "Szűrő feltétel helye";
var resetThemeSearchFieldTooltipString = [];
resetThemeSearchFieldTooltipString["hu"] = "Szűrő mező törlése";
var mapPanelTitleString = [];
mapPanelTitleString["hu"] = "Térkép";
var layerTreeTitleString = [];
layerTreeTitleString["hu"] = "Térkép rétegei";
var backgroundLayerTitleString = [];
backgroundLayerTitleString["hu"] = "Background Layers";
var externalLayerTitleString = [];
externalLayerTitleString["hu"] = "External Layers"; //FIXME
var layerOrderPanelTitleString = [];
layerOrderPanelTitleString["hu"] = "Réteg sorrend";
var layerOrderPanelLayerSettingsTooltipString = [];
layerOrderPanelLayerSettingsTooltipString["hu"] = "Beállítások";
var layerOrderPanelVisibilityChangeTooltipString = [];
layerOrderPanelVisibilityChangeTooltipString["hu"] = "Réteg ki/be kapcsolása";
var layerOrderPanelMoveLayerTextString = [];
layerOrderPanelMoveLayerTextString["hu"] = "Réteg mozgatása";
var layerOrderPanelTransparencyTooltipString = [];
layerOrderPanelTransparencyTooltipString["hu"] = "Átlászóság {0}%";
var legendTabTitleString = [];
legendTabTitleString["hu"] = "Jelkulcs";
var legendTabLoadingString = [];
legendTabLoadingString["hu"] = "Jelkulcs"; //FIXME
var metadataTabTitleString = [];
metadataTabTitleString["hu"] = "Metaadat";
var helpWindowTitleString = [];
helpWindowTitleString["hu"] = "Segítség";
var legendMetadataWindowTitleString = [];
legendMetadataWindowTitleString["hu"] = "Jelkulcs és metaadat információ a következő rétegről: ";
var metadataSectionTitleString = [];
metadataSectionTitleString["hu"] = "Réteg neve:";
var abstractString = [];
abstractString["hu"] = "Absztrakt:";
var layerQueryable = [];
layerQueryable["hu"] = "Ez a réteg lekérdezhető: ";
var yesString = [];
yesString["hu"] = "igen";
var noString = [];
noString["hu"] = "nem";
var layerGroupString = [];
layerGroupString["hu"] = "Layer group"; //FIXME
var displayFieldString = [];
displayFieldString["hu"] = "Megjelenő-Mező";
var coordinateSystemsString = [];
coordinateSystemsString["hu"] = "Elérhető koordináta rendszerek";
var geographicExtentString = [];
geographicExtentString["hu"] = "Földrajzi kiterjedés";
var westString = [];
westString["hu"] = "nyugat";
var eastString = [];
eastString["hu"] = "kelet";
var northString = [];
northString["hu"] = "észak";
var southString = [];
southString["hu"] = "dél";
var attributesString = [];
attributesString["hu"] = "Attribútumok / Mezők";
var attributeNameString = [];
attributeNameString["hu"] = "Attribútum név";
var attributeTypeString = [];
attributeTypeString["hu"] = "Típus";
var attributeCommentString = [];
attributeCommentString["hu"] = "Megjegyzés";
var attributeLengthString = [];
attributeLengthString["hu"] = "Hossz";
var attributePrecisionString = [];
attributePrecisionString["hu"] = "Pontosság";
var objectIdentificationTextLabel = [];
objectIdentificationTextLabel["hu"] = "Elem azonosítás: ";
var coordinateTextLabel = [];
coordinateTextLabel["hu"] = "Koordináta:";
var searchFieldDefaultTextString = [];
searchFieldDefaultTextString["hu"] = "Keres (cím, név, stb.)";
var searchButtonString = [];
searchButtonString["hu"] = "Keres";
var resetButtonString = [];
resetButtonString["hu"] = "Törlés";
var pleaseWaitString = [];
pleaseWaitString["hu"] = "Kérem várjon";
var searchResultString = [];
searchResultString["hu"] = "Keresés eredménye";
var networkErrorString = [];
networkErrorString["hu"] = "Hálózati hiba";
var missingOrInvalidSearchParams = [];
missingOrInvalidSearchParams["hu"] = "Hiányzó vagy érvénytelen értékek a keresési űrlapon";
var searchErrorString = [];
searchErrorString["hu"] = "Hiba a keresés alatt";
var searchNoRecordsFoundString = [];
searchNoRecordsFoundString["hu"] = "Hiba a keresés alatt"; // FIXME
var printSettingsToolbarTitleString = [];
printSettingsToolbarTitleString["hu"] = "Nyomtatás beállításai";
var printSettingsRotationTextlabelString = [];
printSettingsRotationTextlabelString["hu"] = "Forgatás: ";
var printButtonTextString = [];
printButtonTextString["hu"] = "Nyomtat";
var printCancelButtonTextString = [];
printCancelButtonTextString["hu"] = "Mégsem";
var objectIdentificationModeString = [];
objectIdentificationModeString["topMostHit"] = [];
objectIdentificationModeString["topMostHit"]["hu"] = "Legfelső találat";
objectIdentificationModeString["allLayers"] = [];
objectIdentificationModeString["allLayers"]["hu"] = "Minden réteg";
objectIdentificationModeString["activeLayers"] = [];
objectIdentificationModeString["activeLayers"]["hu"] = "Aktív réteg";
var measureDistanceResultPrefixString = [];
measureDistanceResultPrefixString["hu"] = "Távolság";
var measureAreaResultPrefixString = [];
measureAreaResultPrefixString["hu"] = "Terület";
var zoomRectangleTooltipString = [];
zoomRectangleTooltipString["hu"] = "Nagyítás téglalappal";
var zoomFullViewTooltipString = [];
zoomFullViewTooltipString["hu"] = "Teljes nézet";
var navigationHistoryBackwardTooltipString = [];
navigationHistoryBackwardTooltipString["hu"] = "Előző nagyítás";
var navigationHistoryForwardTooltipString = [];
navigationHistoryForwardTooltipString["hu"] = "Következő nagyítás";
var zoomInTooltipString = [];
zoomInTooltipString["hu"] = "Nagyítás (diszkrét lépéssekkel)";
var zoomOutTooltipString = [];
zoomOutTooltipString["hu"] = "Kicsinyít (diszkrét lépéssekkel)";
var objIdentificationTooltipString = [];
objIdentificationTooltipString["hu"] = "Elem azonosítás (attribútum adatok)";
var mapTipsTooltipString = [];
mapTipsTooltipString["hu"] = "Megjeleníti térkép szövegbuborákait (attribútum adatok)";
var measureDistanceTooltipString = [];
measureDistanceTooltipString["hu"] = "Távolság mérés";
var measureAreaTooltipString = [];
measureAreaTooltipString["hu"] = "Terület mérés";
var printMapTooltipString = [];
printMapTooltipString["hu"] = "Térkép nyomtatás";
var printMapDisabledTooltipString = [];
printMapDisabledTooltipString["hu"] = "Nyomtatás letiltva, nincs nyomtatási nézet definiálva a QGIS projektben";
var sendPermalinkTooltipString = [];
sendPermalinkTooltipString["hu"] = "Create permalink to current map"; //FIXME
var sendPermalinkLinkFromString = [];
sendPermalinkLinkFromString["hu"] = "Link to current map"; //FIXME
var showHelpTooltipString = [];
showHelpTooltipString["hu"] = "Mutasd a súgót";
var showLocationTooltipString = [];
showLocationTooltipString["hu"] = "Show Location";  //FIXME
var geonamesLoadingString = [];
geonamesLoadingString["hu"] = "Keresés...";
var geonamesEmptyString = [];
geonamesEmptyString["hu"] = "Keresés";
var resetSearchFieldTooltipString = [];
resetSearchFieldTooltipString["hu"] = "Kereső mező törlése";
var printWindowTitleString = [];
printWindowTitleString["hu"] = "A szerver generál egy PDF állományt. A helyes lépték érdekében kérem kapcsolja ki a 'Oldalhoz igazítás' opciót!";
var printingObjectDataAlternativeString1 = [];
printingObjectDataAlternativeString1["hu"] = 'Böngésző nem tudja megnyítni a PDF állományokat. PDF állomány elérhető <a href="';
var printingObjectDataAlternativeString2 = [];
printingObjectDataAlternativeString2["hu"] = '">ezen a linken.</a>.</p></object>';
var printButtonTooltipString = [];
printButtonTooltipString["hu"] = "Nyomtat (PDF generálása)";
var printCancelButtonTooltipString = [];
printCancelButtonTooltipString["hu"] = "Mégsem nyomtat (bezár)";
var mapThemeButtonTooltipString = [];
mapThemeButtonTooltipString["hu"] = "Klikkeljen ide új tematikus térkép választásához";
var tooltipLayerTreeLayerOutsideScale = [];
tooltipLayerTreeLayerOutsideScale["hu"] = "Visible at scales"; //FIXME
var clickPopupTitleString = [];
clickPopupTitleString["hu"] = "Results"; //FIXME
var contextZoomLayerExtent = [];
contextZoomLayerExtent["hu"] = "Zoom to layer extent"; //FIXME
var contextOpenTable = [];
contextOpenTable["hu"] = "Open attribute table"; //FIXME
var contextDataExport = [];
contextDataExport["hu"] = "Export layer to..."; //FIXME
var contextUseExtent = [];
contextUseExtent["hu"] = "Use current map extent"; //FIXME
var errMessageStartupMapParamString = [];
errMessageStartupMapParamString["hu"] = "Indulási-Paraméter 'map' hiányzik!";
var errMessageStartupNotAllParamsFoundString = [];
errMessageStartupNotAllParamsFoundString["hu"] = "Néhány kötelező indítási paramétert hiányzik, vagy egy opcionális indítási paraméter érvénytelen.";
var errMessageExtentParamWrongPart1 = [];
errMessageExtentParamWrongPart1["hu"] = "Indulási-paraméter '";
var errMessageExtentParamWrongPart2 = [];
errMessageExtentParamWrongPart2["hu"] = "' következő formátum szükséges OpenLayers.Bounds: 'left,bottom,right,top'.";
var errMessageInvalidLanguageCodeString1 = [];
errMessageInvalidLanguageCodeString1["hu"] = "Érvénytelen nyelvi kód: ";
var errMessageInvalidLanguageCodeString2 = [];
errMessageInvalidLanguageCodeString2["hu"] = "Visszatér az alapértelmezett nyelvhez ";
var errMessageSearchComboNetworkRequestFailureTitleString = [];
errMessageSearchComboNetworkRequestFailureTitleString["hu"] = "Hálózati kérés sikertelen";
var errMessageSearchComboNetworkRequestFailureString = [];
errMessageSearchComboNetworkRequestFailureString["hu"] = "Hálozati kérés a keresett geometriára sikertelen:\n";
