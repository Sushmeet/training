
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
}

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};

// function* TeamIterator(team) {
//     yield team.lead;
//     yield team.manager;
//     yield team.engineer;
//     // const testingTeamGenerator = TestingTeamIterator(testingTeam);
//     // yield* testingTeamGenerator; // generator delegation. 
//     yield* team.testingTeam; // generator delegation in testing team object.
// }

// function* TestingTeamIterator(team) {
//     yield team.lead;
//     yield team.tester;
// }


const names = [];

// for (let name of TeamIterator(engineeringTeam)) {
//     names.push(name);
// }

for (let name of engineeringTeam) {
    names.push(name);
}

console.log(names);