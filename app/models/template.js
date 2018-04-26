var sidebar =
{"<>":"div","class":"sidebar","html":[
    {"<>":"div","class":"logopanel","html":[
        {"<>":"h1","style":"text-align:center","html":"PORTFOLIO"}
      ]},
    {"<>":"div","class":"sidebar-inner","html":[
        {"<>":"div","class":"sidebar-top small-img clearfix","style":"display: block","html":[
            {"<>":"div","class":"user-image","html":[
                {"<>":"img","id":"imgh","html":""}
              ]},
            {"<>":"div","class":"user-details","html":[
                {"<>":"h4","html":"ANGEAL"},
                {"<>":"div","id":"usr","class":"user-login","html":""}
              ]}
          ]},
        {"<>":"div","class":"menu-title","html":[
            {"<>":"span","html":"Navigation"},
            {"<>":"div","class":"pull-right menu-settings","html":[
                {"<>":"a","id":"hide-top-sidebar","title":"hide","class":"hide-top-sidebar","html":[
                    {"<>":"i","class":"icon-cog","html":""}
                  ]}
              ]}
          ]},
        {"<>":"ul","id":"menu","class":"nav nav-sidebar","html":[
            {"<>":"li","class":"tm nav-parent","html":[
                {"<>":"a","id":"indx","html":[
                    {"<>":"i","class":"icon-tachometer c-primary shrink","html":""},
                    {"<>":"span","class":"shrink","html":"Index"}
                  ]}
              ]}
          ]},
        {"<>":"div","html":""},
        {"<>":"div","class":"sidebar-footer clearfix","html":[
            {"<>":"a","src":"app/images/avatars/github.png","id":"fsc","class":"pull-left toggle_fullscreen shrink","title":"fullscreen","html":[
                {"<>":"i","class":"icon-arrows-alt","html":""}
              ]}
          ]}
      ]}
  ]};

var mainContent =
{"<>":"div","class":"main-content","html":[
    {"<>":"div","class":"topbar","html":[
        {"<>":"div","class":"header-left","style":"display: block","html":[
            {"<>":"div","class":"topnav","html":[
                {"<>":"a","class":"menutoggle","data-toggle":"sidebar-collapsed","html":[
                    {"<>":"span","class":"menu__handle","html":[
                        {"<>":"span","html":"Menu"}
                      ]}
                  ]}
              ]},
            {"<>":"ul","id":"headerLeft","class":"header-menu nav navbar-nav","html":""}
          ]},
        {"<>":"div","class":"topnav","html":[
            {"<>":"div","class":"header-right","html":[
                {"<>":"ul","id":"headerRight","class":"header-menu nav navbar-nav","html":""}
              ]}
          ]}
      ]},
    {"<>":"div","id":"pagecontainer","html":""},
    {"<>":"div","id":"footer","class":"copyright col-md-12","html":""},
    {"<>":"a","class":"scrollup shrink","html":[
        {"<>":"i","class":"icon-angle-up","html":""}
      ]}
  ]};

var menu =
{"<>":"li","class":"tm nav-parent","html":[
    {"<>":"a","html":[
        {"<>":"i","class":"icon-code c-fourth shrink","html":""},
        {"<>":"span","class":"shrink","html":"${title}"},
        {"<>":"span","class":"arrow shrink","html":""}
      ]},
    {"<>":"ul","class":"children collapse","html":[
        {"<>":"li","html":[
            {"<>":"a","id":"${idProj}","html":"${item1}"}
          ]},
        {"<>":"li","html":[
            {"<>":"a","id":"${idTemp}","html":"${item2}"}
          ]}
      ]}
  ]};

var headerMain =
{"<>":"li","html":[
    {"<>":"a","href":"${href}","target":"_blank","html":[
        {"<>":"i","id":"${id}","class":"${class}","data-ani-delay":"${time}","data-tip":"${dataTip}","html":""}
      ]}
  ]};

var header =
{"<>":"div","class":"row","html":[
    {"<>":"div","class":"col-md-12","html":[
        {"<>":"div","class":"header","html":[
            {"<>":"h2","class":"c-primary","html":"${title}:${sub}"},
            {"<>":"div","class":"breadcrumb-wrapper","html":[
                {"<>":"ol","class":"breadcrumb","html":[
                    {"<>":"li","class":"c-third","html":"${title}"}
                  ]}
              ]},
            {"<>":"p","style":"display: block","html":"${title} ${sub} LIST"}
          ]}
      ]}
  ]};

