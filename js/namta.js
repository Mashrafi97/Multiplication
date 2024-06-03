let input = document.querySelector(".one")
let btn = document.querySelector(".btn")
let caution = document.querySelector(".caution")

btn.addEventListener("click",function(){
    if(input.value){
        for(i = 1; i <= 10; i++){
            document.write(i + " X " + input.value + " = " + input.value * i + "<br>");
        }
    }else{
        caution.innerHTML ="Please Enter Some Value"
    }
})