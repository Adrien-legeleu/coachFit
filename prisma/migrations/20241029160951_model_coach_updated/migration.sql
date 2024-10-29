-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Coach" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isQuiz" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "age" INTEGER,
    "tel" TEXT NOT NULL,
    "gender" TEXT,
    "bio" TEXT,
    "price" INTEGER,
    "year_exp" TEXT,
    "note" INTEGER,
    "userId" TEXT,
    CONSTRAINT "Coach_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Coach" ("age", "bio", "createdAt", "email", "gender", "id", "image", "isQuiz", "name", "note", "price", "tel", "updatedAt", "userId", "year_exp") SELECT "age", "bio", "createdAt", "email", "gender", "id", "image", "isQuiz", "name", "note", "price", "tel", "updatedAt", "userId", "year_exp" FROM "Coach";
DROP TABLE "Coach";
ALTER TABLE "new_Coach" RENAME TO "Coach";
CREATE UNIQUE INDEX "Coach_email_key" ON "Coach"("email");
CREATE UNIQUE INDEX "Coach_userId_key" ON "Coach"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
