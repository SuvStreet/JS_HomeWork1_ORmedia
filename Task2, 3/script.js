let term = {
    China: 21,
    Italy: 28,
    Russia: 10,
    Spain: 32,
    Canada: 20,
    Belarus: 16,
    Ukraine: 11,
    Brazil: 21,
    USA: 21,
    UnitedKingdom: 16,
    Turkey: 15,
    France: 20,
    India: 31,
    Japan: 18,
    Australia: 14,
    Mexico: 16,
    Sweden: 9,
    Germany: 20,
    Israel: 26,
    SouthKorea: 18,
    SouthAfrica: 23,
    Egypt: 22,
};

document.addEventListener("DOMContentLoaded", addOption());

function addOption(){
    for (var key in term) {
        var text = key;
        var value = term[key];
        var newOption = new Option(text, value);
        document.getElementById("city").add(newOption);
    }
}

function opacityValueInput(){
    if (document.getElementById("city").focus){
        document.getElementById("input").value = document.getElementById("city").value + " ℃";
    }
}

function countTerm(){
    var mean = 0;
    var counter = 0;
    var temp = 0;
    for (var key in term) {
        temp += term[key];
        counter++;
    }
    mean = temp / counter;
    /* alert("Значение mean " + mean); */
    document.getElementById("input").value = mean + " ℃";
}

function maxTerm(){
    var temp = 0;
    var name = "";
    for (var key in term) {
        if (temp < term[key]) {
            temp = term[key];
            name = key;
        }
    }
    /* alert("Значение name " + name); */
    document.getElementById("input").value = name + " " + temp + " ℃";
}