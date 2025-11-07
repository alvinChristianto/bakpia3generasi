import { z, defineCollection } from "astro:content";
import { file } from "astro/loaders";

const plates = defineCollection({
  loader: file("src/data/plates.json"),
  schema: z.object({
    slug: z.string(),
    prettyName: z.string(),
    description: z.string(),
    plates: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
      }),
    ),
  }),
});

const reviews = defineCollection({
  loader: file("src/data/reviews.json"),
  schema: z.object({
    author: z.string(),
    review: z.string(),
  }),
});

const gallery = defineCollection({
  loader: file("src/data/gallery.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      alt: z.string(),
      image: image(),
    }),
});

const outlet = defineCollection({
  loader: file("src/data/outlet.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      openAt: z.string(),
      whatsapp: z.string(),
      image: image(),
      maps: z.string(),
    }),
});

const hotel = defineCollection({
  loader: file("src/data/hotel.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      openAt: z.string(),
      whatsapp: z.string(),
      image: image(),
      maps: z.string(),
    }),
});

const dentes = defineCollection({
  loader: file("src/data/dentes.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      openAt: z.string(),
      whatsapp: z.string(),
      image: image(),
      maps: z.string(),
    }),
});

export const collections = { plates, reviews, gallery, outlet, hotel, dentes };
