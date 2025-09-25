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

    const credit = document.createElement('span');
    credit.classList.add('credits');
    credit.innerHTML = 'Photo by <a href="https://unsplash.com/@moisamihai092?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mihai Moisa</a> on <a href="https://unsplash.com/photos/black-chairs-Djtc1T38-GY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
    
    container.appendChild(image);
    container.appendChild(message);
    content.appendChild(restaurantName);
    content.appendChild(container);
    content.appendChild(credit);

    document.addEventListener("DOMContentLoaded", content);
}