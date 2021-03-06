const subject_allocation = {
  csa: {
    cs_302: {
      course_name: "DAA",
      credit: 4,
      lecture: 3,
      tutorial: 1,
      practical: 0,
      remHour: 3,
      faculty_name_A: ["priya k v"],
      faculty_name_B: ["megha k v"],
    },
    cs_304: {
      course_name: "CD",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      faculty_name: ["divya r"],
    },
    cs_306: {
      course_name: "CN",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      faculty_name: ["scaria alex"],
    },
    cs_308: {
      course_name: "software engineering",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      faculty_name: ["willson joseph"],
    },
    hs_300: {
      course_name: "PM",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      faculty_name: ["roshni menon"],
    },
    cs_364: {
      course_name: "mobile computing",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      faculty_name: ["shyam krishna"],
    },
    cs_368: {
      course_name: "web technologies",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      faculty_name: ["linnet tomy"],
    },
    cs_332: {
      course_name: "microprocessor lab",
      credit: 1,
      lecture: 0,
      tutorial: 0,
      practical: 6,
      periodLength: 3, 
      faculty_name: ["uma es"],
    },
    cs_334: {
      course_name: "network programming lab",
      credit: 1,
      lecture: 0,
      tutorial: 0,
      practical: 6,
      periodLength: 3,
      faculty_name: ["livya george", "satheesh kumar", "wilson joseph"],
    },
    cs_352: {
      course_name: "comprehensive exam",
      credit: 2,
      lecture: 0,
      tutorial: 1,
      practical: 1,
      faculty_name: ["sundar r", "scaria alex"],
    },
  },
  csb: {
    cs_302: {
      course_name: "DAA",
      credit: 4,
      lecture: 3,
      tutorial: 1,
      practical: 0,
      remHour: 3,
      faculty_name: ["megha k v"],
    },
    cs_304: {
      course_name: "CD",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      faculty_name: ["sreetha es"],
    },
    cs_306: {
      course_name: "CN",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      faculty_name: ["deepa devassy"],
    },
    cs_308: {
      course_name: "software engineering",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      faculty_name: ["satheesh kumar"],
    },
    hs_300: {
      course_name: "PM",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      faculty_name: ["princy t d"],
    },
    cs_364: {
      course_name: "mobile computing",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      faculty_name: ["shyam krishna"],
    },
    cs_368: {
      course_name: "web technologies",
      credit: 3,
      lecture: 3,
      tutorial: 0,
      practical: 0,
      remHour: 3,
      faculty_name: ["linnet tomy"],
    },
    cs_332: {
      course_name: "microprocessor lab",
      credit: 1,
      lecture: 0,
      tutorial: 0,
      practical: 6,
      periodLength: 3,
      faculty_name: ["scaria alex"],
    },
    cs_334: {
      course_name: "network programming lab",
      credit: 1,
      lecture: 0,
      tutorial: 0,
      practical: 6,
      periodLength: 3,
      faculty_name: ["deepa devassy", "princy t d"],
    },
    cs_352: {
      course_name: "comprehensive exam",
      credit: 2,
      lecture: 0,
      tutorial: 1,
      practical: 1,
      faculty_name: ["sreetha e s", "ann rija paul"],
    },
  },
};


const teacher_tymtable = {
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
  "deepa devassy": {
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
  "scaria alex": {
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
  "satheesh kumar": {
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
  "sundar r": {
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
  "wilson joseph": {
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
  "priya k v": {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 0, 0, 0],
    friday: [0, 0, 0, 0, 0, 0],
  },
}

const tymtable = {
  csa: {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [1, 1, 1, 0, 0, 0],
    friday: [1, 1, 1, 0, 0, 0]
  },
  csb: {
    monday: [0, 0, 0, 0, 0, 0],
    tuesday: [0, 0, 0, 0, 0, 0],
    wednesday: [0, 0, 0, 0, 0, 0],
    thursday: [0, 0, 0, 1, 1, 1],
    friday: [0, 0, 0, 1, 1, 1]
  }
}

let tut = [];
let tutNo = 0;
for( var key in subject_allocation) {
  for(var i in subject_allocation[key]) {
    if(subject_allocation[key][i].tutorial > 0) {
      tut.push(subject_allocation[key][i].course_name)
      tutNo += 1;
    }
  }
  break;
}
console.log(tut, tutNo);

let subjects = [];
for(var sub in subject_allocation.csa) {
  subjects.push(sub);
}

console.log(subjects);
j = 0
for(var cls in tymtable) {
  for(var day in tymtable[cls]) {
    const periods = tymtable[cls][day];
    console.log(periods);
    for(let i  = 0; i < periods.length; i++) {
      if(periods[i] == 0) {
         
      }
    }
  }
}