CREATE DATABASE  IF NOT EXISTS `mpkgamesv2` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mpkgamesv2`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mpkgamesv2
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.38-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrito` (
  `idcarrito` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) NOT NULL,
  `juego_id` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `estado` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `formaDePago` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `precio` int(11) NOT NULL DEFAULT '0',
  `cantidad` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idcarrito`),
  KEY `carrito_usu_idx` (`usuario_id`),
  KEY `carrito_prod_idx` (`juego_id`),
  CONSTRAINT `carrito_prod` FOREIGN KEY (`juego_id`) REFERENCES `productos` (`IdJuego`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `carrito_user` FOREIGN KEY (`usuario_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=163 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
INSERT INTO `carrito` VALUES (158,49,3,'2020-11-19',NULL,NULL,'2020-11-20 00:05:53','2020-11-20 00:05:53',9,1),(160,46,2,'2020-11-20',NULL,NULL,'2020-11-20 18:49:56','2020-11-20 18:49:56',9587,1),(161,46,3,'2020-11-20',NULL,NULL,'2020-11-20 18:50:03','2020-11-20 18:50:03',8522,1),(162,46,5,'2020-11-20',NULL,NULL,'2020-11-20 18:51:03','2020-11-20 18:51:03',2720,1);
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `noticias`
--

