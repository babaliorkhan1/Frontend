const input1=document.querySelectorAll("input")[0]
const ptag=document.querySelector(".ptag1")
const input2=document.querySelectorAll("input")[1]
const ptag2=document.querySelector(".ptag2")
ptag.style.fontSize="13px"
ptag.style.color="red"
const input3=document.querySelectorAll("input")[2]
const input4=document.querySelectorAll("input")[3]
const ptag4=document.querySelector(".ptag4")
ptag2.style.fontSize="13px"
ptag2.style.color="red"
ptag4.style.fontSize="13px"
ptag4.textContent="Gecersiz sifre"
ptag4.style.color="red"


input1.addEventListener("keyup",(e)=>{
    const LOWERLETTERS=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"]
const numbers=[
1,2,3,4,5,6,7,8,9
]
const capitalletters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
   

    let question=numbers.some((char)=>{
        return e.target.value.includes(char)
   
    })
    let question1=capitalletters.some((char1)=>{
        return e.target.value.includes(char1)
                })
  let question2=LOWERLETTERS.some((char2)=>{
                      return e.target.value.includes(char2)
                                })
if (e.target.value.length<8) {
    ptag.textContent="must be minimum 8 symbol,one capital and lower and number"
   
}
else{
   
    if (!question2) {
        ptag.textContent="required lowercase"
    
    }
    if (!question1) {
        ptag.textContent="required capital"
    }
    if (!question) {
        ptag.textContent="required number"
    }

    if (question && question1 && question2) {
        ptag.textContent="Ugurla tamamladiz"
        ptag.style.color="green"
    }
    if (!question || !question1 || !question2 || e.target.value.length<8) {
        ptag.style.color="red"
    }
}


})

input2.addEventListener("keyup",(element)=>{
    const LOWERLETTERS=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"]
const numbers=[
1,2,3,4,5,6,7,8,9
]
const capitalletters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
   

    let question=numbers.some((char)=>{
        return element.target.value.includes(char)
   
    })
    let question1=capitalletters.some((char1)=>{
        return element.target.value.includes(char1)
                })
  let question2=LOWERLETTERS.some((char2)=>{
                      return element.target.value.includes(char2)
                                })
if (element.target.value.length<8) {
    ptag2.textContent="must be minimum 8 symbol,one capital and lower and number"
   
}
else{
   
    if (!question2) {
        ptag2.textContent="required lowercase"
    
    }
    if (!question1) {
        ptag2.textContent="required capital"
    }
    if (!question) {
        ptag2.textContent="required number"
    }

    if (question && question1 && question2) {
        ptag2.textContent="Ugurla tamamladiz"
        ptag2.style.color="green"
    }
    if (!question || !question1 || !question2 || !element.target.value.length<8) {
        ptag2.style.color="red"
    }
}


})

input4.addEventListener("keyup",(ee)=>{
    

      
if (ee.target.value==input3.value) {
    ptag4.textContent="Ugurla tamamladiz"
    ptag4.style.color="green"
}
else{
    ptag4.textContent="gecersiz sifre"
    ptag4.style.color="red"
}

})

const select=document.querySelector(".select")
const options=document.querySelector(".options")
const signup=document.querySelector(".button_sign")
const dr0pdown=document.querySelector(".dropdown")

signup.addEventListener("click",()=>{
    dr0pdown.classList.toggle("dropdown")
})
select.addEventListener("click",()=>{
    options.classList.toggle("dropdown1")

})


Array.from(options.children).forEach((item)=>{
    item.addEventListener("click",()=>{
        select.textContent=item.textContent
        options.classList.toggle("dropdown1")
        dr0pdown.classList.add("dropdown")

 

    })
    
  
})

