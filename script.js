var block = document.getElementById('div');

function editColorBlock(){
    if(block.style.backgroundColor === 'green'){
        block.style.backgroundColor = 'blue';
    }
    else {
        block.style.backgroundColor = 'green';
    }
};