class HistoryService {
  private key = 'weatherSearchHistory';

  getHistory(): string[] {
    const history = localStorage.getItem(this.key);
    return history ? JSON.parse(history) : [];
  }

  setHistory(cities: string[]): void {
    localStorage.setItem(this.key, JSON.stringify(cities));
  }

  clearHistory(): void {
    localStorage.removeItem(this.key);
  }
}

export const historyService = new HistoryService();
