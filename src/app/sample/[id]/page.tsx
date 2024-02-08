'use client'

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

function TodoDetail() {
  const [detailData, setDetailData] = useState({} as Todo)
  const param = useParams()
  const router = useRouter()
  const baseUrl = '/sample'

  async function getDetail() {
    const response = await fetch(`/api/sample/${param.id}`, {
      method: 'GET',
    })
    setDetailData((await response.json()) ?? {})
  }

  useEffect(() => {
    getDetail()
  }, [])

  return (
    <div>
      This is To-Do List Detial Page
      <div className="flex">
        <p>{detailData.no}</p> |<p>{detailData.content}</p>
      </div>
      <button
        type="button"
        onClick={() => router.push(baseUrl, { scroll: true })}
      >
        🔸목록으로..🔸
      </button>
    </div>
  )
}

export default TodoDetail
