function adjustResultPlacement() {
    let resultContainer = document.getElementById('result');
    let resultBox = document.querySelector('.result-box');
    let isMobile = window.innerWidth <= 768;

    if (resultBox) {
        let form = document.querySelector('form');
        if (isMobile) {
            // Jika mode mobile dan resultBox tidak berada di dalam form, pindahkan resultBox ke atas form
            if (form && resultBox.parentNode !== form.parentNode) {
                form.parentNode.insertBefore(resultBox, form);
            }
        } else {
            // Jika mode desktop dan resultBox tidak berada di dalam resultContainer, kembalikan resultBox ke resultContainer
            if (resultContainer && resultBox.parentNode !== resultContainer) {
                resultContainer.appendChild(resultBox);
            }
        }
    }
}

function formValidate() {
    let gender = document.getElementById('jenis-kelamin').value;
    let weight = parseFloat(document.getElementById('input-bb').value);
    let height = parseFloat(document.getElementById('input-tb').value);
    let age = parseInt(document.getElementById('input-usia').value);

    // elemen untuk menampilkan hasil dan pesan
    let resultContainer = document.getElementById('result');
    let bmiCategory = document.getElementById('bmi-category');
    let doctorSuggestion = document.getElementById('doctor-suggestion');

    // Validasi input
    if (!gender) {
        alert('Mohon pilih jenis kelamin.');
        return;
    }
    if (isNaN(weight) || weight <= 0) {
        alert('Mohon isi berat badan dengan benar.');
        return;
    }
    if (isNaN(height) || height <= 0) {
        alert('Mohon isi tinggi badan dengan benar.');
        return;
    }
    if (isNaN(age) || age <= 0 || age > 120) {
        alert('Mohon isi umur dengan benar.');
        return;
    }

    // Hitung BMI
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);
    let bmiRounded = bmi.toFixed(2);

    // Tentukan kategori BMI dan saran berdasarkan hasil BMI
    let category = '';
    let categoryColor = '';
    let suggestion = '';
    let suggestionAnimation = '';

    if (bmi < 18.5) {
        category = 'Kekurangan Berat Badan';
        categoryColor = 'blue';
        suggestion = 'Anda perlu meningkatkan asupan kalori dan nutrisi. Konsultasikan dengan dokter atau ahli gizi untuk pola makan yang tepat.';
        suggestionAnimation = 'bounce';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Berat Badan Ideal';
        categoryColor = 'green';
        suggestion = 'Selamat! Pertahankan pola makan seimbang dan tetap aktif untuk menjaga berat badan Anda.';
        suggestionAnimation = 'pulse';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Kelebihan Berat Badan';
        categoryColor = 'orange';
        suggestion = 'Cobalah untuk lebih aktif dan kurangi asupan kalori. Diskusikan program penurunan berat badan dengan dokter.';
        suggestionAnimation = 'shake';
    } else {
        category = 'Obesitas';
        categoryColor = 'red';
        suggestion = 'Kami sangat menyarankan Anda untuk berkonsultasi dengan dokter untuk program penurunan berat badan yang aman dan efektif.';
        suggestionAnimation = 'shake';
    }

    // Tampilkan hasil BMI di browser
    resultContainer.innerHTML = `
    <div class="result-box visible">
        <h2>Hasil BMI Anda:</h2>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Usia:</strong> ${age} tahun</p>
        <p><strong>BMI:</strong> ${bmiRounded}</p>
        <p><strong>Kategori:</strong> <span style="color: ${categoryColor};">${category}</span></p>
        <div class="suggestion-box ${suggestionAnimation}" style="animation: fadeInUp 1s;">
            <h3>Note:</h3>
            <p>${suggestion}</p>
        </div>
    </div>
    `;

    // Tampilkan informasi kategori BMI
    bmiCategory.innerHTML = `
    <section>
        <h1>Kategori BMI</h1>
        <p>Kategori BMI terdiri dari beberapa tingkatan: kurang dari 18.5 dianggap sebagai kekurangan berat badan, 18.5 hingga 24.9 adalah berat badan ideal, 25 hingga 29.9 dianggap kelebihan berat badan, dan 30 atau lebih dikategorikan sebagai obesitas. Penting untuk diingat bahwa BMI hanyalah salah satu indikator kesehatan dan tidak selalu mencerminkan kondisi tubuh secara menyeluruh.</p>
    </section>
    `;

    // Sesuaikan penempatan kotak hasil
    adjustResultPlacement();
}

// Fungsi untuk mereset form
function formReset() {
    location.reload();
}

// Panggil fungsi formValidate dan adjustResultPlacement saat halaman dimuat
window.addEventListener('load', () => {
    formValidate();
    adjustResultPlacement();
});

// Panggil adjustResultPlacement saat ukuran jendela berubah
window.addEventListener('resize', adjustResultPlacement);
