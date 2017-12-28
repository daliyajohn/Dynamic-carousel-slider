
// generate div on click
    var elementId = 0;
    function generateDiv(nextButton) {

        var wrap = document.getElementById('main-layout');

        elementId ++;
        nextButton.disabled = true;

        var div = document.createElement("div");
        div.id = 'grid-list_'+elementId;
        div.className = 'w3-animate-left grid-list';
        div.innerHTML = elementId;
        wrap.appendChild(div);
        
        var nxt_button = document.createElement("button"); 
        nxt_button.setAttribute('class', 'grid-list-button');
        nxt_button.setAttribute('id', "value"+elementId);
        nxt_button.setAttribute('onclick', 'generateDiv(this)');
        nxt_button.innerHTML= 'Next';
        div.appendChild(nxt_button);
        
        var button = document.createElement("button"); 
        button.setAttribute('id', 'removeButon');
        button.setAttribute('onclick', 'removeDiv("grid-list_'+elementId+'")');
        div.appendChild(button);
        button.innerHTML= 'X';

        document.getElementById('main-layout').scrollLeft += 500;
    }

    // next and previous button start
    function nextDiV() {
        document.getElementById('main-layout').scrollLeft -= 235;
    }

    function previousDiV() {
        document.getElementById('main-layout').scrollLeft += 235;
    }// next and previous button end

    // remove button start
    function removeDiv(element){
        var elem = document.getElementById(element);
        document.getElementsByClassName('main-layout')[0].removeChild(elem);
    }// remove button end

    