let elm;
function beforeAll() {
  elm = Array(10000000).fill(1);
  elm.push(2);
}
function pwd(){
    for (let i = 0; i < elm.length; i++) {
      if(elm[i]===2){
        return true;
      }
    }
}

module.exports = {
  test: pwd,
  beforeAll
}
