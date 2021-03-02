let input = document.querySelector('.task');
let inputdate = document.querySelector('.date')
let ul = document.querySelector('ul');
let list = document.querySelectorAll('li');
let container = document.querySelector('div');
let span = document.querySelectorAll('.trash');
let clearBtn = document.querySelector('#clear');
let addBtn = document.querySelector('#add');
function loadTodo() {
    if (localStorage.getItem('todoList')) {
        ul.innerHTML = localStorage.getItem('todoList');
    }
    span = document.querySelectorAll('.trash')
}
function deletload() {
    for (let i = 0; i < span.length; i++) {
        span[i].addEventListener("click", function () {
            ul.removeChild(this.parentNode)
            saveTodo()
        })
    }
}
addBtn.addEventListener('click', function () {
    let li = document.createElement('li');
    let spanElement = document.createElement('span');
    let spanElementDate = document.createElement('span');
    let spanElementClock = document.createElement('span');
    let icon = document.createElement('i');
    let newTodo = input.value + ' ';
    input.value = '';
    let dateTodo = new Date(inputdate.value)
    inputdate.value = ''
    initializeClock(spanElementClock, dateTodo)
    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    spanElementDate.innerHTML =  dateTodo.getFullYear() + '-' + ('0' + (dateTodo.getMonth()+1)).slice(-2) + '-' + ('0' + dateTodo.getDate()).slice(-2)
    spanElement.setAttribute('class', 'trash')
    spanElementDate.setAttribute('class', 'Edate')
    spanElementClock.setAttribute('class', 'clock')
    ul.appendChild(li).append(spanElement, newTodo, spanElementDate, spanElementClock)
    saveTodo()
    loadTodo()
    deletload()
    updateClock()

})
function initializeClock(spanElementClock, dateTodo) {
    let t = getTimeRemaining(dateTodo);
    spanElementClock.innerHTML = " - " + t.days + " дней " + ('0' + t.hours).slice(-2) + " часов " + ('0' + t.minutes).slice(-2) + " минут " + ('0' + t.seconds).slice(-2) + " секунд";

}
function updateClock() {
    let elementsdate = document.querySelectorAll('.Edate')
    let elementsclock = document.querySelectorAll('.clock')
    for (let i = 0; i < elementsclock.length; i++) {
        let t = getTimeRemaining(elementsdate[i].innerHTML);
        if (t.total <= 0){
            ul.removeChild(elementsdate[i].parentNode)
        }
            elementsclock[i].innerHTML = ". Осталось до выполнение задачи - " + t.days + " дней " + + ('0' + t.hours).slice(-2) + " часов " + ('0' + t.minutes).slice(-2) + " минут " + ('0' + t.seconds).slice(-2) + " секунд";
    }
    
    let inter = setInterval(updateClock,1000)
    if(elementsclock.length == 0)
        clearInterval(inter)
}
function saveTodo() {
    localStorage.setItem("todoList", ul.innerHTML)
}
function setData() {
    let date = new Date()
}
clearBtn.addEventListener('click', function () {
    ul.innerHTML = '';
    localStorage.clear();
});
function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

loadTodo();
deletload();
updateClock();
