let heartFacts = [
    "Your heart beats about 100,000 times per day. During the average person’s lifetime, their heart beats more than 2.6 billion times. (Your pulse is a way you can feel your heart beating.)",
    "The beating sound from your heart — lub-dub, lub-dub, lub-dub — is from the clap of valve leaflets opening and closing.",
    "A typical human heart valve is about the size of a half dollar.",
    "Each minute, your heart pumps nearly 1.5 gallons (5.7 liters) of blood. That’s a pump flow rate that could fill an Olympic-sized swimming pool in less than a year. (Talk about a gold medal effort!)",
    "Your adult-sized heart is about the size of two hands clasped together. A child’s heart is about the size of a single fist.",
    "Location is everything in life, right? That’s true for your heart, too. It’s located in the front of your chest, slightly behind and to the left of your breastbone. Your ribs offer extra protection for the vital organ.",
    "To make room for your heart, your left lung is slightly smaller than your right lung."
];

let currentFact = 0;

function displayHeartFact() {
    let heartContainer = document.getElementById('heartContainer');
    heartContainer.innerHTML = heartFacts[currentFact];
    if (currentFact === heartFacts.length - 1) {
        currentFact = 0;
    } else {
        currentFact++;
    }
}

module.exports = {
    displayHeartFact: displayHeartFact
}