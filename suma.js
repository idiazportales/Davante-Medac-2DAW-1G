document.getElementById("sumar").onclick = sumar;
function sumar() {
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);

    document.getElementById("resultado").textContent = "Resultado: " + (n1 + n2);
}