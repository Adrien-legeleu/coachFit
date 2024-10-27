-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Coach" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isQuiz" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "age" INTEGER,
    "tel" TEXT NOT NULL,
    "gender" TEXT,
    "bio" TEXT,
    "price" INTEGER,
    "year_exp" INTEGER,
    "note" INTEGER,
    "userId" TEXT,
    CONSTRAINT "Coach_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Coach" ("age", "bio", "createdAt", "email", "gender", "id", "image", "isQuiz", "name", "note", "price", "tel", "updatedAt", "year_exp") SELECT "age", "bio", "createdAt", "email", "gender", "id", "image", "isQuiz", "name", "note", "price", "tel", "updatedAt", "year_exp" FROM "Coach";
DROP TABLE "Coach";
ALTER TABLE "new_Coach" RENAME TO "Coach";
CREATE UNIQUE INDEX "Coach_email_key" ON "Coach"("email");
CREATE UNIQUE INDEX "Coach_userId_key" ON "Coach"("userId");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isQuiz" BOOLEAN NOT NULL DEFAULT false,
    "age" INTEGER,
    "gender" TEXT,
    "height" REAL,
    "weight" REAL,
    "activity_level" TEXT,
    "status" TEXT,
    "bio" TEXT,
    "health_conditions" TEXT,
    "tel" TEXT,
    "coachId" TEXT
);
INSERT INTO "new_User" ("activity_level", "age", "bio", "coachId", "createdAt", "email", "emailVerified", "gender", "health_conditions", "height", "id", "image", "isQuiz", "name", "status", "tel", "updatedAt", "weight") SELECT "activity_level", "age", "bio", "coachId", "createdAt", "email", "emailVerified", "gender", "health_conditions", "height", "id", "image", "isQuiz", "name", "status", "tel", "updatedAt", "weight" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
