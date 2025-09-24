import pizza from './pizza.jpg';
import pasta from './pasta.jpg';
import noodles from './noodles.jpg';
import coffee from './coffee.jpg';

export function loadMenu() {
    const menu = document.querySelector('#content');

    const box1 = document.createElement('div');

    const image1 = document.createElement('img');
    image1.src = pizza;
    image1.setAttribute('width', '600px');
    image1.setAttribute('height', '500px');

    const price1 = document.createElement('p');
    price1.textContent = 'Pizza $4';

    box1.appendChild(image1);
    box1.appendChild(price1);
    menu.appendChild(box1);

    const box2 = document.createElement('div');

    const image2 = document.createElement('img');
    image2.src = pasta;
    image2.setAttribute('width', '500px');
    image2.setAttribute('height', '500px');

    const price2 = document.createElement('p');
    price2.textContent = 'Pasta $5.5';

    box2.appendChild(image2);
    box2.appendChild(price2);
    menu.appendChild(box2);

    const box3 = document.createElement('div');

    const image3 = document.createElement('img');
    image3.src = noodles;
    image3.setAttribute('width', '600px');
    image3.setAttribute('height', '500px');

    const price3 = document.createElement('p');
    price3.textContent = 'Noodles $6';

    box3.appendChild(image3);
    box3.appendChild(price3);
    menu.appendChild(box3);

    const box4 = document.createElement('div');

    const image4 = document.createElement('img');
    image4.src = coffee;
    image4.setAttribute('width', '600px');
    image4.setAttribute('height', '600px');

    const price4 = document.createElement('p');
    price4.textContent = 'Coffee $2';

    box4.appendChild(image4);
    box4.appendChild(price4);
    menu.appendChild(box4);
}