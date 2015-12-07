/* Das ist ein Kommentar in JavaScript */
/* Mit jQuery kann ich DOM-Elemente mit CSS-Selektoren ansprechen */
/* Zum Beispiel #mainButton sucht das Element mit der id "mainButton" */
/* $('#mainButton') selektiert also #mainButton */
/* .on('click', ...); ist ein Event Handler (wie im App Inventor)  */
/* wenn ich den Button #mainButton klicke, dann ...  */
$('#mainButton').on('click', function() {

  /* Das Stichwort "var" kennzeichnet eine Variable in JavaScript */
  /* Mit der jQuery Funktion .val() kann der aktuelle Wert eines <input> elements ausgelesen werden */
  /* Hier wird der Wert des <input> mit der id "text" ausgelesen und in der Variable textToShow gespeichert */
  var textToShow = $('#input').val();

  /* Hier wird der Text des Buttons mit der id "mainButton" angepasst: Die Funktion .text() ersetzt den Text eines DOM-Elements */
  $('#mainButton').text(textToShow);
});
