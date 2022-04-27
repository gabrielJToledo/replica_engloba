const ctx = document.getElementById('firstChart').getContext('2d')
const ctx2 = document.getElementById('secondChart').getContext('2d')
const ctx3 = document.getElementById('thirdChart').getContext('2d')

const firstChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        layout: {
            padding: {
                left: 10,
                right: 10
            }
        },

        responsive: true,
        maintainAspectRatio: false
    }
})

const secondChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        layout: {
            padding: {
                left: 10,
                right: 10
            }
        },

        responsive: true,
        maintainAspectRatio: false
    }
})

const thirdChart = new Chart(ctx3, {
    type: 'polarArea',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        layout: {
            padding: {
                left: 10,
                right: 10
            }
        },

        responsive: true,
        maintainAspectRatio: false
    }
})

const containerSlide = document.getElementById('containerSlide')
const slides = document.getElementsByClassName('graphics')


let current_slide = 0

const updateCarousel = () => {
    current_slide++
    if(current_slide > slides.length - 1) {
        current_slide = 0
    }
    
    containerSlide.style.transform = `translateX(${-current_slide * 750}px)`
}

setInterval(updateCarousel, 6000)

const arrowLeft = document.getElementById('arrowLeft')
const slidesLength = slides.length - 1
const firstSlideIndex = 0

arrowLeft.addEventListener("click", () => {  
    console.log(slides.length)
    if(current_slide <= firstSlideIndex) {
        current_slide = slidesLength
    }
    
    else{
        current_slide--
    }
    containerSlide.style.transform = `translateX(${-current_slide * 750}px)`
})

const arrowRight = document.getElementById('arrowRight')

arrowRight.addEventListener("click", () => {  
    if(current_slide >= slidesLength) {
        current_slide = firstSlideIndex
    }
    else{
        current_slide++
    }
    containerSlide.style.transform = `translateX(${-current_slide * 750}px)`
})