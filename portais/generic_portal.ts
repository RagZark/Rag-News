import axios from "axios";
import parse from "node-html-parser";
import PortalInterface from "../interfaces/portal_interface";

interface Noticia {
  fonte: string;
  titulo: string;
  data: string;
  imagem: string;
  url: string;
}

interface ToQueryInterface {
  query: string;
  attribute: string;
}

type ToQuery = ToQueryInterface | String | false;

class GenericPortal implements PortalInterface {
  private url_noticias!: string;
  private noticias!: Noticia[];
  private articles_query!: string;
  private articles!: [any];

  protected titleToQuery!: ToQuery;
  protected dateToQuery!: ToQuery;
  protected fontToQuery!: ToQuery;
  protected imageToQuery!: ToQuery;
  protected urlToQuery!: ToQuery;

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
        titulo: this.get_from_html(article, this.titleToQuery),
        data: this.get_from_html(article, this.dateToQuery),
        fonte: this.get_from_html(article, this.fontToQuery),
        imagem: this.get_from_html(article, this.imageToQuery),
        url: this.get_from_html(article, this.urlToQuery),
      };
    });
    return this.noticias;
  }

  async process() {
    await this.load_articles();
    this.load_noticias();
    return this.noticias;
  }

  get_from_html(elm: any, toQuery: ToQuery): string {
    if (!toQuery) {
      return "Sem Imagem";
    }

    if (typeof toQuery === "string" || toQuery instanceof String) {
      return toQuery.toString();
    }

    let response: string;
    const loadelm = elm.querySelector(toQuery.query);
    if (toQuery.attribute === "text") {
      response = loadelm?.text ?? "";
    } else {
      response = loadelm?.getAttribute(toQuery.attribute) ?? "";
    }
    response = response.trim();
    return response;
  }

  set_title(title: ToQuery) {
    this.titleToQuery = title;
  }
  set_date(date: ToQuery) {
    this.dateToQuery = date;
  }
  set_font(font: ToQuery) {
    this.fontToQuery = font;
  }
  set_image(image: ToQuery) {
    this.imageToQuery = image;
  }
  set_url_new(url: ToQuery) {
    this.urlToQuery = url;
  }
}

export default GenericPortal;
