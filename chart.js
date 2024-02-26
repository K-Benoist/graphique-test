const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['L\'Oréal', 'Unilever', 'Procter & Gamble', 'Beiersdorf', 'Estée Lauder'],
        datasets: [{
            label: 'Parts de marché (%)',
            data: [18, 15, 12, 8, 5],
            backgroundColor: '#67C2DF',
            borderColor: '#67C2DF',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 5
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});