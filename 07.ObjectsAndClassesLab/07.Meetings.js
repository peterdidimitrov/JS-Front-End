function makeSchedule(array) {
  const schedule = array.reduce((acc, curr) => {
    const [day, name] = curr.split(" ");

    if (acc.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      acc[day] = name;
      console.log(`Scheduled for ${day}`);
    }
    return acc;
  }, {});
  Object.entries(schedule).forEach(([day, name]) => {
    console.log(`${day} -> ${name}`);
  });
}
makeSchedule([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
