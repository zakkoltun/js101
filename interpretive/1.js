function lightsOn(count) { 
  let switches = [];

  // initialize switches with count number of false elements
  for (let i = 1; i <= count; i += 1) {
    switches.push(false);
  }

  // toggle switches count number of times, incrementing interval each time
  for (let pass = 1; pass <= count; pass += 1) {
    switches = toggleSwitches(switches, pass);
  }

  return whichLightsAreOn(switches);
}


function toggleSwitches(switches, interval) {
  let switchNum = 1;
  
  while (switchNum <= Math.floor(switches.length / interval)) {
    let idx = (switchNum * interval) - 1;
    switches[idx] = !switches[idx];
    switchNum += 1;
  }

  return switches;
}


function whichLightsAreOn(switches) {
  return switches
    .map((value, idx) => value ? idx + 1 : '')
    .filter(String);
}

console.log(lightsOn(5));
console.log(lightsOn(100));
