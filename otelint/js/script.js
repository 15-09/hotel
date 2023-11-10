document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "kullanici" && password === "sifre") {
        scsMessage("İnternete Başarı İle Bağlanıldı!");
    } else {
        showMessage("Kullanıcı Adı Veya Şifre Hatalı!");
    }
});

function showMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.classList.remove("success"); // "success" sınıfını kaldır
    messageElement.classList.add("error"); // "error" sınıfını ekle
    messageElement.classList.remove("hidden");
}

function scsMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.classList.remove("error"); // "error" sınıfını kaldır
    messageElement.classList.add("success"); // "success" sınıfını ekle
    messageElement.classList.remove("hidden");
}

document.getElementById("mtpage").addEventListener("click", function() {
    window.location.href = "mtpage.html";
});

document.getElementById("staff").addEventListener("click", function() {
    window.location.href = "staff.html";
});

document.getElementById("guest").addEventListener("click",function() {
    window.location.href = "index.html"
});