let elm;
function beforeAll() {
  elm = Array(10000000).fill(1);
  elm.push(2);
}
function pwd(){
    for (let current of elm) {
      if(current===2){
        return true;
      }
    }
}

module.exports = {
  test: pwd,
  beforeAll
}
