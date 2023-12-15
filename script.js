let ranking = ["FERRO" , "BRONZE" , "PRATA" , "OURO" , "DIAMANTE" , "LENDÁRIO" , "IMORTAL"]

function winBalance(hero , numberOfWins , numberOfDefeats){

    let difference = numberOfWins - numberOfDefeats;
    let ranking = ["FERRO" , "BRONZE" , "PRATA" , "OURO" , "DIAMANTE" , "LENDÁRIO" , "IMORTAL"]
    let phrase = `O Herói ${hero} tem de saldo de ${difference} e está no nível de `
    switch(true){

        case(difference < 10):
        console.log(phrase + ranking[0])
        break;

        case(difference >= 10 && difference <20):
        console.log(phrase + ranking[1])
        break;

        case(difference >= 20 && difference <50):
        console.log(phrase + ranking[2])
        break;

        case(difference >= 50 && difference <80):
        console.log(phrase + ranking[3])
        break;

        case(difference >= 80 && difference <90):
        console.log(phrase + ranking[4])
        break;        

        case(difference >= 90 && difference <100):
        console.log(phrase + ranking[5])
        break;  

        case(difference >= 100):
        console.log(phrase + ranking[6])
    }
}
winBalance("Schwarzenegger" , 269 , 135)