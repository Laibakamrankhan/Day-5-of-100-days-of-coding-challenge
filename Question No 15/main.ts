let guest : string[] = ["Sara","Ali","Mahnoor"]
let unableToAtted = "Sara"
console.log(`${unableToAtted} can't make it to dinner`);
let newguest = "laiba"
guest[guest.indexOf(unableToAtted)] = newguest
guest.forEach(guest => {
    console.log(`Dear ${guest} would you like to join me at dinner`);
    
});
