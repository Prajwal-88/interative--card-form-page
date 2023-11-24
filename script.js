// form fields 
const form = document.querySelector("form");
const name_ =document.querySelector("#name");
const card_number = document.querySelector("#card-num");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc_ = document.querySelector("#cvc_");
const inputs = document.querySelectorAll("input[data-type='input']")
const submit = document.querySelector("#submit");

// card fields front 
const card_no = document.querySelector(".card_no");
const card_name = document.querySelector("#card_name");
const card_month = document.querySelector("#card_month");
const card_year = document.querySelector("#card_year");
const card_cc = document.querySelector("#card_cvc")

// card fields back 
const cardcvc =document.querySelector("#card_cvc");
window.addEventListener('load',()=>{

    inputs.forEach(field =>{
        field.value="";
    })
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    if(name_.value.trim()===''){
        nme(name_);
        showalert(name_,"ENTER A NAME");  
    }else if(/^[a-zA-Z0-9]{16}$/.test(card_number.value)===false){
        nme(card_number);
        showalert(card_number,"WRONG FORMAT,NUMBERS ONLY!")
    }else if(/^(0?[1-9]|1[0-2])$/.test(month.value)===false){
        nme(month);
        showalert2(month,"CANT BE BLANK")
    }else if(/^\d{4}$/.test(year.value)=== false){
        nme(year);
        showalert2(year,"CANT BE BLANK");
    }else if(/^\d{3}$/.test(cvc_.value)=== false){
        nme(cvc_);
        showalert2(cvc_,"CANT BE BLANK")
    }
    submit.disabled=true;
})    

name_.addEventListener('focus',()=>{
    document.querySelector(".alert_").remove();
    name_.classList.remove("border-Red_input_errors")
    submit.disabled=false;
})

card_number.addEventListener('focus',()=>{
    document.querySelector(".alert_").remove();
    card_number.classList.remove("border-Red_input_errors")
    submit.disabled=false;
})

month.addEventListener('focus',()=>{
    document.querySelector(".alert_").remove();
    month.classList.remove("border-Red_input_errors")
    submit.disabled=false;
})

year.addEventListener('focus',()=>{
    document.querySelector(".alert_").remove();
    year.classList.remove("border-Red_input_errors")
    submit.disabled=false;
})
cvc_.addEventListener('focus',()=>{
    document.querySelector(".alert_").remove();
    cvc_.classList.remove("border-Red_input_errors")
    submit.disabled=false;
})


function showalert2(ele,text){
    const div= document.createElement("div")
    div.className="alert_ text-xs text-Red_input_errors text-left mb-2"
    div.append(`${text}`);
    ele.parentElement.after(div);
}

function showalert(ele,text){
    const div= document.createElement("div")
    div.className="alert_ text-xs text-Red_input_errors text-left mb-2"
    div.append(`${text}`);
    ele.after(div);
}
function nme(ele){
    ele.classList.add("border-Red_input_errors");
}



card_number.addEventListener('keyup',()=>{
    if(card_number.value === ''){
        card_no.innerText="0000 0000 0000 0000";
    }else{
        card_no.innerText=card_number.value;
        
    }
})

name_.addEventListener('keyup',()=>{
    if(name_.value === ''){
        card_name.innerText="JANE APPLESEED";
    }else{
        card_name.innerText=name_.value;
    }
})

month.addEventListener('keyup',()=>{
    if(month.value === ''){
        card_month.innerText="09";
    }else{
        card_month.innerText=month.value;
    }
})

year.addEventListener('keyup',()=>{
    if(year.value ===''){
        card_year.innerText="00";

    }else{
        card_year.innerText=year.value;
    }
})

cvc_.addEventListener('keyup',()=>{
    if(cvc_.value === ''){
        card_cc.innerText="000";
    }else{
        card_cc.innerText=cvc_.value;
    }
})









