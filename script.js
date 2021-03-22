setTimeout(() => {
    document.querySelector('.title').textContent = 'Looking for a web developer?'
    document.querySelector('.text-1').textContent = 'Hey there, hire me! I can write this:'
    document.querySelector('.text-2').textContent = 'Lorem ipsum dolor, sit amet consectetur'
    document.querySelector('.text-3').textContent = 'adipisicing elit. Commodi, eaque!'
    document.querySelector('.name').textContent = 'Pom the genius'
    document.querySelector('.date').textContent = 'Mar 22, 2021'
    removeGradient();
}, 2500);

function removeGradient() {
    document.querySelectorAll('.gradient').forEach(gradient => {
        gradient.classList.remove('gradient');
    })
}