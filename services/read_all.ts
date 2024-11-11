import GenericPortal from "../portais/generic_portal";

class ServiceReadAll {
  private readonly portals: GenericPortal[];

  constructor(portals: GenericPortal[]) {
    this.portals = portals;
  }

  async execute() {
    await Promise.all(this.portals.map((portal) => portal.execute())).then(
      (noticias) => {
        console.log(noticias.flat(1));
      }
    );
  }
}

export default ServiceReadAll;
