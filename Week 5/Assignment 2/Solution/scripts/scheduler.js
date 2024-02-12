(app => {

    // The "scheduler" is in charge of managing tutor schedules.

    // set properties: id, name and skills
    class Tutor {
        constructor(id, name, skills) {
            this.id = id;
            this.name = name;
            this.skills = skills;
        }
    }

    // set properties: tutorId, day, name and notes
    class Appointment {
        constructor(tutorId, day, name, notes) {
            this.tutorId = tutorId;
            this.day = day;
            this.name = name;
            this.notes = notes;
        }
    }

    app.Tutor = Tutor;
    app.Appointment = Appointment;

    const tutors = [
        new Tutor(1, "John", [".NET", "Angular"]),
        new Tutor(2, "Mark", ["Vue", "Node"]),
        new Tutor(3, "Karen", ["Angular", "React"]),
        new Tutor(4, "Janet", ["REST Services", "SQL"]),
        new Tutor(5, "David", [".NET"])
    ];

    let appointments = [
        new Appointment(1, 'Monday', 'Sally', 'I need lots of Angular help!')
    ];

    // Add the following methods to app.scheduler....
    // ** getTutors() - returns all tutors
    // ** getTutor(tutorId) - return tutor with given Id
    // ** getAppointments() - return all appointments
    // ** getAppointment(tutorId, day) - return all appointments for given tutor and day
    // ** saveAppointment(appt) - add passed appointment to local variable

    app.scheduler = {
        getTutors: () => {
            return tutors;
        },
        getTutor: (tutorId) => {
            return tutors.find(t => {
                return t.id === tutorId;
            });
        },
        getAppointments: () => {
            return appointments;
        },
        getAppointment: (tutorId, day) => {
            return appointments.find(a => {
                return a.tutorId === tutorId && a.day === day;
            });
        },
        saveAppointment: (appt) => {
            appointments.push(appt);
        }
    };

})(app || (app = {}));