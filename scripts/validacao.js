let form1 = document.forms['meuForm'];
// alert(form1["uf"].value);
form1.onsubmit = function(event){
    event.preventDefault;
    if(form1["nome"].value.length <=2){
        alert("Digite mais que 2 caracteres!!!");
        return false;
    }
    let esportes = document.getElementsByClassName("esp");
    let valoresEsp = Object.values(esportes)
    alert(typeof(valoresEsp))
    let achei=false;
    esportes.forEach(function(e){
        if(e.checked){
            achei = true;
        }
    });
    if(!achei){
        alert("Pelo menos um esporte deve ser marcado!");
        return false;
    }
}