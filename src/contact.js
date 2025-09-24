export function loadContact() {
    const content = document.querySelector('#content');

    const contact = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = "Contact Us";

    const phn = document.createElement('p');
    phn.textContent = "Phone: +91 99765-10234";

    const email = document.createElement('p');
    email.textContent = "Email: restaurant@maan.com";

    const address = document.createElement('p');
    address.textContent = "Address: Rock Valley, Mumbai";

    const hrs = document.createElement('p');
    hrs.textContent = "Opening Hours: Mon-Sun (10 AM - 6 PM)";

    contact.appendChild(heading);
    contact.appendChild(phn);
    contact.appendChild(email);
    contact.appendChild(address);
    contact.appendChild(hrs);

    contact.style.textAlign = 'center';

    content.appendChild(contact);

    
}