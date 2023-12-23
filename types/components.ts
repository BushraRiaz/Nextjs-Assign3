export type contactInfoTypes = {
    contactInfo: {
        name : string,
        lname : string ,
        UserName : string,
        Cnic : number,
        Country : string,
        City : string,
        CompanyName : string,
        email: string,
        phone :number,
        message : string
    }
}
export type contactTypes = {
    name : string,
    lname : string ,
    UserName : string,
    Cnic : number,
    Country : string,
    City : string,
    CompanyName : string,
    email : string ,
    phone : number,
    message : string,

}
export type onChangeEventType = {
    target: { value: string, name:string } 
}