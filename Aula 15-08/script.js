function alerta() {
    var conteudo = document.getElementById("exec_01").value;
    alert(conteudo);
}

function valida() {
    var conteudo = document.getElementById("exec_01").value;
    if (conteudo == "Erick") {
        alert("Deu certo!");
    }else{
        alert("Não deu certo!");
    }
}

function getMonthName(mo) {
    mo--;
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "sep", "oct", "Nov", "Dec",
    ];
    if (months[mo]) {
        return months[mo];
    } else {
        throw new Error("InvalidMonthNo");
    }
}

function getMes() {
    var myMonth = document.getElementById("exec_02").value;

    if (myMonth < 1 || myMonth > 12) {
        alert("Não vai dar!");
    } else {
        try{
            monthName = getMonthName(myMonth);
            alert(monthName);
        } catch(e) {
            monthName = "desconhecido!"
            alert(monthName);
            console.log(e)
        }
    }
}