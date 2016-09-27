function hideShowFunction(anyID) {
    if (document.getElementById(anyID).style.display == "none"
         || document.getElementById(anyID).style.display == "") {
      document.getElementById(anyID).style.display = "inline";
    } else {
      document.getElementById(anyID).style.display = "none";
    }
}
function funct2() {
  window.open("index.html", "_self");
}

function funct3() {
  window.open("Resume.pdf", "_blank");
}

function funct4() {
  window.open("newPage.html", "_self");
}

$(document).ready(function() {
      console.log("Hello!");
      $("#Res").mouseenter(function(){
          $("#Res").css("cursor", "pointer");
          $(this).css("color", "gray");
      });
      $("#Res").mouseleave(function(){
          $(this).css("color", "white");
      });

      $("#Contact").mouseenter(function(){
          $("#Contact").css("cursor", "pointer");
          $(this).css("color", "gray");
      });
      $("#Contact").mouseleave(function(){
          $(this).css("color", "white");
      });

      $("#MainTitle").mouseenter(function(){
        $(this).css("color", "gray");
      });

      $("#MainTitle").mouseleave(function(){
        $(this).css("color", "white");
      });
});
