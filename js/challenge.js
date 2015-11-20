// lay out a series of events on a calendar for a single day
// objects cannot overlap
// if only one event, width should be 600px
// 2 constraints:
// 1. every coliding event must be the same width as every other event it collides with
// 2. an event should use the maximum width possible while still adhering to first constraint

var events = {
  event1: {
    start: 60,
    end: 120
  },
  event2: {
    start: 130,
    end: 240
  },
  event3: {
    start: 700,
    end: 720
  }
}

// var containerWidth = 600;

function layOutDay(events) {
  for (var event in events) {
    events[event]['top'] = events[event]['start'];
    events[event]['left'] = 0;
    events[event]['width'] = 600;
    events[event]['id'] = event;
  }

  return events;
}


var events_for_layout = layOutDay(events);

for (var event in events_for_layout) {
  var id = events[event]['id'];
  $('.calendar').append('<div id=' + id + '></div>');
  $('#' + id).width(events[event]['width']);
  $('#' + id).height(events[event]['end'] - events[event]['start']);
  $('#' + id).css('top', events[event]['top']);
}
