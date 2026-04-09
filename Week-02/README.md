# 🚜 Agrotech CRUD - Gestión de Maquinaria Agrícola

## 📌 Descripción

Aplicación web desarrollada con React y TypeScript para gestionar maquinaria agrícola mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

---

## 🧩 Funcionalidades

* 📋 Visualizar lista de maquinaria
* ➕ Agregar nuevas máquinas
* ✏️ Editar máquinas existentes
* 🗑️ Eliminar máquinas
* 🔄 Actualización dinámica de la interfaz

---

## 🛠️ Tecnologías

* React
* TypeScript
* Vite
* pnpm

---

## 🏗️ Estructura

* **Header**: Título de la aplicación
* **MachineForm**: Formulario para agregar/editar
* **MachineList**: Lista de máquinas
* **MachineCard**: Tarjeta individual

---

## ⚙️ Ejecución

```bash
pnpm install
pnpm dev
```

---

## 📊 Modelo de Datos

```ts
interface Machine {
  id: number;
  name: string;
  type: string;
  available: boolean;
}
```

---

## ✅ Conceptos Aplicados

* Componentes funcionales
* Props tipados
* useState
* Renderizado de listas
* Formularios controlados
* Inmutabilidad en estado
* Operaciones CRUD

---
