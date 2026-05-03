# Personal Finanzas

App web profesional para control financiero personal, deudas, compras, comidas y hábitos.

## Stack
- React + Vite
- CSS propio premium
- Recharts para visualización
- Lucide React para iconografía

## Instalar
```bash
npm install
npm run dev
```

## Subir a GitHub
```bash
git add .
git commit -m "base profesional app finanzas personales"
git branch -M main
git remote add origin https://github.com/antoniobravocabanillas/cuestionespersonales.git
git push -u origin main
```

Si `origin` ya existe:
```bash
git remote remove origin
git remote add origin https://github.com/antoniobravocabanillas/cuestionespersonales.git
git push -u origin main
```

## Estructura
- `src/data`: datos iniciales migrados desde Excel y plan de comidas.
- `src/modules`: lógica de negocio.
- `src/pages`: pantallas principales.
- `src/components`: UI reutilizable.
- `assets`: Excel original.
- `legacy`: JSX original de comidas.
