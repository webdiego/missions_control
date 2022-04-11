-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Goals" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Goals" ("date", "id", "text") SELECT "date", "id", "text" FROM "Goals";
DROP TABLE "Goals";
ALTER TABLE "new_Goals" RENAME TO "Goals";
CREATE UNIQUE INDEX "Goals_text_key" ON "Goals"("text");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
