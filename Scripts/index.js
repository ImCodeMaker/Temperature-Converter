let Convert = document.getElementById('convertBtn');
let unitSelect = document.getElementById('unit');
let resultLabel = document.getElementById('resultLabel');

Convert.addEventListener('click', function(){
    let Unit = unitSelect.value;
    let Temperature = parseFloat(document.getElementById('temperature').value);
    
    if (Unit === 'celsius') {
        const conversionResult = (Temperature * 9/5) + 32;
        resultLabel.innerText = `${conversionResult.toFixed(2)} F°`;
    } else if (Unit === 'fahrenheit') { 
        const conversionResult = (Temperature - 32) * 5/9;
        resultLabel.innerText = `${conversionResult.toFixed(2)} C°`;
    } else {
        window.alert('You selected nothing');
    }
});

unitSelect.addEventListener('change', function(){
    resultLabel.textContent = '';
});
