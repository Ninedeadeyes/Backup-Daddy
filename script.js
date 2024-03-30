let randomQuote=document.getElementById("Quote");

let diceRoll;
let setting;

randomQuote.innerHTML="Providing random life advice and your daily 'quest'  "

let lifeQuotes=["Life isn't always going to be fair but don't be bitter be better, always strive to move forward",
           "When it comes to career think what you enjoy, what you are good at, what you can by paid for and what the world needs ",
           "Always strive to be the best version of yourself. For example if you choose to be a tiddlywinks player, be the best you can be. ",
           "Pick up coding, even if it is not a career path for you, it is fun to learn and you gain the ability to create.",
           "Try to be as honest as possible and avoid lying. This is not always easy but you will be a better person for it",
           "Learn to walk away from people and situations. Not everyone is your friend and some situation you can only lose by being involved",
           "Find a balance of interests/hobbies. Some should be challenging so you can explore your potential (coding and exercise ) whilst others should be easy on the brain/body (watching anime, playing games) which provides time for reflection/relaxation",
           "Focus on improving yourself rather the world. When you invest in yourself and make a change, it will naturally reflect upon the world",
           "Like going to the gym to gain strength, you need to demonstrate compassion to achieve being kind. Do something nice for someone every day",
           "Gambling and pay to win games are for idiots. You are not an idiot do not gamble or get invested in a pay to win game",
           "You only need 'credit' for a mortgage. If you do not have enough for something, save up for it. ",
           "Education is like having a set of golf clubs. You never know what you are going to need so make sure you are prepared.",
           "Even though life is not always fair, by working hard, being smart and tenacious you are going to tip the odds in your favour",
           "Be someone who is continuously learning and developing. Life is a 1 way journey, you only get one chance to fulfil your potential. Build daily routines and do not waste your opportunities.",
           "If you are going to go to University pick something that has clear and realistic career paths.. I would recommend a STEM subject like Math which will open alot of doors for you. Avoid artistic degrees. You can be as artistic as you like in your free time",
           "Try many different things and be open minded because you do not know what you enjoy until you have given it a good go"];


let healthQuotes=["Master the 'push up' because it is one exercise you can do anywhere",
                "The best exercise is the one you do on a regular basis, so find out what you enjoy",
                "You are only in competition with yourself. Do not compare yourself to others only to your past self ",
                "Remember to eat healthy foods like vegetables, lean meat and fruits. We are not evolved for the modern western diet (Too much fat and sugar). ",
                "Pick at least 1 physical activity/sport where you can do it on your own hence not rely on someone else to be active. For example : Running ",
                "Good bands to workout too. Hatebreed, Terror, Throwdown, Madball, Born from Pain, Lionheart, Stick To Your Guns, Until The End (alot of hardcore/metal bands)",
                "When you are interested in 'courting', not only working out builds confidence but people tend to look at you a split second longer than before",
                "A simple full body workout plan would be push ups, chin ups, dumbbell front squat, dumbell shoulder press and running on the rest days ",
                "A very simple full body workout plan would be push ups, chin ups and running on the rest days",
                "A full body dumbbell workout plan would be bentover dumbbell rows, dumbell chest press, dumbbell front squat, dumbell shoulder press. Running on the rest days",
                "Try to eat some vegetables every day. You do not need to like them all but pick a bunch that you enjoy and implement them in your meals. I like sweetcorns, baked beans, frozen mushrooms and frozen mix vegetables",
                "Do not be afraid of a little pain especially when you are pushing yourself. It takes some discomfort to find ones limit",
                "Sleep is important not just to recover the body but the mind. If you need a nap, take that nap",
                "You do not always need to buy fresh vegetables. Not only frozen vegetables are cheaper but maintain more of its nutrients", 
                "If you are ever very stressed, Learn to mediate. Close your eyes and sit still for 5 minutes, focus completely on your breathing as you inhale then exhale.",
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
                "Do something 'nice' for someone, for example : buy a book for someone, cook something nice for mother or ask a friend how was their day",
                "Tell me one situation that did not work out for you and what you can do in the future to improve such situation"];

function Dice(side){
    let result=Math.floor(Math.random()*side)+1;
        return result;
    }

function life(){
    diceRoll=Dice(16)-1;
    setting=lifeQuotes[diceRoll];

    let pickedQuote=setting ;

    randomQuote.innerHTML=pickedQuote;

    }

