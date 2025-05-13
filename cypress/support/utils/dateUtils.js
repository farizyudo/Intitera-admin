export function getTodayDateFormatted() {
    const today = new Date()
    const day = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0') // Januari = 0
    const year = today.getFullYear()
    return `${year}-${month}-${day}` // hasil: 2025-05-13
}

export function getTomorrowDateFormatted() {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const day = String(tomorrow.getDate()).padStart(2, '0')
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0')
    const year = tomorrow.getFullYear()
    return `${year}-${month}-${day}`
}

