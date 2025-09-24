import cafe from './cafe.jpg';

export const content = document.querySelector('#content');

const restaurantName = document.createElement('h1');
restaurantName.textContent = 'Maan Restaurant';

const image = document.createElement("img");
image.src = cafe;
image.style.width = '500px';
image.style.height = '500px';

const message = document.createElement('p');
message.textContent = 'We serve the best Pizza, Pasta, Noodles, and Coffee. Enjoy tasty food with aesthetic view of our restaurant. Book your place with your friends and family.'

content.appendChild(restaurantName);
content.appendChild(image);
content.appendChild(message);
