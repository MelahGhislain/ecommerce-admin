export const getCategoryRows = (data) => {
    return data.map(item => {
        return {
            id: item._id,
            image: item.image,
            name: item.name,
            description: item.description,
            modify: item._id
        }
    })
}