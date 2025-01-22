// z (Zod) es una biblioteca muy interesante para validar schemas, tipos de datos, formas de objetos, etc...
import { defineCollection, z } from "astro:content";

// De esta forma definimos el formato que tendrán los .md
const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string().url(),
      usa: z.string().url(),
    }),
  }),
});

export const collections = { books };
