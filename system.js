import Toastify from 'https://cdn.jsdelivr.net/npm/toastify-js/src/toastify-es.js'

var poin = parseInt(localStorage.getItem('poin')) || 0;
var form = document.getElementById('tebakan');
var input = document.getElementById('tebak');
var textInput = document.querySelector('.btn-text-two');
document.querySelector('#score').innerText = 'SCORE: ' + poin;

let angkaRandom = Math.floor(Math.random() * 100) + 1

function notifikasiBener() {
  Toastify({
    text: "Good, +100 Poin",duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: "#28a745",
    stopOnFocus: true,
    style: {
      borderRadius: "12px", // bisa lu ubah sesuai selera
    }
  }).showToast();
}
function notifikasiKeGedean() {
  Toastify({
    text: "Salah om, kecilin angka nya coba!",
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: "#28a745",
    stopOnFocus: true,
    style: {
      borderRadius: "12px", // bisa lu ubah sesuai selera
    }
  }).showToast();
}
function notifikasiKeKecilan() {
  Toastify({
    text: "Salah om, gedein angka nya coba!",
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: "#28a745",
    stopOnFocus: true,
    style: {
      borderRadius: "12px", // bisa lu ubah sesuai selera
    }
  }).showToast();
}
function notifikasiB() {
  Toastify({
    text: "Input Angka Om!",
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: "#28a745",
    stopOnFocus: true,
    style: {
      borderRadius: "12px", // bisa lu ubah sesuai selera
    }
  }).showToast();
}
function notifikasiA() {
  Toastify({
    text: "angka 1-100 aja om!",
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: "#28a745",
    stopOnFocus: true,
    style: {
      borderRadius: "12px", // bisa lu ubah sesuai selera
    }
  }).showToast();
}

form.addEventListener("submit", function (e) {
  e.preventDefault()
  const tebakannya = parseInt(input.value)
  
  if (isNaN(tebakannya)) {
    notifikasiB()
    textInput.innerText = 'try again'
    return;
  }
  
  if (tebakannya > 100 || tebakannya < 0) {
    notifikasiA()
    textInput.innerText = 'try again'
    return;
  }
  if (tebakannya === angkaRandom) {
  poin += 100; // Nambah poin dulu
  localStorage.setItem('poin', poin.toString()); // Simpen ke localStorage
  document.querySelector('#score').innerText = 'SCORE: ' + poin; // Update tampilan
  notifikasiBener();
  textInput.innerText = 'mantap bos!';
  input.value = '';
  angkaRandom = Math.floor(Math.random() * 100) + 1
  return;
} else if (tebakannya > angkaRandom) {
    notifikasiKeGedean();
    textInput.innerText = 'try again'
    return;
  } else if (tebakannya < angkaRandom) {
    notifikasiKeKecilan();
    textInput.innerText = 'try again'
  }
  input.value = ''
})