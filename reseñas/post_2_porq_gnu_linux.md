
# ¿Por qué deberías usar GNU/Linux? (Pregunta seria)

### Written by Julio Alberto Bautista on June 12, 2022

Después de haber leído el post anterior "*Primeros pasos para cambiarte a GNU/Linux (software libre)*" espero que haya surgido en ti una chispa de curiosidad e investigues más acerca de lo que significa el software libre y cuales son las diferencias principales entre software libre y software privativo.

Hace unos días estuve en contacto con un equipo de computo con el sistema operativo macOS BigSur o apple para los cuates(el de la manzanita para los igualados), esto provocó en mí que reafirmará mis ideas sobre por qué deberíamos usar alguna distro de GNU/Linux en lugar de software privativo como Windows o MacOs. Indudablemente el sistema Mac produce los mejores hardware’s del mercado, sin embargo sus precios son muy altos y por lo tanto ¡no son accecibles para la mayoria de las personas en el mundo!. Por lo tanto en este pequeño post te quiero contar un poco sobre estas ideas.

Si eres de las personas que piensan que GNU/Linux solo es para usuarios avanzados con conocimientos en programación o ciberseguridad, estas equivocado. Una de las principales razones por las que me cambié de sistema operativo (de windows 10 a debian 9 en esos años) fue porque las aplicaciones que comencé a utilizar eran muy lentas en windows. Fueron principalmente mis profesores los que me comentaron del sistema Linux(ya después entendi que la forma correcta de llamar a este sistema es GNU/Linux). En una esacala de principiante, intermedio y avanzado; considero que me encuentro entrando en la etapa de intermedio por ahora tengo un equipo de gamma baja una laptop con 4GB de ram y procesador Pentium o Lentium como le quieran llamar.

Desde que instalé este sistema, mi computadora “vuela”, para ser más especifícos, nunca he vuelto a tener problemas de que se me trabe, o se ralentice. Si he llegado a tener problemas es porque estoy aprendiendo nuevos comando del bash y a veces escribo algo que modifica cierto fichero(sin darme cuenta) y provoca una pequeña variación que me molesta(sin llegar a dañar el sistema). Sin embargo siempre que modifico algo del sistema y no me gusta el resultado, respaldo mis archivos y vuelvo a instalar todo el sistema. Es parte del proceso de aprendizaje, de esta manera cogemos práctica instalando software en nuestros ordenadores.

Los usuarios principiantes, es decir, usuarios que usan un ordenador solo para ver videos, gestionar algún documento y cosas básicas de ofimática, también deberían usar GNU/Linux(al fin y al cabo todos somos principiantes cuando comenzamos en GNU/Linux). Desde mi punto de vista hay 2 formas de hacer que usuarios que ya usan windows o macOS, se cambien a GNU/Linux.

- La primera: instalar ellos mismos el sistema en su ordenador(esto no es complicado, usando los instaladores que ya estan desarrollados por la comunidad de programadores). Esto es básicamente descargar un archivo de formato .iso copiarlo en una memoria usb(bootear la memoria) y conectarlo en la pc para instalar el sistema. Desde luego hay ciertos detalles que me estoy saltando pero nada que una busqueda por la red, no solucioné (usando un navegador de código abierto si es posible como brave). Si en tu navegador favorito buscas: “como instalar debian 11 en mi computadora”, saldrán miles de enlaces a blogs e incluso videos en youtube donde explican paso por paso cómo instalar el sistema operativo GNU/Linux Debian 11 en su versión estable(existen versiones estables e inestables pero son detalles que por ahora no deben preocuparte porque si no eres un usuario avanzado simplemente nunca instales SO en su versión inestable o testing).

- La segunda: dejar que alguien instale por ti el sistema. Aunque esta opción no es tan viable porque implicaría que por tu comunidad existen centros “especializados” a los que puedas recurrir y solicitar un *servicio de instalación de software libre* (que denominaré como SISL). Creo que ya es tiempo de entrar en esta etapa, el software libre esta llegando a este punto cada vez más rápido y será inevitable su dominio en los ordenadores domésticos como lo es ahora su dominio en los supercomputadores que se utilizan en la investigación o en servidores de grandes empresas como amazon y google.

En este punto por fin te voy a dar mis 4 principales razones para dejar átras el software privativo y empezar con el software libre.

