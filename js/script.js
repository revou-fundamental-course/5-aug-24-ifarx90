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


// validasi input //
if (!gender) {
    console.log('Mohon pilih jenis kelamin.');
    return;
}
if (isNaN(weight) || weight <= 0) {
    console.log('Mohon isi berat badan dengan benar.');
    return;
}
if (isNaN(height) || height <= 0) {
    console.log('Mohon isi tinggi badan dengan benar.');
    return;
}
if (isNaN(age) || age <= 0 || age > 120 ) {
    console.log('Mohon isi umur dengan benar.');
    return;
}

// hitung BMI //
let heightInMeters = height / 100;
let bmi = weight / (heightInMeters * heightInMeters);
let bmiRounded = bmi.toFixed(2);

// tentukan kategori BMI
let category = '';
let categoryColor = '';

if (bmi < 18.5) {
    console.log('kurus', bmi);
    category = 'Kekurangan Berat Badan'; 
    categoryColor = 'blue'; 
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log('ideal', bmi);
    category = 'Berat Badan Ideal'; 
    categoryColor = 'green'; 
} else if (bmi >= 25 && bmi < 29.9) {
    console.log('kelebihan berat badan', bmi)
    category = 'Kelebihan Berat Badan'; 
    categoryColor = 'orange'; 
} else {
    category = 'Obesitas'; 
    categoryColor = 'red'; 
}

// Tampilkan hasil
resultContainer.innerHTML = `
<div class="result-box">
    <h2>Hasil BMI Anda:</h2>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Usia:</strong> ${age} tahun</p>
    <p><strong>BMI:</strong> ${bmiRounded}</p>
    <p><strong>Kategori:</strong> <span style="color: ${categoryColor};">${category}</span></p>
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
