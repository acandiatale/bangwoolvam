'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

function TodoList() {
  const [todo, setTodo] = useState([])
  const router = useRouter()
  const baseUrl = '/sample'
  async function getTodo() {
    const response = await fetch('/api/sample', {
      method: 'GET',
    })
    setTodo((await response.json()) ?? [])
  }
  useEffect(() => {
    getTodo()
  }, [])

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>번호</td>
            <td>확인</td>
            <td>내용</td>
            <td>상세내용</td>
          </tr>
          {todo.map((item: Todo) => {
            return (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.flag ? '⭕' : '❌'}</td>
                <td>{item.content}</td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      router.push(`${baseUrl}/${item.no}`, { scroll: true })
                    }
                  >
                    🔸click🔸
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList
