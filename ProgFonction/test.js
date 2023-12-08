function calculateCO2() {
    // Récupérer les valeurs du formulaire
    var vehicleType = document.getElementById("vehicleType").value;
    var distance = parseFloat(document.getElementById("distance").value);

    // Calcul fictif du taux de CO2 (à remplacer par des données réelles)
    var co2Rate;

    switch (vehicleType) {
        case "car":
            co2Rate = 0.22; // Exemple de taux de CO2 pour une voiture
            break;
        case "bus":
            co2Rate = 0.11; // Exemple de taux de CO2 pour un autobus
            break;
        case "bike":
            // Le vélo n'a pas de rejet de CO2
            displayResult("Le vélo n'a pas de rejet de CO2 pour une distance de " + distance + " km.", 0);
            return; // Pas besoin de poursuivre le calcul pour le vélo
        case "plane":
            co2Rate = 0.23; // Exemple de taux de CO2 pour un avion
            break;
        case "train":
            co2Rate = 0.03; // Exemple de taux de CO2 pour un train
            break;
        default:
            co2Rate = 0; // Valeur par défaut
    }

    // Calcul du total de CO2
    var totalCO2 = co2Rate * distance;

    // Arrondir le résultat au dixième près
    totalCO2 = Math.round(totalCO2 * 10) / 10;

    // Afficher le résultat s'il est différent de zéro
    displayResult("Le taux de CO2 pour " + getVehicleName(vehicleType) +
        " sur une distance de " + distance + " km est de " + totalCO2 + " kg.", totalCO2);
}

function displayResult(message, co2Amount) {
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = message;

    // Ajouter une animation de couleur en fonction de la quantité de CO2
    var color;
    if (co2Amount < 10) {
        color = "green"; // Faible émission (vert)
    } else if (co2Amount < 40) {
        color = "orange"; // Émission modérée (orange)
    } else {
        color = "red"; // Émission élevée (rouge)
    }

    resultElement.style.color = color;

    resultElement.style.display = "block"; // Afficher le résultat
}

function getVehicleName(vehicleType) {
    switch (vehicleType) {
        case "car":
            return "Voiture";
        case "bus":
            return "Autobus";
        case "bike":
            return "Vélo";
        case "plane":
            return "Avion";
        case "train":
            return "Train";
        default:
            return "";
    }
}