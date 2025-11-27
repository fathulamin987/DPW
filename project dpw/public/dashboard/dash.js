function navigate(page) {
    window.location.href = page;
}

let user = {
    nama: localStorage.getItem("namaPengguna") || "",
    email: localStorage.getItem("emailPengguna") || "",
    univ: localStorage.getItem("univPengguna") || ""
};

function tampilkanDataUser() {
    document.getElementById("nama").innerText = user.nama;
    document.getElementById("email").innerText = user.email;
    document.getElementById("univ").innerText = user.univ;
    document.getElementById("editNama").value = user.nama;
    document.getElementById("editEmail").value = user.email;
    document.getElementById("editUniv").value = user.univ;
}

function tampilkanRiwayatTes() {
    const tableBody = document.getElementById("riwayatTable");
    tableBody.innerHTML = "";
    let testHistory = JSON.parse(localStorage.getItem('toeflTestHistory')) || [];

    testHistory.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (testHistory.length === 0) {
        const noDataRow = tableBody.insertRow();
        const cell = noDataRow.insertCell(0);
        cell.colSpan = 6;
        cell.textContent = "Tidak ada riwayat tes.";
        cell.style.fontStyle = "italic";
        cell.style.color = "#888";
    } else {
        testHistory.forEach((tes, index) => {
            // *** Use the 'Raw' properties here ***
            const listeningDisplay = tes.listeningRaw !== undefined ? tes.listeningRaw : 'N/A';
            const readingDisplay = tes.readingRaw !== undefined ? tes.readingRaw : 'N/A';
            const structureDisplay = tes.structureRaw !== undefined ? tes.structureRaw : 'N/A';
            const totalScore = tes.total !== undefined ? tes.total : 'N/A'; // Total is usually scaled

            const row = `<tr>
              <td>${tes.date}</td>
              <td>${listeningDisplay}</td>
              <td>${readingDisplay}</td>
              <td>${structureDisplay}</td>
              <td>${totalScore}</td>
              <td>
                <div class="aksi-buttons">
                  <button class='btn hapus-btn' onclick='hapusRiwayat(${index})'>
                    <i class="fas fa-trash"></i> Hapus
                  </button>
                  <button class='btn cetak-btn' onclick='kirimKeSertif(${index})'>
                    <i class="fas fa-file-pdf"></i> Cetak
                  </button>
                </div>
              </td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }
}

function hapusRiwayat(indexToDelete) {
    if (confirm("Yakin ingin menghapus riwayat ini?")) {
        let testHistory = JSON.parse(localStorage.getItem('toeflTestHistory')) || [];
        testHistory.splice(indexToDelete, 1);
        localStorage.setItem('toeflTestHistory', JSON.stringify(testHistory));
        tampilkanRiwayatTes(); // Perbarui tampilan setelah menghapus
        alert('Data riwayat berhasil dihapus.');
    }
}

// Fungsi yang dikirim ke sertif.html
function kirimKeSertif(index) {
    const data = JSON.parse(localStorage.getItem('toeflTestHistory')) || [];
    const tes = data[index];

    const dataSertifikat = {
        nama: user.nama,
        // *** Send the 'Raw' properties to the certificate ***
        listening: tes.listeningRaw !== undefined ? tes.listeningRaw : 'N/A',
        reading: tes.readingRaw !== undefined ? tes.readingRaw : 'N/A',
        structure: tes.structureRaw !== undefined ? tes.structureRaw : 'N/A',
        total: tes.total !== undefined ? tes.total : 'N/A',
        date: tes.date
    };

    localStorage.setItem('dataSertifikat', JSON.stringify(dataSertifikat));
    window.location.href = '../sertifikat/sertif.html';
}

// Event listener untuk form edit profil
document.getElementById("editForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form untuk submit secara default

    // Perbarui objek user dengan nilai dari input
    user.nama = document.getElementById("editNama").value;
    user.email = document.getElementById("editEmail").value;
    user.univ = document.getElementById("editUniv").value;

    // Simpan data user yang baru ke localStorage
    localStorage.setItem("namaPengguna", user.nama);
    localStorage.setItem("emailPengguna", user.email);
    localStorage.setItem("univPengguna", user.univ);

    // Saat profil diperbarui, mungkin logis untuk mereset riwayat tes agar tidak membingungkan
    // jika user mengira riwayat tes terikat dengan profil lama.
    // Jika tidak ingin mereset, baris ini bisa dihapus.
    localStorage.removeItem('toeflTestHistory');

    // Perbarui tampilan data user dan riwayat tes di halaman
    tampilkanDataUser();
    tampilkanRiwayatTes();

    alert("Profil berhasil diperbarui dan riwayat tes telah direset!");
});

// Jalankan fungsi saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    tampilkanDataUser();
    tampilkanRiwayatTes();

    // Menampilkan nama pengguna di navbar (jika elemennya ada di halaman dashboard)
    const userInfoElement = document.getElementById("user-info");
    if (userInfoElement) {
        const nama = localStorage.getItem("namaPengguna");
        userInfoElement.innerText = nama ? `Hi, ${nama}` : 'Hi, Pengguna';
    }
});