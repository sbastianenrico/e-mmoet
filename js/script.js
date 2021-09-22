function login() {
    if (typeof(Storage) !== "undefined") {
        var user = uname.value;
        var pass = pwd.value;
        localStorage.setItem("user", user);
        localStorage.setItem("pass", pass);
        localStorage.setItem("flag", 0);
    }else{
        // Sorry! No Web Storage support..
    }
}

function logout() {
    if (typeof(Storage) !== "undefined") {
        localStorage.clear();
    }else{
        // Sorry! No Web Storage support..
    }
}

// penarikan pbmm
function tarik() {
    if (typeof(Storage) !== "undefined") {
        var now = new Date();
        var date = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
        var time = now.getHours()+'.'+now.getMinutes();
        var valuta = valas.value;
        var jumlahtarik = jmltarik.value;
        var tanggaltarik = tgltarik.value;
        var tanggaljatem = tgljatem.value;

        // localStorage.setItem("date", date);
        // localStorage.setItem("time", time);
        // localStorage.setItem("valas", valuta);
        // localStorage.setItem("jmltarik", jumlahtarik);
        // localStorage.setItem("tgltarik", tanggaltarik);
        // localStorage.setItem("tgljatem", tanggaljatem);
        // localStorage.setItem("jenis", "Penarikan Baru");
        // localStorage.setItem("flag", 1);
        // localStorage.setItem("nomor", "001");


        if (localStorage.getItem("jmltarik1")!=''){
            localStorage.setItem("date2", date);
            localStorage.setItem("time2", time);
            localStorage.setItem("valas2", valuta);
            localStorage.setItem("jmltarik2", jumlahtarik);
            localStorage.setItem("tgltarik2", tanggaltarik);
            localStorage.setItem("tgljatem2", tanggaljatem);
            localStorage.setItem("jenis2", "Penarikan Baru");
            localStorage.setItem("flag2", 1);
            localStorage.setItem("nomor2", "003");
        }
        else if (localStorage.getItem("jmltarik")!=''){
            localStorage.setItem("date1", date);
            localStorage.setItem("time1", time);
            localStorage.setItem("valas1", valuta);
            localStorage.setItem("jmltarik1", jumlahtarik);
            localStorage.setItem("tgltarik1", tanggaltarik);
            localStorage.setItem("tgljatem1", tanggaljatem);
            localStorage.setItem("jenis1", "Penarikan Baru");
            localStorage.setItem("flag1", 1);
            localStorage.setItem("nomor1", "002");
        }
        else {
            localStorage.setItem("date", date);
            localStorage.setItem("time", time);
            localStorage.setItem("valas", valuta);
            localStorage.setItem("jmltarik", jumlahtarik);
            localStorage.setItem("tgltarik", tanggaltarik);
            localStorage.setItem("tgljatem", tanggaljatem);
            localStorage.setItem("jenis", "Penarikan Baru");
            localStorage.setItem("flag", 1);
            localStorage.setItem("nomor", "001");
        }
        
    }else{
        // Sorry! No Web Storage support..
    }
}

function acc() {
    var now = new Date();
    var date = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
    var time = now.getHours()+'.'+now.getMinutes();

    localStorage.setItem("time", time);
    localStorage.setItem("flag", 2);
    
}

// penawaran suku bunga
function del() {
    if (typeof(Storage) !== "undefined") {
        localStorage.removeItem("date");
        localStorage.removeItem("time");
        localStorage.removeItem("valas");
        localStorage.removeItem("jmltarik");
        localStorage.removeItem("tgltarik");
        localStorage.removeItem("tgljatem");
        localStorage.removeItem("jenis");
        localStorage.removeItem("namarm");
        localStorage.removeItem("bunga");
        localStorage.removeItem("flag");
    }else{
        // Sorry! No Web Storage support..
    }
}

function input() {
    if (typeof(Storage) !== "undefined"){
        var namarm = rmgbk.value;
        var bunga = sbunga.value + "%";

        localStorage.setItem("namarm", namarm);
        localStorage.setItem("bunga", bunga);
    }
}