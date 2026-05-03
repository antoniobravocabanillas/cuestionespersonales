export const totalComprasEstimadas = (items) => items.reduce((acc, item) => acc + Number(item.estimado || 0), 0);
