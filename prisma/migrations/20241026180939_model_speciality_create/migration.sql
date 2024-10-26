/*
  Warnings:

  - You are about to drop the column `speciality` on the `User` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Speciality" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Speciality_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "age" INTEGER,
    "gender" TEXT,
    "height" REAL,
    "weight" REAL,
    "activity_level" TEXT,
    "coach_id" TEXT,
    "status" TEXT,
    "bio" TEXT,
    "health_conditions" TEXT,
    "tel" TEXT
);
INSERT INTO "new_User" ("activity_level", "age", "bio", "coach_id", "createdAt", "email", "emailVerified", "gender", "health_conditions", "height", "id", "image", "name", "status", "tel", "updatedAt", "weight") SELECT "activity_level", "age", "bio", "coach_id", "createdAt", "email", "emailVerified", "gender", "health_conditions", "height", "id", "image", "name", "status", "tel", "updatedAt", "weight" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
