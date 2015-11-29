/* Das Stichwort "var" kennzeichnet eine Variable in JavaScript */
/* Hier wird einer Variable names "textToShow" der Text 'Hallo Welt' zugewiesen */
var textToShow = 'Hallo Welt';

/* Mit jQuery kann ich HTML-Elemente mit CSS-Selektoren ansprechen */
/* Zum Beispiel #mainButton sucht das Element mit der id "mainButton" */
/* $('#mainButton') selektiert also #mainButton */
/* .on('click', ...); ist ein Event Handler (wie im App Inventor)  */
/* wenn ich den Button #mainButton klicke, dann ...  */
$('#mainButton').on('click', function() {

  /* Alert ist eine Funktion, die einen Text in einem kleinen, mühsamen Popup anzeigt */
  alert(textToShow);
});
