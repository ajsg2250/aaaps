document.addEventListener('DOMContentLoaded', () => {
    const bulletPoints = document.querySelectorAll('.info-bullets li');

    bulletPoints.forEach(point => {
        point.addEventListener('mouseover', () => {
            point.style.color = '#007BFF';
            point.style.cursor = 'pointer';
        });

        point.addEventListener('mouseout', () => {
            point.style.color = '#444';
        });

        point.addEventListener('click', () => {
            console.log(`You clicked on: ${point.textContent}`);
        });
    });
});

//new code for the ending// 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});