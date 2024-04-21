const VerifyUser = require('../model/verifyuser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { sendMail } = require('./sendmail');
const User = require('../model/users');
dotenv.config();

const InsertVerifyUser = async (name, email, password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const token = generateToken(email);

        const userVerify = new VerifyUser({
            name: name,
            email: email,
            password: hashedPassword,
            token: token
        })

        userVerify.save().then(() => {
            console.log("user saved in the userverify collections");
        })
        const activationLink = `${process.env.backend}/${token}`
        const content = `<h4>Hi,there</h4>
        <p>Plese click the below link to verify</p>
        <a href=${activationLink}>click here</a>
        <p>regard</p>
        <p>team</p>
        `
        sendMail(email, "Verify Account", content);

    }
    catch (err) {
        console.log(err);
    }
}

const generateToken = (email) => {
    const token = jwt.sign(email, process.env.jwt_token)
    return token;
}

const CheckVerifyUser = async (token) => {

    try {
        const tokenedUser = await VerifyUser.findOne({ token: token });

        if (tokenedUser) {

            const insertUser = new User({
                name: tokenedUser.name,
                email: tokenedUser.email,
                password: tokenedUser.password,
                token: token,
                forgetPassword: {}
            })
            await insertUser.save().then(() => {
                console.log(`${tokenedUser.name} inserted successfully`);
            })
            await VerifyUser.deleteOne({ token: token });
            const content = `<h4 style="color: #009688;">Registration Successful</h4>
            <p>Welcome to Femi9 Women's World</p>
            <p>Regards,</p>
            <p>Femi9 Women's World</p>
            <p><strong>Phone:</strong> 8124337451</p>
            <p><strong>Phone:</strong> 8610418066</p>
            <p>Trichy</p>           
            `
            sendMail(insertUser.email, 'Registeration successfull', content);
            return `<h4 style="color: #009688;">Registration Successful</h4>
            <h5 style="color: #009688;">Welcome to Femi9 Women's World</h5>
            <p>You have successfully registered.</p>
            <p>Regards,</p>
            <p>Femi9 Women's World</p>
            <p><strong>Phone:</strong> 8124337451</p>
            <p><strong>Phone:</strong> 8610418066</p>
            <p>Trichy</p>
            `;
        }
        return `<h4>Registeration failed</h4>
        <p>Token might be expired</p>
        <p>Regards</p>
        <p>Team</p>`;

    }
    catch (e) {

        return `
        <html>
        <body>
        <h4>Registeration failed</h4>
        <p>Token might be expired</p>
        <p>Regards</p>
        <p>Team</p>
        </body>
        </html>
        `
    }
}

module.exports = { InsertVerifyUser, CheckVerifyUser };