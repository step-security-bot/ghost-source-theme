function openModal() {
  document.getElementById("searchModal").style.display = "block";
}

function closeModal() {
  document.getElementById("searchModal").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function (event) {
  const modal = document.getElementById("searchModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
