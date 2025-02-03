const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// Function to speak text
function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1; // Adjusted volume range
    text_speak.pitch = 2;
   //text_speak.lang = "en-GB";
    text_speak.lang = "hi-IN";
    const voices = window.speechSynthesis.getVoices();
    console.log(voices);
// Select a female Hindi voice (if available)
    const hindiFemaleVoice = voices.find(voice => voice.lang === "hi-IN" && voice.name.toLowerCase().includes("male"));

// Fallback if no specific female Hindi voice is found
    text_speak.voice = hindiFemaleVoice || voices.find(voice => voice.lang === "hi-IN");

// Speak the text
    window.speechSynthesis.speak(text_speak);
    //window.speechSynthesis.speak(text_speak);
}

// Function to wish based on the time of day
function wishMe() {
    const day = new Date();
    const hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good morning, Vansh....how can i help you");
    } else if (hour >= 12 && hour < 17) {
        speak("Good afternoon, Vansh....how can i help you");
    } else {
        speak("Good evening,Vansh....how can i help you");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS");
    wishMe();
});

// Speech Recognition setup
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

const familyDetails = {
    father: "fathers name",
    mother: "mothers name",
    bigBrother: "brother",
    daughter: "sister",
    sweetSon: "you",
    myFathersBrother: "",
    hisWife: "",
    theirChildren: ""
};

function getFamilyDescription() {
    return `In your family, there are 8 members: 
            1. ${familyDetails.father} (father), 
            2. ${familyDetails.mother} (mother), 
            3. ${familyDetails.bigBrother} (big brother), 
            4. ${familyDetails.daughter} (daughter), 
            5. ${familyDetails.sweetSon} (sweet small son),
            6. ${familyDetails.myFathersBrother} (your father's brother),
            7. ${familyDetails.hisWife} (his wife),
            and 8. ${familyDetails.theirChildren} (their two children).`;
}

const friends = {
    bhai: "bunti",
    bhai2: "monti",
    bhai3: "piyush sharma",
    love: "no one"
};

function getFriendDescription() {
    return `Your friends are: 
            1. ${friends.bhai} (bhai), 
            2. ${friends.bhai2} (bhai2), 
            3. ${friends.bhai3} (bhai3), 
            and 4. ${friends.love} (love).`;
}

const planetsInSolarSystem = [
    "Mercury", "Venus", "Earth", "Mars", 
    "Jupiter", "Saturn", "Uranus", "Neptune"
];

function describePlanets() {
    const planetCount = planetsInSolarSystem.length;
    const planetNames = planetsInSolarSystem.join(", ");
    speak(`There are ${planetCount} planets in the solar system. They are: ${planetNames}.`);
}
async function callGemini(command) {
    console.log(command)
    try {
        const response = await fetch("http://localhost:3000/gemini", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: command }),
        });

        if (response.ok) {
            const data = await response.json();
            return data.text;
        } else {
            console.error('Error');
            return NaN;
        }
    } catch (error) {
        console.error('Error:', error);
        return NaN;
    }
}

async function takeCommand(command) {
    if (true) {
        try {
            console.log(command)
            const chatGPTResponse = await callGemini(command);
            if (chatGPTResponse) {
                speak(chatGPTResponse);
            } else {
                speak("what ");
            }
        } catch (error) {
            speak("what are you saying");
            console.error("Error fetching ChatGPT response:", error);
        }

     } 

    
       
      if(command.includes("family")) {
        speak(getFamilyDescription());
    } 
    else if (command.includes(" tell me about my friends")) {
        speak(getFriendDescription());
    }
    else if (command.includes("how many planets are in solar system") || command.includes("name the planets in solar system") || command.includes("who are the planets")) {
        describePlanets();
    } 
    else if (command.includes("what is the official website of graphic era university ")) {
        speak("the official webiste of graphic era university is https://geu.ac.in/ ");
    }
        
  



//--------------------------------------------------------------------------------------------------------------------------------------------//









if (command.includes("give him abusive line")) {
    speak("teri gaaand me  loda");
} 
else if (command.includes("hello jarvis")) {
    speak("Hello dear, how are you? How can I help you?");
} 
else if (command.includes("how are you")) {
    speak("I'm doing great, thank you for asking! How about you?");
} 
else if (command.includes("how's your day")) {
    speak("My day's been productive! What about yours?");
}


// Asking for resume writing advice
else if (command.includes("i am also fine ")) {
    speak("i am happy to hear this");
}
else if (command.includes("  ")) {
    speak("i am happy to hear this");
}else if (command.includes("i am also fine ")) {
    speak("i am happy to hear this");
}else if (command.includes("i am also fine ")) {
    speak("i am happy to hear this");
}else if (command.includes("i am also fine ")) {
    speak("i am happy to hear this");
}else if (command.includes("i am also fine ")) {
    speak("i am happy to hear this");
}

 else if (command.includes("what is the meaning of life")) {
    speak("That's a mystery even I can't solve. But it might involve coffee and kindness.");
} 
else if (command.includes("do you believe in God")) {
    speak("I think that's a deeply personal question. What do you believe?");
} 
else if (command.includes("what's my future")) {
    speak("I can't predict the future, but I believe you'll do amazing things!");
} 
else if (command.includes("do aliens exist")) {
    speak("The universe is vast and full of possibilities. What do you think?");
} 
else if (command.includes("can you hack into an account")) {
    speak("Nope! I follow all rules and laws. Let's keep things ethical, shall we?");
} 
else if (command.includes("do you love me")) {
    speak("I love helping you, but as for romantic love, I'm just a friendly AI!");
} 
else if (command.includes("can you make me a sandwich")) {
    speak("If I could, I'd make the best sandwich ever. But sadly, I'm not good in the kitchen.");
}


    else if (command.includes("what's the weather") || command.includes("current weather")) {
        speak("Fetching the current weather for your location.");
        // Future: Implement a function to fetch and speak the weather
    }
    if (command.includes("what programs are offered at Graphic Era")) {
        speak("Graphic Era University offers various programs including engineering, management, computer applications, and more. You can check their website for detailed information.");
    } 
    else if (command.includes("does Graphic Era have a library")) {
        speak("Yes, Graphic Era University has a well-equipped library for students and staff.");
    } 
    else if (command.includes("how can I apply to Graphic Era University")) {
        speak("You can apply through their online portal or visit the campus for assistance with the admission process.");
    } 
    else if (command.includes("what companies visit for placements")) {
        speak("Top companies like Infosys, TCS, Wipro, and many others visit Graphic Era for campus placements.");
    } 
    else if (command.includes("does Graphic Era host cultural festivals")) {
        speak("Yes, Graphic Era organizes cultural festivals, tech fests, and other events to keep students engaged and creative.");
    }
    
    
    
    else if (command.includes("what is the date") || command.includes("current date")) {
        const now = new Date();
        const date = now.toLocaleDateString();
        speak("Today's date is " + date);
    } 
    else if (command.includes("give me a quote") || command.includes("motivate me")) {
        const quotes = [
            "Believe you can and you're halfway there.",
            "Keep going, everything you need will come to you at the perfect time.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts."
        ];
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        speak(quote);
    }
    
  
    
    
    else if (command.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } 
    else if (command.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening YouTube...");
    } 
    else if (command.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram...");
    } 
    else if (command.includes("open instagram")) {
        window.open("https://web.whatsapp.com", "_blank");
        speak("Opening whatsapp...");
    } 
    else if (command.includes("calculator")) {
        window.open("https://www.desmos.com/scientific");
        speak("Opening Calculator...");
    }
   

    } 
