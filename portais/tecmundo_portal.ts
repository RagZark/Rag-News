import GenericPortal from "./generic_portal";

class TecMundoPortal extends GenericPortal {
  constructor() {
    super();
    this.set_url("https://www.tecmundo.com.br/novidades");
    this.set_articles_query("article.tec--card.tec--card--medium");
  }

  get_title(article: any) {
    return article.querySelector("h4.tec--card__title")?.text ?? "";
  }

  get_date(article: any) {
    return article.querySelector("div.tec--timestamp__item")?.text ?? "";
  }

  get_font(article: any) {
    return article.querySelector("div>a")?.text ?? "";
  }
}

export default TecMundoPortal;
