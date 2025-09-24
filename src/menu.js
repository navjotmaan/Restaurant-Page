import pizza from './pizza.jpg';
import pasta from './pasta.jpg';
import noodles from './noodles.jpg';
import coffee from './coffee.jpg';

export function loadMenu() {
    const menu = document.querySelector('#content');
    const items = document.createElement('div');
    items.setAttribute('id', 'items');

    const box1 = document.createElement('div');

    const image1 = document.createElement('img');
    image1.src = pizza;

    const price1 = document.createElement('p');
    price1.textContent = 'Pizza $4';

    box1.appendChild(image1);
    box1.appendChild(price1);

    const box2 = document.createElement('div');

    const image2 = document.createElement('img');
    image2.src = pasta;

    const price2 = document.createElement('p');
    price2.textContent = 'Pasta $5.5';

    box2.appendChild(image2);
    box2.appendChild(price2);

    const box3 = document.createElement('div');

    const image3 = document.createElement('img');
    image3.src = noodles;

    const price3 = document.createElement('p');
    price3.textContent = 'Noodles $6';

    box3.appendChild(image3);
    box3.appendChild(price3);

    const box4 = document.createElement('div');

    const image4 = document.createElement('img');
    image4.src = coffee;

    const price4 = document.createElement('p');
    price4.textContent = 'Coffee $2';

    box4.appendChild(image4);
    box4.appendChild(price4);

    items.appendChild(box1);
    items.appendChild(box3);
    items.appendChild(box2);
    items.appendChild(box4);

    menu.appendChild(items);
}