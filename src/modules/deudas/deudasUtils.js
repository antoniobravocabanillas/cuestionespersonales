export const saldoPendiente = (d) => Math.max(0, Number(d.total || 0) - Number(d.pagadoAcum || 0));
export const totalDeuda = (deudas) => deudas.reduce((acc, d) => acc + saldoPendiente(d), 0);
export const cuotaMensualTotal = (deudas) => deudas.reduce((acc, d) => acc + Number(d.cuotaMensual || 0), 0);
