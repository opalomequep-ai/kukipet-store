# KUKIPET - Suite Completa v2.0

Pastelería Natural para Mascotas | Cuenca, Ecuador

---

## 🚀 INICIO RÁPIDO

### Para Clientes:
1. **Accede aquí:** `kukipet-landing-v2.html` (abre en navegador)
2. Selecciona ciudad → Elige productos → Pedir por WhatsApp

### Para ti (Admin):
1. **Lee esto primero:** `KUKIPET_DOCUMENTACION_COMPLETA.md`
2. **Actualizar precios:** Edita Google Sheets (hoja "Precios")
3. **Cambios reflejan en web** automáticamente en 1-2 minutos

---

## 📁 ARCHIVOS

### 🌐 WEB
- **`kukipet-landing-v2.html`** ← **USA ESTE** (nuevo, optimizado)
  - Precios hardcodeados (fallback GSheets)
  - UI mejorada, responsive
  - Incluye traductor ES/EN
  - Sin dependencias, funciona offline

- `kukipet-landing.html` (obsoleto, archivo original)

### 📊 DATOS
- **`Kukipet_Catalogo_Editable.xlsx`** - Catálogo local (backup)
  - Hojas: `Productos` | `Precios`
  - Sincroniza con Google Sheets cuando se publique

- **Google Sheets (online):** [Enlace](https://docs.google.com/spreadsheets/d/1r7SNKblj-3yleLlVm1f2H7PkgTGBNUg0Vs25KsI6hGc/)
  - Hoja "Precios" = fuente verdad
  - Edita aquí → Web se actualiza automáticamente

### 📖 DOCUMENTACIÓN
- **`KUKIPET_DOCUMENTACION_COMPLETA.md`** ← **LEE ESTO**
  - Guía completa: funcionalidades, FAQ, roadmap
  - Cómo actualizar precios
  - Detalles técnicos

- `GUIA_KUKIPET_Como_Actualizar.md` (incluido en docs completas)
- `KUKIPET_PROYECTO_DOCUMENTACION.md` (incluido en docs completas)

---

## 🔄 FLUJO ACTUALIZACIÓN PRECIOS

```
1. Abres Google Sheets (hoja "Precios")
   ↓
2. Cambias un precio (Ej: Doglletas $1.50 → $2.00)
   ↓
3. Guardas (automático)
   ↓
4. Esperas 1-2 minutos
   ↓
5. Web muestra nuevo precio automáticamente ✅
```

**Nota:** Para que esto funcione, debes:
- Publicar GSheets como CSV (ver documentación)
- Pegar URL en HTML (línea: `const GOOGLE_SHEET_URL = '...'`)

---

## 💰 PRECIOS ACTUALES (Mayo 2026)

### Individuales
- Doglletas: **$1.50**
- Mini Petzza: **$1.00**
- Petzza: **$5.00**
- Petlados (3 tipos): **$1.50 - $1.75**
- Torta Mini: **$8.00**
- Torta 17cm: **$15.00**
- Torta 30cm: **$30.00**

### Combos
- Antojo Perruno: **$12.00**
- Bokado Real: **$20.00**
- Cumplelamidos: **$22.00**
- Kukifest: **$25.00**

### Mínimos por Ciudad
- **Cuenca:** $15.00
- **Azogues:** $25.00
- **Gualaceo:** $25.00

---

## ✨ CARACTERÍSTICAS

✅ Modal selección ciudad (obligatorio)  
✅ Combos predefinidos + armador personalizado  
✅ Carrito dinámico con validaciones  
✅ Fotos mascota (obligatorias en cumpleaños)  
✅ Integración WhatsApp automática  
✅ Traductor ES/EN  
✅ Responsive móvil/desktop  
✅ Standalone (sin dependencias)  
✅ Precios sincronizados GSheets  
✅ Contador fijo ciudad + mínimo  

---

## 🛠️ MANTENIMIENTO

### Cambiar precio
1. Google Sheets → Hoja "Precios"
2. Edita cel → Guarda
3. ✅ Web actualiza automáticamente

### Agregar producto nuevo
1. GSheets → Nueva fila
2. Llena: Codigo | Producto | Tipo | Precio | Descripcion | Emoji | Activo
3. ✅ Aparece en web

### Ocultar producto
1. Columna "Activo": cambia "SI" → "NO"
2. ✅ Desaparece de web (sin borrar datos)

### Cambiar número WhatsApp
En `kukipet-landing-v2.html`, busca:
```javascript
const WHATSAPP_NUMBER = '593987392552';
```
Reemplaza con tu número.

---

## 📞 CONTACTO

| Canal | Valor |
|-------|-------|
| WhatsApp | 0987392552 |
| Email | kukipetsnack@gmail.com |
| Ubicación | Cuenca, Ecuador |
| GSheets | [Link](https://docs.google.com/spreadsheets/d/1r7SNKblj-3yleLlVm1f2H7PkgTGBNUg0Vs25KsI6hGc/) |

---

## 🚀 PRÓXIMOS PASOS

1. **Subir web a internet:**
   - Opción fácil: Netlify (arrastra HTML)
   - Obtén link tipo: `https://kukipet.netlify.app`
   - Pega en bio Instagram/TikTok

2. **Configurar GSheets:**
   - Publica como CSV
   - Pega URL en HTML (línea `GOOGLE_SHEET_URL`)

3. **Test:**
   - Abre HTML en navegador
   - Prueba cambiar precio en GSheets
   - Verifica que web se actualice

---

## ⚠️ IMPORTANTE

- **NO borres** fila 1 (encabezados) en GSheets
- **NO cambies** nombres columnas
- Los cambios **tardan 1-2 minutos** en aparecer
- **Códigos de producto NO se repiten**
- **Privacidad:** Datos solo se envían por WhatsApp (no se guardan)

---

## 📊 VERSIONES

| Versión | Fecha | Status |
|---------|-------|--------|
| v1.0 | Mayo 2026 | Original |
| **v2.0** | **23 Mayo 2026** | **🚀 ACTUAL** |
| v2.1 | (Próx) | Cupones + Analytics |

---

**Estado:** ✅ Funcional y Listo para Deploy

Preguntas o problemas? Ver `KUKIPET_DOCUMENTACION_COMPLETA.md` (FAQ técnico).
