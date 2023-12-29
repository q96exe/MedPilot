/*const symptoms = [
    {id: 1, name: 'Kopfschmerzen', category: "Neurologisch"},
    {id: 2, name: "Schwindel", category: "Neurologisch"},
    {id: 3, name: "Husten", category: "Respiratorisch"},
];*/

document.addEventListener('DOMContentLoaded', function() {
    // Funktion, um Symptome zu laden und anzuzeigen
    function loadSymptoms() {
        fetch('/api/symptoms') // Pfad zu Ihrem Backend-Service
            .then(response => {
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht ok');
                }
                return response.json();
            })
            .then(symptoms => {
                const container = document.querySelector('.container');
                symptoms.forEach(symptom => {
                    // Erstellen der Card für jede Kategorie
                    const card = document.createElement('div');
                    card.className = 'card my-3';

                    const header = document.createElement('div');
                    header.className = 'card-header';
                    header.textContent = symptom.category;

                    const listGroup = document.createElement('ul');
                    listGroup.className = 'list-group list-group-flush overflow-auto';
                    listGroup.style.maxHeight = '200px';

                    // Hinzufügen der Symptome zur Liste
                    symptom.items.forEach(item => {
                        const listItem = document.createElement('li');
                        listItem.className = 'list-group-item';
                        listItem.textContent = item;
                        listItem.addEventListener('click', function() {
                            // Toggle der 'active' Klasse für das Highlighting
                            listItem.classList.toggle('active');
                        });
                        listGroup.appendChild(listItem);
                    });

                    card.appendChild(header);
                    card.appendChild(listGroup);
                    container.appendChild(card);
                });
            })
            .catch(error => {
                console.error('Fehler beim Laden der Symptome:', error);
            });
    }

    // Aufruf der Funktion zum Laden der Symptome
    loadSymptoms();
});
