  function change_size(value) {
    document.getElementById("paragraph").style.fontSize = value;
  }
  function change_family(value) {
    document.getElementById("paragraph").style.fontFamily = value;
  }

  function change_style() {
    var paragraph = document.getElementById("paragraph");
    var italic  = document.getElementById("italic");
    var bold  = document.getElementById("bold");
    var underline  = document.getElementById("underline");
  
    paragraph.style.fontStyle = italic.checked ? "italic" : "normal";
    paragraph.style.fontWeight = bold.checked ? "bold" : "normal";
    paragraph.style.textDecoration = underline.checked ? "underline" : "none";
  } 