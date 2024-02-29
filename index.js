const colourInput = document.getElementById("color")
const btn = document.getElementById("button")
const mode = document.getElementById("color-scheme")
let form=document.getElementById("form")
const resetBtn = document.getElementById("reset-button")
btn.addEventListener("click", function change(e){
    colourInput.style.borderColor=colourInput.value;
    for(let i =0;i<5;i++)
    fetch(`https://www.thecolorapi.com/scheme/?hex=${colourInput.value}&count=5&mode=${mode.value}`)
    .then(res => res.json())
    .then(data => {console.log(data.colors[i].hex.value) 
     document.getElementById(`color${i+1}`).style.backgroundColor=data.colors[i].hex.value
    const hex = document.getElementById(`hex-code${i+1}`)
    hex.innerHTML=`<h1>${data.colors[i].hex.value}</h1>`})
    e.preventDefault()
})

resetBtn.addEventListener('click', function reset(){
    document. getElementById("form"). reset();
})
for(let i =0;i<5;i++){
document.getElementById(`hex-code${i+1}`).addEventListener("click",function copyText(e){
    fetch(`https://www.thecolorapi.com/scheme/?hex=${colourInput.value}&count=5&mode=${mode.value}`)
    .then(res => res.json())
    .then(data => {console.log(data.colors[i].hex.value);
        navigator.clipboard
        .writeText((data.colors[i].hex.value).slice(1))})
    e.preventDefault()
})}