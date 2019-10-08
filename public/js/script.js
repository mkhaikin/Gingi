    $(document).ready(function() {
      $("#code").keyup(function() {
        var code = this.value;
        if ((code).toLowerCase() == "torah") {
          $("#enter").css("display", "block");


        } else {
          $("#enter").css("display", "none");
        }
      });
    });