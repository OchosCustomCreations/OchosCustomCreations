const galleryImages = [
    { before: 'images/before1.jpg', after: 'images/after1.jpg' },
    { before: 'images/before2.jpg', after: 'images/after2.jpg' },
    { before: 'images/before3.jpg', after: 'images/after3.jpg' },
    { before: 'images/before4.jpg', after: 'images/after4.jpg' },
    { before: 'images/before5.jpg', after: 'images/after5.jpg' }
    // Add more image pairs here
];

function displayGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = ''; // Clear existing content

    galleryImages.forEach(image => {
        const imagePairDiv = document.createElement('div');
        imagePairDiv.classList.add('image-pair');

        const beforeImage = document.createElement('img');
        beforeImage.src = image.before;
        beforeImage.alt = 'Before Image';
        beforeImage.classList.add('before-image');

        const afterImage = document.createElement('img');
        afterImage.src = image.after;
        afterImage.alt = 'After Image';
        afterImage.classList.add('after-image');

        imagePairDiv.appendChild(beforeImage);
        imagePairDiv.appendChild(afterImage);
        galleryContainer.appendChild(imagePairDiv);
    });
}

displayGallery();