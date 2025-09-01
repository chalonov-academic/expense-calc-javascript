# Dockerfile para Calculadora de Gastos JavaScript
# Usa imagen base de Nginx Alpine (pequeña y eficiente)
FROM nginx:alpine

# Información del mantenedor
LABEL maintainer="tu-email@ejemplo.com"
LABEL description="Calculadora de Gastos - Aplicación JavaScript containerizada"

# Copiar archivos de la aplicación al directorio web de Nginx
COPY src/ /usr/share/nginx/html/

# Copiar configuración personalizada de Nginx (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Exponer puerto 80 para acceso HTTP
EXPOSE 80

# Comando por defecto para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]