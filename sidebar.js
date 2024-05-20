// JavaScript untuk Sidebar dan Modal
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
}

// Menambahkan event listener untuk button sidebar
document.querySelector('.closebtn').addEventListener('click', closeSidebar);

// Menambahkan event listener untuk tombol Register di sidebar
const registerButton = document.querySelector('.sidebar a[href="#registerModal"]');
registerButton.addEventListener('click', () => {
    openModal('registerModal');
});

// Fungsi untuk membuka modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Fungsi untuk menutup modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Menutup modal saat di luar area modal di-klik
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
