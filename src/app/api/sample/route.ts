import { prisma } from '#lib/prisma'

export async function GET() {
  const todo: Todo[] = await prisma.todo.findMany()
  return new Response(JSON.stringify(todo))
}
