document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.querySelector('.modal');
    const modalImage = document.getElementById('modal-image');
    const btnAdd = document.getElementById('btnAdd');
  
    galleryImages.forEach(function(image) {
      image.addEventListener('click', function() {
        modalImage.src = image.src;
        modal.style.display = 'block';
      });
    });
  
    modal.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    btnAdd.addEventListener('click', function() {
      inputImage = document.getElementById('imagemAdd');
      imageNew = document.createElement('img');
      imageNew.src = inputImage.value;
      document.getElementById('images').appendChild(imageNew);
    });


  });
  