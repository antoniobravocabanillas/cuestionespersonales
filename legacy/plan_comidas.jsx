import { useState } from "react";

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const plan = [
  {
    dia: "Lunes",
    color: "#2D6A4F",
    desayuno: {
      nombre: "Avena cremosa con plátano",
      ingredientes: ["½ taza avena (c/u)", "1 plátano", "canela", "azúcar o miel", "agua/leche"],
      tip: "Preparar la avena la noche anterior ahorra tiempo.",
      costo: 4,
    },
    almuerzo: {
      nombre: "Estofado de pollo con arroz",
      ingredientes: ["2 presas pollo", "1 taza arroz", "1 zanahoria", "1 papa", "tomate, cebolla, ajo", "sazón al gusto"],
      tip: "El estofado rinde más si se cocina en olla a presión. Aprovechar el caldo.",
      costo: 13,
    },
    cena: {
      nombre: "Sopa de fideo con verduras",
      ingredientes: ["100g fideos", "el caldo sobrante del pollo", "zanahoria", "1 huevo", "cebolla china"],
      tip: "Usar el caldo del almuerzo — la cena cuesta casi nada.",
      costo: 4,
    },
    total: 21,
  },
  {
    dia: "Martes",
    color: "#1B4F72",
    desayuno: {
      nombre: "Pan con huevo frito + café",
      ingredientes: ["2 panes franceses", "2 huevos", "aceite", "café o té"],
      tip: "Comprar el pan en la madrugada sale más fresco y barato en la panadería.",
      costo: 5,
    },
    almuerzo: {
      nombre: "Lentejas guisadas con arroz",
      ingredientes: ["1 taza lentejas", "1 taza arroz", "2 huevos fritos", "tomate, cebolla, ajo", "hierba buena"],
      tip: "Remojar lentejas desde la noche anterior = 30 min menos de cocción.",
      costo: 10,
    },
    cena: {
      nombre: "Sándwich de atún con tomate",
      ingredientes: ["1 lata atún", "4 panes de molde", "1 tomate", "mayonesa casera (yema+aceite)", "lechuga opcional"],
      tip: "La mayonesa casera (yema + aceite + limón) sale S/ 0.50 y es mejor.",
      costo: 8,
    },
    total: 23,
  },
  {
    dia: "Miércoles",
    color: "#7D3C98",
    desayuno: {
      nombre: "Mazamorra de avena con fruta",
      ingredientes: ["1 taza avena", "leche o agua", "canela", "clavo", "azúcar", "1 plátano o naranja"],
      tip: "Dulce, caliente y llena. Evita comprar snacks a media mañana.",
      costo: 4,
    },
    almuerzo: {
      nombre: "Tallarín con salsa de pollo",
      ingredientes: ["200g fideos gruesos", "1 presa pollo desmenuzado", "tomate, cebolla, ajo", "orégano", "queso rallado opcional"],
      tip: "El pollo desmenuzado rinde más que las presas enteras para pastas.",
      costo: 12,
    },
    cena: {
      nombre: "Ensalada de atún con papa",
      ingredientes: ["1 lata atún", "2 papas medianas sancochadas", "1 tomate", "cebolla morada", "limón y aceite"],
      tip: "Sancochar papas de más el día anterior y usar en cenas o desayunos.",
      costo: 8,
    },
    total: 24,
  },
  {
    dia: "Jueves",
    color: "#B7500E",
    desayuno: {
      nombre: "Pan con queso fresco + té",
      ingredientes: ["2 panes franceses", "50g queso fresco", "té o manzanilla"],
      tip: "El queso fresco del mercado es 40% más barato que el empaquetado.",
      costo: 5,
    },
    almuerzo: {
      nombre: "Arroz con frijoles + pollo al horno",
      ingredientes: ["1 taza arroz", "½ taza frijoles", "2 presas pollo", "ajo, sal, pimienta, comino", "papa o yuca"],
      tip: "Hornear el pollo en vez de freír ahorra aceite y queda más jugoso.",
      costo: 13,
    },
    cena: {
      nombre: "Huevos a la chorrillana",
      ingredientes: ["4 huevos", "1 cebolla", "1 tomate", "ají amarillo (opcional)", "pan o arroz sobrante"],
      tip: "Plato clásico limeño, económico y llenador para la cena.",
      costo: 6,
    },
    total: 24,
  },
  {
    dia: "Viernes",
    color: "#117A65",
    desayuno: {
      nombre: "Huevos revueltos con tomate",
      ingredientes: ["3 huevos", "1 tomate", "cebolla china", "sal y pimienta", "pan o tortilla"],
      tip: "Los huevos son la proteína más barata. Tener siempre en stock.",
      costo: 5,
    },
    almuerzo: {
      nombre: "Caldo de pollo + segundo de arroz",
      ingredientes: ["carcasa/huesos pollo", "papa, zanahoria, cebolla, apio", "arroz", "fideos en el caldo"],
      tip: "Guardar siempre los huesos del pollo de la semana. Hacen un caldo excelente y salen gratis.",
      costo: 10,
    },
    cena: {
      nombre: "Causa limeña de atún",
      ingredientes: ["3 papas amarillas", "1 lata atún", "ají amarillo", "mayonesa", "limón", "aceituna"],
      tip: "La causa es fácil, fría y sorprende. Prepararla 1h antes y meter a la refri.",
      costo: 10,
    },
    total: 25,
  },
  {
    dia: "Sábado",
    color: "#C0392B",
    desayuno: {
      nombre: "Pancakes con plátano y miel",
      ingredientes: ["1 taza harina", "1 huevo", "½ taza leche", "1 plátano", "aceite", "miel o mermelada"],
      tip: "Día de descanso, desayuno más elaborado. Sale S/ 5 para los dos.",
      costo: 5,
    },
    almuerzo: {
      nombre: "Arroz con pollo (plato bandera)",
      ingredientes: ["2 tazas arroz", "½ pollo", "culantro", "ají amarillo", "cebolla, ajo, cerveza negra (opcional)", "arvejas", "zanahoria"],
      tip: "El plato fuerte de la semana. Se cocina el sábado y alcanza para la cena también.",
      costo: 15,
    },
    cena: {
      nombre: "Porción del arroz con pollo + ensalada",
      ingredientes: ["sobrante almuerzo", "1 tomate", "1 pepino", "limón"],
      tip: "Cocinar de más en el almuerzo del sábado = cena casi sin costo.",
      costo: 3,
    },
    total: 23,
  },
  {
    dia: "Domingo",
    color: "#1A5276",
    desayuno: {
      nombre: "Tamales + chicha morada (pequeño lujo)",
      ingredientes: ["2 tamales del mercado (S/ 1.50–2 c/u)", "chicha morada casera (maíz morado, piña, clavo, canela)"],
      tip: "Un gusto semanal controlado. Los tamales del mercado de San Miguel son buenos y baratos.",
      costo: 8,
    },
    almuerzo: {
      nombre: "Sancochado simple de res",
      ingredientes: ["300g falda o hueso res", "papa, camote, yuca", "zanahoria, choclo", "col", "arroz"],
      tip: "La carne con hueso es más barata y da más sabor. El caldo sirve para la cena.",
      costo: 14,
    },
    cena: {
      nombre: "Sopa de verduras con huevo",
      ingredientes: ["caldo sobrante del sancochado", "2 huevos", "fideos o arroz", "cebolla china"],
      tip: "El domingo se cierra la semana sin desperdiciar nada del sancochado.",
      costo: 3,
    },
    total: 25,
  },
];

