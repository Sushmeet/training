// sum numbers in an array.

const arr = [10, 20, 30];

const result = arr.reduce((sum, number) => {
  return sum + number;
}, 0);
// console.log(result);

// --------------------------------------------------
var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" }
];

let sittingCount = 0;
let standingCount = 0;

var deskTypes = desks.reduce(
  function(acc, desk ) {
    if (desk.type === "sitting") {
    //   acc = { sitting: ++sittingCount, standing: standingCount };
      acc.sitting++;
    } else if (desk.type === "standing") {
    //   acc = { sitting: sittingCount, standing: ++standingCount };
      acc.standing++;
    }
    console.log(acc);
    return acc;

  },
  { sitting: 0, standing: 0 }
);
