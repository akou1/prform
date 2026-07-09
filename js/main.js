input = document.querySelector('input');
input.addevenlistiner('input', filter)
function filter() {
    search = input.value.tolowerCase();
    listitems.array.forEach(function (li) {
        text = li.innerHtml.tolowerCase();
        found = text.indexof(search)
        if (search == '')
        {
           li.style.display = 'block' 
           } 
        else if (search == -1) {
            li.style.display = "none";
        }
            
        else {
            li.style.display = "block";
        }
           
    });
}