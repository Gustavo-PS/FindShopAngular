export interface Sesao {
    nome: string
}

export interface Produto {
    sesao: Sesao
    produto: string
    imagem?: ImageData
}