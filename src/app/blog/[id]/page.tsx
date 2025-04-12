type Params = {
  params: Promise<{
    id: string;
  }>;
};
export default async function page({ params }: Params) {
  // console.log(params);
  const { id } = await params;
  return <div>ブログID：{id}</div>;
}
