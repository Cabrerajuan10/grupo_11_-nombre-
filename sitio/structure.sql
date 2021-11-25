-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema comunnityelectro_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema comunnityelectro_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `comunnityelectro_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `comunnityelectro_db` ;

-- -----------------------------------------------------
-- Table `comunnityelectro_db`.`rols`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comunnityelectro_db`.`rols` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `comunnityelectro_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comunnityelectro_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `avatar` VARCHAR(255) NULL DEFAULT 'avatar-default.jpg',
  `rolId` INT NULL DEFAULT '1',
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `rolId` (`rolId` ASC) VISIBLE,
  CONSTRAINT `users_ibfk_1`
    FOREIGN KEY (`rolId`)
    REFERENCES `comunnityelectro_db`.`rols` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 26
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `comunnityelectro_db`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comunnityelectro_db`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 25
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `comunnityelectro_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comunnityelectro_db`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `price` DECIMAL(8,2) NOT NULL,
  `priceRegular` DECIMAL(8,2) NOT NULL,
  `discount` INT NULL DEFAULT '0',
  `categoryId` INT NULL DEFAULT NULL,
  `show` TINYINT(1) NULL DEFAULT '1',
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  `deletedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `categoryId` (`categoryId` ASC) VISIBLE,
  CONSTRAINT `products_ibfk_1`
    FOREIGN KEY (`categoryId`)
    REFERENCES `comunnityelectro_db`.`categories` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `comunnityelectro_db`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comunnityelectro_db`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(255) NULL DEFAULT NULL,
  `userId` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC) VISIBLE,
  CONSTRAINT `orders_ibfk_1`
    FOREIGN KEY (`userId`)
    REFERENCES `comunnityelectro_db`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `comunnityelectro_db`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comunnityelectro_db`.`carts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NULL DEFAULT NULL,
  `productId` INT NULL DEFAULT NULL,
  `quantity` INT NULL DEFAULT NULL,
  `orderId` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC) VISIBLE,
  INDEX `productId` (`productId` ASC) VISIBLE,
  INDEX `orderId` (`orderId` ASC) VISIBLE,
  CONSTRAINT `carts_ibfk_1`
    FOREIGN KEY (`userId`)
    REFERENCES `comunnityelectro_db`.`users` (`id`),
  CONSTRAINT `carts_ibfk_2`
    FOREIGN KEY (`productId`)
    REFERENCES `comunnityelectro_db`.`products` (`id`),
  CONSTRAINT `carts_ibfk_3`
    FOREIGN KEY (`orderId`)
    REFERENCES `comunnityelectro_db`.`orders` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `comunnityelectro_db`.`features`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comunnityelectro_db`.`features` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `icon` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `comunnityelectro_db`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comunnityelectro_db`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `file` VARCHAR(255) NULL DEFAULT NULL,
  `productId` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `productId` (`productId` ASC) VISIBLE,
  CONSTRAINT `images_ibfk_1`
    FOREIGN KEY (`productId`)
    REFERENCES `comunnityelectro_db`.`products` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `comunnityelectro_db`.`product-users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comunnityelectro_db`.`product-users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NULL DEFAULT NULL,
  `productId` INT NULL DEFAULT NULL,
  `quantity` INT NULL DEFAULT NULL,
  `total` DECIMAL(8,2) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC) VISIBLE,
  INDEX `productId` (`productId` ASC) VISIBLE,
  CONSTRAINT `product-users_ibfk_1`
    FOREIGN KEY (`userId`)
    REFERENCES `comunnityelectro_db`.`users` (`id`),
  CONSTRAINT `product-users_ibfk_2`
    FOREIGN KEY (`productId`)
    REFERENCES `comunnityelectro_db`.`products` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `comunnityelectro_db`.`product_features`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comunnityelectro_db`.`product_features` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productId` INT NULL DEFAULT NULL,
  `featureId` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `productId` (`productId` ASC) VISIBLE,
  INDEX `featureId` (`featureId` ASC) VISIBLE,
  CONSTRAINT `product_features_ibfk_1`
    FOREIGN KEY (`productId`)
    REFERENCES `comunnityelectro_db`.`products` (`id`),
  CONSTRAINT `product_features_ibfk_2`
    FOREIGN KEY (`featureId`)
    REFERENCES `comunnityelectro_db`.`features` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `comunnityelectro_db`.`sequelizemeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `comunnityelectro_db`.`sequelizemeta` (
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE INDEX `name` (`name` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
