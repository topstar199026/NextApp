import type { NextFetchEvent, NextRequest  } from 'next/server'
import { NextResponse  } from 'next/server'

import { get as getData, save as saveData } from 'src/utils/data-utils'


export function middleware(req: NextRequest, ev: NextFetchEvent) {
  return NextResponse.next() 
}