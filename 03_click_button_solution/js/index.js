/* Das ist ein Kommentar in JavaScript */
/* Das Stichwort "var" kennzeichnet eine Variable in JavaScript */
/* Hier wird einer Variable names "textToShow" der Text 'Hallo Welt' zugewiesen */
var textToShow = 'Hallo Welt';

/* Mit jQuery kann ich DOM-Elemente mit CSS-Selektoren ansprechen */
/* Zum Beispiel #mainButton sucht das Element mit der id "mainButton" */
/* $('#mainButton') selektiert also #mainButton */
/* .on('click', ...); ist ein Event Handler (wie im App Inventor)  */
/* wenn ich den Button #mainButton klicke, dann ...  */
$('#mainButton').on('click', function() {

  /* Hier wird der Text des Buttons mit der id "mainButton" angepasst: Die Funktion .text() ersetzt den Text eines DOM-Elements */
  $('#mainButton').text(textToShow);
});
