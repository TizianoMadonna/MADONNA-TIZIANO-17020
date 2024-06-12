window.addEventListener('load', CargarAPIConsola);
window.addEventListener('load', CargarAPIPantalla);
var elementosEliminados = [];
function CargarAPIConsola()
{
fetch('https://api.yumserver.com/17020/products')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
}
var contenedorRelleno = document.querySelector('.contenedor')
function CargarAPIPantalla()
{
    fetch('https://api.yumserver.com/17020/products')
    .then(response => response.json())
    .then(data => 
    {
        data.forEach(element => {  
            let { idcod, titulo, precioPeso, precioDolar, fecha} = element;
            contenedorRelleno.innerHTML +=
            `
            <div class="contenedor-elementos-api">
                <div class="titulo-inner">
                        ${titulo}
                </div>
                <div class="precio-inner">
                        $ ${precioPeso}
                </div>
                <div class="precio-inner">
                        u$d ${precioDolar}
                </div>
                <div class="fecha-inner">
                        ${fecha}
                </div>
                <div class="id-inner">
                        ${idcod}
                </div>
            </div>
            `
        });

    })
}
function Filtrar()
{
        let input = document.getElementById('parametro');
        let elementoFiltrado = input.value.toLowerCase().trim();
        let ubicacion = document.getElementsByClassName('contenedor-elementos-api');
        elementosEliminados = [];
       for (let i=0;i<ubicacion.length;i++)
        {
            let elementos = ubicacion[i].children;
            for (j=0;j<elementos.length;j++)
            {
                if(elementos[j].classList.contains('titulo-inner'))
                    {
                        if(elementos[j].textContent.toLowerCase().trim().indexOf(elementoFiltrado)>-1)
                        {
                            for(let k = 0; k<ubicacion.length; k++)
                                {
                                    ubicacion[i].setAttribute('style', 'display:none');
                                }
                            
                            if (elementos[j].textContent.toLowerCase().trim().indexOf("postres" || "postre" || "postr" || "post" || "pos" || "po" || "p")>-1)
                                {
                                    ubicacion[i].removeAttribute('style');
                                    ubicacion[33].removeAttribute('style');
                                    ubicacion[34].removeAttribute('style');
                                    ubicacion[35].removeAttribute('style');
                                }
                            else
                            {
                            ubicacion[i].removeAttribute('style');
                            }
                        }
                        else
                        {

                            ubicacion[i].setAttribute('style', 'display:none');
                        }
                        if (elementoFiltrado.trim() == "")
                        {
                            for(let k = 0; k<ubicacion.length; k++)
                            {
                                ubicacion[i].removeAttribute('style');
                            }
                        }
                    }
            }
        }
}