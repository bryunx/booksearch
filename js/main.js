//Google Books API
//Step 2 the function and event listener
function bookSearch() {
//Step 3 getting user data and clearing the previous search
		var search = document.getElementById('search').value
		document.getElementById("results").innerHTML = ""
//Step 4 setup the AJAX call for the API data based on the user's search term
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: "json",

		success:function(data) {
			for(i=0; i<data.items.length; i++) {
				results.innerHTML+= "<h2>" + data.items[i].volumeInfo.title + " - " + data.items[i].volumeInfo.authors[0]+ "</h2>"
				}
		},
		type: 'GET'
	});
}

document.getElementById('button').addEventListener('click', bookSearch, false)












