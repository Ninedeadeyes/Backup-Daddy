let randomQuote=document.getElementById("Quote");

let diceRoll;
let setting;

randomQuote.innerHTML="Providing random life advice and your daily 'quest'  "

let lifeQuotes=["Life isn't always going to be fair but don't be bitter be better, always strive to move forward",
           "When it comes to career think what you enjoy, what you are good at, what you can by paid for, what the world needs ",
           "Always strive to be the best version of yourself. For example if you choose to be a tiddlywinks player, be the best you can be. ",
           "Pick up coding, even if it is not a career path for you, it is fun to learn and you gain the ability to create.",
           "Try to be as honest as possible and avoid lying. This is not always easy but you will be a better person for it",
           "Learn to walk away from people and situations. Not everyone is your friend and some situation you can only lose by being involved",
           "Find a balance of interests/hobbies. Some should be challenging so you can explore your potential whilst others should be easy on the brain/body which provides time for reflection/relaxation",
           "Focus on improving yourself rather the world. When you invest in yourself and make a change, it will naturally reflect upon the world",
           "Like going to the gym to gain strength, you need to demonstrate compassion to achieve being kind. Do something nice every day",
           "Gambling and pay to win games are for idiots. You are not an idiot do not gamble or get invested in a pay to win game",
           "You only need 'credit' for a mortgage. If you do not have enough for something, save up for it. ",
           "Try many different things and be open minded because you do not know what you enjoy until you have given it a good go"];


let healthQuotes=["Master the 'push up' because it is one exercise you can do anywhere",
                "The best exercise is the one you do on a regular basis, so find out what you enjoy",
                "You are only in competition with yourself. Do not compare yourself to others only to your past self ",
                "Remember to eat healthy foods like vegetables, lean meat and fruits. We are not evolved for the modern western diet (Too much fat and sugar). ",
                "Pick at least 1 physical activity/sport where you can do it on your own hence not rely on someone else to be active. For example : Running ",
                "Good bands to workout too. Hatebreed, Terror, Throwdown, Madball, Born from Pain, Lionheart, Stick To Your Guns, Until The End (alot of hardcore/metal bands)",
                "When you are interested in 'courting', not only working out builds confidence but people tend to look at you a split second longer than before",
                "A simple full body workout plan would be push ups, chin ups, dumbbell front squat and dumbell press ",
                "Try to eat some vegetables every day. You do not need to like them all but pick a bunch that you enjoy and implement them in your meals",
                "Do not be afraid of a little pain especially when you are pushing yourself. It takes some discomfort to find ones limit",
                "Sleep is important not just to recover the body but the mind. If you need a nap, take that nap",
                "Investing in your body is as important as investing in your mind as they say 'healthy body, healthy mind.'"];
       
let quest =[    "Perform 20 Knee assisted or standard push ups ",
                "Perform 50 body squats",
                "Tidy your room ",
                "Run a mile or two ",
                "Mediate for 3 minutes ( sit still in silence whilst focusing on your breathing)",
                "Perform 8 chair assisted or standard chin ups ",
                "Tell me 3 things you have learnt this week ",
                "Find a random book and read one page from it",
                "Find a random noun in a dictionary and then learn 3 things about it on Wikipedia",
                "Write a short 'choose your own adventure' story ",
                "Do something 'nice' for someone ",
                "Tell me one situation that did not work out for you and what you can do in the future to improve such situation"];

function Dice(side){
    let result=Math.floor(Math.random()*side)+1;
        return result;
    }

function life(){
    diceRoll=Dice(12)-1;
    setting=lifeQuotes[diceRoll];

    let pickedQuote=setting ;

    randomQuote.innerHTML=pickedQuote;

    }

function health(){
    diceRoll=Dice(12)-1;
    setting=healthQuotes[diceRoll];
        
    let pickedQuote=setting ;
    
    randomQuote.innerHTML=pickedQuote;
    
        }

function daily(){
    diceRoll=Dice(12)-1;
    setting=quest[diceRoll];
        
    let pickedQuote=setting ;
    
    randomQuote.innerHTML=pickedQuote;
    
        }


document.getElementById('clear-history-button').addEventListener('click', function() {
    document.getElementById('chat-history').innerHTML = '';
});

document.getElementById('submit-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    document.getElementById('user-input').value = '';
    addMessageToChatHistory('Alex:', userInput);
    processUserInput(userInput);
});

function addMessageToChatHistory(sender, message) {
    const chatHistory = document.getElementById('chat-history');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function processUserInput(input) {
    const keywords = ["build",'name',"age","advice","favourite music","favourite food","hate","like", "love me","hi","bye","morning","hello","night","joke","life", "love you"];
    const responses = {
        "build": "So I can pass down some fatherly advice even though I am not here anymore",
        "hi": "Hi Alex",
        "hello":"Hello Alex",
        "morning":"Morning Alex",
        'name': 'Tommy Kwong',
        'age':"39 (well, that's how old I was when i wrote this anyway ) ",
        'advice':"Remember to do some exercise and be kind to people ",
        'favourite music':"Katatonia, Tool and Opeth",
        'favourite food':"Italian and KFC ",
        "hate":"heights, slugs and narcissist",
        "like": "I like running, coding and metal",
        "love me":"Yes I love you Alex",
        "love you": "I love you too",
        "bye":"Good bye Alex",
        "night":"Good night Alex",
        "joke": "Why did the strawberry cry? He found himself in a jam",
        "life":"Life is what you put into it, try many things, find your path and work hard"
    
    };

    const lowerCaseInput = input.toLowerCase();
    for (const keyword of keywords) {
        if (lowerCaseInput.includes(keyword)) {
            const response = responses[keyword];
            addMessageToChatHistory('Dadbot', response);
            return;
        }
    }

    addMessageToChatHistory('Dadbot',"I do not understand, I am very limited like my creator ");
}

