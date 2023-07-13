class Products {
    title: string
    description: string
    image: string
    id: number
    infos: string[]

    constructor(
        title: string,
        description: string,
        image: string,
        id: number,
        infos: string[]
    ) {
        this.title = title
        this.description = description
        this.image = image
        this.id = id
        this.infos = infos
    }
}

export default Products
