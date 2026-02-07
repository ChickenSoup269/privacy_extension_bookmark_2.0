"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, Bot, ChevronRight } from "lucide-react"
import { useLanguage } from "./LanguageProvider"

interface Message {
  role: "bot" | "user"
  text: string
  options?: { label: string; action: string }[]
}

export function ChatbotUI() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const { t, language } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isOpen])

  const handleOptionClick = (option: { label: string; action: string }) => {
    setMessages((prev) => [...prev, { role: "user", text: option.label }])

    setTimeout(() => {
      let botResponse = ""
      if (option.action === "zero") {
        botResponse =
          language === "vi"
            ? "Privacy Bookmark là dự án trọng tâm của chúng tôi, cam kết 100% không thu thập dữ liệu và xử lý cục bộ."
            : "Privacy Bookmark is our flagship project, committing 100% to zero data collection and local processing."
      } else if (option.action === "all") {
        botResponse =
          language === "vi"
            ? "Hiện tại chúng tôi có Privacy Bookmark và các dự án khác đang phát triển. Tất cả đều tuân thủ triết lý bảo mật nghiêm ngặt."
            : "Currently we have Privacy Bookmark and other projects in development. All follow strict privacy philosophies."
      }
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }])
    }, 600)
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setMessages((prev) => [...prev, { role: "user", text: userMessage }])
    setInput("")

    setTimeout(() => {
      let botResponse = ""
      const lower = userMessage.toLowerCase()

      if (lower.includes("privacy") || lower.includes("bookmark")) {
        botResponse =
          language === "vi"
            ? "Privacy Bookmark xử lý mọi dữ liệu cục bộ trên trình duyệt của bạn. Chúng tôi không bao giờ thu thập hay chia sẻ dữ liệu dấu trang của bạn và không gọi API bên ngoài."
            : "Privacy Bookmark processes all data locally in your browser. We never collect or share your bookmark data and do not make external API calls."
      } else if (lower.includes("privacy") || lower.includes("bảo mật")) {
        botResponse =
          language === "vi"
            ? "Tại Privacy Center, chúng tôi cam kết bảo mật tuyệt đối. Bạn muốn biết thêm về chính sách của Privacy Bookmark không?"
            : "At Privacy Center, we are committed to absolute security. Would you like to know more about Privacy Bookmark's policy?"
      } else {
        botResponse =
          language === "vi"
            ? "Xin lỗi, tôi chỉ có thể cung cấp thông tin về quyền riêng tư của các dự án trong hệ sinh thái này. Hãy thử chọn một dự án bên dưới!"
            : "Sorry, I can only provide privacy information about projects in this ecosystem. Try selecting a project below!"
      }

      setMessages((prev) => [...prev, { role: "bot", text: botResponse }])
    }, 600)
  }

  const initialBotMessage = () => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "bot",
          text:
            language === "vi"
              ? "Chào bạn! Tôi là trợ lý bảo mật. Bạn muốn tìm hiểu chính sách của dự án nào?"
              : "Hello! I am your privacy assistant. Which project's policy would you like to explore?",
          options: [
            {
              label:
                language === "vi" ? "Privacy Bookmark" : "Privacy Bookmark",
              action: "zero",
            },
            {
              label: language === "vi" ? "Tất cả dự án" : "All Projects",
              action: "all",
            },
          ],
        },
      ])
    }
  }

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true)
            initialBotMessage()
          }}
          className="p-4 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:translate-y-2 active:shadow-none animate-bounce"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="w-[350px] max-w-[90vw] h-[550px] bg-white dark:bg-zinc-900 border-4 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] flex flex-col overflow-hidden animate-reveal">
          {/* Header */}
          <div className="p-4 border-b-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-black uppercase text-xs tracking-widest italic">
                Privacy AI
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:rotate-90 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-grow p-4 overflow-y-auto space-y-4 bg-zinc-50 dark:bg-zinc-950"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 border-2 border-black dark:border-white font-bold text-sm ${
                    msg.role === "user"
                      ? "bg-black dark:bg-white text-white dark:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                      : "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.options && (
                  <div className="flex flex-col gap-2 mt-3 w-full max-w-[85%]">
                    {msg.options.map((opt, j) => (
                      <button
                        key={j}
                        onClick={() => handleOptionClick(opt)}
                        className="flex items-center justify-between p-2.5 border-2 border-black bg-yellow-300 text-black font-black uppercase text-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-left"
                      >
                        {opt.label}
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t-4 border-black dark:border-white flex gap-2 bg-white dark:bg-zinc-900">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={
                language === "vi"
                  ? "Hỏi về quyền riêng tư..."
                  : "Ask about privacy..."
              }
              className="flex-grow p-2 border-2 border-black dark:border-white bg-transparent font-bold text-xs focus:outline-none placeholder:opacity-50 text-black dark:text-white"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white hover:opacity-80 transition-opacity"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
