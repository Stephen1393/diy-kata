const joinNames = (namesObj) => {
    const list = namesObj.map(person => person.name);

    if (list.length === 1) {
        return list[0]
    }
    const butLast = list.slice(0, -1).join(", ")
    const last = list[list.length -1]

    const result = butLast + " & " + last
    
    return result
}


module.exports = joinNames;
