const listContainer = document.querySelector(".country-list")

countries.forEach(country => {
    listContainer.innerHTML += `
    <div class="country">
        <img src=${country.flags.png}></img>
        <div>
            <div>Name: ${country.name.common}</div>
            <div>Official Name: ${country.name.official}</div>
            <div>Languages: ${Object.values(country.languages).join(", ")}</div>
            <div>Capital: ${country.capital[0]}</div>
        </div>
    <div>
    `
})