(app => {

    var isLoaded;

    // Add the following method to app.homeView....
    // ** load()
    //      - if !isLoaded
    //            - get list of tutors from app.scheduler
    //            - select profiles container from html
    //            - select profiles template from html
    //            - iterate through tutors
    //                  for each tutur:
    //                  - create clone of profile template's content
    //                      - hint: let newNode = profileTemplate.content.cloneNode(true);
    //                  - select and populate clone's h2 element with tutor's name
    //                  - select and populate clone's p element with tutor's skills array
    //                      - hint: tutor.skills.map(x => `<span>${x}</span>`).join('')
    //                          - (individual spans allow for styling) 
    //                  - select clone's button element and bind click event to app.calendarView.load() (passing tutorId)
    //                  - append clone to profiles container
    //            - set isLoaded to true so the const list does not have to be loaded again 
    //      - invoke app._changeView to show homeView (regardless of isLoaded status)
    app.homeView = {
        load: () => {
            if (!isLoaded) {
                const tutors = app.scheduler.getTutors();
                const container = document.querySelector("#profileList");
                const template = container.querySelector("template");
                tutors.forEach(tutor => {
                    const clone = template.content.cloneNode(true);
                    const name = clone.querySelector("h1");
                    name.innerText = tutor.name;
                    const skills = clone.querySelector("p");
                    skills.innerHTML = tutor.skills.map(x => `<span class = "skill">${x}</span>`).join('');
                    const button = clone.querySelector("button");
                    button.onclick = () => app.calendarView.load(tutor.id);
                    container.appendChild(clone);
                });
                isLoaded = true;
            }
            app._changeView("homeView");
        }
    };

})(app || (app = {}));