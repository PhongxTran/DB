// $("#login").submit(function(e) {
//     e.preventDefault();
//     var form = $(this);

//     var email = $("input[name='email']").val();
//     var mssv = $("input[name='mssv]").val();
//     // AJAX
//     $.post("/login/check", { email: email, mssv: mssv }, function(data, status) {
//         if (data.status == "NOT FOUND") alert("Mật khẩu hoặc tài khoản sai");
//         else form.unbind("submit").submit();
//     });


// });