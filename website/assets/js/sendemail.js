        function validateForm() {
            "use strict";
            var title = $("#name").val();
            var err = true;
            if (title == "" || title == null) {
                $("#name").addClass("validation");

                var err = false;
            } else {
                $("#name").removeClass("validation");
            }
            var email = $("#email").val();
            if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
                $("#email").addClass("validation");

                var err = false;
            } else {
                $("#email").removeClass("validation");
            }
            var title = $("#message").val();
            if (title == "" || title == null) {
                $("#message").addClass("validation");
                var err = false;
            } else {
                $("#message").removeClass("validation");
            }
            return err;
        }
        $(document).ready(function() {
            "use strict";
            let emailId = "andris.keish@gmail.com";

            $("#button").click(function(e) {
                if (validateForm()) {
                    e.preventDefault();

                    let name = $('#name').val();
                    let email = $('#email').val();
                    let message = $('#message').val();

                    let text = "From: " + name + "[" + email + "]. Message: " + message;

                    $.ajax({
                        method: 'POST',
                        url: 'https://formsubmit.co/ajax/' + emailId,
                        dataType: 'json',
                        accepts: 'application/json',
                        data: {
                            name: "Message from resume site",
                            message: text
                        },
                        success: (data) => console.log(data),
                        error: (err) => console.log(err)
                    });

                    $("#name").val('');
                    $("#email").val('');
                    $("#message").val('');
                    // $("#successmsg").remove();
                } else {
                    return false;
                }
            });
        });