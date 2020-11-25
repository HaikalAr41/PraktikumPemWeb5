function login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("Silahkan isi username dan password anda");
        return false;
    }
    else if (password.length < 4) {
        alert("password harus 4 huruf atau lebih");
        return false;
    }
    else if (username == "haikal41" && password == "haikal41")
     {
        window.location = "berhasil.html";
        return false;
    }else{
        alert("Username dan password tidak ditemukan");
    }
}s