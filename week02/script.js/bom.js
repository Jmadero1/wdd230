const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter'); // Cambiado para seleccionar el botón por su id
const list = document.querySelector('#list');

document.querySelector('#chapterForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que se envíe el formulario

    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
    } else {
        input.focus();
    }
});
