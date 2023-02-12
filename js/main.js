
$(document).ready(function(){
  if(window.location.href.indexOf('index') > -1){
    
      $('.slider').bxSlider({
        responsive:true
      });


    //Posts
    var posts = [
      {
        title: 'Article Title 1' ,
        date: 'Published ' + moment().format('dddd Do') + ' of ' + moment().format('MMMM') + ' of year ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur quis justo nec sollicitudin. Morbi dignissim pellentesque nibh, sed finibus purus tincidunt nec. Nunc in mi eget massa pretium pharetra in eleifend ipsum. Ut non ligula ultricies, tristique est eu, facilisis nulla. Suspendisse lobortis ligula purus, non finibus ex efficitur sit amet. Fusce tempus commodo pretium. Ut pretium, augue sodales hendrerit facilisis, risus nunc venenatis ante, in viverra ligula orci vel libero. Vestibulum nec urna sed felis hendrerit vestibulum. Etiam tristique dui eu ullamcorper vestibulum.',
      },
      {
        title: 'Article Title 2' ,
        date: 'Published ' + moment().format('dddd Do') + ' of ' + moment().format('MMMM') + ' of year ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur quis justo nec sollicitudin. Morbi dignissim pellentesque nibh, sed finibus purus tincidunt nec. Nunc in mi eget massa pretium pharetra in eleifend ipsum. Ut non ligula ultricies, tristique est eu, facilisis nulla. Suspendisse lobortis ligula purus, non finibus ex efficitur sit amet. Fusce tempus commodo pretium. Ut pretium, augue sodales hendrerit facilisis, risus nunc venenatis ante, in viverra ligula orci vel libero. Vestibulum nec urna sed felis hendrerit vestibulum. Etiam tristique dui eu ullamcorper vestibulum.',
      },
      {
        title: 'Article Title 3' ,
        date: 'Published ' + moment().format('dddd Do') + ' of ' + moment().format('MMMM') + ' of year ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur quis justo nec sollicitudin. Morbi dignissim pellentesque nibh, sed finibus purus tincidunt nec. Nunc in mi eget massa pretium pharetra in eleifend ipsum. Ut non ligula ultricies, tristique est eu, facilisis nulla. Suspendisse lobortis ligula purus, non finibus ex efficitur sit amet. Fusce tempus commodo pretium. Ut pretium, augue sodales hendrerit facilisis, risus nunc venenatis ante, in viverra ligula orci vel libero. Vestibulum nec urna sed felis hendrerit vestibulum. Etiam tristique dui eu ullamcorper vestibulum.',
      },
      {
        title: 'Article Title 4' ,
        date: 'Published ' + moment().format('dddd Do') + ' of ' + moment().format('MMMM') + ' of year ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur quis justo nec sollicitudin. Morbi dignissim pellentesque nibh, sed finibus purus tincidunt nec. Nunc in mi eget massa pretium pharetra in eleifend ipsum. Ut non ligula ultricies, tristique est eu, facilisis nulla. Suspendisse lobortis ligula purus, non finibus ex efficitur sit amet. Fusce tempus commodo pretium. Ut pretium, augue sodales hendrerit facilisis, risus nunc venenatis ante, in viverra ligula orci vel libero. Vestibulum nec urna sed felis hendrerit vestibulum. Etiam tristique dui eu ullamcorper vestibulum.',
      },
      {
        title: 'Article Title 5' ,
        date: 'Published ' + moment().format('dddd Do') + ' of ' + moment().format('MMMM') + ' of year ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur quis justo nec sollicitudin. Morbi dignissim pellentesque nibh, sed finibus purus tincidunt nec. Nunc in mi eget massa pretium pharetra in eleifend ipsum. Ut non ligula ultricies, tristique est eu, facilisis nulla. Suspendisse lobortis ligula purus, non finibus ex efficitur sit amet. Fusce tempus commodo pretium. Ut pretium, augue sodales hendrerit facilisis, risus nunc venenatis ante, in viverra ligula orci vel libero. Vestibulum nec urna sed felis hendrerit vestibulum. Etiam tristique dui eu ullamcorper vestibulum.',
      },
    ];

    posts.forEach((item, index)=>{
      post = `
      <article>
        <h3>${item.title}</h3>
        <p><span class='date'>${item.date}</span></p>
        <p class='article-content'>${item.content}</p>
        <a href='#' class='button-more'>Read More</a>
      </article>
      <article>
      `;
      $('#blog').append(post);
    });
  }

  if(window.location.href.indexOf('about-me') > -1){
    $('#accordion').accordion();
  }

  if(window.location.href.indexOf('clock') > -1){
    setInterval(function(){
      $('#clock').html(moment().format('hh:mm:ss'));

    },1000)
    
  }

  if(window.location.href.indexOf('contact') > -1){
    $.validate({
      lang: 'es',
      errorMessagePosition: 'top',
      scrollToTopOnError: true
  });

}
  

  //Theme Changer
  theme_css = $('#css-theme-changer');

  $('#theme-changer #theme-green').click(function(){
    changeTheme('Green');
  });
  $('#theme-changer #theme-red').click(function(){
    changeTheme('Red');
  });
  $('#theme-changer #theme-blue').click(function(){
    changeTheme('Blue')
  });;

  function changeTheme(colorTheme){

      theme_css.attr('href','css/theme-' +colorTheme+ '.css');

  }

  //Scroll top
  $('#go-top').click(function(e){

    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 500)
    return false;

  });

  //Login in localstorage

  $('#login form').submit(function(e){

    e.preventDefault();
    localStorage.setItem('name', $('#form-name').val());
    if(localStorage.getItem('name') != 'undefined' && localStorage.getItem('name') != null && localStorage.getItem('name') != ''){
      $('#about').append('<br><hr><p><strong>Welcome ' +localStorage.getItem('name')+ '!!</strong></p>')
      $('#about').append("<a href='#' id='logout'>Logout</a>")
      $('#login').hide(); 
    }

  });



  $('#logout').click(function(){

    localStorage.removeItem('name');
    location.reload();
    
  });

});