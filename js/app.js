const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam porro quidem, dolor aliquid fugit molestias laboriosam velit recusandae mollitia! Et nesciunt omnis illum eligendi minima porro quaerat, ab accusantium?';
document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('Favorite color?');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(event) {
        event.stopPropagation();   
        const listContent = prompt('Change your color');
        this.textContent = listContent;
    };
}