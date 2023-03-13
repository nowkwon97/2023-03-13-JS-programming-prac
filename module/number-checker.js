module.exports = function(data) {
  if(typeof(data) === "number") {
    return data;
  } else {
    console.error("이거 숫자 아님");
    return false;
  };
};