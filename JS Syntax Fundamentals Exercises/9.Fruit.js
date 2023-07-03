function price(fruit, weightInGrams, pricePerKG) {
    console.log(`I need $${(pricePerKG * (weightInGrams / 1000)).toFixed(2)} to buy ${(weightInGrams / 1000).toFixed(2)} kilograms ${fruit}.`)
}

