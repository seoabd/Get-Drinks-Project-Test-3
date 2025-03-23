function getDrinks(numberOfGuests) {
    let numOfDrinks = 0;
    for(let i=1; i <= numberOfGuests; i++){
      if(numberOfGuests === 1){
        numOfDrinks += 1;
      }else{
        numOfDrinks += i;
      }
    }
    return numOfDrinks;
  }
