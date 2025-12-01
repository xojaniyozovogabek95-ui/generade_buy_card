const form = document.querySelector("#formdata")
const container = document.querySelector(".container")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formdata = new FormData(form)
    const productObject = Object.fromEntries(formdata)



    const ctn = document.createElement("div")
    ctn.classList.add("ctn")
    container.appendChild(ctn)

    const btnX = document.createElement("button")
    btnX.classList.add("btnX")
    ctn.appendChild(btnX)
    btnX.textContent = "X"

    const img = document.createElement("img")
    img.classList.add("img")
    ctn.appendChild(img)
    img.src = productObject.image

    const content = document.createElement("div")
    content.classList.add("content")
    ctn.appendChild(content)

    const h5 = document.createElement("h5")
    h5.classList.add("h5")
    content.appendChild(h5)
    h5.textContent = productObject.brand

    const productName = document.createElement("p")
    productName.classList.add("productName")
    content.appendChild(productName)
    productName.textContent = productObject.title

    const productPrice = document.createElement("p")
    productPrice.classList.add("productPrice")
    content.appendChild(productPrice)
    productPrice.textContent = productObject.price

    btnX.addEventListener("click", (e) => {
        ctn.remove()
        
    })
})

