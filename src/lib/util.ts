// Ссылки и картинки с учётом адреса сайта (на демо сайт живёт в подпапке /sveti-site/).
export function url(path = '/'): string {
  if (!path) return '';
  if (/^(https?:|tel:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (path.startsWith('/') ? path : '/' + path);
}

export function rub(n: number): string {
  return n ? n.toLocaleString('ru-RU').replace(/ /g, ' ') + ' ₽' : '';
}

export function isPlaceholder(s?: string): boolean {
  return !s || /^\[.*\]$/.test(s.trim());
}

const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
export function dateShort(d: Date): string {
  return String(d.getDate()).padStart(2, '0') + '.' + String(d.getMonth() + 1).padStart(2, '0');
}
export function dateLong(d: Date): string {
  return d.getDate() + ' ' + months[d.getMonth()];
}

export type CourseStatus = 'soon' | 'now' | 'past';
export function courseStatus(start: Date, end: Date, now = new Date()): CourseStatus {
  const day = 24 * 3600 * 1000;
  if (now.getTime() > end.getTime() + day) return 'past';
  if (now.getTime() >= start.getTime()) return 'now';
  return 'soon';
}
export const statusLabel: Record<CourseStatus, string> = { soon: 'Идёт набор', now: 'Идёт сейчас', past: 'Завершён' };
