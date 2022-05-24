const { Instructor, Course } = require('../models');

const seedDB = async () => {
	const dummyInstructor = await Instructor.create({
		firstname: "Melissa",
		lastname: "Lynch",
		department: "Computer Science"
	});
	const dummyInstructor2 = await Instructor.create({
		firstname: "Kim",
		lastname: "Kardashian"
	});
	const dummyInstructor3 = await Instructor.create({
		firstname: "John",
		lastname: "Doe",
		department: "Hackery"
	});
	const dummyInstructor4 = await Instructor.create({
		firstname: "Pikachu",
		lastname: "Of Doom",
		department: "Pokemon",
		imageUrl: "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/240px-025Pikachu.png"
	});

	const dummyCourse = await Course.create({
		title: "CSCI 39548",
        location: "C107",
        timeslot: "W 5:35 - 8:15 PM"
	});
	const dummyCourse2 = await Course.create({
		title: "Lunch",
        location: "Cafeteria",
        timeslot: "Everyday"
	});
	const dummyCourse3 = await Course.create({
		title: "Suffering",
        location: "Everywhere",
        timeslot: "Always"
	});
	const dummyCourse4 = await Course.create({
		title: "CSCI 49900",
        location: "C107",
        timeslot: "MW 3:10 - 5:25 PM"
	});

	await dummyCourse.setInstructor(dummyInstructor);
	await dummyCourse2.setInstructor(dummyInstructor4);
	await dummyCourse3.setInstructor(dummyInstructor4);
}

module.exports = seedDB;