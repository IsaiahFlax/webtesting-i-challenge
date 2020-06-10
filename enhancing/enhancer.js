module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    return item.enhancement = item.enhancement +1
  } else {
    return item.enhancement = 20
  }
}

function fail(item) {
  if(item.enhancement<15) {
    item.durability = item.durability -5
  }
  if(item.enhancement >= 15){
    item.durability = item.durability -10
  }if(item.enhancement > 16){
    item.enhancement = item.enhancement-1
  }
  return{...item}
}

function repair(item) {
  return item.durability = 100
}

function get(item) {
  if (item.enhancement > 0) {
    item.name = `[+${item.enhancement}]${item.name}`
    return {...item}
  }
  else {return { ...item }};
}
