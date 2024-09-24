document.querySelector('.edit-profile-btn').addEventListener('click', function() {
    // Enable the input fields
    document.querySelector('.profile-email').readOnly = false;
    document.querySelector('.profile-phone').readOnly = false;
    document.querySelector('.profile-age-input').readOnly = false;
    document.querySelector('.profile-name-input').readOnly = false;
    document.querySelector('.profile-cv').readOnly = false;

    // Show the save button
    document.querySelector('.save-profile-btn').style.display = 'block';
});

document.querySelector('.save-profile-btn').addEventListener('click', function() {
    // Disable the input fields
    document.querySelector('.profile-email').readOnly = true;
    document.querySelector('.profile-phone').readOnly = true;
    document.querySelector('.profile-age-input').readOnly = true;
    document.querySelector('.profile-name-input').readOnly = true;
    document.querySelector('.profile-cv').readOnly = true;
    // Hide the save button
    this.style.display = 'none';
});




  
  document.querySelector('.change-picture-btn').addEventListener('click', function() {
    // Trigger the file input
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', function() {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.querySelector('.profile-picture').src = e.target.result;
      };
      reader.readAsDataURL(this.files[0]);
    });
    fileInput.click();
  });
