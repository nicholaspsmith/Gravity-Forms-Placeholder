// Replace gravity forms labels with placeholders

// Form Elements
$('form[id^=gform]').each(function(id,el) {
  $(el).find('.gfield_label').each(function(lbl_id,lbl_el) {
    var text;
    text = $(lbl_el).text();
    if (text.indexOf('*') > -1) {// Get rid of *'s for required fields
      text = text.substr(0,text.length-1);
    }
    $input = $(lbl_el).next().find('>input');
    $textarea = $(lbl_el).next().find('textarea');
    if ($input.length <= 0) {
      $input = $(lbl_el).prev();
    }
      $input.attr('placeholder',text);
      $textarea.attr('placeholder',text);
      $(lbl_el).addClass('hidden');
  });
});
// Address Container
$('.ginput_container > span').each(function(id,el){
$label = $(el).find('>label');
$input = $(el).find('>input');
$select = $(el).find('>select');
$input.attr('placeholder',$label.text());
$select.find('option:first-child()').html($label.text());
$select.find('option:first-child()').attr('disabled','disabled');
$label.css('display','none');
});
