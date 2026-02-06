import { PrismaClient } from '../app/generated/prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: "User",
      email: "user@gmail.com",
      password: "password123",
    },
  })

  await prisma.category.createMany({
    data: [
      {
        name: "Flowers",
        description: "All kinds of beautiful flowers",
      },
      {
        name: "Artificial Flowers",
        description: "Artificial flowers for decoration",
      }
    ]
  })

  await prisma.product.createMany({
    data: [
      {
        name: "Rose",
        description: "Beautiful red roses",
        price: 50000.00,
        stock: 100,
        imageUrl: "https://example.com/rose.jpg",
        isActive: true,
        categoryId: 1,
      },
      {
        name: "Tulip",
        description: "Elegant yellow tulips",
        price: 90000.00,
        stock: 50,
        imageUrl: "https://example.com/tulip.jpg",
        isActive: true,
        categoryId: 1,
      },
    ],
  })

  console.log("✅ Seed data inserted")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
