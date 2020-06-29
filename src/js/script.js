(function(){

    let tgSwitch = document.getElementsByClassName('tgSwitch-practicing-days');
    for (let tgSwitchElem of tgSwitch) {
        tgSwitchElem.addEventListener('click', toggleSwitch)
    }
    function toggleSwitch() {
        if (!this.className.includes('active')) {
            this.className += ' active';
            this.firstElementChild.className += ' slider-active';
            this.lastElementChild.firstChild.setAttribute('checked', 'checked')
        } else {
            this.className = 'tgSwitch-practicing-days';
            this.firstElementChild.className = 'slider-practicing-days';
            this.lastElementChild.firstChild.removeAttribute('checked')
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