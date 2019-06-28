const quotes = [{
    name: 'Nelson Mandela',
    quote: 'It always seems impossible until it’s done.'
  },
  {
    name: 'Socrates',
    quote: 'The unexamined life is not worth living'
  },
  {
    name: 'Henry David Thoreau',
    quote: 'Our life is frittered away by detail… simplify, simplify.'
  },
  {
    name: 'Albert Einstein',
    quote: 'Try not to become a man of success but rather to become a man of value.'
  },
  {
    name: 'The weak can never forgive. Forgiveness is the attribute of the strong.',
    quote: 'Mahatma Gandhi'
  },
  {
    name: 'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.',
    quote: 'Bruce Lee'
  },
]

const quoteBtn = document.querySelector('#quote-btn');
const quoteAuthor = document.querySelector('#quote-author');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', () => {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
})