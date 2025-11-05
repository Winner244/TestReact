import { z } from 'zod'

export const FiltersSchema = z
    .object({
        q: z.string().optional(),

        categories: z.string().optional(), // categories as comma-separated string for simplicity (UI will accept comma list)

        minPrice: z.preprocess((v) => {
            if (v === '' || v === undefined || v === null) return undefined
            const n = Number(v)
            return Number.isFinite(n) ? n : undefined
        }, z.number().nonnegative().optional()),

        maxPrice: z.preprocess((v) => {
            if (v === '' || v === undefined || v === null) return undefined
            const n = Number(v)
            return Number.isFinite(n) ? n : undefined
        }, z.number().nonnegative().optional()),

        rating: z.preprocess((v) => {
            if (v === '' || v === undefined || v === null) return undefined
            const n = Number(v)
            return Number.isFinite(n) ? n : undefined
        }, z.number().min(0).max(5).optional()),

        discountedOnly: z.preprocess((v) => {
            return !!v
        }, z.boolean().optional()),

        minDiscountPercent: z.preprocess((v) => {
            if (v === '' || v === undefined || v === null) return undefined
            const n = Number(v)
            return Number.isFinite(n) ? n : undefined
        }, z.number().min(0).optional()),
    })
    .refine(
        (data) => data.maxPrice === undefined || data.minPrice === undefined || data.maxPrice >= data.minPrice,
        { message: 'maxPrice must be >= minPrice', path: ['maxPrice'] },
    )

export type Filters = z.infer<typeof FiltersSchema>