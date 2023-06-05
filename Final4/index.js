const input1=document.querySelector(".searchinput")
const ptag=document.getElementsByClassName("ptag")


input1.addEventListener("keyup",(e)=>{
Array.from(ptag).forEach((item)=>{
if (item.textContent.includes(e.target.value)) {
    item.parentElement.classList.remove("hidee")

}
else{
    item.parentElement.classList.add("hidee")

}
})
})