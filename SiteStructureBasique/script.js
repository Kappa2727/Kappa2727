function multiplyNumbers() {
    const moyenneKm = parseFloat(document.getElementById('moyenneKm').value);
    const consommationCarburant = parseFloat(document.getElementById('consommationCarburant').value);
    const typeCarburantVehicule = document.getElementById("carburantType").value

    if (typeCarburantVehicule == 'Essence') {
        document.getElementById('resultat').textContent =`${Math.round((consommationCarburant*2.28)*0.01*moyenneKm*365)} kilos de CO2`;
    }
    if (typeCarburantVehicule == "Diesel"){
        document.getElementById('resultat').textContent = `${Math.round(consommationCarburant*(2640/100)*moyenneKm*365)} kilos de CO2`;
    }
    if (typeCarburantVehicule == "Ethanol") {
        document.getElementById('resultat').textContent =`${Math.round(moyenneKm)}  kilos de CO2`;
    }
}