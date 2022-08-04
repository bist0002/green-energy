let btn = document.querySelectorAll('.controls button');
let dc = document.querySelector('.dynamic-content');

const imagesList = [
   "./images/solar.jpg",
   "./images/tax.jpg",
   "./images/world.jpg"
];

function preloader() {
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }
    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

// resources
content = {
    c1: {
        heading: 'Community Solar Energy',
        bodyText: 'Installing personal solar panel can be quite costly. An alternative would to have community based solar farms which cuts down costs and is easy to maintain.A community solar project, or solar garden, is a collection of solar panels whose energy is shared by multiple houses. The solar garden would power each home’s water, heat and electricity while the entire community would split the lower energy costs.',
        imageSrc: imagesList[0],
        imageAlt: 'Solar Panels'
    },
    c2: {
        heading: 'Tax Credits',
        bodyText: 'Giving tax refunds to people and communities that invest in clean energy can be a motivation. Providing tax credits to those who invest in and produce renewable energy sources would generate a willingness to transition to energy efficient resources like solar and wind power. ',
        imageSrc: imagesList[1],
        imageAlt: 'Man with tax for a head'
    },
    c3: {
        heading: 'Push For Global Clean Energy',
        bodyText: 'Cities deploying local clean energy solutions often face objections from local residents and businesses. People might object to the appearance, upfront cost or the (perceived or real) ecological impact of renewable technologies. They may see renewable energy as something only available to the wealthy, as a threat to incumbent industries that provide local jobs, or simply not worthy of public support in comparison to other local issues such as education or healthcare.',
        imageSrc: imagesList[2],
        imageAlt: 'illustration of the world inside a hand'
    }
};

dc.innerHTML = `<div>
                    <h1>${content.c1.heading}</h1>
                    <div class="box">
                        <img class="float-left" src="${content.c1.imageSrc}" alt="${content.c1.imageAlt}">
                        <p>${content.c1.bodyText}</p>
                    </div>
                    <div class="clear"></div>
                </div>`;

function handleSelection(ev) {
    let currentBtn = ev.target;
    console.log(currentBtn.textContent);
    if (currentBtn.textContent === 'Solar') {
        dc.innerHTML = `<div>
                            <h1>${content.c1.heading}</h1>
                            <div class="box">
                                <img class="float-left" src="${content.c1.imageSrc}" alt="${content.c1.imageAlt}">
                                <p>${content.c1.bodyText}</p>
                            </div>
                            <div class="clear"></div>
                        </div>`;
        } else if (currentBtn.textContent === 'Tax') {
            dc.innerHTML = `<div>
                                <h1>${content.c2.heading}</h1>
                                <div class="box">
                                    <img class="float-left" src="${content.c2.imageSrc}" alt="${content.c2.imageAlt}">
                                    <p>${content.c2.bodyText}</p>
                                </div>
                                <div class="clear"></div>
                            </div>`;
        } else if (currentBtn.textContent === 'World') {
            dc.innerHTML = `<div>
                                <h1>${content.c3.heading}</h1>
                                <div class="box">
                                    <img class="float-left" src="${content.c3.imageSrc}" alt="${content.c3.imageAlt}">
                                    <p>${content.c3.bodyText}</p>
                                </div>
                                <div class="clear"></div>
                            </div>`;
        }
}

for (let btns of btn) {
    btns.addEventListener('click', handleSelection);
}