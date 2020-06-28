let tgSwitch = document.getElementById('tgSwitch')
let slider = document.getElementById('slider')
let tgSwitchInput = document.getElementById('tgSwitchInput')
tgSwitch.onclick = () => {
    if (tgSwitch.className === 'tgSwitch-practicing-days') {
        tgSwitch.className += ' active'
        slider.style.transform = 'translateX(30px)'
        slider.style.borderColor = 'green'
        tgSwitchInput.setAttribute('checked', 'checked')
    } else {
        tgSwitch.className = 'tgSwitch-practicing-days'
        slider.style.transform = 'translateX(0)'
        slider.style.borderColor = '#C4C9CB'
        tgSwitchInput.removeAttribute('checked')
    }
}

let tgSwitch2 = document.getElementById('tgSwitch2')
let slider2 = document.getElementById('slider2')
let tgSwitchInput2 = document.getElementById('tgSwitchInput2')
tgSwitch2.onclick = () => {
    if (tgSwitch2.className === 'tgSwitch-practicing-days') {
        tgSwitch2.className += ' active'
        slider2.style.transform = 'translateX(30px)'
        slider2.style.borderColor = 'green'
        tgSwitchInput2.setAttribute('checked', 'checked')
    } else {
        tgSwitch2.className = 'tgSwitch-practicing-days'
        slider2.style.transform = 'translateX(0)'
        slider2.style.borderColor = '#C4C9CB'
        tgSwitchInput2.removeAttribute('checked')
    }
}




let allFrontDays = document.getElementsByClassName('front-week-day')
let allInputDays = document.getElementsByClassName('input-week-day')

allFrontDays[0].onclick = () => {
    allFrontDays[0].style.color = '#000'
    allFrontDays[0].style.borderColor = 'green'
    allInputDays[0].setAttribute('checked', 'checked')
}
