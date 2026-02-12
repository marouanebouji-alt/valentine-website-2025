// Basic Information
valentineName: "Carla"                    // Your Valentine's name
pageTitle: "Veut-tu etre ma valentine? 💝" // Browser tab title

// Floating Background Elements
floatingEmojis: {
    hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis in background
    bears: ['🧸', '🐻']                       // Bear emojis in background
}

// Questions and Buttons
questions: {
    first: {
        text: "Est ce que tu m'apprecies?",                   // First question
        yesBtn: "OUIII",                             // Yes button text
        noBtn: "NONNN BEURK",                               // No button text
        secretAnswer: "Je ne t'apprecie pas mais JE T'AIME COMME JAJA ❤️🫶🏻"  // Hidden message
    },
    second: {
        text: "Comment tu m'aimes?",          // Second question
        startText: "C'est pas mal sa!",                   // Text before percentage
        nextBtn: "Next ❤️"                         // Next button text
    },
    third: {
        text: "Veut-tu etre ma Valentine...?",      // Final question
        yesBtn: "Ouiii!",                            // Yes button text
        noBtn: "Non toz"                                // No button text
    }
}

// Love Meter Messages
loveMessages: {
    extreme: "WOOOOW Tu m'aimes autant ?? 🥰",  // Shows above 5000%
    high: "C'EST COMBIEN LA DOT ?! 🚀💝",              // Shows above 1000%
    normal: "Attend que je te passe la bague au doigt ma puce! 🥰"                           // Shows above 100%
}

// Final Celebration
celebration: {
    title: "La fete ! Je suis chanceux...",     // Celebration title
    message: "Le meilleur reste a venir...",          // Celebration message
    emojis: "🎁💖🤗💝💋❤️💕"                        // Celebration emojis
}

// Website Colors
colors: {
    backgroundStart: "#ffafbd",      // Background gradient start
    backgroundEnd: "#ffc3a0",        // Background gradient end
    buttonBackground: "#ff6b6b",     // Button color
    buttonHover: "#ff8787",          // Button hover color
    textColor: "#ff4757"            // Text color
}

// Animation Settings
animations: {
    floatDuration: "15s",           // How long hearts float (10-20s)
    floatDistance: "50px",          // Sideways movement (30-70px)
    bounceSpeed: "0.5s",            // Bounce animation speed (0.3-0.7s)
    heartExplosionSize: 1.5         // Final heart explosion size (1.2-2.0)
}

// Music Settings
music: {
    enabled: true, // Music feature is enabled
    autoplay: true, // Try to autoplay (note: some browsers may block this)
    musicUrl: "https://on.soundcloud.com/QtZFqRSRad3XGJVXzw", // Paste your music URL here
    startText: "🎵 Play Music", // Button text to start music
    stopText: "🔇 Stop Music", // Button text to stop music
    volume: 0.5 // Volume level (0.0 to 1.0)
}
// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
