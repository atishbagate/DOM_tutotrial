document.addEventListener('DOMContentLoaded',function(){

    const list = document.querySelector('#book-list ul');
    list.addEventListener('click', function (e) {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    });
    //get form input
    const getForm = document.forms['add-book'];

    getForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const value = getForm.querySelector('input[type="text"]').value;
        // console.log(value);

        //create new book (element)
        const newli = document.createElement('li');
        //ceating child element
        const newBookName = document.createElement('span');
        const newDelBtn = document.createElement('span');
        //add content inside element 
        newDelBtn.textContent = ' delete';
        newBookName.textContent = value;
        //adding class name as before so that it inherit same properties.
        newBookName.classList.add('name');
        newDelBtn.classList.add('delete');

        //append to document
        newli.appendChild(newBookName);
        newli.appendChild(newDelBtn);
        list.appendChild(newli);

        //for hide content using check box.
        const hideBox = document.querySelector('#hide');
        hideBox.addEventListener('change', function (e) {
            if (hideBox.checked) {
                list.style.display = "none";
            } else {
                list.style.display = "initial";
            }
        });
        //for search box
        const searchBox = document.forms['search-books'].querySelector('input');
        searchBox.addEventListener('keyup',function(e){
            const term = e.target.value.toLowerCase();
            const books = list.getElementsByTagName('li');
            Array.from(books).forEach(function(book){
                const title = book.firstElementChild.textContent;
                if (title.toLowerCase().indexOf(term)!= -1) {
                    book.style.display = "block";
                } else {
                    book.style.display = "none";
                    
                }
            })
        })

    });
})
