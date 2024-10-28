import GenericPortal from "./generic_portal";

class TecMundoPortal extends GenericPortal implements PortalInterface {
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

  get_image(article: any): string {
    return (
      article
        .querySelector(".tec--card__thumb__image")
        ?.getAttribute("data-src") ?? ""
    );
  }

  get_url_news(article: any): string {
    return article.querySelector("figure>a")?.getAttribute("href") ?? "";
  }
}

export default TecMundoPortal;