var template =
{"<>":"div","class":"row","html":[
    {"<>":"div","class":"col-md-6","html":[
        {"<>":"div","class":"fileinput fileinput-new","data-provides":"fileinput","html":[
			{"<>":"div","class":"text","html":[
				{"<>":"img","class":"img-demo","src":"${img}","html":"${name}"}
				]}
          ]}
      ]},
    {"<>":"div","class":"col-md-6","html":[
        {"<>":"div","class":"panel","html":[
            {"<>":"div","class":"panel-content","html":[
                {"<>":"h3","class":"c-primary","html":"${title}"},
                {"<>":"p","class":"m-t-40","html":"${sub}"}
              ]},
            {"<>":"div","class":"panel-footer clearfix","html":[
                {"<>":"div","class":"pull-right","html":[
					{"<>":"a","href":"${hrefA}","target":"_blank","html":[
						{"<>":"button","type":"button","class":"btn btn-white m-r-10 shrink","formaction":"${hrefA}","html":"${btnA}"}
						]}
                  ]}
              ]}
          ]}
      ]}
  ]};

var skillsTemplate =
[
  {"<>":"h2","class":"skills-title c-primary  ani fadeIn","html":"${title}"},
  {"<>":"h3","class":"skills-title","html":"${subtitle}"},
  {"<>":"div","class":"row","html":[
      {"<>":"div","class":"col-md-6","html":[
          {"<>":"ul","id":"${idLeft}","class":"skillsBar","html":""}
        ]},
      {"<>":"div","class":"col-md-6","html":[
          {"<>":"ul","id":"${idRight}","class":"skillsBar","html":""},
		  {"<>":"br","html":""}
        ]}
    ]}
];

var skills =
{"<>":"li","class":"ani fadeIn","html":[
    {"<>":"h4","html":"${title}"},
    {"<>":"div","class":"bar_container","html":[
        {"<>":"span","class":"bar","data-bar":"{}","html":[
            {"<>":"span","class":"pct","html":"${percent}%"}
          ]}
      ]}
  ]};

var apiSkills =
{"<>":"li","class":"ani fadeIn animated","html":[
    {"<>":"h4","html":"${title}"},
    {"<>":"hr","html":""}
  ]};

var resume =
{"<>":"div","class":"row panel","style":"padding:100px;margin-top: 200px;width:100%","html":[
    {"<>":"div","class":"col-md-12 col-sm-12","style":"height:40px;","html":""},
    {"<>":"div","class":"container","html":[
        {"<>":"div","class":"text-center ani fadeIn","html":[
            {"<>":"h2","class":"c-primary","html":"Ben Eaves"},
            {"<>":"br","html":""},
            {"<>":"h2","html":"${title}"}
          ]},
        {"<>":"hr","html":""}
      ]},
    {"<>":"div","class":"container","html":[
        {"<>":"div","id":"work","html":""}
      ]},
    {"<>":"div","class":"container","html":[
        {"<>":"div","class":"text-center","html":[
            {"<>":"h2","html":"${title2}"}
          ]},
        {"<>":"hr","html":""}
      ]},
    {"<>":"div","class":"container","html":[
        {"<>":"div","id":"edu","html":""}
      ]}
  ]};

var work =
[
  {"<>":"div","class":"block","html":[
      {"<>":"h3","html":"${date}"},
      {"<>":"h2","class":"c-primary","html":"${title}"},
      {"<>":"p","html":"${location}"},
	  {"<>":"H3","html":"Responsibilities"},
	  {"<>":"div","html":"${about}"},
    ]},
  {"<>":"br","html":""},
  {"<>":"br","html":""}
];

var edu =
{"<>":"div","class":"block","html":[
    {"<>":"h3","html":"${date}"},
    {"<>":"h2","class":"c-primary","html":"${title}"},
    {"<>":"p","html":"${location}"},
	{"<>":"br","html":""},
	{"<>":"br","html":""}
  ]};

var codePenTpl = [
{"<>":"div","class":"row text","style":"width: 100%;margin:50px 0;","html":[
    {"<>":"img","class":"img-demo","src":"app/images/codepen-logo.svg","html":""}
  ]},
{"<>":"div","class":"container panel list-view pen-grid","style":"padding:60px","html":[
    {"<>":"div","class":"pens-in-list-view-wrap","html":[
        {"<>":"table","class":"pens-in-list-view","html":[
            {"<>":"thead","html":[
                {"<>":"tr","html":[
                    {"<>":"th","class":"title-header","html":"Codepen Portfolio"},
                    {"<>":"th","class":"sort-created_at","html":"Created"},
                    {"<>":"th","class":"sort-updated_at sorted_desc","html":"Last Updated"}
                  ]}
              ]},
            {"<>":"tbody","id":"codePen","html":""}
          ]}
      ]}
  ]}
];

var codePen =
{"<>":"tr","class":"pen-in-list-view","html":[
    {"<>":"td","class":"title","html":[
        {"<>":"a","href":"${href}","target":"_blank","html":"${name}"}
      ]},
    {"<>":"td","class":"date","title":"Created on ${date}","html":"${date}"},
    {"<>":"td","class":"date","title":"Last updated on ${update}","html":"${update}"}
  ]};
