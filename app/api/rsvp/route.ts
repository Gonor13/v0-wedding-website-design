import { NextResponse } from "next/server"

interface RsvpData {
  name: string
  attendance: string
  companion: string
  drinks: string[]
}

const drinkLabels: Record<string, string> = {
  champagne: "Шампанское",
  "white-wine": "Белое вино",
  "red-wine": "Красное вино",
  whiskey: "Виски",
  vodka: "Водка",
  gin: "Джин",
  rum: "Ром",
  "no-alcohol": "Не пью алкоголь",
}

export async function POST(request: Request) {
  try {
    const data: RsvpData = await request.json()

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error("Missing Telegram credentials")
      return NextResponse.json({ success: false, error: "Server configuration error" }, { status: 500 })
    }

    // Format drinks list
    const drinksText = data.drinks.length > 0 ? data.drinks.map((d) => drinkLabels[d] || d).join(", ") : "Не выбрано"

    // Create Telegram message
    const attendanceText = data.attendance === "yes" ? "✅ Да, придёт" : "❌ Не сможет"
    const companionText = data.companion ? data.companion : "Без спутника"

    const message = `
🎊 *Новый ответ на анкету свадьбы!*

👤 *Имя:* ${data.name}
📍 *Присутствие:* ${attendanceText}
👥 *Спутник:* ${companionText}
🍷 *Напитки:* ${drinksText}
    `.trim()

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Telegram API error:", errorData)
      return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("RSVP submission error:", error)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
