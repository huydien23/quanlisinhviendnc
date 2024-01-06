
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}
function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('Login with');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}

function loginAjax(){
    /*   Remove this comments when moving to server
    $.post( "/login", function( data ) {
            if(data == 1){
                window.location.replace("/home");            
            } else {
                 shakeModal(); 
            }
        });
    */

/*   Simulate error message from the server   */
     shakeModal();
}

function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
             $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
             $('input[type="password"]').val('');
             setTimeout( function(){ 
                $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000 ); 
}
function login(){
    let u = localStorage.getItem("users");
    let users = JSON.parse(u)
    let mssv = $("#mssv").val()
    let password = $("#password").val()
    let toLogin = false;
    console.log(users)
    users.forEach(element => {
        if(mssv==element.mssv&&password==element.password){
            // alert("Dang nhap thanh cong");
            toLogin = true;
           
        }
    
    });
    
    if(toLogin===false){
        alert("Mã số sinh viên hoặc khẩu không đúng")
   
    } else{
        window.location.href="/main/home.html";
    }
        
   
}

localstorage.setItem("key: mssv, value: json ");

// localstorage.setItem("users",users)


