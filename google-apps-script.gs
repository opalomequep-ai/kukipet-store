// =====================================================
// GOOGLE APPS SCRIPT - Sincroniza Google Sheets → Supabase
// =====================================================

const SHEET_NAME = 'Precios'; // Nombre de la hoja
const SUPABASE_URL = 'https://rsamvitjesoqvxbykich.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_v3MNVdc9KKFJiLnTlHW51g_9ocm_8ds';
const TABLE_NAME = 'precios';

// Función que se ejecuta automáticamente cuando se edita la hoja
function onEdit(e) {
  syncToSupabase();
}

// Función manual (puedes ejecutarla manualmente desde "Ejecutar" > "syncToSupabase")
function syncToSupabase() {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      Logger.log('❌ Hoja "' + SHEET_NAME + '" no encontrada');
      return;
    }

    // Obtener los datos (sin el encabezado)
    const range = sheet.getDataRange();
    const values = range.getValues();

    if (values.length < 2) {
      Logger.log('⚠️ La hoja está vacía o solo tiene encabezados');
      return;
    }

    // Encabezados (primera fila)
    const headers = values[0];
    const nIndex = headers.indexOf('N°');
    const categoriaIndex = headers.indexOf('Categoría');
    const codigoIndex = headers.indexOf('Codigo');
    const productoIndex = headers.indexOf('Producto');
    const precioIndex = headers.indexOf('Precio');
    const descripcionIndex = headers.indexOf('Descripcion');
    const observacionesIndex = headers.indexOf('Observaciones');

    // Convertir filas a objetos JSON
    const productos = [];
    for (let i = 1; i < values.length; i++) {
      const row = values[i];

      // Saltar filas vacías
      if (!row[codigoIndex] || !row[productoIndex]) continue;

      productos.push({
        n: row[nIndex] || null,
        categoria: row[categoriaIndex] || '',
        codigo: row[codigoIndex] || '',
        producto: row[productoIndex] || '',
        precio: parseFloat(row[precioIndex]) || 0,
        descripcion: row[descripcionIndex] || '',
        observaciones: row[observacionesIndex] || ''
      });
    }

    // Enviar a Supabase
    const response = UrlFetchApp.fetch(
      SUPABASE_URL + '/rest/v1/' + TABLE_NAME + '?upsert=true',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Prefer': 'resolution=merge-duplicates'
        },
        payload: JSON.stringify(productos),
        muteHttpExceptions: true
      }
    );

    const responseCode = response.getResponseCode();
    const responseBody = response.getContentText();

    if (responseCode === 201 || responseCode === 200) {
      Logger.log('✅ Sincronización exitosa: ' + productos.length + ' productos actualizados');
    } else {
      Logger.log('❌ Error al sincronizar: ' + responseCode);
      Logger.log('Respuesta: ' + responseBody);
    }

  } catch (err) {
    Logger.log('❌ Error: ' + err.toString());
  }
}

// Función para crear la tabla en Supabase (ejecutar una sola vez)
function createSupabaseTable() {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
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
    `;

    Logger.log('Para crear la tabla, copia este SQL en Supabase SQL Editor:');
    Logger.log(sql);
  } catch (err) {
    Logger.log('Error: ' + err.toString());
  }
}
