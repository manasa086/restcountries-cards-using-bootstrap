let URL = "https://restcountries.eu/rest/v2/all";
let main_div = `    <main>
    <section>
        <div class="container-fluid" id="country-data">

        </div>
    </section>
</main>`
document.body.innerHTML += main_div;

fetch(URL).then((response) => {
    return response.json();
}).then((result) => {
    console.log(result);
    let countryData = document.getElementById("country-data");
    let div = document.createElement('div');
    for (let i = 0; i < result.length; i++) {
        div.setAttribute('class', 'row');
        let div1 = document.createElement('div');
        let Country = result[i].name.toString();
        let country_arr = Country.split(" ");
        //console.log(country_arr);
        let capital = result[i].capital.toString();
        let capital_arr = capital.split(" ");
        div1.setAttribute('class', 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-3');
        let countries = "<div class='card card-custom-css'> <div class='card-header'>" + (i + 1) + ".)" + result[i].name + "</div><img src=" + result[i].flag + " class='card-img-top cust-card-img' alt='Image not found' id='img'><div class='card-body card-body-custom-css'><p class='card-text'>Capital: <span class='badge badge-success'>" + result[i].capital + "</span><br>Country Codes: <span class='badge'>" + result[i].alpha2Code + result[i].alpha3Code + "</span><br>Region: <span class='badge'>" + result[i].region + "</span></p></div><div class='card-body card-body-custom-css'></div></div>";
        div1.innerHTML = countries;
        div.appendChild(div1);
        countryData.appendChild(div);
    }

}).catch((error) => {
    alert(error);
});