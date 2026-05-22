# Personalizar el menu de Nautilus para agregar opción de crear archivos txt y md

### Written by Julio Alberto Bautista on April 11, 2026

Bienvenido a un nuevo post para aprender a personalizar nuestro sistema opertavo GNU/Linux Debian 13 Trixie. En esta ocasión te mostraré cómo extender el gestor de archivos Nautilus para agregar acciones personalizadas al menú de clic derecho.

Este tipo de configuración permite automatizar tareas directamente desde la interfaz gráfica.

---

## Concepto previo

Nautilus detecta scripts en:

```
~/.local/share/nautilus/scripts/
```

---

## Paso 1: Crear el directorio

```
mkdir -p ~/.local/share/nautilus/scripts
```

## Paso 2: Crear script de prueba

```
nano ~/.local/share/nautilus/scripts/test.sh
```

Contenido:

```
#!/bin/bash
touch ~/archivo_creado_desde_nautilus.txt
```

![Imagen](../img/test-sh.png)

---

## Paso 3: Permisos

```
chmod +x ~/.local/share/nautilus/scripts/test.sh
```

![Imagen](../img/test-sh_permisos.png)

---

## Paso 4: Reiniciar Nautilus

```
nautilus -q
```

---

## Paso 5: Verificar

Click derecho sobre archivo → Scripts → test.sh

![Imagen](https://via.placeholder.com/800x400.png?text=Menu+Scripts)

---

## Paso 6: Script real (Markdown)

```
nano ~/.local/share/nautilus/scripts/Crear_MD.sh
```

Contenido:

```
#!/bin/bash
DIR="$(echo "$NAUTILUS_SCRIPT_CURRENT_URI" | sed 's|file://||')"
NOMBRE="nuevo_documento_$(date +%Y%m%d_%H%M%S).md"

cat <<EOT > "$DIR/$NOMBRE"
# Nuevo Documento

## Descripción
Escribe aquí...
EOT

xdg-open "$DIR/$NOMBRE" >/dev/null 2>&1 &
```

Permisos:

```
chmod +x ~/.local/share/nautilus/scripts/Crear_MD.sh
```

![Imagen](https://via.placeholder.com/800x400.png?text=Markdown+creado)

---

## Problemas comunes

- No aparece Scripts → revisar permisos y ruta
- No funciona → usar variable NAUTILUS_SCRIPT_CURRENT_URI

---

## Conclusión

Has convertido Nautilus en una herramienta extensible y automatizable.

```
jabp@complex:~$ echo CONTINUARÁ
```
