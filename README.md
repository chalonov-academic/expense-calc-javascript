# 💰 Calculadora de Gastos - Deployment en AWS EC2

Una aplicación web para gestionar gastos personales desplegada en Amazon EC2 usando servidor Python.

## 📋 Descripción del Proyecto

Aplicación JavaScript vanilla para el seguimiento de gastos personales con las siguientes características:

- ✅ Agregar gastos con categorías predefinidas
- ✅ Resumen financiero automático (total, promedio, contador)
- ✅ Persistencia local con localStorage
- ✅ Interfaz responsive y moderna
- ✅ Eliminar gastos individuales o en lote
- 
## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Servidor**: Python HTTP Server
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

## 📁 Estructura del Proyecto

```
expense-calc-javascript-ec2/
├── src/
│   └── index.html          # Aplicación completa (HTML + CSS + JS)
├── README.md               # Este archivo
└── .gitignore             # Archivos a ignorar
```

## 🔒 Seguridad

- **Sin Key Pairs**: Conexión segura mediante AWS Session Manager
- **Security Groups**: Solo puerto 8000 abierto para la aplicación
- **Acceso Público**: La aplicación es accesible desde internet