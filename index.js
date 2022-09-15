function getPercent({value,percent,people}){
    const total = value * percent
    const tipPerPerson = (total/people)
       return {
        tipPerPerson,
        total
       }
}

function setPercentages(p){

    const billElement = document.querySelector('#bill')
    const peopleElement = document.querySelector('#people')
    const totalTipElement = document.querySelector('#totalTip')
    const tipPerPersonElement = document.querySelector('#tipPerPerson')
    const peopleInput = document.querySelector('#people-input')
    const errElement = document.querySelector('#err')

    const billValue = billElement.value !== ""?billElement.value:0
    const value =  parseFloat(billValue)
    const people = parseInt(peopleElement.value)
    const percent = parseFloat(p)
    
    if(people && people !== 0){
        peopleInput.classList.remove('input-err')
        errElement.style.display = "none"
        const tipObject = getPercent({value,percent,people})
        totalTipElement.innerHTML = tipObject.total.toFixed(2)
        tipPerPersonElement.innerHTML = tipObject.tipPerPerson.toFixed(2)
    }else{
     peopleInput.classList.add('input-err')
     errElement.style.display = "block"
    }
}

const buttons = document.querySelectorAll('.percent-btn')
const custom = document.querySelector('#custom')
const reset = document.querySelector('#reset')

reset.addEventListener('click',()=>{
    const billElement = document.querySelector('#bill')
    const peopleElement = document.querySelector('#people')
    const totalTipElement = document.querySelector('#totalTip')
    const tipPerPersonElement = document.querySelector('#tipPerPerson')

    billElement.value = 0.00
    tipPerPersonElement.innerHTML = "0.00"
    peopleElement.value = 0.00
    totalTipElement.innerHTML = "0.00"
})

custom.addEventListener('input',(e)=>{
    if(parseFloat(e.target.value) >= 100){
        e.target.value = 100
    }
})
custom.addEventListener('keypress',(e)=>{
    const percent = e.target.value?e.target.value:0;
    if(e.key.toLowerCase() == "enter"){
        setPercentages(percent/100)
    }
})


buttons.forEach(button=>{button.addEventListener('click',(e)=>setPercentages(e.target.dataset.percent))})

