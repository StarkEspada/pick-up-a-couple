var data = ["img/туча.jpg", "img/барашек.jpg","img/хрюшка.jpg","img/олень.jpg","img/кролик.jpg","img/пикачу.jpg","img/корги.jpg","img/мики.jpg","img/тануки.jpg","img/пес.jpg",
			"img/хрюшка.jpg","img/чашка.jpg","img/чашка.jpg","img/мопс.jpg","img/барашек.jpg","img/лисенок.jpg","img/корги.jpg","img/кот.jpg","img/пес.jpg","img/лиса.jpg",
			"img/тануки.jpg","img/кот.jpg","img/кролик.jpg","img/олень.jpg","img/лисенок.jpg","img/пикачу.jpg","img/туча.jpg","img/лиса.jpg","img/мики.jpg","img/мопс.jpg"]
	
var shuffledArr = data.sort(function(){
  return Math.random() - 0.5;
});



class Memory{

	constructor(container, shuffledArr){
		this.container = document.querySelector(container)
		this.shuffledArr = shuffledArr
		this.place = null
		this.box = [];
		this.atribute = [];
		this.images = [];
		this.curtain = [];
		this.pictureOne = []
		this.pictureTwo = []
		this.atributeOne = null
		this.k = 0
		this.init();
	}

	cancellationEvent(){
		this.container.addEventListener("contextmenu", handler.bind(this))
		function handler(){
			event.preventDefault()
		}
	}

	createPlace(type){
		var place = document.createElement("div")
		place.classList.add(type)
		this.container.appendChild(place)
		this.place = place
	}

	renderField(){
		for(var i = 0; i < this.shuffledArr.length; i++){
			this.createPlace("cell")
			var box = document.createElement("div")
			box.classList.add("black")
			this.place.appendChild(box)
			this.box.push(box)
			this.box[i].setAttribute("w", this.shuffledArr[i])
			this.place.style.backgroundImage = "url" + "(" + this.shuffledArr[i] + ")"
			this.place.style.backgroundSize = 100 + "%";
		}
		this.box = box
		
	}

	/*test(){
		for(var i = 0; i < this.box.length; i++){
			var atribute = this.box[i].getAttribute("w")
			this.atribute.push(atribute)
			console.log("atribute")
		}
	}*/


	lol(){
		this.container.addEventListener("click", handlerTwo.bind(this))
		function handlerTwo(){
		event.preventDefault()
		}
	}

	imageOne(){
		this.container.addEventListener("click", handler.bind(this))
			
		function handler(){
			this.k ++
			console.log(this.k)
			var pop = event.target.classList.contains("black")
			if(pop === true){
				var curtainOne = event.target
				curtainOne.style.display = "none"
			} else {
				console.log("Не тот элемент")
			}
			console.log(curtainOne)
			
			this.curtainOne = curtainOne
			var atributeOne = event.target.getAttribute("w")
			this.pictureOne.push(atributeOne)
			if(this.pictureOne.length > 1){
				this.pictureOne.splice(1,2)
				this.curtainOne.style.display = "block"
			}
			console.log(this.pictureOne)
		}
	}
	
	imageTwo(){
		this.container.addEventListener("contextmenu", handler.bind(this))

		function handler(){
			var curtainTwo = event.target
			curtainTwo.style.display = "none"
			this.curtainTwo = curtainTwo
			var atributeTwo = event.target.getAttribute("w")
			this.pictureTwo.push(atributeTwo)
			if(this.pictureOne !== null && this.pictureTwo !== null){
				this.test()
			}
		}
	}

	test(){
		for(var i = 0; i < this.pictureOne.length; i++){
			console.log(this.pictureOne[i])
			console.log(this.pictureTwo[i])
			if (this.pictureOne[i] === this.pictureTwo[i]){
				this.pictureOne = []
				this.pictureTwo = []
			} else {
				this.pictureOne = []
				this.pictureTwo = []
				function pop (){
					this.curtainOne.style.display = "block"
					this.curtainTwo.style.display = "block"
				}
				setTimeout(pop.bind(this), 750)
			}
		}
		
	}
		
	init(){
		this.cancellationEvent()
		this.renderField()
		this.imageOne()
		this.imageTwo()
	}

}

var memory = new Memory(".container", shuffledArr)
