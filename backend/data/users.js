import bcrypt from 'bcryptjs'

const users = [
    {
        name:"Aditya Ubale",
        email:"adityaubale63@gmail.com",
        password : bcrypt.hashSync('AdityaUbale01@#', 10),
        profilePic:"",
        isAdmin:true,
        number:"8770471714"
    },
    {
        name:"Vasudha Ubale",
        email:"adityaubale73@gmail.com",
        password : bcrypt.hashSync('AdityaUbale01@#', 10),
        profilePic:"",
        isAdmin:false,
        number:"7000590765"
    },
    {
        name:"Arpita Ubale",
        email:"arpitaubale63@gmail.com",
        password : bcrypt.hashSync('AdityaUbale01@#', 10),
        profilePic:"",
        isAdmin:false,
        number:"8319417371"
    }
]

export default users