let button = document.querySelector('#id1')

let button1= document.querySelector('#id2')

let link=['https://www.youtube.com/',
            'http://mgke.minsk.edu.by',
            'https://www.youtube.com/',
            'https://www.google.by/',
            'https://www.apple.com/'

]
let colors = ['LightSkyBlue',
               'Azure',
               'Beige',
               'Chocolate'

]

function random(n,x){
  return Math.floor(Math.random()*(x-n)+n)
}

button.addEventListener('click',function(){
    window.location.href = link[random(0,4)]
})

button1.addEventListener('click', function(){ 
document.body.style.backgroundColor = colors[random(0,4)]
})
