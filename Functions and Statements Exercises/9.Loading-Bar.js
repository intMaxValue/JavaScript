function loading(percent){
    let bars = percent / 10;

    if (bars === 10) {
        console.log("100% Complete!")
        return;
    }

    console.log(`${percent}% [${('%').repeat(bars) + ('.').repeat(10 - bars)}]`)
    console.log("Still loading...")
}

loading(30)