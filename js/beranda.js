// ini buat mastiin kode uda diisi dengan benar
document.addEventListener("DOMContentLoaded", function() {
    // tabel body ini sama dengan <tbody> yaitu scheduletabel buat naro tabel yg diupdate
    const scheduleTableBody = document.getElementById("scheduleTable").querySelector("tbody");

    // nah schedulelist ngambil data dari storage lokal(jadwalsubuh) 
    const scheduleList = JSON.parse(localStorage.getItem("jadwalSubuh")) || [];

    // nah ini bikin data update yg diinput dijadiin tabel
    scheduleList.forEach(schedule => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${schedule.tanggal}</td>
            <td>${schedule.masjid}</td>
            <td>${schedule.waktu}</td>
        `;
        scheduleTableBody.appendChild(row);
    });

    // nah ini logid buat download jadwal
    document.getElementById("downloadButton").addEventListener("click", function() {
        // nyusun ke bentuk teks
        const text = scheduleList.map(schedule => 
            `Tanggal: ${schedule.tanggal}, Masjid: ${schedule.masjid}, Waktu: ${schedule.waktu}`
        ).join("\n");
        
        // ini bikin file mentahan sama buat link downloadnya
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        
        // elemen a buat nanti ke link downloadnya
        const a = document.createElement("a");
        a.href = url;
        a.download = "jadwal_subuh_keliling.txt";
        a.click();
        
        URL.revokeObjectURL(url);
    });
});
