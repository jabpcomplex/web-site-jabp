# Auditoría de ZIP y Soberanía Tecnológica

### Written by Julio Alberto Bautista on 4 Noviembre, 2026

Bienvenido a un nuevo post para aprender un poco más sobre ciencia, tecnología y soberanía tecnológica.

Este post como todos los que realizo, surge por la necesidad de compartir la solución o esclarecimiento de un problema o duda existencial que me haya surgido.

Todo empezo cuando alguien me compartió un archivo **.zip** proveniente del sistema operativo MACOS y encontré la carpeta __MACOSX. Así que con la ayuda de la **AC galáctica** me propuse a investigar sobre su origen.

La carpeta __MACOSX es un directorio oculto que se crea automáticamente cuando se comprimen archivos en un Mac usando la herramienta nativa de macOS.  Contiene metadatos específicos de Apple (bifurcaciones de recursos, atributos de Finder y archivos ._ con información del sistema) necesarios para que los archivos mantengan su comportamiento y apariencia al abrirse en otro Mac.

Puntos clave:

Es inofensiva: No es un virus ni un archivo corrupto. [Ejemplos de problemas relacionados con la carpeta](https://blog.curseforge.com/how-to-zip-files-without-creating-a-macosx-folder/). [Algunas ocupan hasta el 30% del archivo.](https://superuser.com/questions/104500/what-is-macosx-folder-i-keep-seeing-in-zip-files-made-by-people-on-os-x)
Solo es visible en Windows o GNU/linux: En macOS esta carpeta es invisible por defecto, por lo que los usuarios de Mac no la notan al comprimir ni al descomprimir. 
No es necesaria en Windows: Si descargaste un ZIP desde un Mac y ves esta carpeta en tu sistema, puedes borrarla sin problema; tus archivos originales no se verán afectados. 
Cómo evitarla: Si eres usuario de Mac y quieres compartir archivos limpios, usa la terminal con el comando: zip -r archivo.zip . -x '**/.*' -x '**/__MACOSX' o instala un compresor de terceros como Keka que no incluya estos metadatos. 

Como te darás cuenta sólo si eres un usuario avanzado podrías evitar crear esta carpeta al comprimir tus archivos y evitar los problemas que esto conlleva es por ello que realizo estos post. De tal manera intento alumbrar los espacios donde se encuentran las eslabones tecnológicos. Dado que si no somos concientes, la suma de los eslabones crean la cadena tecnológica o dependencia tecnológica con la que los tecnofacistas pretenden controlarnos.

## Diferencias al comprimir ZIP en cada plataforma

| Aspecto | macOS | Windows | GNU/Linux |
|---|---|---|---|
| **Herramienta** | Finder / `ditto` | "Enviar a → Carpeta comprimida" | `zip` (Info-ZIP) |
| **Formato base** | ZIP estándar + `__MACOSX/` | ZIP estándar | ZIP estándar |
| **Metadatos extra** | AppleDouble (._ archivos) con resource forks, xattrs, info de Finder | Atributos NTFS/DOS en extra fields (0x000a) | Permisos Unix (0x000d), UID/GID (0x7875) |
| **Especificación** | RFC 1740 + Apple Developer Note (proprietaria) | PKWARE APPNOTE (proprietaria pero pública) | Info-ZIP `extrafld.txt` (código abierto no GPL) |
| **Fuente** | Cerrada | Cerrada | Abierta (licencia BSD-like no GPL) |

## Implicaciones para la soberanía tecnológica

macOS — dependencia de un formato propietario. El formato AppleDouble es una extensión propietaria de Apple: no existe una especificación pública completa (solo la nota de desarrollador de Apple). Si compartes un ZIP generado en macOS, arrastras metadatos que solo el ecosistema Apple interpreta correctamente (resource forks, quarantine flags, tags de Finder). Esto crea un bloqueo suave: tus archivos llevan una "carga" que solo Apple entiende, y cualquier herramienta de terceros que no implemente AppleDouble (o que la ignore) pierde información. La soberanía se erosiona porque la fidelidad total de tus metadatos depende de un actor privado. 

Windows — formato estándar, implementación cerrada. El ZIP que genera Windows Explorer es estándar y no añade metadatos propietarios. Los extra fields para NTFS están documentados en el APPNOTE de [PKWARE](https://en.wikipedia.org/wiki/ZIP_(file_format)) (propietario pero de acceso libre). La preocupación aquí no es el formato sino la implementación cerrada: no puedes auditar cómo se manejan permisos, ACLs o timestamps NTFS. Además, el ZIP nativo de Windows es limitado (no soporta AES nativamente en versiones antiguas, no preserva atributos ocultos de forma fiable en Win11). La soberanía es moderada: el formato es neutral, pero la herramienta no lo es.

### GNU/Linux — máximo grado de soberanía.

Info-ZIP es código abierto con [licencia BSD-like](https://www.gnu.org/licenses/bsd.es.html). Los extra fields que usa (permisos Unix 0x000d, UID/GID 0x7875) están documentados en el propio repositorio (proginfo/extrafld.txt). No hay ningún actor privado que controle el formato o la implementación: cualquier persona o organización puede reimplementar, auditar y extender el comportamiento. La soberanía es total en el sentido de que no hay dependencia de ningún vendor para comprender, reproducir o extender lo que se comprime.

## Auditor un ZIP de macOS en GNU/Linux

### 1. Inspección de la estructura del archivo

``` bash
# Listado básico
unzip -l archive.zip

# Listado detallado (método de compresión, ratio, CRC)
unzip -Z -v archive.zip

# Metadatos completos del archivo ZIP (tamaño, entradas, comentario)
zipinfo archive.zip
```

Con unzip -Z -v verás los extra fields de cada entrada. En un ZIP generado por el Finder de macOS, las entradas de __MACOSX/._* revelan que hay metadatos Apple ocultos. Revisar [link](https://osxhub.com/zip-files-mac/)


### 2. Identificar la "carga" Apple

``` bash
# Contar entradas __MACOSX (0 = limpio)
zipinfo archive.zip | grep -c "__MACOSX"

# Listar solo los archivos AppleDouble
unzip -l archive.zip | grep -E '\._|__MACOSX'

# Ver archivos .DS_Store (metadatos del Finder)
unzip -l archive.zip | grep '\.DS_Store'
```

### 3. Extraer y auditar los AppleDouble

``` bash
# Extraer solo el contenido real (saltar __MACOSX)
unzip archive.zip -x "__MACOSX/*" -d output/

# Extraer TODO (incluyendo metadatos) para inspección
unzip archive.zip -d audit/
```

## Conclusión

La lección general: la soberanía tecnológica no se pierde solo con software propietario, sino también con formatos de metadatos propietarios que se cuelan dentro de contenedores aparentemente neutros como ZIP. El __MACOSX es el ejemplo más visible: un ZIP que "parece" universal pero que en realidad lleva una capa de dependencia Apple.



```
jabp@complex:~$ echo CONTINUARÁ
```
