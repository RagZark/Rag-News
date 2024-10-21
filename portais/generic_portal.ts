import axios from "axios";
import parse from "node-html-parser";

interface Noticia {
  fonte: string;
  titulo: string;
  data: string;
  imagem: string;
  url: string;
}

class GenericPortal {
  private url_noticias!: string;
  private noticias!: Noticia[];
  private articles_query!: string;
  private articles!: [any];

  constructor() {}

  set_url(url: string) {
    this.url_noticias = url;
  }

  get_url(url: string) {
    return this.noticias;
  }

  set_articles_query(query: string) {
    this.articles_query = query;
  }

  async load_articles() {
    const response = await axios.get(this.url_noticias);
    const root = parse(response.data);

    const articles = root.querySelectorAll(this.articles_query);

    this.articles = articles as [any];
  }

  load_noticias() {
    this.noticias = this.articles.map((article: any) => {
      return {
        titulo: this.get_title(article),
        data: "",
        fonte: "",
        imagem: "",
        url: "",
      };
    });
    return this.noticias;
  }

  async process() {
    await this.load_articles();
    this.load_noticias();
    return this.noticias;
  }

  get_title(_article: any): string {
    return "";
  }
}

export default GenericPortal;
