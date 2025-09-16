
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    const imageRes = await fetch(url);
    if (!imageRes.ok) {
      throw new Error(`Failed to fetch image: ${imageRes.statusText}`);
    }
    const imageBuffer = await imageRes.arrayBuffer();
    const contentType = imageRes.headers.get('content-type') || 'image/jpeg';
    
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
      },
    });

  } catch (error) {
    console.error(`[Image Proxy] Error fetching image:`, error);
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }
}
