// ini update listener buat update jadwal setelah ada yg dimasukin
document.getElementById("updateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const tanggal = document.getElementById("tanggal").value;
    const masjid = document.getElementById("masjid").value;
    const waktu = document.getElementById("waktu").value;

    // buat masukin jadwal baru isinya apa aja pke objek newschedule
    const newSchedule = {
        tanggal: tanggal,
        masjid: masjid,
        waktu: waktu
    };

    // pas ditambah langsung dikonversi jadi array pake parse, 
    const scheduleList = JSON.parse(localStorage.getItem("jadwalSubuh")) || [];
    
    // nah jadwal baru diambil dari si schedule yg di upadate
    scheduleList.push(newSchedule);

    // abistu di update lagi
    localStorage.setItem("jadwalSubuh", JSON.stringify(scheduleList));

    // ini konfirmasi kalo jadwal udah diganti
    const updateMessage = document.getElementById("updateMessage");
    updateMessage.textContent = "Jadwal berhasil diperbarui!";
    updateMessage.classList.remove("hidden");

    // Clear form
    document.getElementById("updateForm").reset();
});
