/**
 * Enums
 * 
 */

// enum LoginError{
//     Unauthorized = "unauthorized",
//     NoUser = 'wrongcredentials',
//     Internal = "Internal"
// }

// const printErrorMsg = (error:LoginError) => {
//     if(error === LoginError.Unauthorized){
//         console.log("User not authorized");
//     }
//     else if(error === LoginError.NoUser){
//         console.log("Wrong username / password combination");
//     }

//     else if(error === LoginError.Internal){
//         console.log("Internal Error");
//     }
//     console.log(error);
// }



// generics

// class StorageContainer<T>{
//    private contents: T[]

//    constructor(){
//         this.contents = []
//    }

//    addItem(item:T){
//     this.contents.push(item);
//    }

//    getItem(idx: number):T | undefined{
//         return this.contents[idx];
//    }
// }

// const usernames = new StorageContainer<string>();

// usernames.addItem("Kofi");
// usernames.addItem("benji")
// console.log(usernames.getItem(0));




// const friendsCount = new StorageContainer<number>();

// friendsCount.addItem(23);
// friendsCount.addItem(678)
// console.log(friendsCount.getItem(0));



interface Employee {
    employeeId: number;
    startDate: Date;
    name: string;
    department: string
}

const employee: Employee = {
    employeeId: 123,
    startDate: new Date(),
    name: "Kofi",
    department: "Finance"
};

employee.name = "Rich";

employee.employeeId = 455674925;

console.log(employee);