const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
        'X-RapidAPI-Key': '3ae9d6acaemshb175628a0959ccfp18deb7jsn8c86242e0312'
    }
};

fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic', options)
    .then(response => response.json())
    .then(response => {

        console.log(response, "the response")
        console.log(response.drinks[0].idDrink)
        drinkName = [];

        for(let i = 0; i < response.drinks.length; i++) {
            let nameArray = response.drinks[i].idDrink;
            drinkName.push(nameArray);

        }
        console.log(drinkName)



    })
    .catch(err => console.error(err));