var guest = ["Sara", "Ali", "Mahnoor"];
var unableToAtted = "Sara";
console.log("".concat(unableToAtted, " can't make it to dinner"));
var newguest = "laiba";
guest[guest.indexOf(unableToAtted)] = newguest;
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, " would you like to join me at dinner"));
});
