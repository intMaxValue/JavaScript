function charsInRange(a, b) {
    let chars = [];
    
    const start = a.charCodeAt()
    const end = b.charCodeAt()


    for (let index = Math.min(start, end) + 1; index < Math.max(start,end); index++) {
        
        chars.push(String.fromCharCode(index))
    }

    console.log(chars.join(" "));
}

charsInRange('#',':')