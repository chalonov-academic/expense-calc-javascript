# 💰 Calculadora de Gastos

![AWS EC2](https://img.shields.io/badge/deploy-AWS%20EC2-orange?logo=amazon-aws) 
![JavaScript CI](https://github.com/chalonov/expense-calc-javascript-ec2/workflows/JavaScript%20CI/badge.svg)

Una aplicación web para gestionar gastos personales desplegada en Amazon EC2 usando servidor Python.

## 📋 Descripción del Proyecto

Aplicación JavaScript vanilla para el seguimiento de gastos personales con las siguientes características:

- ✅ Agregar gastos con categorías predefinidas
- ✅ Resumen financiero automático (total, promedio, contador)
- ✅ Persistencia local con localStorage
- ✅ Interfaz responsive y moderna
- ✅ Eliminar gastos individuales o en lote

## 🤖 Automatización con GitHub Actions

### ✅ ¿Qué se automatiza?
- **Tests de matemáticas básicas:** Verificación de operaciones aritméticas fundamentales
- **Tests de cálculos de gastos:** Validación de sumas y promedios de la aplicación
- **Validación de HTML:** Verificación de estructura y sintaxis del archivo principal
- **Validación de JavaScript:** Comprobación de presencia de código JS en el HTML
- **Test de servidor HTTP:** Verificación de que Python puede servir la aplicación

### 🔄 ¿Cuándo se ejecuta la automatización?
- **Push a main:** Cada vez que se hace push a la rama principal
- **Pull Requests:** Antes de fusionar cambios al código principal
- **Manualmente:** Desde la pestaña Actions en GitHub

### 📊 Estado actual del CI/CD:
El badge de arriba muestra el estado en tiempo real:
- 🟢 **Passing:** Todos los tests pasan correctamente
- 🔴 **Failing:** Hay errores que necesitan corrección

### 🧪 Ejecutar tests localmente:
```bash
# Instalar dependencias de testing (primera vez)
npm install

# Ejecutar todos los tests
npm test

# Ver detalles específicos
npm test -- --verbose
```

### 📋 Tests incluidos:

#### **1. Tests de Matemáticas Básicas**
```javascript
// Verifica operaciones fundamentales
expect(1 + 1).toBe(2);
expect(2 * 3).toBe(6);
```

#### **2. Tests de Lógica de Gastos**
```javascript
// Verifica cálculos de la aplicación real
const expenses = [10.50, 25.75, 8.25];
const total = expenses.reduce((sum, expense) => sum + expense, 0);
expect(total).toBe(44.5);
```

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla ES6+)
- **Testing**: Jest + jest-environment-jsdom
- **CI/CD**: GitHub Actions
- **Servidor**: Python HTTP Server (desarrollo)
- **Cloud**: AWS EC2 (Ubuntu 22.04 LTS)
- **Conexión**: AWS Session Manager
- **Almacenamiento**: localStorage (Browser)

## 🚀 Configuración de AWS EC2

### Especificaciones de la Instancia

```yaml
Nombre: calculadora-gastos
AMI: Ubuntu Server 22.04 LTS (Free tier eligible)
Instance Type: t2.micro (Free tier eligible)
Key Pair: Sin key pair (usando Session Manager)
```

### Security Group Configuration

| Tipo | Puerto | Protocolo | Origen | Descripción |
|------|--------|-----------|---------|-------------|
| Custom TCP | 8000 | TCP | 0.0.0.0/0 | Python HTTP Server |

> **Nota:** No se requiere puerto SSH (22) ya que usamos AWS Session Manager para la conexión.

## 🛠️ Configuración del Servidor

### 1. Conectar a la Instancia

Usar **AWS Session Manager** desde la consola de EC2:
1. Seleccionar la instancia
2. Clic en "Connect"
3. Pestaña "Session Manager"
4. Clic "Connect"

### 2. Actualizar el Sistema

```bash
sudo apt update && sudo apt upgrade -y
```

### 3. Clonar el Repositorio

```bash
git clone https://github.com/chalonov/expense-calc-javascript-ec2.git
```

### 4. Navegar al Directorio de la Aplicación

```bash
cd ~/expense-calc-javascript-ec2/src/
```

## 🌐 Ejecutar la Aplicación

### Servidor Python (Desarrollo)

```bash
# Ejecutar servidor HTTP simple
python3 -m http.server 8000
```

### Acceso a la Aplicación

1. Obtener IP pública de la instancia EC2
2. Abrir navegador en: `http://TU-IP-PUBLICA:8000`

## 🧪 Para Desarrolladores

### 📁 Estructura del Proyecto

```
expense-calc-javascript-ec2/
├── .github/
│   └── workflows/
│       └── javascript.yml      # Workflow de CI/CD documentado
├── src/
│   └── index.html             # Aplicación completa (HTML + CSS + JS)
├── tests/
│   └── basic.test.js          # Tests automatizados con Jest
├── package.json               # Configuración de Node.js y testing
├── README.md                  # Este archivo (documentación completa)
└── .gitignore                # Archivos a ignorar en Git
```

### 🔧 Componentes del Sistema de Testing

#### **Workflow de GitHub Actions (`javascript.yml`)**
- **Paso 1:** Checkout del código
- **Paso 2:** Configuración de Node.js 18
- **Paso 3:** Instalación de dependencias (Jest + jsdom)
- **Paso 4:** Ejecución de tests automatizados
- **Paso 5:** Validación de estructura HTML y JavaScript
- **Paso 6:** Prueba del servidor HTTP de Python

#### **Configuración de Testing (`package.json`)**
```json
{
  "name": "expense-calculator-tests",
  "version": "1.0.0",
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "jest-environment-jsdom": "^29.0.0"
  },
  "jest": {
    "testEnvironment": "jsdom",
    "collectCoverage": false,
    "verbose": true
  }
}
```

**Explicación de la configuración:**

| Sección | Propósito | Detalles |
|---------|-----------|-----------|
| `name` | Identificador del proyecto | Nombre único del paquete de testing |
| `version` | Control de versiones | Sigue semantic versioning (major.minor.patch) |
| `scripts.test` | Comando de testing | `npm test` ejecuta Jest automáticamente |
| `devDependencies` | Herramientas de desarrollo | Solo para testing, no para producción |
| `jest` | Framework de testing | Busca archivos *.test.js y los ejecuta |
| `jest-environment-jsdom` | Simulador de navegador | Permite usar window, document en tests |
| `testEnvironment: "jsdom"` | Configuración de entorno | Simula DOM del navegador para testing |
| `collectCoverage: false` | Sin reportes de cobertura | Simplicidad para proyecto educativo |
| `verbose: true` | Salida detallada | Muestra cada test individual en consola |

**Flujo de uso:**
1. `npm install` → Instala las dependencias listadas
2. `npm test` → Ejecuta Jest → Busca *.test.js → Los ejecuta  
3. Jest usa jsdom → Tests pueden usar window, document
4. Resultado: PASS ✅ o FAIL ❌

#### **Tests Automatizados (`basic.test.js`)**
- **Grupo 1:** Verificación de matemáticas básicas (suma, resta, etc.)
- **Grupo 2:** Validación de lógica de gastos (totales, promedios)

### 🚨 Troubleshooting del CI/CD

#### Si los tests fallan:
1. **Ver detalles:** GitHub → Actions → Click en el workflow fallido
2. **Revisar logs:** Cada paso muestra output detallado
3. **Errores comunes:**
   - Sintaxis JavaScript incorrecta
   - Archivo HTML movido o eliminado
   - Cambios en estructura de la aplicación

#### Para hacer fallar un test intencionalmente:
```javascript
// En tests/basic.test.js, cambiar:
expect(1 + 1).toBe(3); // En lugar de .toBe(2)
```

#### Para agregar nuevos tests:
```javascript
test('mi nuevo test de gastos', () => {
  const gastoNuevo = 15.75;
  const resultado = gastoNuevo * 2;
  expect(resultado).toBe(31.5);
});
```

### 📈 Métricas del Proyecto

| Métrica | Valor | Descripción |
|---------|-------|-------------|
| Tests | 2 grupos, 2 tests | Cobertura básica de funcionalidad |
| Tecnologías | 6 principales | HTML, CSS, JS, Jest, Python, AWS |
| Pasos CI/CD | 6 automatizados | Desde checkout hasta deployment test |
| Tiempo build | ~2-3 minutos | Tiempo típico de ejecución completa |

## 🔒 Seguridad y Buenas Prácticas

- **Sin Key Pairs:** Conexión segura mediante AWS Session Manager
- **Security Groups:** Solo puerto 8000 abierto para la aplicación  
- **Acceso Público:** La aplicación es accesible desde internet
- **Tests Automáticos:** Cada cambio es validado antes de deployment
- **Validación Continua:** CI/CD garantiza calidad del código
- **Datos Locales:** Sin transmisión de datos personales al servidor

## 📝 Notas Técnicas

### Frontend
- **Vanilla JavaScript:** Sin frameworks, máxima compatibilidad
- **Responsive Design:** Funciona en desktop y móvil
- **LocalStorage:** Persistencia sin base de datos externa
- **ES6+ Features:** Clases, arrow functions, template literals

### Testing
- **Jest Framework:** Industry standard para JavaScript testing
- **JSDOM Environment:** Simula navegador para tests DOM
- **GitHub Actions:** CI/CD gratuito para repositorios públicos
- **Automated Validation:** Cada push ejecuta tests automáticamente

### Deployment
- **Static Files:** Aplicación completamente estática
- **Python HTTP Server:** Simple y efectivo para desarrollo
- **AWS Free Tier:** Sin costos para instancias t2.micro
- **Session Manager:** Acceso seguro sin llaves SSH

---

**🎯 Proyecto desarrollado para aprendizaje de:**
- Desarrollo frontend con JavaScript vanilla
- Implementación de CI/CD con GitHub Actions
- Deployment en AWS EC2
- Testing automatizado con Jest
- Documentación técnica completa