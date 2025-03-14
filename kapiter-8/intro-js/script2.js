// alert("Glädjens dag, det är fredag!");
// var namn = prompt("Vad heter du?");
// var ålder = prompt("Hur gammal är du?");
// alert("Hej " + namn + ", du är " + ålder + " år gammal.")
// console.log("Det verkar funka, det här!")

// var tal1String = prompt("Skriv ett tal.");
// var tal2String = prompt("Skriv ett till tall.");
// var summa = parseInt(tal1String) + parseInt(tal2String);
// alert("Summan är " + summa + "!");

// var ålder = prompt("Hur gammal är du?");
// var studenten = ("19");
// if (ålder < 19) {
//     alert("Du tar studenten om " + (studenten - ålder) + " år!");
// }
// if (ålder > 19) {
//     alert("Du har redan tagit studenten.");
// }
// if (ålder == 19) {
//     alert("Du tar studenten det här året!");
// }
// document.writeln("<h2>Du tar studenten om " + (studenten - ålder) + " år!</h2>");

var slumptal1 = Math.round(Math.random() * 100);
var slumptal2 = Math.round(Math.random() * 100);
var summa = slumptal1 + slumptal2;
console.log(slumptal1, slumptal2);
var gissning = prompt("Vad är summan av " + slumptal1 + " + " + slumptal2 + "?");
if (gissning == summa) {
    document.writeln("<h1>Bra jobbat! 😁<h1>");
} else {
    document.writeln("<h1>Sucker! 💀<h1>");
}