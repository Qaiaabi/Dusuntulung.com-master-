
function toggleText(card) {
    // Toggle teks ketika card di-click
    const cardText = card.querySelector('.card-text');
    const isHidden = cardText.style.transform === "translateY(100%)";
    cardText.style.transform = isHidden ? "translateY(0)" : "translateY(100%)";
  }

  function redirectToPage(event) {
    event.stopPropagation(); // Prevent click event from triggering toggleText
    window.location.href = 'halaman-kegiatan.html'; // Ganti dengan URL halaman tujuan
  }