import { defineCollection, z } from 'astro:content'

const tutorial = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
})

export const collections = {
  tutorial
}
