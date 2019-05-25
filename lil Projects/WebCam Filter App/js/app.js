// Global Variables

let width = 500,
    height = 0,
    filter =  'none',
    streaming = false;

// DOM Elements

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const photos = document.getElementById('photos');
const photoButton = document.getElementById('photo-button');
const clearButton = document.getElementById('clear-button');
const photoFilter = document.getElementById('photo-filter');

// Get media stream


navigator.mediaDevices.getUserMedia({video: true, audio: false}
  )
    .then(function(stream){
      // Link To The Video Src
      video.srcObject = stream;
      // Play the video
      video.play();
    })
    .catch(function(err){
      console.log(`Error: ${err}`);
    })

    // Play When Ready
    video.addEventListener('canplay', function(e){
      if(!streaming) {
        // Set Video Canvas Height
        height = video.videoHeight / (video.videoWidth / width);

        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);

        streaming = true;
      }
    }, false);
    
    // Photo Button Event
    photoButton.addEventListener('click', function(e) {
  takePicture();

  e.preventDefault();
}, false);

// Filter Event

photoFilter.addEventListener('change', function(e){
    // Set Filter To Chosen Option
  filter = e.target.value;
    video.style.filter = filter;
  e.preventDefault;
})

// Clear Event
clearButton.addEventListener('click', function(e){
  // Clear All the photos
  photos.innerHTML ='';
  // Change FIlter Back To normal
  filter = 'none';
  video.style.filter = filter;
  // reset  select list
  photoFilter.selectedIndex = 0;
})

// Take Picture From Canvas
function takePicture() {
  // Create Canvas
  const context = canvas.getContext('2d');
  if(width && height) {
    //  set canvas props
    canvas.width = width;
    canvas.height = height;
    // Draw an image of the video on the canvas
    context.drawImage(video, 0, 0, width, height);

    // Create and image from the canvas
    const imgIrl = canvas.toDataURL('image/png');

    // Create img element
    const img = document.createElement('img');

    // Set imgSRC
    img.setAttribute('src', imgIrl);

    // Set Img Filter
    img.style.filter = filter;

    //Add img to photos
    photos.appendChild(img);
  }
};