const lista = [
  { cat: "🥩 Proteínas", items: [
    { nombre: "Pollo (1.5 kg)", precio: 14 },
    { nombre: "Huesos / carcasa res (caldo)", precio: 4 },
    { nombre: "Huevos (15 unidades)", precio: 10 },
    { nombre: "Atún en lata (2 unidades)", precio: 7 },
    { nombre: "Queso fresco (100g)", precio: 3 },
  ]},
  { cat: "🌾 Granos y carbos", items: [
    { nombre: "Arroz (1.5 kg)", precio: 6 },
    { nombre: "Fideos (500g)", precio: 3 },
    { nombre: "Lentejas (500g)", precio: 3.5 },
    { nombre: "Frijoles (500g)", precio: 3 },
    { nombre: "Avena (500g)", precio: 3.5 },
    { nombre: "Harina de trigo (500g)", precio: 2 },
  ]},
  { cat: "🥔 Tubérculos", items: [
    { nombre: "Papa blanca (2 kg)", precio: 5 },
    { nombre: "Papa amarilla (1 kg)", precio: 4 },
    { nombre: "Camote (1 kg)", precio: 3 },
    { nombre: "Yuca (1 kg)", precio: 2.5 },
  ]},
  { cat: "🥦 Verduras", items: [
    { nombre: "Tomates (500g)", precio: 2 },
    { nombre: "Cebolla (500g)", precio: 1.5 },
    { nombre: "Zanahoria (500g)", precio: 1.5 },
    { nombre: "Ají amarillo (100g)", precio: 1.5 },
    { nombre: "Apio (atado)", precio: 1 },
    { nombre: "Col chica", precio: 1.5 },
    { nombre: "Cebolla china (atado)", precio: 1 },
    { nombre: "Choclo (1 unidad)", precio: 1 },
  ]},
  { cat: "🍌 Frutas", items: [
    { nombre: "Plátanos (racimo pequeño)", precio: 3 },
    { nombre: "Naranjas (6 unidades)", precio: 3 },
    { nombre: "Limones (10 unidades)", precio: 1.5 },
    { nombre: "Piña chica (para chicha)", precio: 2 },
  ]},
  { cat: "🍞 Panadería y lácteos", items: [
    { nombre: "Pan francés (semana)", precio: 6 },
    { nombre: "Pan de molde (1 bolsa)", precio: 4 },
    { nombre: "Leche (1 litro)", precio: 4 },
    { nombre: "Tamales domingos (2)", precio: 5 },
  ]},
  { cat: "🧴 Despensa (duran varias semanas)", items: [
    { nombre: "Aceite (1L)", precio: 7 },
    { nombre: "Ajo (cabeza)", precio: 1.5 },
    { nombre: "Culantro (atado)", precio: 1 },
    { nombre: "Maíz morado (para chicha)", precio: 2 },
    { nombre: "Sal, azúcar, canela, comino", precio: 4 },
    { nombre: "Café / té / manzanilla", precio: 5 },
  ]},
];

