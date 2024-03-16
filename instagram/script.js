// simulated data (replace with actual data from backend)
const photos = [
    {url: 'photo1.jpg', caption: 'beautyful sunset'},
    {url: 'photo2.jpg', caption: 'terrifying scenary'},
    {url: 'photo3.jpg', caption: 'too cold here'},
    // Add more photos here
];

// function to display photos
function displayPhotos() {
    const photoGrid = document.getElementById('photogrid');
    photoGrid.innerHTML = '';
    photos.forEach=(photo => {
        const photoElement = document.createElement('div');
        photoElement.classList.add('photo');
        photoElement.innerHTML = '
            <img src="${photo.url}" alt ="${photo.caption}">
            <p>${photo.caption}</p>
        ';
    photoGrid.appendChild(photoElement);
    });
}

// Event listener for upload button (simulated)
document.getElementById('uploadBtn').addEventListener('click', () => {
    // Simulated upload process
    const newPhoto = {
        url: 'newPhoto.jpg',
        caption: 'Newly uploaded photo'
    };
    photos.push(newPhoto);
    displayPhotos();
});

// Initial display of photos
displayPhotos();