import axios from "axios";
import parse from "node-html-parser";

interface Noticia {
  fonte: string;
  titulo: string;
  data: string;
  imagem: string;
  url: string;
}

class GenericPortal implements PortalInterface {
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
        data: this.get_date(article),
        fonte: this.get_font(article),
        imagem: this.get_image(article),
        url: this.get_url_news(article),
      };
    });
    return this.noticias;
  }

  async process() {
    await this.load_articles();
    this.load_noticias();
    return this.noticias;
  }

  get_from_html(elm: any, query: string, attribute: string): string {
    return elm.querySelector(query)?.getAttribute(attribute) ?? "";
  }

  get_title(_article: any): string {
    return "";
  }

  get_date(_article: any): string {
    return "";
  }

  get_font(_article: any): string {
    return "";
  }

  get_image(_article: any): string {
    return "";
  }

  get_url_news(_article: any): string {
    return "";
  }
}

export default GenericPortal;
