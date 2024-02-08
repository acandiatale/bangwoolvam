import { prisma } from '#lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: number } },
) {
  const todo: Todo =
    (await prisma.todo.findUnique({
      where: {
        no: Number(params.id),
      },
    })) ?? ({} as Todo)
  return new Response(JSON.stringify(todo))
}

export async function POST() {
  return ''
}
