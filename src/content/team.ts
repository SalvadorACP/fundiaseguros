import type { StaticImageData } from "next/image";
import gilbertoPhoto from "../../public/images/equipoFundia/José Gilberto Ayala Rosales.png";
import janPhoto from "../../public/images/equipoFundia/Jan Carlo Moran Rosales.png";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: StaticImageData;
  biography?: string;
  phone?: string;
  phoneDisplay?: string;
  email?: string;
};

// Agrega un registro y su imagen para mostrar un integrante en inicio y /equipo.
// Los cargos y contactos provienen de las tarjetas proporcionadas por Fundia.
export const teamMembers: TeamMember[] = [
  {
    id: "jose-gilberto-ayala-rosales",
    name: "José Gilberto Ayala Rosales",
    role: "Director General",
    image: gilbertoPhoto,
    biography: "Licenciado en Finanzas por la Universidad de Colima. Su trayectoria en el sector asegurador dio origen a Fundia, que se consolidó como despacho en 2023. Desde Mazatlán, el equipo combina atención presencial y seguimiento digital.",
    phone: "+526693252858",
    phoneDisplay: "669 325 2858",
    email: "gilbertoayala@fundiaseguros.com",
  },
  {
    id: "jan-carlo-moran-rosales",
    name: "Jan Carlo Moran Rosales",
    role: "Director de Operaciones",
    image: janPhoto,
    phone: "+526691650257",
    phoneDisplay: "669 165 0257",
    email: "tramites@fundiaseguros.com",
  },
];
