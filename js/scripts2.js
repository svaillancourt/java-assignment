// retrieve "Active" list.
var activeList = document.querySelector( 'ul' );

// retrieve "Completed" list.
var completeList = document.querySelectorAll( 'ul li:last-of-type' );

// Retrieve the to-do input.
var newTask = document.querySelector('[name="new-task"]');

// select our form. 
var form = document.querySelector ( 'form ');

// We listen to our form for a submission.
form.addEventListener( 'submit' , function ( event ) {
    //  // prevents the  page from refreshing
    event.preventDefault();

    activeList.innerHTML +=`
    <li>
        <input type="checkbox">
        ` + newTask.value + `
    </li>
    `;

    var newCheckbox = document.querySelector(' ul li:last-child [type="checkbox"] ')        // normal, child, attritube selector.

    newCheckbox.addEventListener ('click', function (event){
        // grabs the associated LI.
        var li = this.parentNode;
        // Delete the checkbox
        li.removeChild( this );

        // move the Li to our completed UL.
        completeList.appendChild(li);
    });
});
