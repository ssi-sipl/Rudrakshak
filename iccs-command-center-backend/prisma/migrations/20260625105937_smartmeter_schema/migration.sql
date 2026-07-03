-- AlterTable
ALTER TABLE "sensors" ADD COLUMN     "smartMeterId" TEXT;

-- CreateTable
CREATE TABLE "media_converters" (
    "id" SERIAL NOT NULL,
    "mediaConverterId" TEXT NOT NULL,
    "smartMeterId" TEXT,
    "fx" BOOLEAN NOT NULL,
    "tx" BOOLEAN NOT NULL,
    "link" BOOLEAN NOT NULL,
    "pwr" BOOLEAN NOT NULL,
    "act" BOOLEAN NOT NULL,
    "fdx" BOOLEAN NOT NULL,
    "lastUpdatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "media_converters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media_converter_logs" (
    "id" SERIAL NOT NULL,
    "mediaConverterId" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "requestCount" INTEGER NOT NULL DEFAULT 0,
    "expected" INTEGER NOT NULL,

    CONSTRAINT "media_converter_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "smart_meters" (
    "id" TEXT NOT NULL,
    "smartMeterId" TEXT NOT NULL,
    "location" TEXT,
    "ipAddress" TEXT,
    "NetworkStatus" TEXT NOT NULL DEFAULT 'OFFLINE',
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "addedBy" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "smart_meters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "media_converters_mediaConverterId_key" ON "media_converters"("mediaConverterId");

-- CreateIndex
CREATE UNIQUE INDEX "media_converter_logs_mediaConverterId_date_key" ON "media_converter_logs"("mediaConverterId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "smart_meters_smartMeterId_key" ON "smart_meters"("smartMeterId");

-- AddForeignKey
ALTER TABLE "sensors" ADD CONSTRAINT "sensors_smartMeterId_fkey" FOREIGN KEY ("smartMeterId") REFERENCES "smart_meters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_converters" ADD CONSTRAINT "media_converters_smartMeterId_fkey" FOREIGN KEY ("smartMeterId") REFERENCES "smart_meters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_converter_logs" ADD CONSTRAINT "media_converter_logs_mediaConverterId_fkey" FOREIGN KEY ("mediaConverterId") REFERENCES "media_converters"("mediaConverterId") ON DELETE CASCADE ON UPDATE CASCADE;
