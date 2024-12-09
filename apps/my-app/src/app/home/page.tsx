
export const dynamic = 'force-dynamic'


export default async function Page() {
  const reqData = new FormData();
  reqData.set('body', '1');
  const respData = await fetch('/api/server-package/', {method: 'POST', body: reqData})
  const post = await respData.json()
  return (
    <>
      <header>Result: {post.result}</header>
    </>
  )
}
