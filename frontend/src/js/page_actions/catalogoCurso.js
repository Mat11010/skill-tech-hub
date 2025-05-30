const AreaService = require('../services/areaServices.js');
const CurseService = require('../services/curseServices.js');

const areaService = new AreaService();
const curseService = new CurseService();

window.onload = async () => {
    const data = await areaService.getCursesByArea();
    const div = document.getElementById('areas');
    renderCatalog(div, data);
}

function renderCatalog(div, data){
    div.innerHTML = '';
    data.forEach(element => {
        const curses = element.curses;
        const areaDiv = document.createElement('div');
        areaDiv.className = 'area';
        const titleDiv = document.createElement('div');
        titleDiv.className = 'titleView';
        const curseView = document.createElement('div');
        curseView.className = 'curseView';

        titleDiv.innerHTML = `<h2>${element.name}</h2> <p>${element.desc}</p>`;
        div.appendChild(areaDiv);
        areaDiv.appendChild(titleDiv);
        areaDiv.appendChild(curseView);

        curses.forEach(curse => {
            const curseCard = document.createElement('div');
            curseCard.id = curse._id;
            curseCard.className = 'card';
            curseCard.style = 'width: 18rem; margin: 10px;';
            curseCard.innerHTML = `<img src='${curse.img}' class='card-img-top' alt='...'>`;
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            cardBody.style = 'font-family: lemon_milk;';

            cardBody.innerHTML = `<h5 class="card-title">${curse.title}</h5>
        <p class="card-text">${curse.desc}</p>
        <a href="${
            curse.title === 'Elétrônica Digital' ? './src/pages/eletronica_digital.html?id=' + curse._id :
            curse.title === 'Elétric Circuits' ? './src/pages/electric_circuits.html?id=' + curse._id :
            curse.title === 'CLP Schneider' ? './src/pages/clp_schneider.html?id=' + curse._id :
            curse.title === 'Robótic Kuka' ? './src/pages/robotic_kuka.html?id=' + curse._id :
            './src/pages/moduloscurso.html?id=' + curse._id
        }" id="${curse._id}" class="btn btn-outline-dark">Go somewhere</a>`;

            curseView.appendChild(curseCard);
            curseCard.appendChild(cardBody);
        });
    });
}



















/*const AreaService = require('../services/areaServices.js');
const CurseService = require('../services/curseServices.js');

const areaService = new AreaService();
const curseService = new CurseService();

window.onload = async () => {
    const data = await areaService.getCursesByArea();
    const div = document.getElementById('areas');
    renderCatalog(div, data);
}

function renderCatalog(div, data){
    div.innerHTML = '';
    data.forEach(element => {
        const curses = element.curses;
        const areaDiv = document.createElement('div');
        areaDiv.className = 'area';
        const titleDiv = document.createElement('div');
        titleDiv.className = 'titleView';
        const curseView = document.createElement('div');
        curseView.className = 'curseView';

        titleDiv.innerHTML = `<h2>${element.name}</h2> <p>${element.desc}</p>`;
        div.appendChild(areaDiv);
        areaDiv.appendChild(titleDiv);
        areaDiv.appendChild(curseView);

        curses.forEach(curse => {
            const curseCard = document.createElement('div');
            curseCard.id = curse._id;
            curseCard.className = 'card';
            curseCard.style = 'width: 18rem; margin: 10px;';
            curseCard.innerHTML = `<img src='${curse.img}' class='card-img-top' alt='...'>`;
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            cardBody.style = 'font-family: lemon_milk;';

           cardBody.innerHTML = `<h5 class="card-title">${curse.title}</h5>
            <p class="card-text">${curse.desc}</p>
            <a href="./curse_page.html=${curse._id}" id="${curse._id}" class="btn btn-outline-dark">Go somewhere</a>`

            cardBody.innerHTML = `<h5 class="card-title">${curse.title}</h5>
        <p class="card-text">${curse.desc}</p>
        <a href="${
            curse.title === 'Elétrônica Digital' ? './src/pages/eletronica_digital.html?id=' + curse._id :
            curse.title === 'Elétric Circuits' ? './src/pages/eletronica_digital.html?id=' + curse._id :
            curse.title === 'CLP Schneider' ? './src/pages/clp_schneider.html?id=' + curse._id :
            curse.title === 'Robótic Kuka' ? './src/pages/robotic_kuka.html?id=' + curse._id :
            '../pages/moduloscurso.html?id=' + curse._id
        }" id="${curse._id}" class="btn btn-outline-dark">Go somewhere</a>`;
            curseView.appendChild(curseCard);
            curseCard.appendChild(cardBody);
        });
    });
}*/