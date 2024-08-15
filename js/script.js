function formValidate() {
    console.log('tes button')
    // ambil nilai input //
    const gender = document.getElementById('jenis-kelamin').value;
    let none = document.getElementById('none').value;
    let weight = document.getElementById('input-bb').value;
    let height = document.getElementById('input-tb').value;
    let age = document.getElementById('input-usia').value;

// ambil elemen untuk menampilkan hasil dan pesan //
let resultContainer = document.getElementById('result');
let bmiCategory = document.getElementById('bmi-category');
let doctorSuggestion = document.getElementById('doctor-suggestion');


// validasi input //
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
if (isNaN(age) || age <= 0 || age > 120 ) {
    alert('Mohon isi umur dengan benar.');
    return;
}

// hitung BMI //
let heightInMeters = height / 100;
let bmi = weight / (heightInMeters * heightInMeters);
let bmiRounded = bmi.toFixed(2);

// tentukan kategori BMI
let category = '';
let categoryColor = '';
let suggestion = '';
let suggestionAnimation = '';

if (bmi < 18.5) {
    console.log('kurus', bmi);
    category = 'Kekurangan Berat Badan'; 
    categoryColor = 'blue'; 
    suggestion = 'Anda perlu meningkatkan asupan kalori dan nutrisi. Konsultasikan dengan dokter atau ahli gizi untuk pola makan yang tepat.';
    suggestionAnimation = 'bounce';
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log('ideal', bmi);
    category = 'Berat Badan Ideal'; 
    categoryColor = 'green'; 
    suggestion = 'Selamat! Pertahankan pola makan seimbang dan tetap aktif untuk menjaga berat badan Anda.';
    suggestionAnimation = 'pulse';
} else if (bmi >= 25 && bmi < 29.9) {
    console.log('kelebihan berat badan', bmi)
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

// Tampilkan hasil
resultContainer.innerHTML = `
<div class="result-box">
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

// Tampilkan kategori BMI
bmiCategory.innerHTML = `
<section>
    <h1>Kategori BMI</h1>
    <p>Kategori BMI terdiri dari beberapa tingkatan: kurang dari 18.5 dianggap sebagai kekurangan berat badan, 18.5 hingga 24.9 adalah berat badan ideal, 25 hingga 29.9 dianggap kelebihan berat badan, dan 30 atau lebih dikategorikan sebagai obesitas. Penting untuk diingat bahwa BMI hanyalah salah satu indikator kesehatan dan tidak selalu mencerminkan kondisi tubuh secara menyeluruh.</p>
</section>
`;

}

function formReset() {
    location.reload();
}
