
let popCanvas = document.getElementById("popChart");

let barChart = new Chart(popCanvas, {
    type: 'bar',
    data: {
    labels: ["1920", "1940", "1960", "1980", "2000", "2020"],
    datasets: [{
        label: 'Population',
        data: [2500, 120000, 240000, 395000, 376000, 287847],
        backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
        ]
    }]
    }
});