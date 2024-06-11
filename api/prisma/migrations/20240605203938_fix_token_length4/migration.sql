/*
  Warnings:

  - You are about to alter the column `name` on the `Department` table. The data in that column could be lost. The data in that column will be cast from `VarChar(511)` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Department" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "TokenBlackList" ALTER COLUMN "token" SET DATA TYPE VARCHAR(267);
