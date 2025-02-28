// const prompts = [
//     ["hi", "hey", "hello", "good morning", "good afternoon"],
//     ["how are you", "how is life", "how are things"],
//     ["what are you doing", "what is going on", "what is up"],
//     ["how old are you"],
//     ["who are you", "are you human", "are you bot", "are you human or bot"],
//     ["who created you", "who made you"],
//     [
//       "your name please",
//       "your name",
//       "may i know your name",
//       "what is your name",
//       "what call yourself"
//     ],
//     ["i love you"],
//     ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
//     ["bad", "bored", "tired"],
//     ["help me", "tell me story", "tell me joke"],
//     ["ah", "yes", "ok", "okay", "nice"],
//     ["bye", "good bye", "goodbye", "see you later"],
//     ["what should i eat today"],
//     ["bro"],
//     ["what", "why", "how", "where", "when"],
//     ["no","not sure","maybe","no thanks"],
//     [""],
//     ["haha","ha","lol","hehe","funny","joke"]
//   ]
  
//   // Possible responses, in corresponding order
  
//   const replies = [
//     ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
//     [
//       "Fine... how are you?",
//       "Pretty well, how are you?",
//       "Fantastic, how are you?"
//     ],
//     [
//       "Nothing much",
//       "About to go to sleep",
//       "Can you guess?",
//       "I don't know actually"
//     ],
//     ["I am infinite"],
//     ["I am just a bot", "I am a bot. What are you?"],
//     ["The one true God, JavaScript"],
//     ["I am nameless", "I don't have a name"],
//     ["I love you too", "Me too"],
//     ["Have you ever felt bad?", "Glad to hear it"],
//     ["Why?", "Why? You shouldn't!", "Try watching TV"],
//     ["What about?", "Once upon a time..."],
//     ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
//     ["Bye", "Goodbye", "See you later"],
//     ["Sushi", "Pizza"],
//     ["Bro!"],
//     ["Great question"],
//     ["That's ok","I understand","What do you want to talk about?"],
//     ["Please say something :("],
//     ["Haha!","Good one!"]
//   ]
  
//   // Random for any other user input
  
//   const alternative = [
//     "Same",
//     "Go on...",
//     "Bro...",
//     "Try again",
//     "I'm listening...",
//     "I don't understand :/"
//   ]
  
//   // Whatever else you want :)
  
//   const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]

// Arrays of prompts and corresponding replies
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
]

// Possible responses, in corresponding order
const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
  ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
  ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "My name is bot"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"]
]

// Alternative responses for unrecognized inputs
const alternative = [
  "Same", "Go on...", "Bro...", "Try again", "I'm listening...", "I don't understand :/"
]

// Function to get a response based on user input
function getReply(userInput) {
  // Normalize input by converting to lowercase
  userInput = userInput.toLowerCase();

  // Check if the user input matches any prompt
  for (let i = 0; i < prompts.length; i++) {
      for (let prompt of prompts[i]) {
          if (userInput.includes(prompt.toLowerCase())) {
              // If a match is found, return a random response from the corresponding replies
              const randomReply = replies[i][Math.floor(Math.random() * replies[i].length)];
              return randomReply;
          }
      }
  }

  // If no match is found, return a random alternative response
  return alternative[Math.floor(Math.random() * alternative.length)];
}

// Test the chatbot with different inputs
console.log(getReply("hi"));  // "Hello!" (or one of the other responses)
console.log(getReply("how are you?"));  // "Fine... how are you?" (or another response)
console.log(getReply("tell me a joke"));  // "Tell me a story" (or another response)
console.log(getReply("what should i eat today?"));  // "Sushi" (or "Pizza")
console.log(getReply("random input"));  // "I don't understand :/"
