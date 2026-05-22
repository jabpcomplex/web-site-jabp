# Primeros pasos para cambiarte a GNU/linux (software libre)

### Written by Julio Alberto Bautista on June 1, 2021

Si estas harto de qué se trabe y ralentice tu computadora o no te alcanza para comprar una máquina más potente o simplemente quieres dejar atrás windows. Entonces este post te servirá. Mi objetivo es ayudarte a utilizar y entender  GNU/linux (sistema operativo libre) y que tu transición entre sistemas operativos sea más rápida.

El software libre opera con los principios subyacentes de libertad al usuario y solidaridad social (colaboración), creando un proceso de desarrollo de software equitativo para los usuarios finales.  El software de código privativo es un tipo de software privatizado que atenta contra alguna de **las 4 libertades esenciales del usuario**. El software libre comenzó luego de que las empresas desidieran que nadie que no fuera ellos podría utilizar su sistema operativo que por ese entonces eran unos cuantos. En ese momento algunos programadores que trabajaban en dichas empresas no estaban de acuerdo con esta nueva filosofía de trabajo, este fue el caso de Richard Stallman que en 1984 desidió crear su propio sistema operativo no  (*GNU*) y poder compartirlo con su comunidad bajo cuatro axiomas que todo software libre debe cumplir, las cuales son:

&nbsp;

- **Libertad 0**: La libertad de ejecutar el programa como se desee, con cualquier propósito

&nbsp;

- **Libertad 1**: a libertad de estudiar cómo funciona el programa, y cambiarlo para que haga lo que se desee. El acceso al código fuente es una condición necesaria para ello.

&nbsp;

- **Libertad 2**: La libertad de redistribuir copias para ayudar a otros.

&nbsp;

- **Libertad 3**: La libertad de distribuir copias de sus versiones modificadas a terceros.


&nbsp;

 Richard Stallman es un tipo que cree en la solidaridad de la cominidad de programadores y  la libertad del usuario final. Pero la tarea de crear un sistema operativo desde cero es una labor por lo menos muy dificil para una sola persona. De a poco fue trabajando con diferentes colegas hasta que en 1991 lograron reunir la mayoria de elementos para tener un sistema operativo completo. Faltaba una pieza importante: el kernel. Por otro lado en 1992 Linus Torvals libero su kernel llamado: Linux. Y asi fue como surgió el sistema operativo GNU/Linux.


GNU/Linux es un sistema operativo de software libre, aunque nadie lo utiliza como tal, sino que recurren a las distribuciones (distros) pues con ellas, se vuelve mucho más sencillo de utilizar y cada distro (ubuntu, kubuntu, debian, fedora, etc) tiene su toque personal. Cabe resaltar que no todos las distros se pueden llamar de softaware libre pues las han editado a libertad que algunos de sus componentes son de software privado o no son de código abierto. Lo cual priva de su libertad al usuario.

Lo primero que necesitas saber es que significan algunos términos que se utilizan en el mundo de software libre. Desde mi experiencia, teniendo claro que significan estos términos vas a comprender mejor tu máquina (Hardware) y la distribución que has instalado (software).

## Términos importantes que debemos conocer

Se conoce como **sistema informático** al conjunto de ordenadores personales (uno o varios), los programas que contiene y las herramientas que los envuelven (impresora, teclado, altavoces, mouse, cables, etc) junto con la persona que lo maneja (usuario).

El **hardware**,​ se refiere a las partes físicas, tangibles, de un sistema informático, sus componentes eléctricos, electrónicos, electromecánicos

Se conoce como **software** o​ soporte lógico al conjunto de los componentes lógicos necesarios que hace posible la realización de tareas específicas.

Un **sistema operativo** es el conjunto de programas de un sistema informático que gestiona los recursos de hardware y provee servicios a los programas de aplicación de software.

&nbsp;

![Imagen no disponible o eliminada](https://i.pinimg.com/originals/42/e3/cb/42e3cba3e4f6765b15ddc31c4394a3b7.png)



## ¿Qué es el Kernel y para qué sirve?

El Kernel Linux es el núcleo del sistema operativo. Esta es la parte de software más importante de cualquier sistema operativo. Windows tiene su propio núcleo privado, Apple tiene el suyo (basado en Unix, por cierto), y Linux es el Kernel que utilizan todas las distribuciones. Y su principal función es encargarse de controlar el hardware del ordenador. Para conocer más a detalle sobre el kernel de linux visita el siguiente enlace:

https://www.softzone.es/programas/linux/kernel-nucleo-linux/

En el enlace anterior puedes conocer

- Qué versiones existen

- Qué versión de linux elegir para tu máquina

- Cómo saber la versión de nuestro Kernel

- Y cómo actualizar el Kernel.



## Personaliza Linux con Conky

<style>body {text-align: justify}</style>

Conky es monitor del sistema disponible en GNU/Linux. Conky es un software que muestra información relevante sobre nuestra computadora, como por ejemplo la temperatura de nuestros procesadores, la intensidad de la señal Wi-Fi, el uso de la RAM, estado del CPU, memoria disponible,  bandejas de correo, y muchas otras características más.


&nbsp;

![Imagen no disponible o eliminada](https://i0.wp.com/nksistemas.com/wp-content/uploads/2015/11/conky1.jpg?w=700&ssl=1)



&nbsp;

Contrario a los monitores del sistema que usan widgets que consumen mucha memoria RAM, Conky consume relativamente menos recursos del sistema por la naturaleza de su creación, basado en el [sistema de ventanas X](https://es.wikipedia.org/wiki/Sistema_de_ventanas_X).

Conky ha sido nombrado como "uno de los mejores programas mejor mantenidos, y definitivamente uno de los más útiles programas en el mundo del código abierto" por Linux Magazine.

# Instalación

Para instalar Conky, necesita abrir una terminal y escribir el siguiente comando:


```shell

    sudo apt-get install conky-all

```  

Para iniciar conky solo escribiremos la palabra `conky` en la consola y se abrirá algo como esto


&nbsp;

![Imagen no disponible o eliminada](https://www.fuukemn.biz/photo/lubuntu_37.png)



&nbsp;



Como habrán podido notar cuando lanzamos conky se ve bastante rústico, para personalizarlo debemos editar el archivo **.conkyrc** que se encuentra en la ruta */home/usuario*.



Para disfrutar de todos los beneficios de conky es necesario instalar los paquetes


* **curl** que nos facilita la transferencia de ficheros utilizando los protocolos HTTP,HTTPS y FTP, entre otros.

* **lm-sensors** da información sobre la temperatura y el estado de la CPU, tanto ventiladores o el voltaje.

* **hddtemp** nos mostrará la temperatura de los discos.


```shell
    sudo apt-get install curl lm-sensors hddtemp
```  



```bash

    CONTINUARÁ

```  

# Introducción al Software Libre y la Liberación del Ciberespacio

## Richard Stallman creador de GNU (Click en la imagen para reproducir el video)

[![Watch the video](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlExikMAYbItQ5soWORts7X9Q64rMwbvgeGw&s)](https://www.youtube.com/watch?v=8SdPLG-_wtA)
