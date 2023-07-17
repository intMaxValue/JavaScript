function inventory(input) {
    let heroes = [];

    input.forEach(hero => {
        let [name, level, items] = hero.split(' / ');
        heroes.push({name, level, items});
    });

    heroes.sort((a, b) => a.level - b.level).forEach(hero => console.log(`Hero: ${hero.name}` + '\n' + `level => ${hero.level}` + '\n' + `items => ${hero.items}`));
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])