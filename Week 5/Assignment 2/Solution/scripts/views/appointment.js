(app => {

    let selected;

    // Add the following methods to app.appointmentView....
    // ** load(tutorId, day)
    //      - store tutorId and day on selected variable above 
    //      - load appointmentView using app._changeView 
    // ** save()
    //      - select DOM elements for name (input) and notes (textarea)
    //      - create new Appointment using values on selected variables and the form values submitted 
    //      - pass appointment to app.scheduler.saveAppointment
    //      - clear the two form element values
    //      - navigate back to calendar using app.calendarView.load with the selected tutorId
    app.appointmentView = {
        load: (tutorId, day) => {
            selected = [tutorId, day];
            app._changeView("appointmentView");
        },
        save: () => {
            const name = document.querySelector("#appointmentView input");
            const notes = document.querySelector("#appointmentView textarea");
            const appt = new app.Appointment(selected[0], selected[1], name.value, notes.value);
            app.scheduler.saveAppointment(appt);
            name.value = "";
            notes.value = "";
            app.calendarView.load(selected[0]);
        }
    };

})(app || (app = {}));