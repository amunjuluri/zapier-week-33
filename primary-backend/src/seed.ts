import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
    await prismaClient.availableAction.upsert({
        where: { id: "send-sol" },
        update: {
            name: "Send Solana",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10458YI0Lf1-Zx4fGwhWxI_x4oPCD034xaw&s"
        },
        create: {
            id: "send-sol",
            name: "Send Solana",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10458YI0Lf1-Zx4fGwhWxI_x4oPCD034xaw&s"
        }
    });

    await prismaClient.availableAction.upsert({
        where: { id: "send-sol" },
        update: {
            name: "Send Solana",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10458YI0Lf1-Zx4fGwhWxI_x4oPCD034xaw&s"
        },
        create: {
            id: "send-sol",
            name: "Send Solana",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10458YI0Lf1-Zx4fGwhWxI_x4oPCD034xaw&s"
        }
    });

    await prismaClient.availableAction.upsert({
        where: { id: "email" },
        update: {
            name: "Send Email",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nd82eFk5SaBPRIeCpmwL7A4YSokA-kXSmw&s"
        },
        create: {
            id: "email",
            name: "Send Email",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nd82eFk5SaBPRIeCpmwL7A4YSokA-kXSmw&s"
        }
    });

    await prismaClient.availableAction.upsert({
        where: { id: "ocr" },
        update: {
            name: "Perform OCR",
            image: "https://store-images.s-microsoft.com/image/apps.31355.13510798886736958.b103b59c-03ee-41d8-b773-1c83ef14dced.caa8f128-e37e-4ff8-8275-6ef4b60fed0f"
        },
        create: {
            id: "ocr",
            name: "Perform OCR",
            image: "https://store-images.s-microsoft.com/image/apps.31355.13510798886736958.b103b59c-03ee-41d8-b773-1c83ef14dced.caa8f128-e37e-4ff8-8275-6ef4b60fed0f"
        }
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prismaClient.$disconnect();
    });