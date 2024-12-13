import { NextRequest, NextResponse } from 'next/server';
import { sum } from 'server-package';


export async function POST(_req: NextRequest){
  const form = await _req.formData()
  const data: FormDataEntryValue | null = form.get('data')
  const value: number = !data ? 1 : parseInt(data.toString())

  return NextResponse.json({result: sum(value,value)})
}
