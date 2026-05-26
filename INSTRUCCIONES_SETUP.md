# 🔄 Sincronización Google Sheets → Supabase → Netlify

## Paso 1: Crear la tabla en Supabase ✅

1. Ve a https://supabase.co → Dashboard → SQL Editor
2. Crea una nueva query y ejecuta este SQL:

```sql
CREATE TABLE IF NOT EXISTS precios (
  id BIGSERIAL PRIMARY KEY,
  codigo TEXT NOT NULL UNIQUE,
  producto TEXT NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  categoria TEXT,
  descripcion TEXT,
  n INTEGER,
  observaciones TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Crear índices para mejor rendimiento
CREATE INDEX IF NOT EXISTS idx_precios_codigo ON precios(codigo);
CREATE INDEX IF NOT EXISTS idx_precios_categoria ON precios(categoria);
```

## Paso 2: Configurar Google Apps Script 📝

1. Abre tu Google Sheets: https://docs.google.com/spreadsheets/d/1r7SNKblj-3yleLlVm1f2H7PkgTGBNUg0Vs25KsI6hGc/edit
2. Ve a **Extensiones** → **Apps Script**
3. Borra todo lo que haya y copia el contenido de `google-apps-script.gs` (archivo en este proyecto)
4. **Guarda** el proyecto
5. En el menú superior, selecciona la función `syncToSupabase` y presiona el botón ▶️ Play
6. **Autoriza** el script cuando te lo pida
7. Verifica que salga "✅ Sincronización exitosa" en los logs

## Paso 3: Configurar disparador automático en Google Sheets

1. En Apps Script, ve a **Disparadores** (esquina inferior izquierda)
2. Haz clic en **+ Crear disparador**
3. Configura así:
   - **Función a ejecutar:** `syncToSupabase`
   - **Tipo de evento:** `Al editar`
   - **Tipo de implementación:** `Del editor de scripts`
4. Haz clic en **Crear**

Ahora, cada vez que edites la hoja "Precios", automáticamente se actualizará Supabase.

## Paso 4: Actualizar index.html 🌐

Ya actualizaré el archivo `index.html` para que traiga los precios de Supabase en tiempo real en lugar de tenerlos hardcodeados.

## ✅ Verificar que funciona

1. Ve a la hoja "Precios" en Google Sheets
2. Edita un precio (ej: cambio de $5.00 a $5.50)
3. Espera 2-3 segundos
4. Abre https://kukipet-store.netlify.app (o tu sitio)
5. El precio actualizado debería aparecer automáticamente

---

### 🐛 Solución de problemas

**Q: El script no sincroniza**
- Verifica que el nombre de la hoja sea exactamente "Precios"
- Verifica que las columnas sean: N°, Categoría, Codigo, Producto, Precio, Descripcion, Observaciones
- Revisa los Logs en Apps Script para ver errores

**Q: El error dice "apikey error"**
- Copia exactamente la `Publishable KEY` de Supabase: `sb_publishable_v3MNVdc9KKFJiLnTlHW51g_9ocm_8ds`

**Q: ¿Cómo sincronizo manualmente?**
- En Apps Script, abre la función `syncToSupabase`
- Presiona ▶️ Play en la parte superior
