var vactionSpots: Array<string> = [
    "Greece", 
    "Provo, East", 
    "Okinawa, Japan", 
    "Rome", 
    "Scottish Highlands", 
    "Tokyo", 
    "Sydney"
];

for (let i = 0; i < vactionSpots.length; i++) {
    console.log(`#${i + 1}: ${vactionSpots[i]}`);
}

vactionSpots.forEach((spot) => {
    console.log(`You need to check this place out immediately one of those celebs likes it here ${spot}`)
})