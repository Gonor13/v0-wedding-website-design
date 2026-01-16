import { NextResponse } from "next/server"

interface RsvpData {
  name: string
  attendance: string
  companion?: string
  drinks?: string[]
  wishes?: string
  email?: string
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

// Валидация данных формы
function validateRsvpData(data: any): data is RsvpData {
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    return false
  }
  
  if (!data.attendance || !['yes', 'no'].includes(data.attendance)) {
    return false
  }
  
  return true
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Валидация данных
    if (!validateRsvpData(data)) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Неверные данные формы. Пожалуйста, проверьте имя и подтверждение присутствия." 
        }, 
        { status: 400 }
      )
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error("Missing Telegram credentials:", {
        hasBotToken: !!botToken,
        hasChatId: !!chatId,
        botTokenLength: botToken?.length,
        chatId: chatId
      })
      return NextResponse.json(
        { 
          success: false, 
          error: "Ошибка конфигурации сервера. Свяжитесь с организаторами." 
        }, 
        { status: 500 }
      )
    }

    // Проверка валидности токена (базовая)
    if (!botToken.startsWith('8502623548:') && !botToken.startsWith('AAET_')) {
      console.error("Invalid bot token format")
      return NextResponse.json(
        { success: false, error: "Неверный формат токена бота" },
        { status: 500 }
      )
    }

    // Форматирование списка напитков
    const drinksText = data.drinks && data.drinks.length > 0 
      ? data.drinks
          .map((d: string) => drinkLabels[d] || d)
          .filter(Boolean)
          .join(", ")
      : "Не указано"

    // Форматирование текста присутствия
    const attendanceText = data.attendance === "yes" ? "✅ Да, придёт" : "❌ Не сможет"
    const companionText = data.companion?.trim() || "Без спутника"

    // Дополнительные поля
    const wishesText = data.wishes?.trim() 
      ? `💭 *Пожелания:* ${data.wishes.trim().substring(0, 200)}${data.wishes.trim().length > 200 ? '...' : ''}`
      : ''
    
    const emailText = data.email?.trim() 
      ? `📧 *Email:* ${data.email.trim()}`
      : ''

    // Создание сообщения для Telegram с эмодзи и форматированием
    const message = `
🎊 *Новый ответ на свадебную анкету!*

👤 *Гость:* ${data.name.trim()}
📍 *Присутствие:* ${attendanceText}
👥 *Спутник:* ${companionText}
🍷 *Напитки:* ${drinksText}
${wishesText}
${emailText}

⏰ *Отправлено:* ${new Date().toLocaleString('ru-RU', {
  timeZone: 'Europe/Moscow',
  dateStyle: 'short',
  timeStyle: 'short'
})}
    `.trim()

    console.log("Sending to Telegram:", {
      chatId,
      messagePreview: message.substring(0, 100) + '...',
      drinksCount: data.drinks?.length || 0
    })

    // Отправка в Telegram с таймаутом
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 секунд таймаут

    try {
      const response = await fetch(telegramUrl, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "User-Agent": "WeddingRSVP/1.0"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
          disable_notification: false,
        }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("Telegram API error:", {
          status: response.status,
          statusText: response.statusText,
          error: errorData
        })
        
        let errorMessage = "Не удалось отправить уведомление"
        if (response.status === 401) errorMessage = "Неверный токен бота"
        if (response.status === 400) errorMessage = "Неверный формат запроса"
        if (response.status === 404) errorMessage = "Чат не найден"
        
        return NextResponse.json(
          { 
            success: false, 
            error: errorMessage,
            details: response.statusText
          }, 
          { status: 502 }
        )
      }

      const telegramResponse = await response.json()
      console.log("Telegram response:", {
        messageId: telegramResponse.result?.message_id,
        ok: telegramResponse.ok
      })

      // Логируем успешную отправку (без чувствительных данных)
      console.log("RSVP successfully submitted:", {
        name: data.name.trim(),
        attendance: data.attendance,
        hasCompanion: !!data.companion,
        drinksCount: data.drinks?.length || 0
      })

      return NextResponse.json({ 
        success: true,
        message: "Спасибо! Ваш ответ успешно отправлен."
      })

    } catch (fetchError: any) {
      clearTimeout(timeoutId)
      
      if (fetchError.name === 'AbortError') {
        console.error("Telegram request timeout")
        return NextResponse.json(
          { success: false, error: "Таймаут при отправке. Попробуйте позже." },
          { status: 504 }
        )
      }
      
      throw fetchError
    }

  } catch (error: any) {
    console.error("RSVP submission error:", {
      name: error.name,
      message: error.message,
      stack: error.stack
    })

    return NextResponse.json(
      { 
        success: false, 
        error: "Внутренняя ошибка сервера. Пожалуйста, попробуйте позже.",
        requestId: Date.now().toString(36) // Простой ID для отслеживания
      }, 
      { status: 500 }
    )
  }
}

// Добавляем OPTIONS метод для CORS (если нужно)
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
