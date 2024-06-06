import prisma from "../Database/db.config.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createUser = async (req, res) => {
    //1. get data from body
    //2. check unique or not
    //3. create
    try {
        const {name, email, mobile, password} = req.body;

        const isExist = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
    
        if(isExist){
            return res.status(400).json("Email already Exist!")
        }
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);
    
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                mobile: mobile,
                password: hashpassword,
            }
        });
    
        console.log("Created user: ", newUser);
        return res.status(200).json({msg: "Registration Successfull", newUser})
    
        
    } catch (error) {
        console.error("Error creating Registration: ", error);
        return res.status(500).json({ error: "Server error" });
    }
   
}

const loginUser = async (req, res) => {
     //1. request to body
    //2. check if user exists
    //3. compare password
    try {
        const {email, password} = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email:email
            }
        })
        if(!user)
            {
                return res.status(400).json({msg: "Invalid credentials "})
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid credentials' });
              }

              //generate jwt 

              const payload = {
                user : {
                    id: user.id,
                    email: user.email
                }
              }

              jwt.sign(payload, process.env.SECERETKEY, {expiresIn : "30d"}, (err, token)=> {
                if (err) throw err;
                res.json({msg: "Login Successfull", user, token });
              }
            )

            

    } catch (error) {
        console.error("Invalid Credential ", error);
        return res.status(500).json({ error: "Server error" });
    }
}

export default { createUser, loginUser}