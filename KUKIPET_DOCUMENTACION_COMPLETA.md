# 🐾 KUKIPET - Documentación Completa v2.0

**Pastelería Natural para Mascotas | Cuenca, Ecuador**

---

## 📑 TABLA DE CONTENIDOS

1. [Resumen Proyecto](#resumen)
2. [Catálogo Productos](#catálogo)
3. [Precios Actuales](#precios)
4. [Funcionalidades Web](#funcionalidades)
5. [Guía Actualización](#guía-actualización)
6. [Contacto](#contacto)
7. [FAQ Técnico](#faq)
8. [Roadmap Futuro](#roadmap)

---

## 📋 RESUMEN {#resumen}

| Campo | Valor |
|-------|-------|
| **Negocio** | Kukipet - Pastelería para mascotas |
| **Ubicación** | Cuenca, Ecuador |
| **Canales** | Landing + WhatsApp |
| **Modelo** | Combos personalizados + productos individuales |
| **Entrega** | Cuenca ($15 mín), Azogues/Gualaceo ($25 mín) |

**Objetivo:** Tienda online con pedidos vía WhatsApp, configurador de combos interactivo.

---

## 🛍️ CATÁLOGO {#catálogo}

### 📦 PRODUCTOS INDIVIDUALES (9)

| Código | Producto | Categoría | Precio | Descripción | Emoji |
|--------|----------|-----------|--------|-------------|-------|
| ga001 | Doglletas | Horneados | $1.50 | Galletas avena e hígado | 🍪 |
| pz001 | Petzza | Horneados | $5.00 | Pizza para mascotas | 🍕 |
| pz002 | Mini Petzza | Horneados | $1.00 | Pizza mini | 🍕 |
| pe001 | Petlados Pollo | Congelados | $1.50 | Helado pollo e hígado | 🍦 |
| pe002 | Petlados Patitas | Congelados | $1.75 | Helado patitas cerdo | 🍦 |
| pe003 | Petlados Hígado | Congelados | $1.50 | Helado hígado | 🍦 |
| To001 | Torta Cumple 17cm | Horneados | $15.00 | Torta tamaño mediano | 🎂 |
| To002 | Torta Cumple 30cm | Horneados | $30.00 | Torta tamaño grande | 🎂 |
| To003 | Torta Mini | Horneados | $8.00 | Torta pequeña | 🎂 |

### 🎁 COMBOS PREDEFINIDOS (4)

| Código | Combo | Precio | Composición |
|--------|-------|--------|-------------|
| C001 | Cumplelamidos | $22.00 | Pack cumpleaños premium |
| C002 | Bokado Real | $20.00 | Surtido gourmet |
| C003 | Kukifest | $25.00 | Fiesta completa |
| C004 | Antojo Perruno | $12.00 | Pack básico |

---

## 💰 PRECIOS ACTUALES {#precios}

**Última actualización:** Mayo 2026  
**Origen:** Google Sheets (hoja "Precios")  
**Sincronización:** Automática (ver Guía Actualización)

```
INDIVIDUALES:
  Doglletas............$1.50
  Mini Petzza..........$1.00
  Petzza Grande........$5.00
  Petlados Pollo.......$1.50
  Petlados Patitas....$1.75
  Petlados Hígado.....$1.50
  Torta Mini...........$8.00
  Torta 17x17.........$15.00
  Torta 30x30.........$30.00

COMBOS:
  Antojo Perruno......$12.00
  Bokado Real..........$20.00
  Cumplelamidos.......$22.00
  Kukifest............$25.00
```

---

## 🌐 FUNCIONALIDADES WEB {#funcionalidades}

### 1. MODAL SELECCIÓN CIUDAD
- ✅ Aparece al cargar página
- ✅ Obligatorio antes de comprar
- ✅ Muestra mínimo según ciudad:
  - **Cuenca:** $15.00
  - **Azogues:** $25.00
  - **Gualaceo:** $25.00

### 2. CONTADOR FIJO
- Visible toda compra
- Formato: "📍 Cuenca | 📦 Mínimo: $15.00"

### 3. COMBOS PREDEFINIDOS
**Flujo:**
1. Click combo → Modal datos mascota
2. Campos: nombre*, edad, foto (si cumpleaños), temática
3. "Agregar al Pedido" → Va carrito

### 4. ARMA TU COMBO PERSONALIZADO
**Flujo:**
1. Click "🦴 Arma Tu Combo"
2. Selector ±: productos individuales
3. Subtotal en tiempo real
4. "Agregar al Pedido" o "Cancelar"

### 5. CARRITO LATERAL (PC) / SUPERIOR (MÓVIL)
- Muestra items agregados
- Validación dinámica mínimo por ciudad
- Suma total real time
- Botón WhatsApp habilitado cuando ≥ mínimo

### 6. CHECKOUT
**Datos requeridos:**
- Nombre completo*
- Teléfono*
- Dirección entrega*
- Fecha entrega*
- Notas (opcional)

**Validaciones:** ciudad + mínimo + fotos si cumpleaños

### 7. INTEGRACIÓN WhatsApp
**Mensaje automático formateado:**
```
🐾 PEDIDO KUKIPET

Ciudad: Cuenca
Cliente: Juan Pérez
Teléfono: 0987654321
Dirección: Av. Principal 123
Fecha Entrega: 2026-05-25
Notas: Sin sal

PRODUCTOS:
• Cumplelamidos x1 = $22.00
  🐾 Max (5 años)
  🎂 Temática: Superhéroes
  📸 Con foto
• Doglletas x3 = $4.50

TOTAL: $26.50

📸 IMPORTANTE: Adjunta las fotos en WhatsApp
```

**Número:** `593987392552`

### 8. IDIOMAS (ES/EN)
- Botón EN/ES esquina superior derecha
- Traduce interfaz completa
- NO traduce: nombres productos/combos
- SÍ traduce: descripciones, botones, mensajes

### 9. RESPONSIVE
- **PC:** Carrito lateral sticky, grid 2-3 columnas
- **Móvil:** Carrito arriba, 1 columna, botones grandes

### 10. TECNOLOGÍAS
- HTML5 + CSS3 + JavaScript vanilla
- Archivo standalone (sin dependencias)
- Logo base64 embebido
- Compatible todos navegadores modernos

---

## 📖 GUÍA ACTUALIZACIÓN {#guía-actualización}

### PARTE 1: Configurar Google Sheets (solo una vez)

**Paso 1: Sube archivo a GSheets**
1. Abre [drive.google.com](https://drive.google.com)
2. Click "+ Nuevo" → "Subir archivo"
3. Sube `Kukipet_Catalogo_Editable.xlsx`
4. Clic derecho → "Abrir con" → "Hojas de cálculo Google"

**Paso 2: Publica como CSV**
1. Menú "Archivo"
2. "Compartir" → "Publicar en la Web"
3. Primer desplegable: selecciona hoja **"Productos"**
4. Segundo desplegable: **"CSV"**
5. Click "Publicar" → "Aceptar"
6. **COPIA el link** que aparece

**Paso 3: Pega link en HTML**
1. Abre `kukipet-landing-v2.html` con Bloc de notas
2. Busca: `const GOOGLE_SHEET_URL = '';`
3. Pega: `const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/.../pub?output=csv';`
4. Guarda (Ctrl + S)

✅ **¡Listo!** Web carga datos desde GSheets automáticamente.

---

### PARTE 2: Uso Diario (Actualizar Datos)

#### ✏️ Cambiar precio
1. Abre GSheets
2. Busca producto
3. Edita columna **Precio**
4. ✅ Web se actualiza en 1-2 minutos

#### ➕ Agregar producto nuevo
1. Última fila hoja "Productos"
2. Llena: `| Codigo | Producto | Tipo | Precio | Descripcion | Emoji | Activo |`
3. Ejemplo: `| P9 | Galleta Premium | producto | 2.50 | pollo y zanahoria | 🍪 | SI |`
4. ✅ Aparece automáticamente en web

#### 🚫 Ocultar producto (sin borrar)
1. Columna **Activo**: cambia "SI" → "NO"
2. ✅ Desaparece web (guardado local)

#### 🎁 Crear combo nuevo
1. Mismo formato que producto
2. **Código:** comienza con "C" (ej: C5)
3. **Tipo:** "combo"
4. ✅ Aparece con icono combo

#### 📷 Cambiar emoji
1. Columna **Emoji**: pega emoji nuevo
2. Copiar desde [emojipedia.org](https://emojipedia.org)

**⚠️ Reglas:**
- NO borres fila encabezados (Row 1)
- NO cambies nombres columnas
- Códigos NO se repiten (únicos)
- Cambios tardan 1-2 minutos en web

---

### PARTE 3: Subir Web a Internet (GRATIS)

#### Opción recomendada: Netlify
1. Entra [netlify.com](https://www.netlify.com) → Crea cuenta gratis
2. Arrastra `kukipet-landing-v2.html` a zona "Deploy"
3. Obtén link: `https://kukipet.netlify.app`
4. Pega en bio Instagram/TikTok

**Flujo cliente:**
```
Instagram → Link bio → Abre web → Arma combo → 
WhatsApp → Adjunta fotos → ¡Pedido hecho!
```

#### Otras opciones:
- **Vercel:** [vercel.com](https://vercel.com) (similar Netlify)
- **Google Sites:** Gratuito, fácil, pero menos flexible
- **Tu propio hosting:** Si tienes servidor

---

## 📞 CONTACTO {#contacto}

| Canal | Valor |
|-------|-------|
| **WhatsApp Principal** | 0987392552 |
| **WhatsApp Alt 1** | 0994801133 |
| **WhatsApp Alt 2** | 0993425631 |
| **Email** | kukipetsnack@gmail.com |
| **Ciudad** | Cuenca, Ecuador |
| **GSheets Precios** | [Link](https://docs.google.com/spreadsheets/d/1r7SNKblj-3yleLlVm1f2H7PkgTGBNUg0Vs25KsI6hGc/) |

---

## ❓ FAQ TÉCNICO {#faq}

### P: ¿Cómo cargo precios nuevos de GSheets?
**R:** Abre GSheets → Edita columna "Precio" → Web se actualiza en 1-2 min. Ver Paso 2 Guía.

### P: ¿Puedo usar fotos reales en vez de emojis?
**R:** Sí, pero requiere paso extra (subir fotos a Imgur/CloudFlare). Avísame cuando quieras.

### P: ¿Qué pasa si caigo internet?
**R:** Si web ya cargó una vez, funciona offline. Los cambios de GSheets se sincronizan cuando se reconecta.

### P: ¿Los clientes pueden ver precios distribuidores?
**R:** NO. La web solo muestra "Precios venta" hoja. Hoja "Precios distribuidores" es privada.

### P: ¿Cuánto tiempo tarda en actualizarse la web?
**R:** 1-2 minutos máximo (GSheets demora un poco).

### P: ¿Puedo traduce productos a inglés?
**R:** NO automáticamente (por diseño). Si quieres, debo agregar columna "Producto_EN" a GSheets.

### P: ¿Cómo cambio el número WhatsApp?
**R:** En HTML busca `593987392552` y reemplaza con tu número. O me avisas y lo cambio.

### P: ¿Se puede agregar cupones/descuentos?
**R:** Roadmap futuro (v2.1). Actualmente no.

### P: ¿Qué datos de cliente se guardan?
**R:** NINGUNO. Solo se envían por WhatsApp. Privacidad 100%.

---

## 🚀 ROADMAP FUTURO {#roadmap}

### v1.1 (Próximo mes)
- [ ] Sistema cupones/descuentos
- [ ] Analytics básico (Google Analytics)
- [ ] Pixel Facebook para anuncios retargeting
- [ ] Generador QR para eventos presenciales
- [ ] Chat bot WhatsApp básico (confirmaciones)

### v1.2 (Mes 2-3)
- [ ] Fotos reales productos (no emojis)
- [ ] Reseñas clientes (star rating)
- [ ] Sistema historial pedidos (si cliente repite)
- [ ] Integración Instagram Shopping
- [ ] Email confirmación automática

### v2.0 (Futuro lejano)
- [ ] App mobile nativa (iOS/Android)
- [ ] Sistema pago online (Stripe/PayPal)
- [ ] Predicción demanda con IA
- [ ] Gestión inventario automática
- [ ] Dashboard admin tiempo real

---

## 📋 RESTRICCIONES & POLÍTICAS

### ⚠️ Operacionales
- 📦 Pedido mínimo según ciudad (Cuenca $15, otros $25)
- 🚚 Entregas: solo Cuenca, Azogues, Gualaceo
- ⏰ Pedir con 24 horas anticipación
- ❄️ Congelados: consumir en 48 horas
- 🍰 Horneados: consumir en 5 días
- 🚫 NO devuelciones (productos perecederos)

### 🔒 Privacidad
- Datos protegidos 100%
- Solo usamos para procesar pedidos
- NO compartimos con terceros
- Comunicación solo vía WhatsApp oficial

---

## 🎨 DISEÑO & MARCA

| Elemento | Valor |
|----------|-------|
| **Color Primario** | Verde agua `#4ECDC4` |
| **Color Secundario** | Coral `#E07A5F` |
| **Texto** | Gris oscuro `#2D3142` |
| **Fondo** | Crema `#FFF9F0` |
| **Logo** | PNG trasparente, base64 embebido |
| **Tipografía** | System stack (seguro) |

---

## 📁 ESTRUCTURA ARCHIVOS

```
Kukipet/
├── kukipet-landing-v2.html          # 🌐 Página web (PRINCIPAL - USA ESTE)
├── kukipet-landing.html             # 📱 Original (backup)
├── Kukipet_Catalogo_Editable.xlsx   # 📊 Datos locales (backup)
├── KUKIPET_DOCUMENTACION_COMPLETA.md # 📖 Docs (este archivo)
├── README.md                        # 🚀 Inicio rápido
└── GUIA_KUKIPET_Como_Actualizar.md  # ⚙️ Guía antigua (ref)
```

---

## ✅ CHECKLIST PRODUCCIÓN

- [x] Landing funcional (UI/UX)
- [x] Carrito con validaciones
- [x] Integración WhatsApp
- [x] Responsive móvil/desktop
- [x] Selector ciudad y mínimos
- [x] Combos y productos individuales
- [x] Fotos obligatorias (cumpleaños)
- [x] Contador fijo sticky
- [x] Idiomas ES/EN
- [x] Documentación completa
- [ ] Subir a hosting (Netlify/similar)
- [ ] Configurar dominio personalizado
- [ ] Analytics
- [ ] Pixel Facebook

---

## 📝 NOTAS IMPORTANTES

1. **Archivo HTML standalone** = no necesita servidor, funciona directo
2. **GSheets es fuente verdad** = prioridad sobre XLSX local
3. **Fotos cumpleaños obligatorias** = validación en frontend
4. **WhatsApp sin API directa** = usuario adjunta fotos manualmente
5. **Precios distribuidor privados** = NO mostrar en web
6. **Sin base de datos** = escalable y barato

---

## 🔄 VERSIONING

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | Mayo 2026 | Lanzamiento inicial |
| **2.0** | **23 Mayo 2026** | **Reorganización, UI mejorada, docs consolidadas** |
| 2.1 | (Próx) | Cupones + Analytics |

**Última actualización:** 23 de Mayo 2026  
**Estado:** ✅ PRODUCCIÓN - Funcional y escalable

---

**Hecho con 🐾 para Kukipet | Cuenca, Ecuador**
