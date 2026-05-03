export const costoPlanSemanal = (plan) => plan.reduce((acc, d) => acc + Number(d.total || 0), 0);
export const ingredientesUnicos = (plan) => [...new Set(plan.flatMap(d => ['desayuno','almuerzo','cena'].flatMap(k => d[k]?.ingredientes || [])))];
