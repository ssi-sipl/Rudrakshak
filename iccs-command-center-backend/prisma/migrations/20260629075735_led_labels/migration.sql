/*
  Warnings:

  - You are about to drop the column `act` on the `media_converters` table. All the data in the column will be lost.
  - You are about to drop the column `fdx` on the `media_converters` table. All the data in the column will be lost.
  - You are about to drop the column `fx` on the `media_converters` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `media_converters` table. All the data in the column will be lost.
  - You are about to drop the column `pwr` on the `media_converters` table. All the data in the column will be lost.
  - You are about to drop the column `tx` on the `media_converters` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "LedType" AS ENUM ('FX', 'TX', 'LINK', 'PWR', 'ACT', 'FDX');

-- AlterTable
ALTER TABLE "media_converters" DROP COLUMN "act",
DROP COLUMN "fdx",
DROP COLUMN "fx",
DROP COLUMN "link",
DROP COLUMN "pwr",
DROP COLUMN "tx",
ADD COLUMN     "left1" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "left1Label" "LedType" NOT NULL DEFAULT 'FX',
ADD COLUMN     "left2" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "left2Label" "LedType" NOT NULL DEFAULT 'TX',
ADD COLUMN     "left3" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "left3Label" "LedType" NOT NULL DEFAULT 'LINK',
ADD COLUMN     "right1" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "right1Label" "LedType" NOT NULL DEFAULT 'PWR',
ADD COLUMN     "right2" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "right2Label" "LedType" NOT NULL DEFAULT 'ACT',
ADD COLUMN     "right3" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "right3Label" "LedType" NOT NULL DEFAULT 'FDX';
