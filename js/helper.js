$(document).ready(function () {
  var birthday = new Date(1988, 5, 17);
  function _calculateAge(birthday) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  console.log("OK");
  console.log(birthday);
  console.log(_calculateAge(birthday));
  $("#age").append(`<p>${_calculateAge(birthday)}<p>`);
});
