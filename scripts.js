function init() {
    // console.log("LOAD!!!");

    // document.getElementById('heart').addEventListener('click', function() {
    //     // console.log('click');
    // });
    const heartFacts = [
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
        let testP = document.getElementById('testP');
        testP.innerHTML = heartFacts[currentFact];
        if (currentFact === heartFacts.length - 1) {
            currentFact = 0;
        } else {
            currentFact++;
        }
    }

    // const textVanish = [
    //     { transition: "opacity(0)"},
    //     { transform: "opacity(0.5)"},
    //     { transform: "opacity(0)"}
    // ]

    // const textTiming = {
    //     duration: 1000,
    //     iterations: 1,
    // };

    const heartBeating = [
        { transform: "scale(1)" },
        { transform: "scale(0.7)" },
        { transform: "scale(1.2)" },
        { transform: "scale(0.85)" },
        { transform: "scale(1)" }
      ];
      
      const heartTiming = {
        duration: 500,
        iterations: 1,
      };
      
      const heart = document.querySelector(".heart");
      
      heart.addEventListener("click", () => {
        heart.animate(heartBeating, heartTiming);
        document.getElementById('testP').animate(
            [
                {
                    opacity: 1,
                    scale: 1,
                },
                {
                    opacity: 0.8,
                    scale: 0.7,
                },
                {
                    opacity: 0.4,
                    scale: 1.2,
                },
                {
                    opacity: 0.2,
                    scale: 0.85,
                },
                {
                    opacity: 0,
                    scale: 1,
                },
            ],
            500
        );
        // displayHeartFact();
        const displayFact = setTimeout(displayHeartFact, 500);
      });
      
}

window.addEventListener('load', init);