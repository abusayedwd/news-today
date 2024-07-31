
import Credentialprovider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { mongoDb } from "../../../../../utils/mongoDB";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs"


const authOptions = {
    providers : [
        Credentialprovider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials) {
              const {email, password} = credentials;
             try{
               await mongoDb();
               const user = await User.findOne({email}) 
               if(!user){
                return null;
               }
               const passwordMetch = await bcrypt.compare(password, user.password);
               if(!passwordMetch){
               return null;
               };
               return user;
             }catch(error){
                console.log(error, 'Error');
             }
            
            }
        })
    ],
    session: {
   jwt: true,
    },
    // useSecureCookies: process.env.NODE_ENV === 'production',
    

    secret: process.env.NEXTAUTH_SECRET,
    // URL : process.env.AUTH_URL,
    pages: {
      signIn: "/login"
    },
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}