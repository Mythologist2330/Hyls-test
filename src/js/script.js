(function(){

/* tgSwitch и tgSwitch2 объединить в одну функцию 
tgSwitch.onclick = () => {
    if (tgSwitch.className === 'tgSwitch-practicing-days') {
        tgSwitch.className += ' active';  /* строки 11-13 Добавить стиль "active" и менять по команде classlist.toggle  
        slider.style.transform = 'translateX(30px)';
        slider.style.borderColor = 'green';
        tgSwitchInput.setAttribute('checked', 'checked')
    } else {
        tgSwitch.className = 'tgSwitch-practicing-days';
        slider.style.transform = 'translateX(0)';
        slider.style.borderColor = '#C4C9CB';
        tgSwitchInput.removeAttribute('checked')
    }
};

let tgSwitch2 = document.getElementById('tgSwitch2');
let slider2 = document.getElementById('slider2');
let tgSwitchInput2 = document.getElementById('tgSwitchInput2');
tgSwitch2.onclick = () => {
    if (tgSwitch2.className === 'tgSwitch-practicing-days') {
        tgSwitch2.className += ' active';
        slider2.style.transform = 'translateX(30px)';
        slider2.style.borderColor = 'green';
        tgSwitchInput2.setAttribute('checked', 'checked')
    } else {
        tgSwitch2.className = 'tgSwitch-practicing-days';
        slider2.style.transform = 'translateX(0)';
        slider2.style.borderColor = '#C4C9CB';
        tgSwitchInput2.removeAttribute('checked')
    }
};*/




    let tgSwitch = document.getElementsByClassName('tgSwitch-practicing-days');
    let slider = document.getElementsByClassName('slider-practicing-days');
    let tgSwitchInput = document.getElementsByClassName('tg-switch-input');

    for (let tgSwitchElem of tgSwitch) {
        tgSwitchElem.addEventListener('click', toggleSwitch)
    }

    function toggleSwitch() {
        if (this.className === 'tgSwitch-practicing-days') {
            this.className += ' active'
            this.firstElementChild += ' slider-active'
            this.firstChild.lastElementChild.setAttribute('checked', 'checked')
        } else {
            this.className = 'tgSwitch-practicing-days'
            this.firstElementChild = 'slider-practicing-days'
            this.lastElementChild.removeAttribute('checked')
        }
    }












    let allFrontDays = document.getElementsByClassName('front-week-day');
    for (let elem of allFrontDays){
    elem.addEventListener('click', toggleDay)
    }
    function toggleDay() {
        if (this.className === 'front-week-day') {
            this.className += ' active-week-days';
            this.nextElementSibling.setAttribute('checked', 'checked')
        } else {
            this.className = 'front-week-day';
            this.nextElementSibling.removeAttribute('checked')
        }
    }
}());
