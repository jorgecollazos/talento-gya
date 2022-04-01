function mostrar(id) {
  if (id == 1) {
    $("#subPregrado").show();
    $("#formacionPost").hide();
    $("#subPosgrado").hide();
    $("#universidad").show();
    $("#carrerauniversitaria").show();
    $("#finAcademico").hide();
    $("#fechaexpedicion").hide();
    $("#doctitulo").hide();
    $("#doccolegiado").hide();
  } else if (id == 2) {
    $("#subPregrado").hide();
    $("#formacionPost").show();
    $("#subPosgrado").show();
    $("#universidad").show();
    $("#carrerauniversitaria").show();
    $("#finAcademico").hide();
    $("#fechaexpedicion").hide();
    $("#doctitulo").hide();
    $("#escolegiado").hide();
    $("#doccolegiado").hide();
  }
}
function mostrar2(id) {
  if (id == 1) {
    $("#inicioAcademico").show();
    $("#ultima").show();
    $("#finAcademico").hide();
    $("#fechaexpedicion").hide();
    $("#doctitulo").hide();
    $("#doccolegiado").hide();
  } else if (id == 2 || id == 3) {
    $("#inicioAcademico").show();
    $("#finAcademico").show();
    $("#fechaexpedicion").show();
    $("#doctitulo").show();
    $("#ultima").show();
    $("#doccolegiado").hide();
  }
}
function mostrar3(id) {
  if (id == 1) {
    $("#inicioAcademico").show();
    $("#ultima").show();
    $("#finAcademico").hide();
    $("#fechaexpedicion").hide();
    $("#doctitulo").hide();
    $("#escolegiado").hide();
    $("#doccolegiado").hide();
  } else if (id == 2 || id == 3) {
    $("#inicioAcademico").show();
    $("#finAcademico").show();
    $("#fechaexpedicion").show();
    $("#doctitulo").show();
    $("#ultima").show();
    $("#escolegiado").hide();
    $("#doccolegiado").hide();
  } else if (id == 4) {
    $("#inicioAcademico").show();
    $("#finAcademico").show();
    $("#fechaexpedicion").show();
    $("#doctitulo").show();
    $("#escolegiado").show();
    $("#ultima").show();
    $("#doccolegiado").hide();
  }
}
var i = 0;
function mostrar4() {
  console.log("hla" + i);
  if (i == 0) {
    $("#doccolegiado").show();
    i = 1;
  } else if (i == 1) {
    $("#doccolegiado").hide();
    i = 0;
  }
}

function readURL(input) {
  var email = document.getElementById("photoemail").innerText;
  console.log(email);
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imagePreview").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
      $("#imagePreview").hide();
      $("#imagePreview").fadeIn(650);
      $.ajax({
        type: "POST",
        url: "http://137.184.220.167:4010/update-photo",
        data: JSON.stringify({ email: email, photo: e.target.result }),
        contentType: "application/json",
        success: function (result) {
          console.log(result);
        },
        error: function (result, status) {
          console.log(result);
        },
      });
    };
    reader.readAsDataURL(input.files[0]);
  }
}

