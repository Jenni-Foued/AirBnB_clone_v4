let checkedAmenities = {};
$(() => {
  $('input[type=checkbox]').click(function () {
    if (this.checked) {
      amenitiesChecked[this.dataset.id] = this.dataset.name;
    } else {
      delete amenitiesChecked[this.dataset.id];
    }
    $('.amenities h4').text(Object.values(amenitiesChecked).join(', '));
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
$.ajax({
  url: "http://0.0.0.0:5001/api/v1/places_search/",
  data: '{}',
  type: "POST",
  dataType: "json",
  ContentType: "application/json",
})
.done(function( data ) {
  for(let i=0; i < data.length; i++) {
    let place = data[i];
    $('.place').append("<article><h2>" + place.name + '</h2><div class="price_by_night"' + place.price_by_night + '</div><div class="information"><div class="max_guest"' + place.max_guest + '</div><div class="number_rooms">' + place.number_rooms + '</div><div class="number_bathrooms">' + place.number_bathrooms + '</div></div><div class="description">' + place.description + '</div></article>');
  }
});
$('.button').click(function () {
    $.ajax({
        url: "http://0.0.0.0:5001/api/v1/places_search/",
        data: JSON.stringify({ amenities: Object.keys(listCheck) }),
        type: "POST",
        dataType: "json",
        ContentType: "application/json",
      })
    .done(function( data ) {
        for(let i=0; i < data.length; i++) {
        let place = data[i];
        $('.place').append("<article><h2>" + place.name + '</h2><div class="price_by_night"' + place.price_by_night + '</div><div class="information"><div class="max_guest"' + place.max_guest + '</div><div class="number_rooms">' + place.number_rooms + '</div><div class="number_bathrooms">' + place.number_bathrooms + '</div></div><div class="description">' + place.description + '</div></article>');
        }
    });
});
