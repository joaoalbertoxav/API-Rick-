
fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => {

  let corpo = document.querySelector("#corpo")

  for (let index = 0; index < data.results.length; index++) {
    let linha = document.createElement("tr")

    linha.innerHTML = `
    <th scope="row">${data.results[index].id}</th>
    <td><img src ="${data.results[index].image}"></td>
      <td>${data.results[index].name}</td>
      <td>${data.results[index].species}</td>
      <td>${data.results[index].gender}</td>
      <td>${data.results[index].location.name}</td>
    `
    corpo.appendChild(linha)
  }
})
.catch(error => console.log(error))