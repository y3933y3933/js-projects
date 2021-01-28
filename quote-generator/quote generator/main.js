const authorText = document.getElementById("author");
const contentText = document.getElementById("content");
const newQuote = document.getElementById("new-quote");

async function getQuote() {
  const apiUrl = "http://localhost:3000/quotes/random";
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    if (data.quoteAuthor) {
      authorText.innerHTML = data.quoteAuthor;
    } else {
      authorText.innerHTML = "Unknown";
    }
    contentText.innerHTML = data.quoteText;
  } catch (error) {
    getQuote();
  }
}

//On Load
getQuote();

// btn click
newQuote.onclick = getQuote;
