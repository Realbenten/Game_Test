// var heading = $('h1').eq(0);
//
// function colorchange(){
//     var cn = "0123456789ABCDEF" ;
//     var sym = "#"
//     for (var i = 0; i < 6; i++) {
//       sym += cn[Math.floor(Math.random()*16)];
//     }
//     return sym;
// }
//
// function change(){
//   coloris = colorchange();
//   heading.css('color' , coloris);
// }
//
// setInterval("change()" , 500);


$('.showing').hide();
$('.showing2').hide();
$('.board').hide();
$('.entrytext').hide();
var b = $(".btn-outline-success");
var c = $('.btn-outline-primary');
var d = $('.btn-outline-danger');
$(document).ready(function(){
b.click(function(){
  $("#readyhead").text("Game is Starting...")
  });
  b.mousedown(function(){
    $(".check").fadeOut(1500);
    $('.showing').show(1500);
  });

c.click(function(){
  $('.showing').slideUp(1000);
  $('.showing2').show();
})


d.click(function(){
  $('.showing2').slideUp(1000);
  $('.entrytext').show();
  // $('.board').show();
})
d.click(function(){
  $('.board').show();
})
});


// $(document).ready(function(){
//   b.mousedown(function(){
//     $(".check").fadeOut(5000);
//   });
// });
console.log("Game Starts:--");

var table = $('table tr');

var player1name = document.getElementById('entername1').value;
var player2name = document.getElementById('entername2').value;

// var player1color = 'rgb(252, 3, 3)';
// var player2color = 'rgb(18, 42, 255)';

var player1color = 'red';
var player2color = 'blue';

function ReportWin(row,col){
  $('.entrytext').text("Won at " + row + " And " + col)

}

function changeColor(rowIndex,colIndex,color){
  return table.eq(rowIndex).find('td').eq(colIndex).find('.boardbutton').css("background-color" , color);
}

function returncolor(rowIndex,colIndex){
  return table.eq(rowIndex).find('td').eq(colIndex).find('.boardbutton').css("background-color");
}

function checkbuttom(colIndex){
  var colorreport = returncolor(5,colIndex);
  for (var row = 5; row > -1 ; row--) {
    colorreport = returncolor(row,colIndex);
    if (colorreport === 'rgb(128, 128, 128)') {
      return row;
    }
  }
}

function colormatch(one,two,three,four){
  return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one!== undefined);
}
//Horizontal Win:-
function Horizontalwin(){
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colormatch(returncolor(row,col) , returncolor(row,col+1), returncolor(row,col+2), returncolor(row,col+3))) {
        return true;
        return ReportWin(row,col);
      }
      else {
        continue;
      }
    }
  }
}

//Veritical WIn:-
function Verticalwin(){
    for (var col = 0; col <7 ; col++) {
      for (var row = 0; row <3 ; row++){
      if (colormatch(returncolor(row,col) , returncolor(row+1,col) , returncolor(row+2,col), returncolor(row+3,col))) {
        return true;
        return ReportWin(row,col);
      }
      else {
        continue;
      }
    }
  }
}


//Diagonal Win:-
function DiagonalWin(){
  for (var  col= 0; col < 5 ; col++) {
    for (var  row= 0;  row < 7 ; row++) {
      if (colormatch(returncolor(row,col) , returncolor(row+1,col+1) , returncolor(row+2,col+2), returncolor(row+3,col+3))) {
        return true;
      }else if (colormatch(returncolor(row,col) , returncolor(row-1,col+1), returncolor(row-2,col+2), returncolor(row-3,col+3))) {
        return true;
      }else {
        continue;
      }
    }
  }
}

//Start Game:-

var currentplayer = 1;
var currentplayername = player1name;
var currentplayercolor= player1color;

$('.entrytext').text(document.getElementById('entername1').value + " It's Your Turn Start the game!");

// $(document).ready(function(){
$('.boardbutton').on('click',function(){

  var col = $(this).closest('td').index();

  var checkbuttomava = checkbuttom(col);


  changeColor(checkbuttomava,col,currentplayercolor);

  // currentplayer = currentplayer * -1 ;

  // if (currentplayer === 1 ) {
  //   currentplayername == document.getElementById('entername1').value;
  //   $('.entrytext').text(document.getElementById('entername1').value + " It's Your Turn Now");
    // currentplayercolor = player1color;
  // }else{
  //   currentplayername == document.getElementById('entername2').value;
  //   $('.entrytext').text(document.getElementById('entername2').value + " It's Your Turn Now");
  //   currentplayercolor = player2color;
  // }
if (Horizontalwin() || Verticalwin() || DiagonalWin()) {
    $('.entrytext').text(currentplayercolor  + " Team  Won");
    $('h1').text("TO RESTART REFRESH PAGE")
    $('.board').hide(1000);
  }

  else {


  currentplayer = currentplayer * -1 ;

  if (currentplayer === 1 ) {
    currentplayername == document.getElementById('entername1').value;
    $('.entrytext').text(document.getElementById('entername1').value + " It's Your Turn Now");
    currentplayercolor = player1color;
  }else{
    currentplayername == document.getElementById('entername2').value;
    $('.entrytext').text(document.getElementById('entername2').value + " It's Your Turn Now");
    currentplayercolor = player2color;
  }
  }
});
// });
