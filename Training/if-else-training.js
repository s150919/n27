/** 
 * Hier können Sie If und Else trainieren
 * Am besten dazu den nodemon starten: 
 * 
 *         ./node_modules/.bin/nodemon Training/if-else-training.js
 * 
 * Dann die Ausgabe im Terminal beobachten.
 *  */ 

// Deklaration und Initialisierung 
// Lies: "Der Wert 0 wird zugewiesen an eine Variable namens x"
 let x = 0
 let y = 1

 if("GW11A".endsWith("A")||"GW11A".endsWith("B")||"GW11A".startsWith("GT")){
     console.log("Die Prüfung ist WAHR. Es werden die Anweisungen im Rumpf von IF ausgeführt")
 }else{
    console.log("Die Prüfung ist FALSCH. Es werden die Anweisungen im Rumpf von ELSE ausgeführt")
 }


// FÄLLLE: 

// 22. if("GW11A".endsWith("A")||"GW11A".endsWith("B")) Der Ausdruck ist wahr. Verknüpfung mit "Oder bzw ||"

// 21. if("GW11A".endsWith("A")) Der Ausdruck ist wahr. Die Funktion prüft ob eine Zeichenkette mit einer anderen Zeichenkette endet.

// 20. if("Gw11A".includes(11) Der Ausdruck ist wahr. Die Funktion prüft ob eine Zeichenkette eine andere Zeichenkette enthält.

// 19. if("Gw11A".startsWith("G") Der Ausdruck ist wahr. Die Funktion startsWith prüft ob eine Zeichenkette mit einer anderen Zeichenkette beginnt

// 18. if(Gw11A.length===5)Der Ausdruck ist wahr. Die Eigenschaft length gibt die Anzahl der Zeichen einer Zeichenkette zurück

// 17. if(undefined)       Der Ausdruck ist falsch. Ein Objekt ist undefined, wenn es nicht existiert. 

// 16. if(1 > 2 || 1 == 1) Der Ausdruck ist wahr, weil eine der beiden Prüfungen wahr ist.

// 15. if(1 > 2 && 1 == 1) Der Ausdruck ist falsch, weil die erste Prüfung falsch ist. Alle mit && verketteten Prüfungen müssen wahr sein, damit
//                         die Prüfung insgesamt wahr wird.

// 14. if(false)    Der Ausdruck ist falsch.

// 13. if(true)     Der Ausdruck ist wahr.

// 12. if(0)        Die Zahl 0 ist falsch.

// 11. if(187)      Zahlen sind wahr, bis auf 0.

// 10. if("")       leere Zeichenketten sind falsch.

// 9.  if("Ah")     nicht leere  Zeichenketten in JavaScript sind wahr.

// 8.  if(1 != 0)   Vergleichsoperator: "ungleich"       Der Ausdruck ist wahr.

// 7.  if(1 <= 1)   Vergleichsoperator: "kleiner gleich" Der Ausdruck ist wahr.

// 6.  if(1 => 1)   Vergleichsoperator: "größer gleich"  Der Ausdruck ist wahr.

// 5.  if(1 === "1") Vergleichsoperator: "gleich"        Der Ausdruck ist falsch
//                 Das "==="prüft auf Gleichheit des Wertes und des Typs.
//                 "1" : String/Zeichenkette
//                  1  : Zahl

// 4.  if(1 == "1") Vergleichsoperator "gleich"          Der Ausdruck ist wahr.
//                  Das doppelte "==" prüft auf Gleichheit des Wertes.
//                  aber nicht auf Gleicheit des Typs.

// 3.  if(0 == 1) Vergleichsoperator:  "gleich"      Der Ausdruck ist falsch.

// 2.  if(0 > 1)  Vergleichsoperator:  "größer als"  Der Ausdruck ist falsch.

// 1.  if(0 < 1)  Vergleichsoperator:  "kleiner als" Der Ausdruck ist wahr. 
