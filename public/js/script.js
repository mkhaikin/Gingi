    $(document).ready(function() {
      $("#code").keyup(function() {
        if (this.value == "torah") {
          $("#enter").css("display", "block");
        } else {
          $("#enter").css("display", "none");
        }
      });
    });
