export function LocationSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3d3d3d] mb-12">
          ЛОКАЦИЯ
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Информация */}
          <div>
            <h3 className="text-2xl font-bold text-[#3d3d3d] mb-4">
              Hedonist
            </h3>
            
            <div className="space-y-4 text-[#6b6b6b]">
              <p className="text-lg">
                Покровский бульвар, 8с1
              </p>
              <p className="text-lg">
                Москва
              </p>
              
              <div className="mt-6">
                <p className="text-[#a8b5a0] font-medium text-lg">
                  Сбор гостей: 16:00
                </p>
              </div>
              
              {/* Как добраться */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-[#3d3d3d] mb-3">
                  КАК ДОБРАТЬСЯ
                </h4>
                <ul className="space-y-2">
                  <li>📍 Метро: Курская, Чкаловская</li>
                  <li>🚗 Парковка: городская парковка</li>
                  <li>🚕 Такси: Hedonist на Покровском бульваре</li>
                </ul>
              </div>
              
              {/* Кнопка карты */}
              <div className="mt-8">
                <a 
                  href="https://yandex.ru/maps/org/hedonist/178845513143/?ll=37.644730%2C55.757328&z=17.17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#a8b5a0] hover:bg-[#8fa38a] text-white font-medium rounded-lg transition-all duration-300"
                >
                  <span>Открыть в Яндекс Картах</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Карта или фото */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <div className="aspect-video bg-gray-100 rounded-md overflow-hidden">
              {/* Можно вставить iframe карты или фото заведения */}
              <div className="w-full h-full flex items-center justify-center text-[#9a9a9a]">
                Карта Hedonist
              </div>
            </div>
            <p className="text-sm text-center text-[#9a9a9a] mt-3">
              Hedonist на Покровском бульваре
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
