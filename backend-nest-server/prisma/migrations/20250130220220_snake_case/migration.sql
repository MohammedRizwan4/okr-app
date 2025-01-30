/*
  Warnings:

  - You are about to drop the column `objectiveId` on the `KeyResult` table. All the data in the column will be lost.
  - Added the required column `objective_id` to the `KeyResult` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "KeyResult" DROP CONSTRAINT "KeyResult_objectiveId_fkey";

-- AlterTable
ALTER TABLE "KeyResult" DROP COLUMN "objectiveId",
ADD COLUMN     "objective_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "KeyResult" ADD CONSTRAINT "KeyResult_objective_id_fkey" FOREIGN KEY ("objective_id") REFERENCES "Objective"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
