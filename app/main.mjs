import { router, x } from './modules/jsnode.mjs';

router.on('/dashboard', function(request, stream) {
  stream.render('dashboard', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/works', function(request, stream) {
  stream.render('works', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/links', function(request, stream) {
  stream.render('links', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/events', function(request, stream) {
  stream.render('events', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/animations', function(request, stream) {
  stream.render('animations', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/about', function(request, stream) {
  stream.render('about', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/blog', function(request, stream) {

  if(request.params){
    if(request.params.get('tag')){
      request.data.tag = request.params.get('tag')
    } else if(request.params.get('author')){
      request.data.author = request.params.get('author')
    } else if(request.params.get('category')){
      request.data.category = request.params.get('category')
    } else if(request.params.get('q')){
      request.data.q = request.params.get('q')
    }
  }

  stream.render('blog', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/resume', function(request, stream) {
  stream.render('resume', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/skills', function(request, stream) {
  stream.render('skills', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/contact', function(request, stream) {
  stream.render('contact', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/error', function(request, stream) {
  stream.render('error', request.data, function(err){
    if(err){return console.error(err)}
  })
})
.init().listen().validate();
