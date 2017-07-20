$(document).ready(function(){
  var arr=[5,10,15,20,25,30,35,40,45,50,55,60];//array of times
  var play = false;
  var isbreak = false;
  function displayset(num,attr){//display anywhere wildcard
    $(attr).html(num);
  }
  function display(m,s){// display timer value and update
    $('.minutes').html(m);
    $('.seconds').html(s);
  }
  function myFunc(){// logic for countdown timer
    var op =setInterval(
      function(){
        if(play){
            var mins = $('.minutes').html();
            var seconds = $('.seconds').html();
            mins = parseInt(mins);
            seconds = parseInt(seconds);
          if(mins===0&&seconds===0){
            if(!isbreak){
              var x = $('.textbreak').html();
              $('.minutes').html(x);
              mins = parseInt($('.minutes').html());
              console.log(mins);
              //console.log(('.minutes').html());
              $('.set').html("Break")
              isbreak=true;
              
            }
            else{
              var x = $('.textset').html();
              $('.minutes').html(x);
              mins = parseInt($('.minutes').html());
              $('.set').html("Work");
              isbreak=false;
              
              
            }
          }
            mins = seconds===0?mins-1:mins;
          
           if(seconds>10){seconds=seconds-1;}
            else{
              seconds=seconds===0?59:'0'+(seconds-1);
            }
            display(mins,seconds);
        }
        else{
          clearInterval(op);
        }
        
      },1000);
            
  }
  
  $('.info').on("click",function(e){
    e.preventDefault();
    if(play===false){
      play=true;
      myFunc();
      $('.info').html("Stop Timer");
      
    }
    else{
      play=false;
      $('.info').html("Start Timer");
    }
  });
  $('.res').on("click", function(){
    display(25,'00');
    isbreak=false;
    $('.set').html("Work");
    play=false;
  });
  
    $('._button').on("click", function(){
      if(!play){
      var buttonPressed=$(this).html();
      $(".break").on("click", function(){
        var temp;
        var value=$('.textbreak').html();
        for(var i =0;i<arr.length;i++){
          if(value==arr[i]){
            temp = i;
          }
        }
        if(buttonPressed==="+"){
          if(temp<arr.length){
            displayset(arr[temp+1],".textbreak");
          }
       }
        else{
          if(temp>0){
            displayset(arr[temp-1],".textbreak");
          }
        }
      });
      $(".settimer").on("click", function(){
        var temp;
        var value=$('.textset').html();
        for(var i =0;i<arr.length;i++){
          if(value==arr[i]){
            temp = i;
          }
        }
        if(buttonPressed==="+"){
          if(temp<arr.length){
            displayset(arr[temp+1],".textset");
            display(arr[temp+1],"00");
          }
        }
        else{
          if(temp>0){
            displayset(arr[temp-1],".textset");
            display(arr[temp-1]);
          }
        }
      });
    }    
    });
  

  
});