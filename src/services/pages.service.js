export const getPages = async () => {
    const res = await fetch(`http://localhost:4123/pages`)
    const data = await res.json()
    return data
}