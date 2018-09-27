$('#add-btn').on('click', function(event) {
  event.preventDefault();
  var newTable = {
    name: $('#name')
      .val()
      .trim(),
    phoneNumber: $('#phoneNumber')
      .val()
      .trim(),
    email: $('#email')
      .val()
      .trim(),
    uniqueID: $('#uniqueID')
      .val()
      .trim()
  };
  $.post('/api/table-link', newTable).then(function(data) {
    console.log(data);
    alert('Table Reserved!');
  });
});
