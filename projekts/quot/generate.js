"use strict";

let quotes = [
    "If there is a rainbow behind the storm, there ought to be storm behind the rainbow.", 
    "As you sow so will you reap.", 
    "For every achievement that you attain, there shall be another that is sacrificed, and or obeliterated. Vice versa.", 
    "Violence, when employed with the right timing and usage are the most powerful weapon in the world.", 
    "Those untrained or unsuitable in deceiving will not be able to look in the eyes.", 
    "Do not put too much trust in your memory.", 
    "Which is better, to be born good or to overcome your evil nature through great effort?", 
    "Doing a favor; take the problem directly by your own hand, to the root.", 
    "Do something good indirectly; avoiding attention, lowers their guard, they shall sincerely accept.", 
    "A retold story is usually subjective and vastly different from the actual event.", 
    "The process. The insufferable process. For every shiny shimmery splendid, there lies before it, the process.", 
    "There is no such thing as being too cautious.", 
    "How qualified are you to be gifted with every single thing hitherto?", 
    "Thou shalt not attain knowledge lest thee honour the teacher and the knowledge itself.", 
    "It is fun only if you (somewhat, one way or another) win.", 
    "True mu’min is always restless in pursuing the path of righteousness.", 
    "Rest is only for the dead.", 
    "Change is inevitable. Change is sacred.", 
    "Risk is always there. No exceptions.", 
    "Be the solution, not just another problem.", 
    "Suffer, as the risk of choosing an attitude, be it good or not.", 
    "Is it acceptable to declare yourself a follower of Rasulullah, whilst living an unhardworking life?", 
    "Hard work is the foundation of credibility (trustable).", 
    "Do not prejudge that it will always turn out better with your interference.", 
    "Never once shall a human incite problem to his kind lest Allah shall open to him a door of predicament.", 
    "(Most) people hate the odd and what goes beyond their perception.", 
    "Thou art not doing this for their opinions, yet their opinions art also not always baseless.", 
    "Either something cease to exist or stays long enough to see itself becomes a problem.", 
    "The rise of the dhalims are so that their fall is heard by many.", 
    "Even a good intention needs thorough judgement and right timing.", 
    "It is better to have frequent small victories than few great victories : Istiqomah.", 
    "Admittance on evil is evil in itself.", 
    "Something that occurs in the wrong time is truly dangerous.", 
    "There are those who is lifeless while living, and those who lives while being lifeless.", 
    "As long as we win in the end.", 
    "As high you pride on, so will you fall.", 
    "Even those with great loyalty are still vulnerable to the fear of being replaced.", 
    "Islam and its people are consisted of consistencies.", 
    "Allah does not call for the strong but strengthen those who are called for.", 
    "Danger is relative.", 
    "Be ware of the delays. Make sure your plan is always set on motion. Even a litte bit of postponing could wreck the entire mission", 
    "Wealth involves bands of the unwelcomed.", 
    "The frontline of change : Shalat.",
    "Following the rules does not create success. It just eliminates extremes - both good and bad.",
    "As any mathematician knows, averages can be deceptive. When your head is in the refrigerator and your feet on a burner, the average temperature is okay.",
    "Anything better aligned to fit a unique scenario is going to be problematic on average. And qualities that are generally good can be bad at the extremes.",
    'It is way too easy to think, "I have always succeeded, I am success, I am successful because I am a sucecss, because it is about me, and therefore I will succeed in this".',
    "The quality of a society is more important than your place in that society.",
    "Fate is that thing we cannot avoid. Destiny is the thing we must chase, what we must bring to fruition.",
    "Everything we do in life is a trade-off. Choosing to do one thing means not doing something else. The price of anything is the amount of life you exchange for it.",
    "We always think we need more. More help, more motivation, more energy. But in our current world the answer is often the exact opposite. We need less, fewer distractions, fewer goals, fewer responsibilities.",
    "Fantasizing gives us the reward before we have accomplished the task and saps the energy we need to realize it.",
];

let currentQuot;

function generate() {
    let newQuot = Math.floor(Math.random() * 52);
    if (currentQuot === newQuot) {return generate()};
    return newQuot
}

function newQuot() {
    currentQuot = generate();
    document.getElementById("display").innerHTML = `"${quotes[currentQuot]}"`;
}

function darkMode() {

}