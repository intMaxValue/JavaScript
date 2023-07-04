function split(text) {
    let result = text.split(/(?=[A-Z])/).join(", ");  

    return result;
}

split('SplitMeIfYouCanHaHaYouCantOrYouCan')