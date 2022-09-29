const boton = document.querySelector('.boton');
const resultado = document.getElementById("resultado-p");

const boton2 = document.querySelector('.boton2');
const select = document.querySelector('#moneda');
const resultado2 = document.getElementById("resultado-p2");


boton.addEventListener('click', function () {
    let moneda = document.getElementById('moneda').value;
    let monto = document.getElementById('monto').value;

    if (monto === "") {
        resultado.innerHTML = "Falto ingresar monto"
    } else {
        if (moneda == 0) {
            resultado.innerHTML = "Falto ingresar la moneda"
        } else {
            total = monto / moneda
            resultado.innerHTML ="$" + total
        }
    }
    
    //estilo
    resultado.style.padding = "1rem"
    resultado.style.border = "1px solid #000"
    resultado.style.borderRadius = "5px"
});

boton2.addEventListener('click', function () {
    let opcionNueva = document.createElement('option');
    let moneda = document.getElementById('monedaNueva').value;
    let costoConversion = document.getElementById('costoConversion').value;

    if (moneda === "" | costoConversion === "") {
        resultado2.innerHTML = "Falto ingresar un campo"
        //estilo
        resultado2.style.padding = "1rem"
        resultado2.style.border = "1px solid #000"
        resultado2.style.borderRadius = "5px"
    } else {
        opcionNueva.value = costoConversion
        opcionNueva.text = moneda

        select.appendChild(opcionNueva)
    }

});

