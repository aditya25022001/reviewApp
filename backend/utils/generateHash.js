import bcrypt from 'bcryptjs'

const generateHash = (otp) => {
    return bcrypt.hashSync(otp,10)
}

export default generateHash