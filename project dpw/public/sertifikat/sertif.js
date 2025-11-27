document.addEventListener('DOMContentLoaded', () => {
    const d = JSON.parse(localStorage.getItem('dataSertifikat')) || {};
    const univ = localStorage.getItem("univPengguna") || "-";

    document.getElementById('nama').innerText = d.nama || '-';
    document.getElementById('instansi').innerText = univ;
    // *** These lines are already correct if `kirimKeSertif` sends 'listening', 'reading', 'structure' as raw scores ***
    document.getElementById('listening').innerText = d.listening || '-';
    document.getElementById('structure').innerText = d.structure || '-';
    document.getElementById('reading').innerText = d.reading || '-';
    document.getElementById('total').innerText = d.total || '-';
    document.getElementById('tanggal').innerText = d.date || '-';

    setTimeout(() => window.print(), 500);
});