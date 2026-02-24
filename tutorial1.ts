/**
 * Enums
 * 
 */

enum LoginError{
    Unauthorized = "unauthorized",
    NoUser = 'wrongcredentials',
    Internal = "Internal"
}

const printErrorMsg = (error:LoginError) => {
    if(error === LoginError.Unauthorized){
        console.log("User not authorized");
    }
    else if(error === LoginError.NoUser){
        console.log("Wrong username / password combination");
    }

    else if(error === LoginError.Internal){
        console.log("Internal Error");
    }
    console.log(error);
}