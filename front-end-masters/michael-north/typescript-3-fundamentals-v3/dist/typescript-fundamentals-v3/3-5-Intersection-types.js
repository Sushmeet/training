// Intersection conceptually is just an & operator.
// so only overlap stuff
const makeWeek = () => {
    const firstdate = new Date();
    const end = new Date();
    return { ...firstdate, end };
};
const thisWeek = makeWeek();
// This is quite different than what we saw with union types —
// this is quite literally a Date and { end: Date } mashed together,
// and we have access to everything immediately.
thisWeek.end;
thisWeek.getDate;
