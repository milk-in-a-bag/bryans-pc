import { NextResponse } from 'next/server'

export const revalidate = 1800 // cache for 30 minutes

export async function GET() {
  try {
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast' +
      '?latitude=-1.286&longitude=36.817' +
      '&current=temperature_2m,weathercode' +
      '&temperature_unit=fahrenheit' +
      '&timezone=Africa%2FNairobi',
      { next: { revalidate: 1800 } }
    )

    if (!res.ok) throw new Error(`Open-Meteo error: ${res.status}`)

    const data = await res.json()
    const temp = Math.round(data.current.temperature_2m)
    const code = data.current.weathercode as number

    return NextResponse.json({ temp, code, condition: describeCode(code) })
  } catch {
    return NextResponse.json({ temp: null, code: null, condition: 'Unavailable' }, { status: 200 })
  }
}

// WMO weather interpretation codes → human-readable label + icon hint
function describeCode(code: number): string {
  if (code === 0)              return 'Clear'
  if (code <= 3)               return 'Partly Cloudy'
  if (code <= 48)              return 'Foggy'
  if (code <= 67)              return 'Rainy'
  if (code <= 77)              return 'Snowy'
  if (code <= 82)              return 'Showers'
  if (code <= 99)              return 'Thunderstorm'
  return 'Unknown'
}
