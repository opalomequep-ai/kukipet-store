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

    // BORRAR TODOS LOS DATOS ANTIGUOS
    Logger.log('🗑️ Borrando datos anteriores...');
    const deleteResponse = UrlFetchApp.fetch(SUPABASE_URL + '/rest/v1/' + TABLE_NAME, {
      method: 'DELETE',
      headers: {'apikey': SUPABASE_ANON_KEY},
      muteHttpExceptions: true
    });
    Logger.log('🗑️ Delete response: ' + deleteResponse.getResponseCode());

    // INSERTAR TODOS LOS NUEVOS DATOS DE UNA VEZ
    Logger.log('📤 Insertando ' + productos.length + ' productos...');
    const insertResponse = UrlFetchApp.fetch(SUPABASE_URL + '/rest/v1/' + TABLE_NAME, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Prefer': 'return=minimal'
      },
      payload: JSON.stringify(productos),
      muteHttpExceptions: true
    });

    const insertCode = insertResponse.getResponseCode();
    Logger.log('📤 Insert response: ' + insertCode);

    if (insertCode === 201 || insertCode === 200) {
      Logger.log('✅ Sincronización exitosa: ' + productos.length + ' productos insertados');
    } else {
      const errorBody = insertResponse.getContentText();
      Logger.log('❌ Error al insertar: ' + insertCode);
      Logger.log('Respuesta: ' + errorBody);
    }

  } catch (err) {
    Logger.log('❌ Error: ' + err);
  }
}
