const loadLogin = function () {
	const btnLogin = document.querySelector('#btnLogin')
	btnLogin.addEventListener('click', function() {
		User.save(document.querySelector('#username').value)
		window.location.href = 'home.html'
	})
	showUsername()
}

const  loadCarro = function (e) {
	const btnCarro = document.querySelector('#btnCarro')
	btnCarro.addEventListener('click', function() {
		User.save(document.querySelector('#username').value)
		window.location.href = 'carrito.html'
		for (var i = 0; i < storage.length; i++) {
			console.log(localStorage.key(i))
		}
	})
	showUsername()
}

const  logOut = function (e) {
	e.preventDefault()
	User.remove()
	window.location.href = 'index.html'
	storage.clear()
}

const showUsername = function () {
	const username = document.querySelector('.username')
	const usernameText = document.createTextNode(User.get() || 'Anónimo')
	username.appendChild(usernameText)
}

const init = function () {
	document.querySelector('.carro').addEventListener('click', loadCarro)
	document.querySelector('.logout').addEventListener('click', logOut)
	
	showUsername()
}

const addProductos = function(tipo, valor){
		localStorage.setItem(tipo,valor);
		console.log(localStorage);
}

const arreglo = function(index){

	let array = [
		{
			nombre: "Playstation 4",
			precio: 300,
			img: "src='img/ps4.png'"
		},
		{
			nombre: "Xbox One",
			precio: 250,
			img: "src='img/xbox.png'"
		},
		{
			nombre: "Bocinas",
			precio: 70,
			img: "src='img/bocinas.png'"
		},
		{
			nombre: "Laptop HP",
			precio: 450,
			img: "src='img/laptop.png'"
		},
		{
			nombre: "Mouse Logitech",
			precio: 30,
			img: "src='img/mouse.png'"
		},
		{
			nombre: "Teclado Logitech",
			precio: 100,
			img: "src='img/teclado.png'"
		},
		{
			nombre: "Headset Beats",
			precio: 150,
			img: "src='img/headset.png'"
		},
		{
			nombre: "Radio",
			precio: 15,
			img: "src='img/radio.png'"
		},
		{
			nombre: "Nintendo Switch",
			precio: 300,
			img: "src='img/switch.png'"
		},
		{
			nombre: "Monitor HP",
			precio: 100,
			img: "src='img/monitor.png'"
		},
	]

}

const createImg = function(url) {
	const productImg = document.createElement('img')
	productImg.src = url
	productImg.classList.add('image')
	return productImg
}
const createName = function (name) {
	const productName = document.createElement('h2')
	const text = document.createTextNode(name)
	productName.appendChild(text)
	productName.classList.add('name')
	return productName
}
const createPrice = function(price){
    const productPrice = document.createElement('h2')
    const text = document.createTextNode('$'+price+' MXN')
    productPrice.appendChild(text)
    productPrice.classList.add('price')
    return productPrice
}

const addProducto1 = function(){
	const  btnAddCarro = document.querySelector('#btn1')
	btnAddCarro.addEventListener('click', addProductos("src='img/ps4.png'", 300))
	localStorage.setItem("xbox","33");
}


const addProducto2 = function() {
	const  btnAddCarro2 = document.querySelector('#btn2')
	btnAddCarro2.addEventListener('click', addProductos("src='img/xbox.png'", 250))
	
}

const addProducto3 = function(){
	const  btnAddCarro3 = document.querySelector('#btn3')
	btnAddCarro3.addEventListener('click', addProductos("src='img/bocinas.png'", 70))
	arreglo(0)
}


const addProducto4 = function(){
	const  btnAddCarro3 = document.querySelector('#btn4')
	btnAddCarro3.addEventListener('click', addProductos("src='img/laptop.png'", 450))
	arreglo(0)
}


const addProducto5 = function(){
	const  btnAddCarro3 = document.querySelector('#btn5')
	btnAddCarro3.addEventListener('click', addProductos("src='img/mouse.png'", 30))
	arreglo(0)
}


const addProducto6 = function(){
	const  btnAddCarro3 = document.querySelector('#btn6')
	btnAddCarro3.addEventListener('click', addProductos("src='img/teclado.png'", 100))
	arreglo(0)
}


const addProducto7 = function(){
	const  btnAddCarro3 = document.querySelector('#btn7')
	btnAddCarro3.addEventListener('click', addProductos("src='img/headset.png'", 150))
	arreglo(0)
}


const addProducto8 = function(){
	const  btnAddCarro3 = document.querySelector('#btn8')
	btnAddCarro3.addEventListener('click', addProductos("src='img/radio.png'", 15))
	z
}

const addProducto9 = function(){
	const  btnAddCarro3 = document.querySelector('#btn9')
	btnAddCarro3.addEventListener('click', addProductos("src='img/switch.png'", 300))
}


const addProducto10 = function(){
	const  btnAddCarro3 = document.querySelector('#btn10')
	btnAddCarro3.addEventListener('click', addProductos("src='img/monitor.png'", 100))
}


const desplegarCarrito = function(){
	const carrito = document.querySelector('#btnCarro')
	carrito.addEventListener('click', function(){
		for (var i = 0; i < storage.length; i++) {
			console.log(localStorage.key(i))
		}
	})
	
}







class User {
	constructor  () {
	}

	static getKey () {
		const KEY = 'username'
		return KEY
	}

	static save (user) {
		localStorage.setItem(User.getKey(), user)
	}

	static get () {
		return localStorage.getItem(User.getKey())
	}

	static remove () {
		localStorage.removeItem(User.getKey())
	}

}