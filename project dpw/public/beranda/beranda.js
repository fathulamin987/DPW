function navigate(page) {
    window.location.href = page;
}

// Ambil nama dari localStorage
const nama = localStorage.getItem("namaPengguna");
const userInfoElement = document.getElementById("user-info");
if (userInfoElement) { // Periksa apakah elemen ada sebelum menggunakannya
    if (nama) {
        userInfoElement.innerText = `Hi, ${nama}`;
    } else {
        userInfoElement.innerText = 'Hi, Pengguna'; // Teks default jika nama tidak ada
    }
}
