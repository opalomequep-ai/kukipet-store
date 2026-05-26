-- =====================================================
-- SQL PARA CREAR TABLAS EN SUPABASE
-- Copia y ejecuta esto en: Supabase → SQL Editor
-- =====================================================

-- 1. TABLA DE PRECIOS (sincronizada desde Google Sheets)
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

-- 2. TABLA DE COMBOS (predefinidos)
CREATE TABLE IF NOT EXISTS combos (
  id BIGSERIAL PRIMARY KEY,
  codigo TEXT NOT NULL UNIQUE,
  nombre TEXT NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  descripcion_es TEXT,
  descripcion_en TEXT,
  activo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 3. TABLA DE CLIENTES (para guardar compradores)
CREATE TABLE IF NOT EXISTS customers (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT,
  city TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 4. TABLA DE PEDIDOS
CREATE TABLE IF NOT EXISTS orders (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT REFERENCES customers(id),
  total DECIMAL(10, 2) NOT NULL,
  delivery_date DATE,
  notes TEXT,
  status TEXT DEFAULT 'pendiente',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 5. TABLA DE ITEMS DEL PEDIDO
CREATE TABLE IF NOT EXISTS order_items (
  id BIGSERIAL PRIMARY KEY,
  order_id BIGINT REFERENCES orders(id),
  product_code TEXT,
  product_name TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  quantity INTEGER DEFAULT 1,
  pet_name TEXT,
  pet_age TEXT,
  cake_theme TEXT,
  has_photo BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =====================================================
-- CREAR ÍNDICES PARA MEJOR RENDIMIENTO
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_precios_codigo ON precios(codigo);
CREATE INDEX IF NOT EXISTS idx_precios_categoria ON precios(categoria);
CREATE INDEX IF NOT EXISTS idx_combos_codigo ON combos(codigo);
CREATE INDEX IF NOT EXISTS idx_customers_phone ON customers(phone);
CREATE INDEX IF NOT EXISTS idx_orders_customer_id ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);

-- =====================================================
-- INSERTAR COMBOS DE EJEMPLO
-- =====================================================

INSERT INTO combos (codigo, nombre, precio, descripcion_es, descripcion_en) VALUES
  ('C001', 'Cumplelamidos', 22.0, '1 Minitorta, 7 Petlados de patitas, 12 Doglletas, 2 Minipetzzas y 1 juguete', '1 Mini cake, 7 Paw petlados, 12 Dog biscuits, 2 Mini pizzas and 1 toy'),
  ('C002', 'Bokado Real', 20.0, '1 Minitorta, 3 Cupcake, 7 Petlados de patita, 1 Minipetzza, 12 Doglletas', '1 Mini cake, 3 Cupcakes, 7 Paw petlados, 1 Mini pizza, 12 Dog biscuits'),
  ('C003', 'Kukifest', 25.0, '1 Torta de 17 cm en forma de corazón, redondas y de pata, 4 Cupcakes,14 Petlados de patita, 15 Doglletas', '1 17cm heart-shaped cake, round and paw shaped, 4 Cupcakes, 14 Paw petlados, 15 Dog biscuits'),
  ('C004', 'Antojo perruno', 12.0, '1 Petzza grande, 12 Doglletas,7 Petlados de patita, 6 Gomitas colágeno', '1 Large Petzza, 12 Dog biscuits, 7 Paw petlados, 6 Collagen gummies')
ON CONFLICT (codigo) DO UPDATE SET
  nombre = EXCLUDED.nombre,
  precio = EXCLUDED.precio,
  descripcion_es = EXCLUDED.descripcion_es,
  descripcion_en = EXCLUDED.descripcion_en;

-- =====================================================
-- HABILITAR ROW LEVEL SECURITY (RLS) - OPCIONAL
-- =====================================================

ALTER TABLE precios ENABLE ROW LEVEL SECURITY;
ALTER TABLE combos ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Permitir lectura pública de precios y combos
CREATE POLICY "Allow public read precios" ON precios
  FOR SELECT USING (true);

CREATE POLICY "Allow public read combos" ON combos
  FOR SELECT USING (activo = true);

-- Permitir insert en customers y orders (para los clientes)
CREATE POLICY "Allow public insert customers" ON customers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert orders" ON orders
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert order_items" ON order_items
  FOR INSERT WITH CHECK (true);
