        // Selecting elements
        const experienceForm = document.getElementById('experienceForm');
        const content = document.getElementById('content');

        // Function to add new experience
        function addExperience(name, event, date, image, experience) {
            // Find if the section for the event already exists
            let section = document.querySelector(`#${event.toLowerCase().replace(/\s+/g, '')}`);
            
            if (!section) {
                // Create a new section if it doesn't exist
                section = document.createElement('div');
                section.classList.add('hackathon-section');
                section.id = event.toLowerCase().replace(/\s+/g, '');

                const h2 = document.createElement('h2');
                h2.textContent = event;

                section.appendChild(h2);

                content.appendChild(section); // Append new section to the content
            }

            const div1 = document.createElement('div');
            div1.classList.add('experience');

            const img = document.createElement('img');
            img.src = image;
            img.alt = 'User Image';

            const div2 = document.createElement('div');
            div2.classList.add('experience-details');

            const h3 = document.createElement('h3');
            h3.textContent = name;

            const p1 = document.createElement('p');
            p1.classList.add('experience-date');
            p1.textContent = `Submitted on ${date}`;

            const p2 = document.createElement('p');
            p2.textContent = experience;

            // Appending elements
            div2.appendChild(h3);
            div2.appendChild(p1);
            div2.appendChild(p2);

            div1.appendChild(img);
            div1.appendChild(div2);

            section.appendChild(div1);
        }

        // Event listener for form submission
        experienceForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Retrieve form data
            const name = document.getElementById('name').value;
            const eventValue = document.getElementById('event').value;
            const date = document.getElementById('date').value;
            const image = document.getElementById('image').value;
            const experience = document.getElementById('experience').value;

            // Add new experience to the page
            addExperience(name, eventValue, date, image, experience);

            // Reset form
            this.reset();
        });