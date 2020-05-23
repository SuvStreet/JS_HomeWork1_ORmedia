var block = document.getElementById('div_style');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function editColorBlock(){
    var R = getRandomIntInclusive(0, 255);
    /* alert("Значение R " + R); */
    var G = getRandomIntInclusive(0, 255);
    /* alert("Значение G " + G); */
    var B = getRandomIntInclusive(0, 255);
    /* alert("Значение B " + B); */
    block.style.backgroundColor = 'rgb(' + R + ', ' + G + ', ' + B + ')';
};

var show = document.getElementById('div_style');

function addBlock(){
    if(show.style.display === 'block'){
        show.style.display = 'none';
        document.getElementById('div1').style.alignItems = 'flex-end';
        document.getElementById('div2').style.display = 'block';
    }
    else {
        show.style.display = 'block';
        document.getElementById('div2').style.display = 'none';
        document.getElementById('div1').style.alignItems = 'center';
    }
};