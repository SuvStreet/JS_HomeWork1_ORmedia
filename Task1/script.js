var block = document.getElementById('div_style');

function editColorBlock(){
    if(block.style.backgroundColor === 'green'){
        block.style.backgroundColor = 'blue';
    }
    else {
        block.style.backgroundColor = 'green';
    }
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