const totalLista = lista.flatMap(c => c.items).reduce((s, i) => s + i.precio, 0);
const totalSemana = plan.reduce((s, d) => s + d.total, 0);

export default function PlanComidas() {
  const [diaActivo, setDiaActivo] = useState(0);
  const [tab, setTab] = useState("plan"); // plan | lista
  const d = plan[diaActivo];

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "linear-gradient(135deg, #0f1923 0%, #1a2a3a 100%)",
      minHeight: "100vh",
      color: "#f0e6d3",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(90deg, #1a3a2a, #2a1a3a)",
        borderBottom: "2px solid #c9a84c",
        padding: "20px 24px 16px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 4, color: "#c9a84c", textTransform: "uppercase", marginBottom: 4 }}>
              Lima · San Miguel · Para dos personas
            </div>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: "normal", color: "#f5e6c8", letterSpacing: 1 }}>
              Plan Alimentario Semanal
            </h1>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: "#a0b4a0", marginBottom: 2 }}>Meta mensual</div>
            <div style={{ fontSize: 26, fontWeight: "bold", color: "#c9a84c" }}>S/ 700</div>
            <div style={{ fontSize: 11, color: "#80a880" }}>≈ S/ 23/día para 2</div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          {[["plan", "📅 Plan semanal"], ["lista", "🛒 Lista de compras"]].map(([key, label]) => (
            <button key={key} onClick={() => setTab(key)} style={{
              background: tab === key ? "#c9a84c" : "transparent",
              color: tab === key ? "#0f1923" : "#c9a84c",
              border: "1px solid #c9a84c",
              borderRadius: 4,
              padding: "6px 16px",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: tab === key ? "bold" : "normal",
              transition: "all 0.2s",
            }}>{label}</button>
          ))}
        </div>
      </div>

      {tab === "plan" ? (
        <div>
          {/* Días selector */}
          <div style={{
            display: "flex",
            overflowX: "auto",
            padding: "12px 16px 0",
            gap: 8,
            borderBottom: "1px solid #2a3a2a",
          }}>
            {plan.map((d, i) => (
              <button key={i} onClick={() => setDiaActivo(i)} style={{
                background: diaActivo === i ? d.color : "rgba(255,255,255,0.05)",
                color: diaActivo === i ? "#fff" : "#a0b4a0",
                border: diaActivo === i ? `2px solid ${d.color}` : "2px solid transparent",
                borderRadius: "8px 8px 0 0",
                padding: "8px 14px",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: diaActivo === i ? "bold" : "normal",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}>
                <div>{d.dia.slice(0,3)}</div>
                <div style={{ fontSize: 11, marginTop: 2, color: diaActivo === i ? "rgba(255,255,255,0.8)" : "#5a7a5a" }}>
                  S/ {d.total}
                </div>
              </button>
            ))}
          </div>

          {/* Contenido del día */}
          <div style={{ padding: "20px 16px" }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}>
              <h2 style={{ margin: 0, fontSize: 20, color: d.color, fontWeight: "normal", letterSpacing: 1 }}>
                {d.dia}
              </h2>
              <div style={{
                background: d.color,
                color: "#fff",
                borderRadius: 20,
                padding: "4px 14px",
                fontSize: 13,
                fontWeight: "bold",
              }}>
                S/ {d.total} total
              </div>
            </div>

            {/* Comidas */}
            {[
              { key: "desayuno", label: "☀️ Desayuno", hora: "7:00 – 8:00 am" },
              { key: "almuerzo", label: "🍽️ Almuerzo", hora: "12:30 – 1:30 pm" },
              { key: "cena", label: "🌙 Cena", hora: "7:30 – 8:30 pm" },
            ].map(({ key, label, hora }) => {
              const comida = d[key];
              return (
                <div key={key} style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid rgba(201,168,76,0.2)`,
                  borderLeft: `3px solid ${d.color}`,
                  borderRadius: 8,
                  padding: "14px 16px",
                  marginBottom: 12,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div>
                      <span style={{ fontSize: 11, color: "#c9a84c", letterSpacing: 2, textTransform: "uppercase" }}>
                        {label}
                      </span>
                      <span style={{ marginLeft: 10, fontSize: 11, color: "#5a7a7a" }}>{hora}</span>
                    </div>
                    <span style={{
                      background: "rgba(201,168,76,0.15)",
                      color: "#c9a84c",
                      borderRadius: 10,
                      padding: "2px 10px",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}>S/ {comida.costo}</span>
                  </div>

                  <div style={{ fontSize: 16, color: "#f0e6d3", marginBottom: 10, fontStyle: "italic" }}>
                    {comida.nombre}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                    {comida.ingredientes.map((ing, j) => (
                      <span key={j} style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 12,
                        padding: "3px 10px",
                        fontSize: 11,
                        color: "#c0d0c0",
                      }}>{ing}</span>
                    ))}
                  </div>

                  <div style={{
                    background: "rgba(201,168,76,0.08)",
                    borderRadius: 6,
                    padding: "7px 10px",
                    fontSize: 12,
                    color: "#d4c090",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 6,
                  }}>
                    <span>💡</span>
                    <span>{comida.tip}</span>
                  </div>
                </div>
              );
            })}

            {/* Resumen semanal mini */}
            <div style={{
              marginTop: 20,
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: 8,
              padding: 14,
            }}>
              <div style={{ fontSize: 11, color: "#c9a84c", letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
                Costo semanal — todos los días
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {plan.map((pd, i) => (
                  <div key={i} onClick={() => setDiaActivo(i)} style={{
                    cursor: "pointer",
                    textAlign: "center",
                    background: i === diaActivo ? pd.color : "rgba(255,255,255,0.04)",
                    border: `1px solid ${i === diaActivo ? pd.color : "rgba(255,255,255,0.08)"}`,
                    borderRadius: 6,
                    padding: "6px 12px",
                    minWidth: 60,
                  }}>
                    <div style={{ fontSize: 11, color: i === diaActivo ? "#fff" : "#8a9a8a" }}>
                      {pd.dia.slice(0,3)}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: "bold", color: i === diaActivo ? "#fff" : "#c9a84c" }}>
                      S/ {pd.total}
                    </div>
                  </div>
                ))}
                <div style={{
                  textAlign: "center",
                  background: "rgba(201,168,76,0.2)",
                  border: "1px solid #c9a84c",
                  borderRadius: 6,
                  padding: "6px 12px",
                  minWidth: 60,
                }}>
                  <div style={{ fontSize: 11, color: "#c9a84c" }}>SEMANA</div>
                  <div style={{ fontSize: 14, fontWeight: "bold", color: "#c9a84c" }}>S/ {totalSemana}</div>
                </div>
              </div>
              <div style={{ marginTop: 10, fontSize: 12, color: "#80a080" }}>
                Proyección mensual: <strong style={{ color: "#c9a84c" }}>S/ {(totalSemana * 4.3).toFixed(0)}</strong>
                {" "}· Vs. lo que gastan ahora:{" "}
                <strong style={{ color: "#c05050" }}>S/ 1,860</strong>
                {" "}· Ahorro:{" "}
                <strong style={{ color: "#50c050" }}>
                  S/ {(1860 - totalSemana * 4.3).toFixed(0)}/mes
                </strong>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* LISTA DE COMPRAS */
        <div style={{ padding: "20px 16px" }}>
          <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 18, fontWeight: "normal", color: "#f5e6c8" }}>
                Lista semanal — Mercado Modelo
              </h2>
              <div style={{ fontSize: 12, color: "#80a080", marginTop: 4 }}>
                Comprar lunes temprano. Todo disponible en San Miguel Mercado Modelo o Marine Market.
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: "#808080" }}>Total estimado</div>
              <div style={{ fontSize: 22, fontWeight: "bold", color: "#c9a84c" }}>
                S/ {totalLista.toFixed(0)}
              </div>
              <div style={{ fontSize: 11, color: "#80a080" }}>por semana</div>
            </div>
          </div>

          {lista.map((cat, ci) => (
            <div key={ci} style={{ marginBottom: 16 }}>
              <div style={{
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#c9a84c",
                borderBottom: "1px solid rgba(201,168,76,0.2)",
                paddingBottom: 6,
                marginBottom: 8,
              }}>{cat.cat}</div>
              {cat.items.map((item, ii) => (
                <div key={ii} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "7px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{
                      width: 18, height: 18,
                      border: "1px solid rgba(201,168,76,0.4)",
                      borderRadius: 3,
                      display: "inline-block",
                      flexShrink: 0,
                    }}></span>
                    <span style={{ fontSize: 14, color: "#d0e0d0" }}>{item.nombre}</span>
                  </div>
                  <span style={{ fontSize: 14, color: "#c9a84c", fontWeight: "bold", whiteSpace: "nowrap", marginLeft: 12 }}>
                    S/ {item.precio.toFixed(1)}
                  </span>
                </div>
              ))}
            </div>
          ))}

          <div style={{
            background: "rgba(201,168,76,0.1)",
            border: "1px solid rgba(201,168,76,0.4)",
            borderRadius: 8,
            padding: 16,
            marginTop: 8,
          }}>
            <div style={{ fontSize: 13, color: "#c9a84c", fontWeight: "bold", marginBottom: 8 }}>
              📌 Reglas de compra inteligente en San Miguel
            </div>
            {[
              "Mercado Modelo (frutas, verduras, carnes) = 30–40% más barato que supermercado",
              "Comprar al por mayor: arroz, lentejas y avena en bolsa grande duran el mes",
              "La carne con hueso (para caldos) es 50% más barata que carne limpia",
              "Metro o Plaza Vea solo para abarrotes en oferta o lo que no hay en mercado",
              "Nunca ir al mercado con hambre ni sin lista — los \"otros\" de S/ 70 empiezan así",
            ].map((txt, i) => (
              <div key={i} style={{ fontSize: 12, color: "#a0c0a0", marginBottom: 5, display: "flex", gap: 8 }}>
                <span style={{ color: "#c9a84c" }}>→</span>
                <span>{txt}</span>
              </div>
            ))}
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            marginTop: 16,
          }}>
            {[
              ["Lista semana", `S/ ${totalLista.toFixed(0)}`],
              ["x 4 semanas", `S/ ${(totalLista * 4).toFixed(0)}`],
              ["Presupuesto meta", "S/ 700"],
              ["Margen para extras", `S/ ${(700 - totalLista * 4).toFixed(0)}`],
            ].map(([label, val], i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 6,
                padding: "10px 14px",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 11, color: "#80a080" }}>{label}</div>
                <div style={{ fontSize: 18, fontWeight: "bold", color: "#c9a84c", marginTop: 4 }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
