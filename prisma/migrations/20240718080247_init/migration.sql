-- CreateTable
CREATE TABLE "userdata" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "kecamatan" TEXT,
    "desa" TEXT,
    "alamat" TEXT,
    "pesan" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userdata_pkey" PRIMARY KEY ("id")
);
