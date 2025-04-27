import crypto from 'crypto'

export const generateCodeEightChars = () => {
    const length = 8
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let code = ''
    for (let i = 0; i < length; i++){
        const randomIndex = crypto.randomInt(0, chars.length)
        code += chars.charAt(randomIndex)
    }
    return code
}