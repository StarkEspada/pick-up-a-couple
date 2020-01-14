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
		this.init();
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
			console.log(atribute)
		}
	}*/

	onClick(e){		
		if(this.images.length >= 1) {
			this.images.push(e.target.getAttribute("w"));
			e.target.style.display = "none";
			this.curtain.push(e.target);
			if(imageComparison(this.images)) {
				this.images = [];
				this.curtain = [];
			} else {
				function pop(){
					this.curtain[0].style.display = "block"
					this.curtain[1].style.display = "block"
					this.images = [];
					this.curtain = [];
				}
				setTimeout(pop.bind(this), 1000)
			/*  this.curtain[0].style.display = "block"
				this.curtain[1].style.display = "block"
				this.images = [];
				this.curtain = [];*/
			}
		} else {
			this.images.push(e.target.getAttribute("w"));
			e.target.style.display = "none";
			this.curtain.push(e.target);
		}

		function imageComparison(images) {
			if(images[0] === images[1]) {
				return true;
			} else {
				return false;
			}
			setTimeout(pop.bind(this), 500)
		}
	}
	
	init(){
		this.renderField()
		this.container.addEventListener("click", this.onClick.bind(this));
		/*this.test()*/
	}

}

var memory = new Memory(".container", shuffledArr)
