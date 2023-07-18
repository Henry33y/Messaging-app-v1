const socket = io('ws://localhost:8080')
const ul = document.querySelector('ul')
const button = document.querySelector('#send')

socket.on('message',(text)=>{
    const el = document.createElement('li')
    el.innerHTML = text
    ul.appendChild(el)
})

button.onclick = () => {
    const text = document.querySelector('input').value
    socket.emit('message',text)
}