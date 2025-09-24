import cafe from './cafe.jpg';

export function loadHome() {
    const content = document.querySelector('#content');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Tasty Trails';

    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    const image = document.createElement("img");
    image.src = cafe;
    image.setAttribute('id', 'rest-image');

    const message = document.createElement('p');
    message.setAttribute('id', 'message');
    message.textContent = 'Savor the art of dining with our innovative menu, crafted from the freshest ingredients. Perfect for food lovers seeking a modern twist on classic favorites. Experience great taste, impeccable service, and a vibe that keeps you coming back.'

    container.appendChild(image);
    container.appendChild(message);
    content.appendChild(restaurantName);
    content.appendChild(container);

    document.addEventListener("DOMContentLoaded", content);
}