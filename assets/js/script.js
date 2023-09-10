window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navExpand").style.opacity = "0";
      document.getElementById("navCompact").style.pointerEvents = "none";
      document.getElementById("navCompact").style.opacity = "1";
      document.getElementById("navCompact").style.pointerEvents = "unset";
    } else {
    document.getElementById("navExpand").style.opacity = "1";
    document.getElementById("navCompact").style.pointerEvents = "unset";
    document.getElementById("navCompact").style.opacity = "0";
    document.getElementById("navCompact").style.pointerEvents = "none";
  }
}

// document.addEventListener("DOMContentLoaded", function (){
//   const arr = ['rgba(190, 190, 190, 0.3)', 'rgba(200, 200, 200, 0.4)', 'rgba(210, 210, 210, 0.5)', 'rgba(220, 220, 220, 0.6)']
//   let i = 0;
//   window.setInterval(function () {
//     console.log(i)
//     document.getElementById("descriptions").style.backgroundColor = arr[i];
//     i++;
//     if(i === arr.length){
//       i = 0;
//     }
//   }, 1000);
// });