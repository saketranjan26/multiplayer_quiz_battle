/*
  Warnings:

  - Added the required column `numberOfQuestion` to the `Quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizDurationHour` to the `Quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizDurationMin` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "numberOfQuestion" INTEGER NOT NULL,
ADD COLUMN     "quizDurationHour" INTEGER NOT NULL,
ADD COLUMN     "quizDurationMin" INTEGER NOT NULL;
