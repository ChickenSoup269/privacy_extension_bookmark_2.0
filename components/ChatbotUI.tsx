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
      if (option.action === "bookmark") {
        botResponse =
          language === "vi"
            ? "Privacy Bookmark giúp bạn quản lý dấu trang và xử lý dữ liệu hoàn toàn cục bộ trong trình duyệt. Dự án không thu thập hay chia sẻ dữ liệu cá nhân."
            : "Privacy Bookmark helps you manage bookmarks with fully local browser-side processing. The project does not collect or share personal data."
      } else if (option.action === "startpage") {
        botResponse =
          language === "vi"
            ? "Zero Startpage thay tab mới của Chrome bằng dashboard cá nhân hóa. Mục đích duy nhất là tối ưu trải nghiệm tab mới và các quyền chỉ dùng cho tính năng đã công bố."
            : "Zero Startpage replaces Chrome's new tab with a personalized dashboard. Its single purpose is a productivity-focused new tab experience, and permissions are limited to declared features."
      } else if (option.action === "all") {
        botResponse =
          language === "vi"
            ? "Hiện tại có 2 dự án chính: Privacy Bookmark và Zero Startpage - Newtab Replacement. Cả hai đều ưu tiên xử lý cục bộ, minh bạch quyền truy cập và không bán dữ liệu người dùng."
            : "We currently have 2 primary projects: Privacy Bookmark and Zero Startpage - Newtab Replacement. Both prioritize local processing, transparent permissions, and no user-data selling."
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
      const asksBookmark =
        lower.includes("bookmark") ||
        lower.includes("dấu trang") ||
        lower.includes("privacy bookmark")
      const asksStartpage =
        lower.includes("startpage") ||
        lower.includes("newtab") ||
        lower.includes("new tab") ||
        lower.includes("tab mới")
      const asksAll =
        lower.includes("all") ||
        lower.includes("tất cả") ||
        lower.includes("hai dự án") ||
        lower.includes("2 dự án")

      if (asksAll) {
        botResponse =
          language === "vi"
            ? "Hai dự án hiện tại là Privacy Bookmark và Zero Startpage. Privacy Bookmark tập trung quản lý dấu trang cục bộ, còn Zero Startpage tập trung trải nghiệm tab mới cá nhân hóa với quyền truy cập theo từng tính năng."
            : "The two current projects are Privacy Bookmark and Zero Startpage. Privacy Bookmark focuses on local bookmark management, while Zero Startpage focuses on a personalized new-tab experience with feature-scoped permissions."
      } else if (asksStartpage) {
        botResponse =
          language === "vi"
            ? "Zero Startpage - Newtab Replacement thay tab mới của Chrome bằng dashboard tùy chỉnh. Quyền bookmarks/scripting/tabs/host chỉ phục vụ các chức năng đã nêu trong chính sách và không dùng để quảng cáo hay bán dữ liệu."
            : "Zero Startpage - Newtab Replacement replaces Chrome's new tab with a customizable dashboard. Its bookmarks/scripting/tabs/host permissions are used only for declared features and not for advertising or data selling."
      } else if (asksBookmark) {
        botResponse =
          language === "vi"
            ? "Privacy Bookmark xử lý mọi dữ liệu cục bộ trên trình duyệt của bạn. Chúng tôi không bao giờ thu thập hay chia sẻ dữ liệu dấu trang của bạn và không gọi API bên ngoài."
            : "Privacy Bookmark processes all data locally in your browser. We never collect or share your bookmark data and do not make external API calls."
      } else if (lower.includes("privacy") || lower.includes("bảo mật")) {
        botResponse =
          language === "vi"
            ? "Tại Privacy Center, chúng tôi cam kết bảo mật và minh bạch. Bạn muốn xem chính sách của Privacy Bookmark hay Zero Startpage?"
            : "At Privacy Center, we are committed to security and transparency. Would you like the policy of Privacy Bookmark or Zero Startpage?"
      } else {
        botResponse =
          language === "vi"
            ? "Mình có thể cung cấp thông tin quyền riêng tư cho 2 dự án: Privacy Bookmark và Zero Startpage. Bạn muốn xem dự án nào?"
            : "I can provide privacy information for 2 projects: Privacy Bookmark and Zero Startpage. Which one would you like?"
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
              action: "bookmark",
            },
            {
              label:
                language === "vi"
                  ? "Zero Startpage - Newtab Replacement"
                  : "Zero Startpage - Newtab Replacement",
              action: "startpage",
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
