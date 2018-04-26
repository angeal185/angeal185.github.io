var container = document.getElementById("sortContainer");
var editor = ace.edit("editor1");
var sort = Sortable.create(container, {
  animation: 150,
  handle: ".sort",
  draggable: ".sort",
  onUpdate: function (evt){
     var item = evt.item;
   },
   onSort: function (evt) {
		if ((location.href)===('http://'+location.host+'/javascript')){
      $('.entryimage').filter( ":even" ).val('app/images/jquery.png');
      $('.entryimage').filter( ":odd" ).val('app/images/angular.png');
    }
	},
});

function showEntries(){
  $('.showEntries').click(function() {
    $(this).text($(this).text() == 'hide' ? 'show' : 'hide');
    $(this).parents('.card-title').next().toggleClass('hidden');
  });
  $('.removeBlock').click(function() {
    $(this).parents('.sort').remove();
  });
  $('.entrytitle').keyup(function() {
    $(this).parents('.card-panel').find('h5').text(this.value);
  });
}

editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/json");

$('#showIt').click(function(event) {
  var arr = {"entries":[]};
  editor.setValue('');
  $('#toUpdate').empty();
  $('.entry').each(function(index, el) {

    let ent =  arr.entries;
    let inp = $(this).children('.s6');
    ent.push({
        "name":inp.children('.entryname').val(),
        "img":inp.children('.entryimage').val(),
        "title":inp.children('.entrytitle').val(),
        "sub":inp.children('.entrysub').val(),
        "btnA":inp.children('.entrybutton').val(),
        "hrefA":inp.children('.entryaddress').val()
      });
  });
  editor.getSession().setUseWrapMode(true);
  editor.insert(JSON.stringify(arr, null, 2));
  $('#commit').attr('disabled', false);
});

$('#commit').click(function(event) {
  $('input').each(function(index, el,err) {
      if ((el.value)===('')){
        console.log('input empty')
        throw "input empty"
      }
    });
    console.log(editor.getValue())
  $('#toUpdate').val(editor.getValue());
  $('#post').submit();
});


$('#addNew').click(function() {
  var a = $('.sort').eq(1).clone();
  a.find('h5').html('new');
  a.find('.entrytitle,.entrysub,.entryaddress').val('');
  a.prependTo('#sortContainer');
  $('.showEntries,.removeBlock,.entrytitle').unbind();
  showEntries();
});
showEntries();