Todo comenzó porque quería instalar Octave en una computadora con sistema macOS BigSur. Primero me percaté de que debía instalar un gestor de paquetes llamado homebrew(el equivalente a apt-get o apt en debian) para instalar Octave. Viendo algunos video e investigando por la red ya sabía como instalalo. Luego de escribir el comando necesario en la terminal del mac para instalar homebrew me salió un error: que el puerto no se qué estaba inhabilitado y que me pusiera en contacto con mi administrador de servidor. Exactamente este era el problema.

Failed to connect to github port 443: Connection timed out. If you’re getting this error then it means port 443 is blocked on your server. This port should be open for our API to work as we communicate with our servers only over HTTPS. Get in touch with your server admin and ask them to open this port.

Que si lo traducimos dice:

No se pudo conectar al puerto 443 de www.github.com: se agotó el tiempo de conexión. Si recibe este error, significa que el puerto 443 está bloqueado en su servidor. Este puerto debe estar abierto para que nuestra API funcione, ya que nos comunicamos con nuestros servidores solo a través de HTTPS. Póngase en contacto con el administrador de su servidor y pídale que abra este puerto.

&nbsp;
![Imagen no disponible o eliminada](https://www.astera.com/wp-content/uploads/2020/01/rest.png)
&nbsp;

*Detalles técnicos: Una API web o API de servicios web es una interfaz de procesamiento de aplicaciones entre un servidor web y un navegador web. Todos los servicios web son API, pero no todas las API son servicios web. La API de REST es un tipo especial de API web que utiliza el estilo arquitectónico estándar explicado anteriormente.*

Intenté un rato y no pude solucionar el problema(no invertí demasiado tiempo en solucionarlo), además encontre que había muchos otros usuarios con el mismo problema y algunos si lograron solucionarlo sin embargo la solución que daban a mi no me funcionaba. Dar solución a diferentes problemas relacionados con la instalación de software, también es parte del aprendizaje constante en gnulinux. Pero esto no es para preocuparse, un usuario principiante con algo de tiempo podría solucionarlo o dejarle la tarea a los centros especializados “SISL” es otra opción.  Es por eso que aquí te dejo mis razones para que te cambies de sistema operativo:

1. La comunidad de GNU/Linux también presenta este tipo de problemas sin embargo hay muchisimas soluciones por la red. En mis 4 años utilizando Debian de GNU/Linux no he presentado un problema que no pueda solucionar.

2. Los costos de los ordenares MacOS son los más elevados es en mercado sin mencionar que todos los accesorios son exclusivos para mac y algunas veces son específicamente para el hardware que adquiriste(como pasa con los iphones). En el caso de windows aunque sus precios son más accecibles la mayoria de equipos que tienen precios “razonables”(que con el salario mínimo en México se puede comprar ahorrando mucho y limitandose en otros aspectos) son de una gamma baja.

3. Los costos del sistema operativo GNU/Linux son mínimos si optamos por instalarlo nosostros mismo. Dado que unicamente necesitamos acceso a internet puesto que hay millones de imagenes iso de cientos de distribuciones de GNU/Linux y elijirás la que mejeor se adapte a tus caracteristicas de usuario. Hay distribuciones que son muy dificiles de instalar y otras que facilitan la instalación(tan facil como dar siguiente, siguiente y siguiente), además no olvides que siempre existe un video o post en la red que te ayudara a instalar tu distro incluso para las distros más dificles.

4. El sistema operativo GNU/Linux no gasta mucha memoria ram en la interfaz gráfica, contrario a windows que con solo tener el escritorio sin ninguna aplicación ocupamos mucha memoria ram. . Existen muchas alternativas de interfaz gráfica, desde las minimalistas que consumen poca memoria(xfce,lxqt,mate consumen entre 400 y 600 de memoria ram), hasta las más llamativas  que consumen un poco más de ram (gnome llega a consumir entre 700 y 800 mb dependiendo de las extenciones que utilices).

Existen otras razones para dejar atrás el software libre (como el respeto de tus 4 libertades), sin embargo las razones tienen que ver más con temas políticos y ecológicos que me gustaría explorar en publicaciones futuras. En la medida que te acerques más al software libre podrás desarrollar tus propias ideas y argumentos de porque es mejor el software libre que el software privativo.


```shell

    jabp@complex:~$ echo CONTINUARÁ

```