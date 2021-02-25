module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < str.length && i < bracketsConfig.length; i++) {
        if (!str.includes(bracketsConfig)) {
            return true
        }
        else {
            return true
        }
    }
}
