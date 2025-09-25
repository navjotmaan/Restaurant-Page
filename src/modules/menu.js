import pizza from '../images/pizza.jpg';
import pasta from '../images/pasta.jpg';
import noodles from '../images/noodles.jpg';
import coffee from '../images/coffee.jpg';
import burger from '../images/burger.jpg';
import shake from '../images/shake.jpg';

export function loadMenu() {
    const menu = document.querySelector('#content');
    const items = document.createElement('div');
    items.setAttribute('id', 'items');

    const box1 = document.createElement('div');

    const image1 = document.createElement('img');
    image1.src = pizza;
    image1.setAttribute('alt', 'pizza');

    const price1 = document.createElement('p');
    price1.classList.add('food');
    price1.textContent = 'Pizza $8';

    box1.appendChild(image1);
    box1.appendChild(price1);

    const box2 = document.createElement('div');

    const image2 = document.createElement('img');
    image2.src = pasta;
    image2.setAttribute('alt', 'pasta');

    const price2 = document.createElement('p');
    price2.classList.add('food');
    price2.textContent = 'Pasta $5.5';

    box2.appendChild(image2);
    box2.appendChild(price2);

    const box3 = document.createElement('div');

    const image3 = document.createElement('img');
    image3.src = noodles;
    image3.setAttribute('alt', 'noodles');

    const price3 = document.createElement('p');
    price3.classList.add('food');
    price3.textContent = 'Noodles $6';

    box3.appendChild(image3);
    box3.appendChild(price3);

    const box4 = document.createElement('div');

    const image4 = document.createElement('img');
    image4.src = coffee;
    image4.setAttribute('alt', 'coffee');

    const price4 = document.createElement('p');
    price4.classList.add('food');
    price4.textContent = 'Coffee $3';

    box4.appendChild(image4);
    box4.appendChild(price4);

    const box5 = document.createElement('div');

    const image5 = document.createElement('img');
    image5.src = burger;
    image5.setAttribute('alt', 'burger');

    const price5 = document.createElement('p');
    price5.classList.add('food');
    price5.textContent = 'Burger $7';

    box5.appendChild(image5);
    box5.appendChild(price5);

    const box6 = document.createElement('div');

    const image6 = document.createElement('img');
    image6.src = shake;
    image6.setAttribute('alt', 'shake');

    const price6 = document.createElement('p');
    price6.classList.add('food');
    price6.textContent = 'shake $4';

    box6.appendChild(image6);
    box6.appendChild(price6);

    const credit = document.createElement('span');
    credit.classList.add('credits');
    credit.innerHTML = 'Photo by <a href="https://unsplash.com/@iavnt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ivan Torres</a> on <a href="https://unsplash.com/photos/pizza-with-berries-MQUqbmszGGM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>, Photo by <a href="https://unsplash.com/@orijit57?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Orijit Chatterjee</a> on <a href="https://unsplash.com/photos/pasta-dish-on-brown-ceramic-plate-wEBg_pYtynw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>, Photo by <a href="https://unsplash.com/@dino_trexx?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Fatemeh Rz</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-plate-of-food-with-pasta-iXzStLbERMk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>, Photo by <a href="https://unsplash.com/@sujeethpotla?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sujeeth Potla</a> on <a href="https://unsplash.com/photos/coffee-cup-EaiSp8Oh48k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>, Photo by <a href="https://unsplash.com/@jonathanborba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jonathan Borba</a> on <a href="https://unsplash.com/photos/a-bacon-egg-and-cheese-burger-on-a-black-background-fB905lrmzMU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>, Photo by <a href="https://unsplash.com/@eusouomatteus?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Matteus Silva</a> on <a href="https://unsplash.com/photos/a-drink-with-a-straw-in-it-sitting-on-a-table-geSGq_duuhI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';

    items.appendChild(box1);
    items.appendChild(box3);
    items.appendChild(box2);
    items.appendChild(box5);
    items.appendChild(box4);
    items.appendChild(box6)

    menu.appendChild(items);
    menu.appendChild(credit);
}