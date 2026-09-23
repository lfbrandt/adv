export type Location = Readonly<{
  number: string;
  city: string;
  state: string;
  addressLines: readonly string[];
  postalCode: string;
}>;

export const contact = {
  email: "vidolin.goetzke@gmail.com",
  emailHref: "mailto:vidolin.goetzke@gmail.com",
  instagram: {
    handle: "@vidolinegoetzke",
    url: "https://www.instagram.com/vidolinegoetzke/",
  },
} as const;

export const locations = [
  {
    number: "01",
    city: "Campina Grande do Sul",
    state: "PR",
    addressLines: ["Rua Pedro Bossardi, 363, sala 05", "Jardim Paulista"],
    postalCode: "83430-000",
  },
  {
    number: "02",
    city: "Curitiba",
    state: "PR",
    addressLines: [
      "Av. Sete de Setembro, 2775",
      "9º andar, conj. 316",
      "Rebouças",
    ],
    postalCode: "80230-010",
  },
] as const satisfies readonly Location[];
