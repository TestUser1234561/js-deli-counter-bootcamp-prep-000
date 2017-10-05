var katzDeli = [];

function takeANumber(name) {
  if (typeof name == Array) {
    for(let people in name) {
      katzDeli.push(name[people])
    }
  } else {
    let number = katzDeli.push(name)
    return `Welcome, ${name}. You are number ${number} in line.`
  }
}
