let randomQuote=document.getElementById("Quote");

let diceRoll;
let setting;

randomQuote.innerHTML="Just in case Daddy goes permanently offline.. "

let lifeQuotes=["Life isn't always going to be fair but don't be bitter be better",
           "When it comes to career think what you enjoy, what you are good at, what you can by paid for, what the world needs ",
           "Always strive to be the best version of yourself. For example if you choose to be a tiddlywinks player, be the best you can be. ",
           "Pick up coding, even if it is not a career path for you, it is fun to learn and you gain the ability to create.",
           "Try to be as honest as possible and avoid lying. This is not always easy but you will be a better person for it",
           "Learn to walk away from people and situations. Not everyone is your friend and some situation you can only lose by being involved",
           "Find a balance of interests/hobbies. Some should be challenging so you can explore your potential whilst others should be easy on the brain/body which provides time for reflection/relaxation",
           "Focus on improving yourself rather the world. When you invest in yourself and make a change, it will naturally reflect upon the world"];


let healthQuotes=["Master the 'push up' because it is one exercise you can do anywhere",
                "The best exercise is the one you do on a regular basis, so find out what you enjoy",
                "You are only in competition with yourself. Do not compare yourself to others only to your past self ",
                "Remember to eat healthy foods like vegetables, lean meat and fruits. We are not evolved for the modern western diet (Too much fat and sugar). ",
                "Pick at least 1 physical activity/sport where you can do it on your own hence not rely on someone else to be active. For example : Running ",
                "Good bands to workout too. Hatebreed, Terror, Throwdown, Madball, Born from Pain, Lionheart, Stick To Your Guns, Until The End (alot of hardcore/metal bands)  ",
                "Investing in your body is as important as investing in your mind as they say 'healthy body, healthy mind.'"];
       
let quest =[    "Perform 20 Knee assisted or standard push ups ",
                "Perform 50 body squats",
                "Tidy your room ",
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
    diceRoll=Dice(8)-1;
    setting=lifeQuotes[diceRoll];

    let pickedQuote=setting ;

    randomQuote.innerHTML=pickedQuote;

    }


function health(){
    diceRoll=Dice(7)-1;
    setting=healthQuotes[diceRoll];
        
    let pickedQuote=setting ;
    
    randomQuote.innerHTML=pickedQuote;
    
        }

function daily(){
    diceRoll=Dice(10)-1;
    setting=quest[diceRoll];
        
    let pickedQuote=setting ;
    
    randomQuote.innerHTML=pickedQuote;
    
        }


