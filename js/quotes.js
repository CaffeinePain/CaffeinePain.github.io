const quotes = [
    {
        quote: "It's riskky to climb on the branch, nut that's where all the fruit is.",
        author: "Rose Winn"
    },
    {
        quote: "Necessity is the mother of taking chances.",
        author: "Mark Twain"
   },
   {
       quote: "Every horse thinks its own pack heaviest.",
       author: "Thomas Fuller"
   },
   {
       quote: "Two men look out through the same bars: one sees the mud and the other the stars.",
       author: "Frederick Langbridge"
   },
   {
       quote: "Miracles happen to only those who believe in them.",
       author: "Bernard Berenson"
   },
   {
       quote: "Kindness is a hard thing to give away; it keeps coming back to the giver.",
       author: "Ralph Scott"
   },
   {
       quote: "Never underestimate your power to change yourself; never overestimate your power to change others.",
       author: "H. Jackson Brown, Jr."
   },
   {
       quote: "The only thing we have to fear is fear itself.",
       author: "Franklin Roosevelt"
   },
   {
       quote: "You miss 100% of the shots you don't take.",
       author: "Wayne Gretzky"
   }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;