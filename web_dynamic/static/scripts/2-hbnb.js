// Listen for changes on each INPUT checkbox tag                                
$(document).ready(function() {
    const amenitieschecked = {};
    $('li input[type="checkbox"]').change(function() {
        if ($(this).is('checked')) {
            amenitieschecked[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenitieschecked[$(this).data('id')];
        }

    });
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
	if (status === 'success') {
	    if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
});
