function start() {
    $("#errorClass").hide()
}

$(document).ready(function() {
    var signupForm = $("#signupForm");

    signupForm.on("submit", (e) => {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "/id/api/register",
            data: {
                username:  $("#username").val(),
                email:  $("#email").val(),
                password:  $("#password").val(),
            },
            success: (data) => {
                document.location.href="/login"
            },
            error: (data) => {
                grecaptcha.reset()
                switch (JSON.parse(data.responseText).errorCode) {
                    case "dev.aurorafn.id.register.invalid_fields":
                        $("#notice").text("Error: Porfavor rellena todos los cuadros.")
                        $("#errorClass").show()
                        break;
                    case "dev.aurorafn.id.register.invalid_captcha":
                        $("#notice").text("Error: Captcha inválida.")
                        $("#errorClass").show()
                        break;
                    case "dev.aurorafn.id.register.username_too_big":
                        $("#notice").text("Error: El Nombre de Usuario es muy grande.")
                        $("#errorClass").show()
                        break;
                    case "dev.aurorafn.id.register.email_too_big":
                        $("#notice").text("Error: El Email es muy grande.")
                        $("#errorClass").show()
                        break;
                    case "dev.aurorafn.id.register.email_already_exists":
                        $("#notice").text("Error: Email ya en uso.")
                        $("#errorClass").show()
                        break;
                    case "dev.aurorafn.id.register.username_already_exists":
                        $("#notice").text("Error: Nombre de Usuario ya en uso.")
                        $("#errorClass").show()
                        break;
                    case "dev.aurorafn.id.register.account_limit_reached":
                        $("#notice").text("Error: Muchisimas cuentas se crearon bajo tu mismo ID.")
                        $("#errorClass").show()
                        break;
                }
            }
        })
    })
})

