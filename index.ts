import axios from "axios";
import parse from "node-html-parser";

interface Noticia{
    fonte: string
    titulo: string
    data: string
    imagem: string
    url: string
}

const noticiasTecMundo = async () =>{ 
    const response = await axios.get("https://www.tecmundo.com.br/novidades")
    const root = parse(response.data)

    let noticias:Noticia[]
    
    const articles = root.querySelectorAll('article.tec--card.tec--card--medium')

  noticias = articles.map(article => {
    return {
      titulo: article.querySelector("h4.tec--card__title")?.text ?? "",
            data: article.querySelector("div.tec--timestamp__item")?.text ?? "",
            fonte: article.querySelector("div>a")?.text ?? "",
            imagem: article.querySelector(".tec--card__thumb__image")?.getAttribute("data-src") ?? "",
            url: article.querySelector("figure>a")?.getAttribute("href") ?? "",
        }
    })

    console.log(noticias)
}

noticiasTecMundo()