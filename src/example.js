export function sortObjectsArray(array, keyToSort, order = 'asc'){
    if(!array) throw new Error('Array not recieved')
    if(!keyToSort) throw new Error ('Key not recieved')
    return array.sort((a,b) => {
        const propA = a[keyToSort]
        const propB = b[keyToSort]
        if(order === 'asc'){
            if(propA < propB) return -1
            if(propA > propB) return 1
        } else {
            if(propA > propB) return -1
            if(propA < propB) return 1
        }
        return 0
    })
}