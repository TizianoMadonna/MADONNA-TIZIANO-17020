function AgregarProducto()
{
    let titulo = document.getElementById('titulo').value 
    let precioPeso = document.getElementById('precioPeso').value
    let precioDolar = document.getElementById('precioDolar').value
    let fecha = document.getElementById('fecha').value

    if(titulo != ""&&precioPeso!=""&&precioDolar!=""&&fecha!="")
    {
        fetch('https://api.yumserver.com/17020/products', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            titulo: titulo,
            precioPeso: precioPeso,
            precioDolar: precioDolar,
            fecha: fecha
            })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
            document.getElementById('titulo').value = "";
            document.getElementById('precioPeso').value = "";
            document.getElementById('precioDolar').value = "";
            document.getElementById('fecha').value = "";
            alert('Se agregó un nuevo producto')
    }
    else
    {
        alert('Apartados nulos, intentelo nuevamente')
    }
}
function ModificarProductos()
{
    let id = document.getElementById('id').value
    let titulo = document.getElementById('titulo').value
    let precioPeso = document.getElementById('precioPeso').value
    let precioDolar = document.getElementById('precioDolar').value
    let fecha = document.getElementById('fecha').value
    
    if(id != ""&&titulo != ""&&precioPeso!=""&&precioDolar!=""&&fecha!="")
    {
        fetch('https://api.yumserver.com/17020/products', 
        {
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(
                {
                    idcod: id,
                    titulo: titulo,
                    precioPeso: precioPeso,
                    precioDolar: precioDolar,
                    fecha: fecha
                })
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(error=>console.error('Error:', error));
        alert('Se modificò un producto');
        document.getElementById('id').value = "";
        document.getElementById('titulo').value = "";
        document.getElementById('precioPeso').value = "";
        document.getElementById('precioDolar').value = "";
        document.getElementById('fecha').value = "";
    }
    else
    {
        alert('Apartados nulos, intentelo nuevamente')
    }
}
function EliminarProducto()
{
    let id = document.getElementById('id').value
    if(id != "")
    {
    let confirmar = confirm('¿Desea eliminar el producto?')
    if (confirmar)
    {
       fetch('https://api.yumserver.com/17020/products', 
            {
                method: 'DELETE',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(
                 {
                     idcod: id
                 })
            })
            .then(response=>response.json())
            .then(data=>console.log(data))
            .catch(error=>console.error('Error:', error));
             document.getElementById('id').value = "";
             alert('Producto eliminado')
    }
    else
    {
     alert('Se detuvo el proceso')
    }
    }
    else
    {
        alert('Apartado id nulo');
    }
}