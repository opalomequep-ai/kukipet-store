// =====================================================
// GOOGLE APPS SCRIPT - SINCRONIZACIÓN AUTOMÁTICA
// Se ejecuta AUTOMÁTICAMENTE cada vez que editas
// =====================================================

const SHEET_NAME = 'Precios';
const SUPABASE_URL = 'https://rsamvitjesoqvxbykich.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_v3MNVdc9KKFJiLnTlHW51g_9ocm_8ds';
const TABLE_NAME = 'precios';

// ✅ SE EJECUTA AUTOMÁTICAMENTE AL EDITAR CUALQUIER CELDA
function onEdit(e) {
  try {
    const sheetName = e.range.getSheet().getName();
    if (sheetName !== SHEET_NAME) return; // Solo si edita en hoja "Precios"

    Logger.log('🔄 Cambio detectado en hoja: ' + sheetName);
    syncToSupabase();
  } catch (err) {
    Logger.log('Error en onEdit: ' + err);
  }
}

// ✅ FUNCIÓN PRINCIPAL DE SINCRONIZACIÓN
function syncToSupabase() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      Logger.log('❌ No se encontró la hoja: ' + SHEET_NAME);
      return;
    }

    // Obtener datos
    const data = sheet.getDataRange().getValues();
    if (data.length < 2) {
      Logger.log('⚠️ Hoja vacía');
      return;
    }

    // Procesar datos
    const productos = [];
    const saltados = [];

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const codigo = String(row[2] || '').trim();
      const producto = String(row[3] || '').trim();

      if (!codigo || !producto) {
        saltados.push('Fila ' + (i + 1) + ': código="' + codigo + '" producto="' + producto + '"');
        continue;
      }

      productos.push({
        codigo: codigo,
        producto: producto,
        precio: parseFloat(row[4]) || 0,
        categoria: String(row[1] || '').trim(),
        descripcion: String(row[5] || '').trim(),
        observaciones: String(row[6] || '').trim(),
        n: row[0] || null
      });
    }

    Logger.log('📊 Total filas: ' + (data.length - 1));
    Logger.log('✓ Productos a sincronizar: ' + productos.length);

    if (saltados.length > 0) {
      Logger.log('⚠️ Filas saltadas:');
      saltados.forEach(s => Logger.log('  - ' + s));
    }

    // Mostrar códigos que se van a sincronizar
    const codigos = productos.map(p => p.codigo).join(', ');
    Logger.log('📋 Códigos: ' + codigos);

    // ACTUALIZAR CADA PRODUCTO INDIVIDUALMENTE (UPSERT)
    for (let i = 0; i < productos.length; i++) {
      const prod = productos[i];

      const response = UrlFetchApp.fetch(
        SUPABASE_URL + '/rest/v1/' + TABLE_NAME + '?codigo=eq.' + encodeURIComponent(prod.codigo),
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Prefer': 'return=minimal'
          },
          payload: JSON.stringify(prod),
          muteHttpExceptions: true
        }
      );

      const code = response.getResponseCode();
      if (code !== 204 && code !== 200) {
        // Si no existe, insertar
        const insertResponse = UrlFetchApp.fetch(
          SUPABASE_URL + '/rest/v1/' + TABLE_NAME,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'apikey': SUPABASE_ANON_KEY,
              'Prefer': 'return=minimal'
            },
            payload: JSON.stringify(prod),
            muteHttpExceptions: true
          }
        );

        if (insertResponse.getResponseCode() !== 201) {
          Logger.log('⚠️ Error al insertar ' + prod.codigo + ': ' + insertResponse.getResponseCode());
        }
      }
    }

    Logger.log('✅ Sincronización completada: ' + productos.length + ' productos');

  } catch (err) {
    Logger.log('❌ Error: ' + err);
  }
}
