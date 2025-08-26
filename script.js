let flashcards = [];
let currentCard = null;

function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

function generateFlashcards() {
  const notes = document.getElementById('notesInput').value;
  if (!notes.trim()) return alert("Enter some notes!");

  // Simple simulation: split sentences
  notes.split('.').forEach((sentence, i) => {
    if (sentence.trim()) {
      flashcards.push({ q: "What about: " + sentence.trim() + "?", a: sentence.trim() });
    }
  });

  alert("Flashcards generated!");
}

function addManualCard() {
  const q = document.getElementById('qInput').value;
  const a = document.getElementById('aInput').value;
  if (q && a) {
    flashcards.push({ q, a });
    alert("Card added!");
  }
}

function revealAnswer() {
  if (!currentCard) {
    currentCard = flashcards.shift();
  }
  if (currentCard) {
    document.getElementById('flashcard').innerText = `${currentCard.q}\n\nAnswer: ${currentCard.a}`;
  } else {
    document.getElementById('flashcard').innerText = "No more cards!";
  }
}

function grade(difficulty) {
  alert("You graded this card as: " + difficulty);
  currentCard = null;
  revealAnswer();
}

function createDeck() {
  const deckName = document.getElementById('deckName').value;
  if (deckName) {
    const li = document.createElement('li');
    li.innerText = deckName;
    document.getElementById('deckList').appendChild(li);
    document.getElementById('deckName').value = "";
  }
}
