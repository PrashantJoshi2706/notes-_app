
showNotes();
//if user add a notes to local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
});
//function to show element
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element + 1}</p>
            <button id = "${index} "onclick = "deletenoNode(this.id)" class="btn btn-primary">Dlete Note</button>
        </div>
    </div>
        `;

    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length!=0) {
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML=`nothing to show you, 'Add a Note' first`;
    }
}

//function to delete a node

function deletenoNode(index){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}

//filter 
let search = document.getElementById('searchText');
search.addEventListener('input', function(){
    let inputval = search.value.toLowerCase();
    //console.log('input event happen', inputval);
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        //console.log(cardTxt);
        if(cardTxt.includes(inputval))
        {
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    });

});

