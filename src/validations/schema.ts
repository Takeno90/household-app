import { z } from "zod";
// カテゴリー定義
const allCategories = [
    "", // 初期値として空文字を含める
    "食費",
    "日用品",
    "住居費",
    "交際費",
    "娯楽",
    "交通費",
    "給与",
    "副収入",
    "お小遣い",
] as const;
// 空文字を除いたタプル型を作る（型レベルフィルタ）
type NonEmptyCategory = Exclude<typeof allCategories[number], "">;
// 空文字を除いた配列を生成（実行時）
const categoriesWithoutEmpty = allCategories.filter(
    (c): c is NonEmptyCategory => c !== ""
) as [NonEmptyCategory, ...NonEmptyCategory[]];


export const transactionSchema = z.object({
    type: z.enum(["income", "expense"]),
    date: z.string().min(1, { message: "日付は必須です" }),
    amount: z.number().min(1, { message: "金額は1円以上必須です" }),
    content: z
        .string()
        .min(1, { message: "内容を入力してください" })
        .max(50, { message: "内容は50文字以内にしてください。" }),

    // category: z.enum(allCategories)
    //     .refine((val) => val !== "", {
    //         message: "カテゴリを選択してください",
    //     }),
    // category: z.enum(allCategories.filter(c => c !== "") as Exclude<typeof allCategories[number], "">[])
    //     .refine((val) => val !== "", {
    //         message: "カテゴリを選択してください",
    //     }),
    category: z.enum(categoriesWithoutEmpty, {
        message: "カテゴリを選択してください",
    }),
});

export type Schema = z.infer<typeof transactionSchema>;