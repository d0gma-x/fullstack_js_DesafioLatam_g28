var borde = false

document.getElementById("imagen").addEventListener("click", function(){
    if(borde){
        this.className = "sinBorde"
        borde = false
    }else{
        this.className = "conBorde"
        borde = true 
    }
})