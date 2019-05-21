//  Initial Ratings

const ratings = {
  sony : 4.7,
  samsung: 3.6,
  vizio: 1.9,
  panasonic: 3.5,
  philips: 4.1
}

//Total Stars

const totalStars = 5;

//Run get ratings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

//  Form Elements

const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Init product
let product;

// Product Select Change
productSelect.addEventListener('change', () => {
  product = event.target.value;
//   Enable Rating Control
ratingControl.disabled = false;
ratingControl.value = ratings[product];
});

// Rating Control change

ratingControl.addEventListener('blur', () =>{
  const rating = event.target.value;

  // Make sure5 or under
  if(rating > 5) {
    alert('Please alert 1-5');
    return;
  }

  //Change Ratings
  ratings[product] = rating;

  getRatings();
});

//Get ratings 

function getRatings() {
  for(let rating in ratings) {
    // Get % value
    const starPrecentage = (ratings[rating] / totalStars) * 100;
    
    // Round to nearest 10
    const starPrecentageRounded = `${Math.round(starPrecentage / 10) * 10}%`;
  
    //Set width of stars-inner to precentage 
    document.querySelector(`.${rating} .stars-inner`).style.width = starPrecentageRounded;

    // Add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
  }


}