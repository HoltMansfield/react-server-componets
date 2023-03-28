import { TodoList } from "@/app/widgets/TodoList"
import { Suspense } from "react"

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'mama' })
    }, 5000)
  })
}

async function getDataFirst() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'Firsto' })
    }, 350)
  })
}

export default async function Widgets() {
  const dataFirstResponse = await getDataFirst()
  const dataResponse = await getData()

  const dataFirst = await dataFirstResponse

  return (
    <div>
      <div>Widgets Page</div>
      <div>{JSON.stringify(dataFirst)}</div>
      <Suspense fallback={<div>Fetching widgets...</div>}>
        {/*
        //@ts-expect-error*/}
        <TodoList listPromise={dataResponse}></TodoList>
      </Suspense>
      <div>
      </div>
    </div>
  )
}





  // const res = await fetch('https://api.themoviedb.org/3/movie/76341?api_key=d0f5f2e135336200362af8a1a73acb17', {
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     //'api-key': 'd0f5f2e135336200362af8a1a73acb17'
  //   }
  // })
  // const json = await res.json()
  // return json
