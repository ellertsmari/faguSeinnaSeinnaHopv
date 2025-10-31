// ==========================================
// SLIDES DATA - Add new slides here!
// ==========================================
const slidesData = [
    // Slide 1: Title Slide
    {
        type: 'title',
        title: 'Velkomin í síðasta hópaverkefni FAGU',
        subtitle: 'Seinni hluti seinna hópaverkefnisins',
        image: 'front.png'
    },
    
    // Slide 2: Groups Table
    {
        type: 'table',
        title: 'Þetta eru nýju hóparnir',
        description: 'Þeir hópar sem voru með verkefni sem hægt er að halda áfram með haldast og halda áfram með þau verkefni en aðrir hópar byrja á nýju verkefni',
        subtitle: 'Hóparnir eru:',
        headers: ['Hópur 1', 'Hópur 2', 'Hópur 3', 'Hópur 4', 'Hópur 5', 'Hópur 6'],
        rows: [
            ['Alexander', 'Ívar', 'Darri', 'Oliver', 'Ólafur', 'Cristian'],
            ['Sigurður', 'Hafsteinn', 'Sigrtyggur', 'Ýmir', 'Allan', 'Dagur'],
            ['Ragnar', 'Markús', 'Patrekur', '', '', 'Hanson']
        ]
    },
    
    // Slide 3: Day 1 Schedule
    {
        type: 'text',
        title: 'Dagur 1 (í dag): Ákveða hvað þið ætlið að gera',
        items: [
            'Hópar sem eru að halda áfram með verkefnin sín ákveða saman hvert þeir ætla að reyna að ná með verkefnið fyrir kynningar (á þriðjudagin í næstu viku)',
            'Hópar sem eru að byrja á nýju verkefni spjalla saman um það sem þeim hefur þótt skemmtilegast að gera í áfanganum (so far) og reyna að finna verkefni sem þeim finnst gaman að gera',
            'Skoðið það feedback sem þið fenguð á Innu fyrir síðasta verkefni og reynið að gera enn betur í þetta skipti',
            'Setjið markið hátt, það er allt i lagi þó það sé ekki fullbúið þegar kynningarnar fara fram'
        ]
    },
    
    // Slide 4: Day 2 Schedule
    {
        type: 'sidebyside',
        title: 'Dagur 2 (þriðjudagur): Vinna að verkefninu',
        items: [
            'Þetta er eini dagurinn sem þið hafið allan daginn í að vinna að verkefninu sjálfu. Nýtið hann vel'
        ],
        image: 'work.png'
    },
    
    // Slide 5: Day 3 Schedule
    {
        type: 'text',
        title: 'Dagur 3 (Mánudagur): Fínpússa og vinna að glærum',
        items: [
            'Nú er kominn tími á að fínpússa vinnuna',
            'Spurjið aðra hópa hvað þeim finnst, gerið jafnvel kynninguna fyrir þeim',
            'Spurjið gervigreindina hvað megi fara betur',
            'Spurjið kennara hvað megi bæta',
            'Leggið loka hönd á glærur til þess að kynna á þriðjudag'
        ]
    },
    
    // Slide 6: Day 4 Presentations
    {
        type: 'text',
        title: 'Dagur 4 (Þriðjudagur): Kynningar',
        items: [
            'Þetta er síðasti séns til þess að koma með virkilega tilkomumikla kynningu til þess að öðlast virðingu samnemenda og kennara því þetta er síðasta kynning vetrarins',
            'Jafnframt verður Jafningjamat lagt fram í vikunni til þess að allar einkunnir séu sanngjarnar'
        ],
        image: 'presentations.png'
    },
    
    // Slide 7: Questions
    {
        type: 'title',
        title: 'Spurningar?',
        subtitle: 'Ef þið hafið einhverjar spurningar, komið þeim á framfæri núna',
        image: 'qna.png'
    }
    
    // Add more slides here!
];

// ==========================================
// SLIDE RENDERING FUNCTIONS
// ==========================================

// Render a title slide
function renderTitleSlide(data) {
    return `
        <div class="content">
            ${data.image ? `<img src="${data.image}" alt="Slide image" class="slide-image">` : ''}
            <h1>${data.title}</h1>
            <h2>${data.subtitle}</h2>
        </div>
    `;
}

// Render a table slide
function renderTableSlide(data) {
    const tableRows = data.rows.map(row => `
        <tr>
            ${row.map(cell => `<td>${cell}</td>`).join('')}
        </tr>
    `).join('');
    
    return `
        <div class="content">
            <h2>${data.title}</h2>
            ${data.description ? `<p>${data.description}</p>` : ''}
            ${data.subtitle ? `<h3>${data.subtitle}</h3>` : ''}
            <table>
                <thead>
                    <tr>
                        ${data.headers.map(header => `<th>${header}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </div>
    `;
}

// Render a text slide
function renderTextSlide(data) {
    return `
        <div class="content">
            ${data.image ? `<img src="${data.image}" alt="Slide image" class="slide-image">` : ''}
            <h1>${data.title}</h1>
            ${data.content ? `<p>${data.content}</p>` : ''}
            ${data.items ? `<ul>${data.items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
        </div>
    `;
}

// Render a side-by-side slide with image and text
function renderSideBySideSlide(data) {
    return `
        <div class="content side-by-side">
            <div class="side-image">
                <img src="${data.image}" alt="Slide image">
            </div>
            <div class="side-text">
                <h1>${data.title}</h1>
                ${data.content ? `<p>${data.content}</p>` : ''}
                ${data.items ? `<ul>${data.items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
            </div>
        </div>
    `;
}

// Main render function
function renderSlide(data) {
    switch(data.type) {
        case 'title':
            return renderTitleSlide(data);
        case 'table':
            return renderTableSlide(data);
        case 'text':
            return renderTextSlide(data);
        case 'sidebyside':
            return renderSideBySideSlide(data);
        default:
            return '<div class="content"><h1>Unknown slide type</h1></div>';
    }
}

// ==========================================
// SLIDESHOW LOGIC
// ==========================================

let currentSlide = 0;
let slides;

// Initialize slideshow
function initSlideshow() {
    const container = document.getElementById('slideshow');
    
    // Generate slides from data
    slidesData.forEach((slideData, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide' + (index === 0 ? ' active' : '');
        slideElement.innerHTML = renderSlide(slideData);
        container.appendChild(slideElement);
    });
    
    // Get all slides after rendering
    slides = document.querySelectorAll('.slide');
    updateCounter();
}

// Show specific slide
function showSlide(n) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Wrap around if necessary
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }

    // Show current slide
    slides[currentSlide].classList.add('active');
    updateCounter();
}

// Change slide by offset
function changeSlide(offset) {
    showSlide(currentSlide + offset);
}

// Update slide counter
function updateCounter() {
    const counter = document.querySelector('.slide-counter');
    counter.textContent = `${currentSlide + 1} / ${slides.length}`;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Initialize on page load
initSlideshow();