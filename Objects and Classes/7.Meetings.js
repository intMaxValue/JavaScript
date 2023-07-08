function meeting(input) {
    meetings = {};

    for (const i of input) {
        let [day, name] = i.split(" ");

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
            continue;
        }

        meetings[day] = name;
        console.log(`Scheduled for ${day}`)
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
}

meeting(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)