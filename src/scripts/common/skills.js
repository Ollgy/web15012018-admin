var skills = {
    animateCircle: function(){

 //параллакс

 var parallax = function(){
    const bg = document.querySelector('.header__background'); 
    const img = document.querySelector('.portfolio__header'); 
    const content = document.querySelector('.person__desc--bkg');

    return{
        move:function(block, windowScroll, strafeAmount){
            var strafe = windowScroll/-strafeAmount+'%';
            var transformString = 'translate3d(0,'+strafe+', 0';

            var style = block.style;
                style.transform = transformString;
                style.webkitTransform = transformString;
        },

        init: function(wScroll){

            if(bg){
                this.move(bg,wScroll,60);
            }
            if(img){
                this.move(img,wScroll,30);
            }   
            if(content){
                this.move(content,wScroll,15);
            }                     
           
        }
    }
}();
    
  
 //анимация скиллов 
    var animate = function(){
        
    var circles = Array.prototype.slice.call(document.querySelectorAll('.skills__item'));
    console.log (circles[1]);

    var offset = function(el) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    } 

    var itemsNum = circles.length;
    var itemsHeight = parseInt(getComputedStyle(circles[0]).height);

    var windowHeight = window.innerHeight;
    //console.log (itemsHeight); 
    //console.log (windowHeight);
        
    var coords = [];
    for(var i = 0; i < itemsNum; i++){
        coords[i] = offset(circles[i]).top-window.innerHeight;           
        //console.log (coords[i]);           
    }

    var addClass = function(item,className){
        if(!item.classList.contains(className)){
            item.classList.add(className);
        }
    }

    var removeClass = function(item,className){
        if(item.classList.contains(className)){
            item.classList.remove(className);
        }
    }

        return {
            itemActive: function(scrollTop){
                for (var i = itemsNum; i >= 0; i--){                   
                    if((coords[i]+itemsHeight/2)<scrollTop){
               
                        addClass(circles[i],'skills__item--active');
                        //console.log ('активный класс');

                        if((coords[i]+windowHeight)<scrollTop){
                            removeClass(circles[i],'skills__item--active');
                            //console.log ('неактивный класс');
                        }                    
                    
                    } 

                    if((coords[i]+itemsHeight/2)>scrollTop){
                        removeClass(circles[i],'skills__item--active');
                        //console.log ('неактивный класс');
                    }
                }
            
            }
        }
    }();      
    
        window.onscroll = function() {
            var wScroll = window.pageYOffset;
            //console.log(wScroll);
            animate.itemActive(wScroll);
            
            parallax.init(wScroll);
        }      
    
    }
    
}
 
 module.exports = skills;