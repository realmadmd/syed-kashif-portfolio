let bodyHtml = document.querySelector("#body");
let navBar = document.querySelector("nav");
let header = document.querySelector("header");
let moveIcons = document.querySelectorAll(".sec1-move i");
let sec1Div = document.querySelector('#sec1-div');
let sec1Div2 = document.querySelector('#sec1-div2');
let secHeadings = document.querySelectorAll('section h2');
let secBlur1 = document.querySelectorAll('.sec2Blur');
let secBlur2 = document.querySelectorAll('#sec3Blur');
let sec4Content = document.querySelector('#sec3-data-left p');
let sec4Content1 = document.querySelectorAll('#sec3-data-left ul li');
let sec4Content2 = document.querySelectorAll('#sec3-data-left ul li p');
let formInputs = document.querySelectorAll('form input');
let footer = document.querySelector('footer');
let mode = "light";
document.querySelector("#darkmode").addEventListener('click', function () {

    if (mode === "light") {
        document.querySelector("#darkmode img").setAttribute('src', './media/icons/Sun.svg');
        bodyHtml.style.backgroundColor = "";
        header.style.backgroundColor = "";
        sec4Content.style.color = "";
        footer.style.backgroundColor = '';
        sec1Div.style.background = '';
        sec1Div2.style.background = '';
        moveIcons.forEach((e) => {
            e.style.color = '';
        });
        secHeadings.forEach((e) => {
            e.style.color = '';
        });
        secBlur1.forEach((e) => {
            e.style.backgroundColor = '';
        });
        secBlur2.forEach((e) => {
            e.style.backgroundColor = '';
        });
        sec4Content1.forEach((e) => {
            e.style.color = '';
        });
        sec4Content2.forEach((e) => {
            e.style.color = '';
        });
        formInputs.forEach((e) => {
            e.style.backgroundColor = '';
        });
        navBar.removeEventListener('mouseenter', function () {
            navBar.style.backgroundColor = "var(--var-theme-blue)";
        });
        mode = "dark";
    }
    else if (mode === "dark") {
        document.querySelector("#darkmode img").setAttribute('src', './media/icons/Moon.svg');
        bodyHtml.style.backgroundColor = "var(--var-theme-black)";
        header.style.backgroundColor = "var(--var-theme-black)";
        sec4Content.style.color = "var(--var-theme-white)";
        footer.style.backgroundColor = 'var(--var-theme-orange)';
        sec1Div.style.background = 'linear-gradient(87deg, rgba(36,36,36,1) 25%, rgba(36,36,36,1) 55%, rgba(36,36,36,0) 100%)';
        sec1Div2.style.background = 'linear-gradient(288deg, rgba(36,36,36,1) 25%, rgba(36,36,36,1) 55%, rgba(36,36,36,0) 100%)'
        moveIcons.forEach((e) => {
            e.style.color = 'var(--var-theme-orange)';
        })
        secHeadings.forEach((e) => {
            e.style.color = 'var(--var-theme-orange)';
        })
        secBlur1.forEach((e) => {
            e.style.backgroundColor = 'var(--var-theme-orange)';
        })
        secBlur2.forEach((e) => {
            e.style.backgroundColor = 'var(--var-theme-orange)';
        })
        sec4Content1.forEach((e) => {
            e.style.color = 'var(--var-theme-white)';
        })
        sec4Content2.forEach((e) => {
            e.style.color = 'var(--var-theme-white)';
        })
        formInputs.forEach((e) => {
            e.style.backgroundColor = 'var(--var-theme-orange)';
        })
        navBar.addEventListener('mouseenter', function () {
            navBar.style.backgroundColor = "var(--var-theme-black)";
        })
        mode = "light";
    }

})


function testiCardsChange() {

    let count = 0;
    const imgSrcs = [
        "./media/images/pfp1.jpeg",
        "./media/images/pfp2.webp",
        "./media/images/pfp3.jpeg",
        "./media/images/pfp4.jpeg"
    ]

    const testiNames = [
        'Farhan',
        'Adam',
        'Sam',
        'James'
    ]
    const testimonials = [
        `Syed Kashif is a skilled professional who exceeded my expectations with rohidepartmentalstore.com.
            He not only completed the project on time but also implemented all the changes I needed. I am highly satisfied with his work and would
            recommend him without hesitation`,
        `Thank you Syed Kashif Jafari for your service for developing a website, you have done the work
                efficiently, the best thing about u was you are very supportive and responsive always ready to help
                out. Thanks alot`,
        `Syed Kashif Jafari you are so professional. You did my project in time with reasonable charges, Reply
                on time, No compromise on work, 100% satisfied, Highly recommended Thanks for providing great
                services`,
        `Syed Kashif Jafari you are so professional. You did my project in time with reasonable charges, Reply
                on time, No compromise on work, 100% satisfied, Highly recommended Thanks for providing great
                services`
    ]
    const testiBgs = [
        'var(--var-theme-blue)',
        'var(--var-theme-orange)',
        'var(--var-theme-blue)',
        'var(--var-theme-orange)'
    ]
    function updateCard() {
        document.querySelector('#testi-card').style.display = 'flex';
        document.querySelector('#testi-card img').setAttribute("src", imgSrcs[count]);
        document.querySelector('#testi-card div h3').textContent = testiNames[count];
        document.querySelector('#testi-card div p').textContent = testimonials[count];
        document.querySelector('#testi-card').style.backgroundColor = testiBgs[count];
        count++
        if (count === testimonials.length) {
            count = 0;
        }
    }
    setInterval(updateCard, 3000);

}

testiCardsChange()