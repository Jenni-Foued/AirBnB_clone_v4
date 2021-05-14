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
});