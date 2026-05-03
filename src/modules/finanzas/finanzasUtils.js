export const formatMoney = (value, currency = 'S/') => `${currency} ${Number(value || 0).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
export const sumBy = (items, fn) => items.reduce((acc, item) => acc + Number(fn(item) || 0), 0);
export const getGastos = (movimientos) => movimientos.filter(m => m.tipo === 'Gasto');
export const getIngresos = (movimientos) => movimientos.filter(m => m.tipo === 'Ingreso');
export const totalGastos = (movimientos) => sumBy(getGastos(movimientos), m => m.monto);
export const totalIngresos = (movimientos) => sumBy(getIngresos(movimientos), m => m.monto);
export const flujoNeto = (movimientos) => totalIngresos(movimientos) - totalGastos(movimientos);
export const gastoPorCategoria = (movimientos) => Object.values(getGastos(movimientos).reduce((acc, m) => { acc[m.categoria] ??= { categoria: m.categoria, gasto: 0 }; acc[m.categoria].gasto += Number(m.monto || 0); return acc; }, {}));
