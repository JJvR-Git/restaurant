import Icon from './icon.png';

export default function loadIndex() {
    let content = document.createElement('div');
    content.setAttribute('id', 'content')
//add head to page
    let head = document.createElement('div');
    head.setAttribute('id', 'header');

    let header = document.createElement('h1');
    header.textContent = 'Rightsteraunt';
    head.appendChild(header);

    let myIcon = new Image();
    myIcon.src = Icon;
    head.appendChild(myIcon);
    myIcon.setAttribute('id', 'icon')

    let desc = document.createElement('p');
    desc.textContent = 'The right restaurant for any occasion';
    head.appendChild(desc);

//add Tabs to page
    let tabs = document.createElement('div');
    tabs.setAttribute('id', 'tabs');

    let menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.textContent = 'Menu';

    let home = document.createElement('div');
    home.setAttribute('id', 'home');
    home.textContent = 'Home';

    let contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    contact.textContent = 'Contact';

    tabs.append(menu, home, contact);

//create space for content of page
    let tabCon = document.createElement('div');
    tabCon.setAttribute('id', 'tabCon');

//append content
    content.append(head, tabs, tabCon);

    return content;
}