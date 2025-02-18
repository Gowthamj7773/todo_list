function func()
{
    var i1 = document.getElementById("i1")
    var i2 = document.getElementById("i2")
    var element = document.createElement("li")
    var list = document.getElementById("list")
    element.innerHTML = i1.value+" "+i2.value+" "+"<button onclick=\"del(event)\">Delete</button>"
    list.append(element)
}
function del(event)
{
event.target.parentElement.remove()
}