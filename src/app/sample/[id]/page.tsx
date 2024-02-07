'use client'

export default function Detail({ params }: { params: { id: string } }) {
  return <div> {params.id} 샘플 디테일 화면입니다.</div>
}
