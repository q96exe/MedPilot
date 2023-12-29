const symptoms = [
    {id: 1, name: 'Kopfschmerzen', category: "Neurologisch"},
    {id: 2, name: "Schwindel", category: "Neurologisch"},
    {id: 3, name: "Husten", category: "Respiratorisch"},
];

function loadSymptoms() {
    const list = document.getElementById("symptom-list");
    symptoms.forEach(symptom => {
        const card = `<div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${symptom.name}</h5>
                    <p class="card-text">Kategorie: ${symptom.category}</p>
                </div>
            </div>
        </div>`;
        list.innerHTML += card;
    });
    loadSymptoms();
}