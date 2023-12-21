var movieDataDiv = document.querySelector("#movieData");


fetch("https://swapi.dev/api/people/1/?format=json")


.then(function(response){
return response.json();

})

.then(function (data) {
    
 console.log(data);

 movieDataDiv.innerHTML = "<h2>" + "Nombre : " + data.name + "</h2>";
 movieDataDiv.innerHTML += "<p>" + "Altura : " + data.height + "<p>";
 movieDataDiv.innerHTML += "<p>" + "Peso : " + data.mass + "</p>";
 movieDataDiv.innerHTML += "<p>" + "Color de pelo : " + data.hair_color + "</p>";
 movieDataDiv.innerHTML += "<p>" + "Año de nacimiento : " + data.birth_year + "</p>";


})


.catch(function (error) {
    console.log(error)

});















