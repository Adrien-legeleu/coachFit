/*
  Warnings:

  - You are about to drop the `diplome` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `typeClients` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Coach_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "diplome";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "typeClients";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "TypeClients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "coachId" TEXT NOT NULL,
    CONSTRAINT "TypeClients_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Coach" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Diplome" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "coachId" TEXT NOT NULL,
    CONSTRAINT "Diplome_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Coach" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
