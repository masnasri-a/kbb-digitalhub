import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

type ResponseData = {
  message: string;
};
export async function POST(request: Request) {
  const prisma = new PrismaClient();

  const data = await request.json();
  const { name, email, pesan, kecamatan, desa, alamat, phone } = data;
  console.log(name, email, pesan, kecamatan, desa, alamat, phone);
  await prisma.userdata.create({
        data: {
          name,
          email,
          pesan,
          kecamatan,
          desa,
          alamat,
          phone,
        },
      }).then(async (user) => {
        console.log(user);
        await prisma.$disconnect()
        return NextResponse.json({ message: "Success" });
      }).catch(async(err) => {
        console.log(err);
        await prisma.$disconnect()
        return NextResponse.json({ message: "Failed" });
      }
  );
  return NextResponse.json({ msg: "Hello" });
  
}
