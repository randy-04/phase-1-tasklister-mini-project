document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    makeTask(e.target.new_task.value)
    form.reset()
})
  
})

function makeTask(task){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = "del(X)"
  li.textContent = task
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
  let color = document.getElementById("colors")
  let col = color.options[color.selectedIndex].value
  console.log(col)
  li.style.color = col

}

function handleDelete(e){
  e.target.parentNode.remove()
}

