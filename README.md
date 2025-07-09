# ☁️ Cloud Booking System – Microservices Architecture

Este proyecto implementa un sistema de reservas en la nube basado en una arquitectura de microservicios utilizando Node.js y Express.

## 🧩 Microservicios incluidos

- **auth-service**: Autenticación y gestión de usuarios
- **booking-service**: Creación, cancelación y consulta de reservas
- **availability-service**: Verificación y control de disponibilidad de recursos
- **gateway-api**: Punto de entrada único para los servicios

## 📁 Estructura

Cada servicio contiene:

- `index.js`: Servidor Express principal
- `controllers/`: Controladores de lógica HTTP
- `routes/`: Rutas definidas para cada recurso
- `services/`: Lógica de negocio reutilizable
- `config/`: Variables de configuración
- `tests/`: Pruebas unitarias
- `package.json`: Dependencias y scripts
- `README.md`: Descripción individual del servicio

---

## 🚀 Instalación y ejecución local

### 1. Requisitos previos

- Node.js (v16+ recomendado)
- npm
- Git

### 2. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/cloud-booking-system.git
cd cloud-booking-system
