import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const directions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/directions' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Детям', 'Взрослым', 'Фитнес', '60+']),
    age: z.string().default(''),
    level: z.string().default(''),
    duration: z.string().default(''),
    trainers: z.array(z.string()).default([]),
    photo: z.string().optional().default(''),
    short: z.string().default(''),
    benefits: z.array(z.string()).default([]),
    fitbase_filter: z.string().optional().default(''),
    featured: z.boolean().default(false),
    order: z.number().default(100)
  })
});

const trainers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trainers' }),
  schema: z.object({
    name: z.string(),
    role: z.string().default(''),
    tags: z.array(z.string()).default([]),
    photo: z.string().optional().default(''),
    bio: z.string().default(''),
    order: z.number().default(100)
  })
});

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    poster_title: z.string().default(''),
    teacher: z.string().default(''),
    start: z.coerce.date(),
    end: z.coerce.date(),
    days: z.string().default(''),
    time: z.string().default(''),
    branch: z.string().default(''),
    lessons: z.number().default(0),
    price: z.number().default(0),
    poster: z.string().optional().default(''),
    photo: z.string().optional().default(''),
    tagline: z.array(z.string()).default([]),
    gains: z.array(z.object({ title: z.string(), text: z.string().default('') })).default([]),
    program: z.array(z.object({ title: z.string(), text: z.string().default('') })).default([]),
    for_whom: z.array(z.string()).default([]),
    bring: z.array(z.string()).default([]),
    teacher_bio: z.string().default(''),
    seats_note: z.string().default(''),
    draft: z.boolean().default(false)
  })
});

export const collections = { directions, trainers, courses };
