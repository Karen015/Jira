// export const getFirstLetters = (fullName) => {
//     const splitNames = fullName.trim().split(' ');
//     let firstLetters = '';

//     splitNames.forEach((i) => {
//         firstLetters += i[0]
//     })

//     return firstLetters.toUpperCase()
    
// }


export const getFirstLetters = (fullName) => {
    const splitNames = fullName.trim().split(' ');
    let firstLetters = '';

    splitNames.forEach((i) => {
        firstLetters += i[0]
    })

    return firstLetters.toUpperCase()
    
}
