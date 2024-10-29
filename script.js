const noteListContainer = document.getElementById("noteListContainer");

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(note => {
            noteListContainer.insertAdjacentHTML("beforeend", `
            <div class="listedNote">
                <p class="listedNoteTitle">${note.noteTitle}</p>
                <p class="listedNoteBody">${note.noteBody}</p>
            </div>    
            `);
        });
    });

console.log(noteListContainer.innerHTML);