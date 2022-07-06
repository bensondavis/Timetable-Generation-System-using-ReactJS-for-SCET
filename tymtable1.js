const subjectAllocation = {
  cs: {
    cs_302: {
      courseName: "DAA",
      credit: 4,
      lecture: 3,
      tutorial: 1,
      practical: 0,
      remHour: 3,
      facultyNameA: ["priya k v"],
      facultyNameB: ["megha k v"],
    },
    cs_304: {
      courseName: "CD",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      facultyNameA: ["divya r"],
      facultyNameB: ["sreetha e s"],
    },
    cs_306: {
      courseName: "CN",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      facultyNameA: ["scaria alex"],
      facultyNameB: ["deepa devassy"],
    },
    cs_308: {
      courseName: "software engineering",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      facultyNameA: ["wilson joseph"],
      facultyNameB: ["satheesh kumar"],
    },
    hs_300: {
      courseName: "PM",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      facultyNameA: ["roshni menon"],
      facultyNameB: ["princy t d"],
    },
    cs_364: {
      courseName: "mobile computing",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      facultyNameA: ["shyam krishna"],
      facultyNameB: ["shyam krishna"],
    },
    cs_368: {
      courseName: "web technologies",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      facultyNameA: ["linnet tomy"],
      facultyNameB: ["linnet tomy"],
    },
    cs_332: {
      courseName: "microprocessor lab",
      credit: 1,
      lecture: 0,
      tutorial: 0,
      practical: 6,
      periodLength: 3,
      facultyNameA: ["uma es"],
      facultyNameB: ["scaria alex"],
    },
    cs_334: {
      courseName: "network programming lab",
      credit: 1,
      lecture: 0,
      tutorial: 0,
      practical: 6,
      periodLength: 3,
      facultyNameA: ["livya george", "satheesh kumar", "wilson joseph"],
      facultyNameB: ["deepa devassy", "princy t d"],
    },
    cs_352: {
      courseName: "comprehensive exam",
      credit: 2,
      lecture: 0,
      tutorial: 1,
      practical: 1,
      facultyNameA: ["sundar r", "scaria alex"],
      facultyNameB: ["sreetha e s", "ann rija paul"],
    },
  },
};

const teachersTymTable = {
  "sreetha e s": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "ann rija paul": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "scaria alex": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "sundar r": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "princy t d": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "deepa devassy": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "wilson joseph": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "satheesh kumar": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "livya george": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "uma es": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "linnet tomy": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "shyam krishna": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "roshni menon": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "divya r": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "megha k v": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
  "priya k v": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
};

const tymTable = {
  csa: {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [1, 1, 1, 0, 0, 0],
    friday: [1, 1, 1, 0, 0, 0],
  },
  csb: {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 1, 1, 1],
    friday: [0, 0, 0, 1, 1, 1],
  },
};

const subjects = [];
for (let s in subjectAllocation.cs) {
  subjects.push(s);
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function slotFree(sub, cls, i, day) {
  //console.log("im at slot free");
  const obj = subjectAllocation.cs[subjects[sub]];
  let faculty = "";
  if (obj.hasOwnProperty("remHour"))
    if (cls === "csa") {
      faculty = obj.facultyNameA;
    } else {
      faculty = obj.facultyNameB;
    }
  else return 0;

  const tym = teachersTymTable[faculty][day];
  //console.log(cls, day, faculty.toString());
  if (tym[i] == 0) return faculty.toString();
  else return 0;
}

let sub = 0;
for (var cls in tymTable) {
  for (var day in tymTable[cls]) {
    const periods = tymTable[cls][day];

    for (let i = 0; i < periods.length; ) {
      const slotFreeData = slotFree(sub, cls, i, day);
      if (periods[i] === 0 && slotFreeData !== 0) {
        periods[i] = slotFreeData;
        i++;
      }
      if(periods[i] !== 0) i++;
      sub++;
      if (sub == subjects.length) sub = 0;
      //sleep(5000);
      //console.log(i, sub, day, subjects.length);
    }
    
    //sleep(5000);

    tymTable[cls][day] = periods;
    //console.log(tymTable[cls][day], cls);
  }
}

console.log(tymTable.csa);
console.log(tymTable.csb);