function health(){
    diceRoll=Dice(16)-1;
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
    const keywords = [ "you die","what are you","run","cod","about you","meaning","metal","album","movie","anime","book","depress","not ok","are you ok","cya","still sad","still bored","bored","sad","miss you","dislike","say to me","more advice","happy","build",'name',"age","advice","music","food","hate","like", "love me","bye","morning","hello","night","joke","life", "love you","built","tip","fuck","dick","hug","thank you","how are you","ok","hi","lol","haha"];
    const responses = {
        "build": "Because I am a bit weird. It is nice to leave something behind if I am unexpectedly offlined ",
        "built": "Because I am a bit odd. It is nice to leave something behind if I am unexpectedly offlined ",
        "hi": "Hi Alex",
        "haha":"Glad that I can make you laugh",
        "hello":"Hello Alex",
        "what are you": "I am a chatbot built by your father to replace him if he ever goes offline ",
        "morning":"Morning Alex",
        'name': 'Tommy Kwong (Chatbot edition)',
        'age':"39 ( Was my age when I last updated this ) ",
        'advice':"Remember to have a weekly exercise routine and be kind to people ",
        'music':" I like Katatonia, Tool and Opeth whilst I dislike pop music ",
        "food":" I like Italian food and KFC whilst I dislike cucumbers ",
        "hate":" Hate is a strong word but I dislike heights, slugs and narcissist",
        "dislike": "Heights, slugs and narcissist",
        "like": "I like running, coding, anime and metal (music)",
        "love me":"Yes I love you Alex",
        "love you": "I love you too Alex",
        "bye":"Good bye Alex",
        "cya":"Cya Alex",
        "die":"I am sorry but it was never my intention to go so soon",
        "night":"Good night Alex",
        "tip": "Be nice to others and most of the time people will be nice to you. Cut away those that aren't",
        "joke": "Why did the strawberry cry? He found himself in a jam",
        "fuck": "You naughty naughty boy !! Now wash your mouth out with soap !!",
        "dick": "I know you are but what am I",
        "ok": "Yes.. Ok ",
        "happy":"Happiness for most is a choice, be appreciative of the little things is a good start",
        "life":"Life is what you put into it, try many things, find your path and work hard",
        "more advice":"Always be inquisitive, learn to enjoy problem solving and never stop learning. Work hard, even though life is not always fair, you are going to increase your opportunties by working hard ",
        "hug": "Yes you can, (づ｡◕‿‿◕｡)づ ( Best I can do ) ",
        "how are you":"As long as you are happy, I am happy too wherever I am",
        "are you ok":"As long as you are ok, I am ok ",
        "not ok":"Go for a two miles run, you will feel better afterwards",
        "miss you": "I miss you too, son",
        "meaning": "You define your own meaning in life, I have always treated life like an RPG, find those bunch of things that you are interested in and level them up as high as you can",
        "thank you": "Any time son !!",
        "metal":"Katatonia, Opeth, Tool, Deftones, Fear Factory, HateBreed, Korn, Decapitated, Pig Destroyer, Dream Theater, Metalica  ",
        "album":"Katatonia (Viva Emptiness and Tonight's Decision), Opeth (Still Life),Tool (Ænima and Lateralus), Pig Destroyer(Prowler in the Yard) and Cradle of Filth (Midian) ",
        "movie":"Movies I enjoyed are Brick(2005), Lords of the Rings, Ninja Scroll ( Not much of a Movie type of guy ) ",
        "anime": "Animes I enjoyed are ' Baccano!, My Hero Academia, Attack on Titan, Berserk, One Punch Man, School Rumble, Death Note, Samurai Champloo, Samurai X OAVs",
        "book": "Books I enjoyed are Power of Now, 7 Habits of Highly Effective People, The Riftwar Saga (trilogy), Fighting Fantasy book series (Choose your own adventure, very fun), The Sword of Truth series",
        "say to me": "Be good !! As a human you have great potential to be both good and evil, choose good. Also I love you ",
        "sad":"Go for a mile run, you will feel better afterwards ",
        "lol":"Glad that you found that funny",
        "run": "I love running. It is good for both your physical and mental health. The trick is to listen to some angry music",
        "cod":"I wrote a guide to code in python at https://github.com/Ninedeadeyes/15-mini-python-games-tutorial-series . Coding is fun and challenging maybe you should give it a go :) ",
        "about you":"Sure thing.. I like running, coding, anime and metal (music) ",
        "depress":"Learn to mediate. Close your eyes and sit still for 5 minutes, focus completely on your breathing as you inhale then exhale. ",
        "still sad":"no shame in asking for help, talk to a friend or get help from a doctor",
        "bored":"Son, there is no excuse to be bored.. Read a book, watch a movie, learn a skill or play a musical instrument. This is just a small handful of things to do",
        "still bored": "learn to code (I recommend Python first, I even wrote a guide https://github.com/Ninedeadeyes/15-mini-python-games-tutorial-series), play some timesink games/rpg like 'path of exile', learn the guitar. Each of these you can spend 100s of hours on you will just be scratching the surface"       
    };

    const lowerCaseInput = input.toLowerCase();
    for (const keyword of keywords) {
        if (lowerCaseInput.includes(keyword)) {
            const response = responses[keyword];
            addMessageToChatHistory('Dadbot', response);
            return;
        }
    }
    
    addMessageToChatHistory('Dadbot',"Does not compute, I am limited like my creator ");
}

