function feetToMeter() {
let feet = document.getElementById("feet").value;
let result = feet * 0.305;
document.getElementById("result").innerText="Meters : " + result;
}
function meterToFeet() {
    let meters = document.getElementById("meters").value;
    let result = meters * 3.279;
    document.getElementById("result").innerText= "Feet : " + result;
    }