DROP TABLE IF EXISTS `noticias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `noticias` (
  `id_noticias` int(11) NOT NULL AUTO_INCREMENT,
  `tituloArtNoticia` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `titulo` varchar(155) COLLATE utf8_spanish2_ci NOT NULL,
  `subTitulo` varchar(180) COLLATE utf8_spanish2_ci NOT NULL,
  `contNoticia` mediumtext COLLATE utf8_spanish2_ci NOT NULL,
  `Imagen` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_noticias`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticias`
--

LOCK TABLES `noticias` WRITE;
/*!40000 ALTER TABLE `noticias` DISABLE KEYS */;
INSERT INTO `noticias` VALUES (1,'PS5 no es compatible con resolución 1440p','PS5 no es compatible con resolución 1440p de manera nativa, pero lo hará si hay demanda','Sony explica que la prioridad eran las resoluciones de televisión, pero que no hay problemas técnicos para dar soporte a esta resolución habitual en monitores.','Una de las últimas informaciones sobre PlayStation 5, que se pone a la venta mañana en Estados Unidos y el 19 de noviembre en España, confirmaba que la consola no soportará resoluciones de 1440p de forma nativa, así que en estos casos los jugadores obtendrán 1080p reescalados. PS5 es compatible con 720p, 1080i, 1080p y 2160, e incluso alcanzará 8K en ciertos contenidos. ¿Es necesaria la resolución 1440p? En televisiones no y este ha sido el razonamiento de Sony, que quería priorizar estos dispositivos, según el jefe de hardware Masayasu Ito a AV Watch. No obstante, <b>hay muchos jugadores de PC que pueden querer utilizar la resolución 1440p de sus monitores</b> -donde se prefieren altas tasas de fps en lugar de 4K-, y es aquí donde se pide que Sony añada la opción.<br>','imagen1605437850970.jpg','2020-11-15 10:57:31','2020-11-15 10:57:31'),(2,'Horizon Zero Dawn','Horizon Zero Dawn y Killzone Shadow Fall permitirán transferir partidas de PS4 a PS5','Además, el shooter de Guerrilla incrementará su tasa de refresco hasta los 60 frames por segundo.','En los últimos días son varios los estudios que han anunciado mejoras para sus juegos en la nueva generación. Es el caso, por ejemplo, de God of War. Otro peso pesado de PS4 como Horizon Zero Dawn ha confirmado también sus mejoras para PS5 junto con las de Killzone Shadow Fall. Ambos, juegos desarrollados por el estudio neerlandés de Guerrilla Games. La propia Guerrilla ha publicado un tweet desvelando los detalles al respecto. Por un lado, Horizon Zero Dawn permitirá traspasar el progreso de PS4 a PS5, y seguir jugando con Aloy en el nuevo sistema. Por su parte, Killzone Shadow Fall también dará la posibilidad de seguir con las partidas guardadas y además alcanzará los 60 FPS en PS5. De esta forma se confirman las mejoras de los dos juegos desarrollados por Guerrilla para PS4. Killzone Shadow Fall fue precisamente juego de lanzamiento de PlayStation 4, y desde entonces, hace ya siete años, no se ha vuelto a crear ninguna entrega de la saga FPS. Por su parte, ya está confirmada Horizon Forbidden West, secuela del exitoso último proyecto de la compañía, que se lanzará tanto en PS5 como también en PS4.','imagen1605440307533.jpg','2020-11-15 11:38:27','2020-11-15 11:38:27'),(3,'DriveClub','El director de DriveClub indica que no esperemos mejoras del juego en PlayStation 5','Paul Rustchynsky también ha comentado que hay posibilidades muy bajas de un remaster o una secuela de MotorStorm.','La llegada de la nueva generación está sirviendo también para darle una nueva vida a títulos de las consolas anteriores. En el caso de PlayStation 5, estamos viendo mejoras muy buenas en algunos juegos de PS4, como por ejemplo en Ghost of Tsushima, que alcanzará los 60 fps. Pues bien, algunos usuarios han estado preguntándose si Driveclub, el juego de conducción de PlayStation 4, tendrá mejoras y su director ha respondido a esas dudas. Paul Rustchynsky, que actualmente está en Avalanche Studios Group, fue director de algunos de los juegos de conducción más queridos de los últimos años exclusivos de PlayStation, Driveclub y MotorStorm. En su cuenta personal de Twitter, Rustchynsky ha indicado que no debemos esperar mejoras de rendimiento de Driveclub en PlayStation 5, ya que los fps están bloqueados. ¿Y qué puede pasar con la saga MotorStorm? Tampoco hay buenas noticias, por desgracia. El exdirector tampoco cree que pensar en una remasterización o en una secuela sea algo realista, aunque deja una pequeña puerta abierta: \"Sony posee la propiedad intelectual y podría resucitarla en cualquier momento, pero no tengo conocimiento de ningún proyecto en curso. Diría que las posibilidades son bajas, pero no lo descartaría. ¡Así que mantened la esperanza!\".','imagen1605441725175.jpg','2020-11-15 12:02:05','2020-11-15 12:02:05'),(4,'Call of Duty','Call of Duty: Warzone añade soporte para 120 fps en Xbox Series X, pero no en PlayStation 5','Lo curioso es que esta característica no ha sido anunciada oficialmente por Infinity Ward.','La nueva generación ya está aquí, y aunque en España nos faltan unos días para poder tener PlayStation 5, en muchos países ya está toda la maquinaria en marcha. El lanzamiento de la consola de Sony, de Xbox Series X y de Xbox Series S es un momento emocionante para la industria. Como sabéis, muchos juegos están optimizándose para las nuevas máquinas y Call of Duty: Warzone ha hecho lo propio, aunque con diferencias entre las versiones. Lo más curioso de la historia es que Infinity Ward no ha anunciado esto de forma oficial en las notas del parche. Fueron algunos jugadores los que se dieron cuenta y Digital Foundry estuvo testeando el juego, comprobando efectivamente estos cambios en el rendimiento. Ya veremos si esa mejora en la tasa de fotogramas por segundo llega también a PS5, algo posible si vemos el ejemplo de Destiny 2, que informó esta semana de que funcionará a 120 fps en Series X y PS5.','imagen1605441935605.jpg','2020-11-15 12:05:35','2020-11-15 12:05:35'),(5,'Blood Bowl III','Blood Bowl 3 entrará en beta cerrada a comienzos de 2021: vuelven las criaturas de Warhammer Fantasy','Esta versión de prueba se podrá jugar en PC. El juego completo no tiene fecha de lanzamiento.','El año pasado, Cyanide Studios anunciaba Blood Bowl III: nueva adaptación del juego de mesa ambientado en el universo Warhammer Fantasy, que traerá consigo los cambios aplicados a las últimas ediciones de aquel. Tras informar sobre un retraso que aplaza los planes del equipo hasta 2021, al menos ahora llega una buena noticia para los aficionados más impacientes. \"Reserva Blood Bowl: Second Season Edition, y Games Workshop te enviará un código de Steam para que entres en la beta cerrada de Blood Bowl 3 tan pronto como abra sus puertas a comienzos de 2021\" informan sus responsables en el blog de Warhammer, donde también pueden verse algunas nuevas imágenes del videojuego. \"El equipo de diseño de Blood Bowl ha estado trabajando codo con codo con Cyanide Studios y Nacon para este juego ¡y se ve fenomenal!\" reza la misma entrada. \"No solo se han actualizado las reglas por completo para ponerse al día con el juego de mesa, sino que los equipos Imperial Nobility y Black Orc, de la caja de introducción, serán jugables desde el principio\". En otras palabras, será una experiencia más respetuosa con el original, permitiendo a los aficionados personalizar el equipamiento y los detalles de sus fantasiosos deportistas como si fueran miniaturas reales. Sea como fuere, Blood Bowl 3 todavía no tiene fecha de lanzamiento: solo sabemos que estará disponible en algún punto del 2021, como mínimo en PC.','imagen1605442138075.jpg','2020-11-15 12:08:58','2020-11-15 12:08:58'),(6,'Monster Hunter Rise ','Capcom espera que Monster Hunter Rise venda tan bien como Monster Hunter World','La compañía japonesa ha informado de que el desarrollo estuvo parado por el coronavirus.','Lo cierto y verdad es que vienen unos meses muy interesantes para los fans de la saga Monster Hunter. A finales de este año se estrenará la película de acción real, que nos dejó más información en un tráiler publicado hace un mes. Además de esto, en el apartado de juegos, Capcom sacará dos títulos para Nintendo Switch: Monster Hunter Rise, el siguiente juego principal de la saga, y Monster Hunter Stories 2: Wings of Ruin, un juego de corte JRPG. Ahora sabemos alguna información más del desarrollo de Monster Hunter Rise y de las expectativas de Capcom con este nuevo juego. En una entrevista realizada por Nikkei (gracias a la traducción de Nintendo Everything) a Haruhiro Tsujimoto, presidente de Capcom, se ha dado a conocer que la compañía japonesa espera que el título de Switch venda tan bien como Monster Hunter World. \"Con el lanzamiento de un nuevo título, hay un \'efecto de anuncio\' que ayuda a correr la voz sobre el juego y esperamos que este título se venda tan bien como entregas anteriores como Monster Hunter: World\", ha comentado Tsujimoto. Desde luego, estas expectativas son ambiciosas, ya que MH: World ha vendido 16,4 millones de copias entre PC, PlayStation 4 y Xbox One.','imagen1605442595037.jpg','2020-11-15 12:16:35','2020-11-15 12:16:35'),(7,'SEGA ','SEGA muestra material inédito de juegos clásicos de Sonic en 3D en un streaming benéfico','Para animar a los fans a donar, SEGA compartió recursos nunca antes vistos.','Uno de los personajes más queridos del mundo de los videojuegos es Sonic. El erizo azul de SEGA ha levantado pasiones entre varias generaciones de jugadores y sigue teniendo muchos fans entusiastas por todo el mundo. Ahora, SEGA ha compartido material inédito de algunos de los videojuegos clásicos de Sonic, entre los que encontramos bocetos, imágenes y canciones.\r\n\r\nEste fin de semana se ha celebrado el Extra Life 2020, un streaming benéfico en favor de Children\'s Miracle Network, una organización sin ánimo de lucro de hospitales infantiles de Estados Unidos y Canadá. SEGA America participó en el evento y para animar a los fans a donar anunció que mostraría contenido nunca antes visto de Sonic si se alcanzaban ciertos objetivos de donaciones.\r\nEl portal Tail\'s Channel ha recopilado todo lo que SEGA enseñó en el streaming y hay arte conceptual de Sonic Adventure, juego que salió en Dreamcast en 1998 en Japón. También vemos arte en forma de bocetos a lápiz de su secuela, Sonic Adventure 2, además de material de Sonic Heroes, un título que se lanzó en 2004 para consolas y ordenadores.','imagen1605464076405.jpg','2020-11-15 18:14:36','2020-11-15 18:14:36');
/*!40000 ALTER TABLE `noticias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `IdJuego` int(11) NOT NULL AUTO_INCREMENT,
  `Codigo` varchar(45) CHARACTER SET latin1 NOT NULL,
  `NombreDeProducto` varchar(100) CHARACTER SET latin1 NOT NULL,
  `Precio` int(11) NOT NULL DEFAULT '0',
  `Stock` int(11) DEFAULT '1',
  `Tamanio` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `Idioma` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `IdiomaSubt` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `Categoria` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `FechaLanzamiento` date DEFAULT NULL,
  `Descuento` int(11) NOT NULL DEFAULT '0',
  `DescripcionCorta` varchar(50) CHARACTER SET latin1 DEFAULT NULL,
  `Calificacion` int(11) DEFAULT NULL,
  `OfertasUtimosJuegos` varchar(5) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `OfertasDeLaSemana` varchar(5) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `Imagen` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`IdJuego`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'AV014','Horizon Zero Dawn Complete Edition',10000,20,'21','Ingles','Espaniol','Ingenio y RPG','1986-01-03',5,'Horizon Zero Dawn Complete Edition',1,'Si','Si','imagen1602473860543.jpg','2020-10-02 01:45:04','2020-11-20 18:51:58'),(2,'AV031','Mafia Trilogy',10652,20,'5','Portugues','Ingles','Ingenio y RPG','2000-02-02',10,'Mafia Trilogy kskksikls',3,'Si','','mafia-trilogy-cover.jpg','2020-10-02 01:45:04','2020-11-20 00:15:04'),(3,'AV045','Cyberpunk 2077',10652,50,'14','Espaniol','italiano','Ingenio y RPG','2015-04-07',20,'Cyberpunk 2077',5,'Si','','imagen1602541273743.jpg','2020-10-02 01:45:04','2020-10-12 23:22:12'),(4,'AV092','Marvel\'s Avengers Beta Access',10000,200,'6','italiano','Portugues','Ingenio y RPG','2010-05-06',10,'Marvel\'s Avengers Beta Access',5,'','','imagen1602545026943.jpg','2020-10-02 01:45:04','2020-10-12 23:24:06'),(5,'AV123','Crusader Kings III',3200,10,'2','Portugues','Ingles','Ingenio y RPG','2000-02-04',15,'Crusader Kings III Royal Edition',1,'Si','','imagen1602466395542.jpg','2020-10-02 01:45:04','2020-11-18 16:32:12'),(7,'AV167','Iron Harvest',2600,50,'5 GB','Portugues','Ingles','Lucha','2000-02-04',25,'Iron Harvessadfsadfsdafsdafsadf',5,'','','iron-harvest-cover.jpg','2020-10-02 01:45:04','2020-11-18 20:08:23'),(8,'AV176','Fifa 2021',6000,28,'2','italiano','Portugues','Lucha','2010-05-05',15,'Fifa el mejor juego para compartir con amigos',5,'','','fifa-21-cover.jpg','2020-10-02 01:45:04','2020-11-18 19:53:09'),(13,'AV29','call of duty',10000,7,'13 GB','Portugues','Ingles','Destreza','2000-02-04',5,'es una serie de videojuegos de disparos en primera',5,'','Si','imagen1605730651502.jpg','2020-10-02 01:45:04','2020-11-18 20:17:31'),(28,'FT004','WINNIG ELEVEN 7',5000,20,'62','Portugues','Ingles','Lucha','2000-02-01',10,'WINNIG ELEVEN 7dfasdfasdfsad',5,'','','imagen1605739218373.jpg','2020-10-02 01:45:04','2020-11-18 22:41:00'),(31,'MPK1','Enthusia',2789,5,'20','español','Ingles','Aventura','2002-12-16',5,'se conrontan dos estados suma mente importantes',0,'Si','','imagen1605718769781.jpg','2020-10-07 20:29:55','2020-11-19 14:41:32'),(32,'FI-03','Fifa 2020',2252,15,'50','Español','español','deporte','2001-11-04',10,'fifa dsfasdfasdfasdf dsds',0,'','Si','imagen1605729249978.jpg','2020-10-12 01:52:30','2020-11-20 00:15:39'),(34,'MKP05','Mortal Kombat 11',5500,4,'20 GB','Ingles','Ingles','Lucha','2019-11-04',10,'es un videojuego de lucha desarrollado por NetherR',0,'','Si','imagen1605728952197.jpg','2020-11-18 19:46:36','2020-11-18 19:49:12'),(35,'MPK07','Ratchet Clank',5000,6,'16 GB','Ingles','Ingles','Aventura','2009-02-17',25,'Los protagonistas son Ratchet, un mecánico lombax,',0,'','Si','imagen1605729541449.jpg','2020-11-18 19:59:01','2020-11-18 20:00:43'),(36,'MPKG8','Uncharted 4',4700,6,'25 GB','Ingles','Ingles','Aventura','2019-11-03',25,'El retirado cazafortunas Nathan Drake vive felizm',0,'','','imagen1605730059571.jpg','2020-11-18 20:05:54','2020-11-18 20:17:44'),(39,'mpk01','MInecraft',150,10,'5','español','ingles','Accion','2015-08-25',0,'Juego de Accion y Aventura',0,'','','imagen1605898024149.jpg','2020-11-20 18:47:04','2020-11-20 18:47:20');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) CHARACTER SET latin1 NOT NULL,
  `apellido` varchar(20) CHARACTER SET latin1 NOT NULL,
  `email` varchar(200) CHARACTER SET latin1 NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `usu_CodigoArea` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usu_Telefono` varchar(50) CHARACTER SET latin1 DEFAULT NULL,
  `avatar` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `rol` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `contraseña` varchar(256) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (45,'Mario','Mamani','mario@gmail.com',NULL,NULL,'','mario@gmail.com','avatar1605815939007.png','user','$2b$10$TSZntDSE.IAX0i26NToeWeEOpqcVir7hSx1lnpA0RFOe0tsikxIJK'),(46,'Pablo Dante','Cuenca','pablodc28@gmail.com',NULL,NULL,'','32132325','pablodc28@gmail.com.jpg','Administrador','$2b$10$3sREsRy/61p4IQRgviuZW.bERxvJjnw8Me8hJqoJokXbh4LtI/JA2'),(48,'Gaston','Cuenca','gaston@gmail.com',NULL,NULL,'','','avatar1605825275405.jpg','user','$2b$10$o6lEawJNk.X3xvbBTh/UdO6C300r0BwX8sviTpmgJGt0k.wm2IUlK'),(49,'nacho','perez','nacho@gmail.com',NULL,NULL,NULL,NULL,'nacho@gmail.com.jpeg','user','$2b$10$sKB0JnoqxtVJHPcEKjYP2ORXvoOKBIa4yOesPD4PzNwSy6Ytfawlu');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-21 23:51:29
