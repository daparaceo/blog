import { defineCollection, z } from 'astro:content';

export const CATEGORIES = [
  { slug: 'english-reading', label: '영어원서읽기', desc: '아이와 함께 읽는 원서 리뷰와 영어 학습 콘텐츠' },
] as const;

export type CategorySlug = typeof CATEGORIES[number]['slug'];

const contentSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  publishedAt: z.date(),

  category: z.enum([
    'life-info', 'tech', 'finance', 'travel', 'weekend-trip', 'food', 'english-reading', 'camping'
  ]).optional(),

  categories: z.array(z.enum([
    'life-info', 'tech', 'finance', 'travel', 'weekend-trip', 'food', 'english-reading', 'camping'
  ])).optional().default([]),

  tags: z.array(z.string()).optional().default([]),

  ogImage: z.string().optional(),

  en_title: z.string().optional(),
  author: z.string().optional(),
  ar_level: z.number().optional(),
  series: z.string().optional(),
  isbn: z.string().optional(),

  locations: z.array(z.object({
    lat: z.number(),
    lng: z.number(),
    label: z.string().optional(),
  })).optional(),

  pinnedRelated: z.array(z.string()).optional().default([]),

  draft: z.boolean().optional().default(false),
});

const learnCollection = defineCollection({ type: 'content', schema: contentSchema });

export const collections = {
  learn: learnCollection,
};
