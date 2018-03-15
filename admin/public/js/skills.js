var arr = {"codeLeftData":[],"codeRightData":[],"skillsLeftData":[],"skillsRightData":[],"dbLeftData":[],"dbRightData":[],"CMSLeftData":[],"CMSRightData":[],"OSLeftData":[],"OSRightData":[],"otherLeftData":[],"otherRightData":[],"APILeftData":[],"APIRightData":[]};
var codeL = arr.codeLeftData,
codeR = arr.codeRightData,
skillsL = arr.skillsLeftData,
skillsR = arr.skillsRightData,
dbL = arr.dbLeftData,
dbR = arr.dbRightData,
CMSL = arr.CMSLeftData,
CMSR = arr.CMSRightData,
OSL = arr.OSLeftData,
OSR = arr.OSRightData,
otherL = arr.otherLeftData,
otherR = arr.otherRightData,
APIL = arr.APILeftData,
APIR = arr.APIRightData,
editor = ace.edit("editor1");
var lst = ["codeLeft","codeRight","skillsLeft","skillsRight","dbLeft","dbRight","cmsLeft","cmsRight","osLeft","osRight","otherLeft","otherRight","APILeft","APIRight"];

  function showEntries(){
    $('.showEntries').click(function() {
      $(this).text($(this).text() == 'hide' ? 'show' : 'hide');
      $(this).parents('.card-title').next().toggleClass('hidden');
    });
    $('.removeBlock').click(function() {
      $(this).parents('.sort').remove();
    });
  }

  lst.forEach(function(i) {
    var container = document.getElementById(i + "Container");
    var sort = Sortable.create(container, {
      animation: 150,
      handle: ".sort",
      draggable: ".sort",
      onUpdate: function (evt){
         var item = evt.item;
       }
    });

    $('#'+i+'New').click(function() {
      var a = $('.sort').eq(1).clone();
      a.find('h5').html('<h5>new<span class="showEntries">show</span></h5>');
      a.find('.entrytitle,.entrypercent').val('');
      a.prependTo('#'+i+'Container');
      $('.showEntries,.removeBlock').unbind();
      showEntries();
    });
  });

  editor.setTheme("ace/theme/twilight");
  editor.session.setMode("ace/mode/json");

  $('#showIt').click(function() {

    editor.setValue('');
    $('#toUpdate').empty();

    function bld(i,e){
      $(i).each(function(index, el) {
          let inp = $(this).children('.s6');
          e.push({
              "title":inp.children('.entrytitle').val(),
              "percent":inp.children('.entrypercent').val()
            });
        });
    }
    function bldMin(i,e){
      $(i).each(function(index, el) {
          let inp = $(this).children('.s6');
          e.push({
              "title":inp.children('.entrytitle').val(),
              "percent":inp.children('.entrypercent').val()
            });
        });
    }

    bld('.codeLeftentry',codeL);
    bld('.codeRightentry',codeR);
    bld('.skillsLeftentry',skillsL);
    bld('.skillsRightentry',skillsR);
    bld('.dbLeftentry',dbL);
    bld('.dbRightentry',dbR);
    bld('.CMSLeftentry',CMSL);
    bld('.CMSRightentry',CMSR);
    bld('.OSLeftentry',OSL);
    bld('.OSRightentry',OSR);

    bldMin('.otherLeftentry',otherL);
    bldMin('.otherRightentry',otherR);
    bldMin('.APILeftentry',APIL);
    bldMin('.APIRightentry',APIR);

    editor.getSession().setUseWrapMode(true);
    editor.insert(JSON.stringify(arr, null, 2));
    $('#commit').attr('disabled', false);
    //console.log(JSON.stringify(arr));
  });

  $('#commit').click(function(e) {
    $('#toUpdate').val(editor.getValue());
    $('#post').submit();
  });

  showEntries();
