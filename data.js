// WRITE YOUR CODE BELOW THIS LINE

// Reuse the array

let favoriteBooks = [
	{
		title: "The Lord of the Rings",
		author: "J. R. R. Tolkien",
		year: 1954,
		isNewerThan2000: false,
		age: 2022 - 1954,
		characters: ["Frodo", "Gollum", "Gandalf", "Legolas"],
	},
	{
		title: "Harry Potter and the Philosopher's Stone",
		author: "J. K. Rowling",
		year: 1997,
		isNewerThan2000: false,
		age: 2022 - 1997,
		characters: ["Harry Potter", "Albus Dumbledore", "Hermiona Granger", "Lord Voldemort"],
	},
	];
	
	console.log(favoriteBooks);
	
	// Display titles using 'for...of' loop
	
	// for (let i = 0; i < favoriteBooks.length; i++){
	//	 console.log(favoriteBooks[i].title)
	//}
	
	for (let element of favoriteBooks){
		console.log(element.title)
	}
	
	// Display authors using 'for' loop
	
	for (let i = 0; i < favoriteBooks.length; i++){
		console.log(favoriteBooks[i].author)
	}
	
	// Check the age of books using 'if'
	
	for ( let element of favoriteBooks){
		if( element.isNewerThan2000 === true ){
			console.log(element.title)
		}
	}
	
	// Check the age of books using 'if/else'
	
	for (let element of favoriteBooks){
		if(element.isNewerThan2000 === true ){
			console.log("This book is newer than 2000: ")
			console.log(element.title)
		} else{
			console.log("This book is older than 2000: ")
			console.log(element.title)
		}
	}
	
	// Check the age of books switched
	console.log("--------------check the age----------")
	
	for (let element of favoriteBooks){
		if(element.isNewerThan2000 !== false){
			console.log("This book is newer than 2000: ")
			console.log(element.title)
		} else{
			console.log("This book is older than 2000: ")
			console.log(element.title)
		}
	}
	
	// Compare the publishing year
	console.log("--------------Compare the publishing year----------")
	
	for (let i = 0; i < favoriteBooks.length; i++){
		if(favoriteBooks[i].year > 2000){
			console.log("This book is newer than 2000: ")
			console.log(favoriteBooks[0].title)
		} else {
			console.log("This book is older than 2000: ")
			console.log(favoriteBooks[0].title)
		}
	
		if(favoriteBooks[i].isNewerThan2000 > 2000){
			console.log("This book is newer than 2000: ")
			console.log(favoriteBooks[1].title)
		} else {
			console.log("This book is older than 2000: ")
			console.log(favoriteBooks[1].title)
		}
	}
	
	// Combine the results using loops and conditionals
	console.log("--------------Combine----------------")
	
	for (let i = 0; i < favoriteBooks.length; i++){
		if(favoriteBooks[i].year > 2000){
			console.log("This book is newer than 2000: ")
			console.log(favoriteBooks[0].title)
		} else {
			console.log("This book is older than 2000: ")
			console.log(favoriteBooks[0].title)
		};
	}
	
	for (let element of favoriteBooks){
		if(element.year > 2000){
			console.log("This book is newer than 2000: ")
			console.log(element.title)
		} else {
			console.log("This book is older than 2000: ")
			console.log(element.title)
		}
	}
	

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favoriteBooks", content: favoriteBooks, type: "array"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport}
