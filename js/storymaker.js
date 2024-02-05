// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyParagraph = document.getElementById("story");

// Pre-defined arrays
const nouns1 = ["the turkey", "mom", "dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "dance with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a sleemy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Counters to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    choosenNoun1.textContent = nouns1[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1.length;
}

function verb_on_click() {
    choosenVerb.textContent = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    choosenAdjective.textContent = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    choosenNoun2.textContent = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
    choosenSetting.textContent = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}

function playback_on_click() {
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}`;
    storyParagraph.textContent = story;
}

function random_on_click() {
    const randomStory = `${getRandomElement(nouns1)} ${getRandomElement(verbs)} ${getRandomElement(adjectives)} ${getRandomElement(nouns2)} ${getRandomElement(settings)}`;
    storyParagraph.textContent = randomStory;
}

// Function to get a random element from an array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

/* Event Listeners
-------------------------------------------------- */
// Add your student ID/name dynamically on click
document.getElementById("studentId").addEventListener("click", function() {
    this.textContent = "Your Student ID/Name";
});
