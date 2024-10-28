import GenericPortal from "./generic_portal";
import PortalInterface from "../interfaces/portal_interface";

class TecMundoPortal extends GenericPortal implements PortalInterface {
  constructor() {
    super();
    this.set_url("https://www.tecmundo.com.br/novidades");
    this.set_articles_query("article.tec--card.tec--card--medium");
  }

  get_title(article: any) {
    return this.get_from_html(article, "h4.tec--card__title", "text");
  }

  get_date(article: any) {
    return this.get_from_html(article, "div.tec--timestamp__item", "text");
  }

  get_font(article: any) {
    return this.get_from_html(article, "div>a", "text");
  }

  get_image(article: any): string {
    return this.get_from_html(article, ".tec--card__thumb__image", "data-src");
  }

  get_url_news(article: any): string {
    return this.get_from_html(article, "figure>a", "href");
  }
}

export default TecMundoPortal;
