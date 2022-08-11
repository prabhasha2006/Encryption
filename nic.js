// Kumuthu Prabhasha \\
// OBFUSCATED CODE \\
// ```TEXT-ENCRYPTION-METHOD```

document.getElementById("dates").innerHTML = "POWERED BY: (U.V.D.KUMUTHU PRABHASHA) OL/2022/40225 K.Prabhasha"


function prabhasha(){

document.getElementById("upname").innerHTML = "Name: " + document.getElementById("name").value

let nic = document.getElementById("nic").value
var year = nic.slice(0,2)
year = Number(year)
console.log(year)

if (year > 40) {year = "19" + year} else {year = "20" + year}

var date = nic.slice(2,5)
date = Number(date)

if (date <=  500) {
    document.getElementById("gend").innerHTML = "Gender : Male \n"
} else {
    document.getElementById("gend").innerHTML = "Gender : Feemale \n"}

if (date >= 500) {date = date - 500}

if (date <=  32) {document.getElementById("bd").innerHTML = "Birthday is on : "+ year + " - 01 - " + (date + 1)  } else {
    if (date <=  60) {document.getElementById("bd").innerHTML = "Birthday is on : "+ year + " - 02 - " + (date - 32) } else {
    if (date <=  91) {document.getElementById("bd").innerHTML = "Birthday is on : "+ year + " - 03 - " + (date - 60) } else {
    if (date <= 121) {document.getElementById("bd").innerHTML = "Birthday is on : "+ year + " - 04 - " + (date - 91) } else {
    if (date <= 152) {document.getElementById("bd").innerHTML = "Birthday is on : "+ year + " - 05 - " + (date - 121)} else {
    if (date <= 182) {document.getElementById("bd").innerHTML = "Birthday is on : "+ year + " - 06 - " + (date - 152)} else {
    if (date <= 213) {document.getElementById("bd").innerHTML = "Birthday is on : "+ year + " - 07 - " + (date - 182)} else {
    if (date <= 244) {document.getElementById("bd").innerHTML = "Birthday is on : "+ year + " - 08 - " + (date - 213)} else {
    if (date <= 274) {document.getElementById("bd").innerHTML = "Birthday is on : "+ year + " - 09 - " + (date - 244)} else {
    if (date <= 305) {document.getElementById("bd").innerHTML = "Birthday is on : "+ year + " - 10 - " + (date - 274)} else {
    if (date <= 335) {document.getElementById("bd").innerHTML = "Birthday is on : "+ year + " - 11 - " + (date - 305)} else {
    if (date <= 366) {document.getElementById("bd").innerHTML = "Birthday is on : "+ year + " - 12 - " + (date - 335)}
    }}}}}}}}}}}



}