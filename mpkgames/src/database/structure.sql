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
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
INSERT INTO `carrito` VALUES (78,32,5,'2020-10-12',NULL,NULL,'2020-10-12 15:09:31','2020-10-12 15:09:31',48,1),(81,22,3,'2020-10-12',NULL,NULL,'2020-10-12 15:10:51','2020-10-12 15:10:51',8,1),(82,22,32,'2020-10-12',NULL,NULL,'2020-10-12 18:11:21','2020-10-12 18:11:21',2,1),(83,22,8,'2020-10-12',NULL,NULL,'2020-10-12 18:21:35','2020-10-12 18:21:35',129,1),(84,22,5,'2020-10-12',NULL,NULL,'2020-10-12 18:21:41','2020-10-12 18:21:41',48,1),(85,22,31,'2020-10-12',NULL,NULL,'2020-10-12 22:19:30','2020-10-12 22:19:30',95,1),(88,32,32,'2020-10-15',NULL,NULL,'2020-10-15 20:25:50','2020-10-15 20:25:50',2,1),(89,32,31,'2020-10-15',NULL,NULL,'2020-10-15 20:30:02','2020-10-15 20:30:02',95,1);
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'AV014','Horizon Zero Dawn Complete Edition',10000,20,'21','Ingles','Espaniol','Ingenio y RPG','1986-01-03',5,'Horizon Zero Dawn Complete Edition',1,'','','imagen1602473860543.jpg','2020-10-02 01:45:04','2020-10-12 03:37:40'),(2,'AV031','Mafia Trilogy',10652,20,'5','Portugues','Ingles','Ingenio y RPG','2000-02-02',10,'Mafia Trilogy',3,'Si','No','mafia-trilogy-cover.jpg','2020-10-02 01:45:04','2020-10-11 22:35:21'),(3,'AV045','Cyberpunk 2077',10652,50,'14','Espaniol','italiano','Ingenio y RPG','2015-04-07',20,'Cyberpunk 2077',5,'Si','','imagen1602541273743.jpg','2020-10-02 01:45:04','2020-10-12 23:22:12'),(4,'AV092','Marvel\'s Avengers Beta Access',10,200,'6','italiano','Portugues','Ingenio y RPG','2010-05-06',10,'Marvel\'s Avengers Beta Access',5,'','','imagen1602545026943.jpg','2020-10-02 01:45:04','2020-10-12 23:24:06'),(5,'AV123','Crusader Kings III Royal Edition',50,10,'2','Portugues','Ingles','Ingenio y RPG','2000-02-04',5,'Crusader Kings III Royal Edition',1,'Si','Si','imagen1602466395542.jpg','2020-10-02 01:45:04','2020-10-12 01:33:15'),(7,'AV167','Iron Harvest',10,50,'5','Portugues','Ingles','Lucha','2000-02-04',25,'Iron Harvest',5,'','Si','iron-harvest-cover.jpg','2020-10-02 01:45:04','2020-10-11 22:36:18'),(8,'AV176','Fifa',150,28,'2','italiano','Portugues','Lucha','2010-05-05',14,'Fifa',5,'','Si','fifa-21-cover.jpg','2020-10-02 01:45:04','2020-10-11 22:36:30'),(9,'AV190','APE SCAPE PUMPED Crusader',10,20,'23','Ingles','Espaniol','Lucha','1986-01-05',10,'APE SCAPE PUMPED',4,'','','default-image.png','2020-10-02 01:45:04','2020-10-12 23:25:54'),(10,'AV207','MIAMI VICE',10,50,'65','Portugues','Ingles','Futbol','2000-02-04',25,'MIAMI VICE',2,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(11,'AV221','GOBLIN COMANDER',10,10,'23','Espaniol','italiano','Futbol','2015-04-09',5,'GOBLIN COMANDER',5,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(12,'AV251','ROCKMAN X COMAND MISSION',10,0,'23','Portugues','Ingles','Ingenio y RPG','2000-02-04',0,'ROCKMAN X COMAND MISSION',4,'','','imagen1602545131453.jpg','2020-10-02 01:45:04','2020-10-12 23:25:31'),(13,'AV299','BOB SPONGE (L.C.P)',10,0,'13','Portugues','Ingles','Lucha','2000-02-04',0,'BOB SPONGE (L.C.P)',5,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(14,'AV360','NAMCO MUSEUM',25,28,'65','italiano','Portugues','Lucha','2010-05-06',14,'NAMCO MUSEUM',3,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(15,'AV375','ZOMBIE ZONE',10,50,'23','Portugues','Ingles','Futbol','2000-02-04',25,'ZOMBIE ZONE',5,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(16,'AV393','HE MAN',5,10,'2','italiano','Portugues','Futbol','2010-05-06',5,'HE MAN',2,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(17,'AV407','JURASICK PARK',10,0,'5','Ingles','Espaniol','Ingenio y RPG','1986-01-05',0,'JURASICK PARK',5,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(18,'AV437','ARTHUR',30,10,'20','italiano','Portugues','Ingenio y RPG','2010-05-06',5,'ARTHUR',3,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(19,'AV454','THE SHIELD',10,0,'23','Espaniol','italiano','Ingenio y RPG','2015-04-09',0,'THE SHIELD',1,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(20,'AV468','ROBOCOP',10,20,'65','Portugues','Ingles','Lucha','2000-02-04',10,'ROBOCOP',2,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(21,'AM021','MTX MOTO TRAX',10,20,'351','italiano','Portugues','Lucha','2010-05-06',10,'MTX MOTO TRAX',4,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(22,'AM038','V- RALLY 3',10,50,'32','Espaniol','italiano','Futbol','2015-04-09',25,'V- RALLY 3',2,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(23,'AM052','HOT WHEELS STUNT TRACK CHALLENGE',10,10,'53','Portugues','Ingles','Futbol','2000-02-04',5,'HOT WHEELS STUNT TRACK CHALLENGE',5,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(24,'AM069','ENTHUSIA',10,20,'23','italiano','Portugues','Ingenio y RPG','2010-05-06',10,'ENTHUSIA',4,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(28,'FT004','WINNIG ELEVEN 7',150,20,'62','Portugues','Ingles','Lucha','2000-02-04',10,'WINNIG ELEVEN 7',5,NULL,NULL,'default-image.png','2020-10-02 01:45:04',NULL),(31,'MPK-0001','mpkGames Artur',100,5,'20','español','Ingles','Aventura','2020-12-09',5,'nuevo juego',0,'Si','','imagen1602466184234.jpg','2020-10-07 20:29:55','2020-10-12 01:29:44'),(32,'FI-0003','Fifa2020',2252,15,'50','Español','español','deporte','0000-00-00',0,'fifa',0,'','Si','imagen1602467623133.jpg','2020-10-12 01:52:30','2020-10-12 01:53:43');
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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (22,'Mario','Mamani','mario@gmail.com','2020-10-02 01:46:25',NULL,'11','3323232','avatar1600292446271.jpg','user','$2b$10$LnnFQjHwhQ..rfSMxfRZEexvQdt3VoY.Acz.JQ.scPEC9Gwx11PnO'),(32,'pablo','Cuenca','pablodc28@gmail.com','2020-10-11 03:22:25','2020-10-11 03:22:25','11','5050','avatar1602386545601.jpg','Administrador','$2b$10$WxkeYQCwEJaXxt6JtiuMNecMlF2WzYL/3AUgCRMwW28NhZwy4ckgO');
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

-- Dump completed on 2020-10-15 19:32:48
