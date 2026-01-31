// Mengajarkan TS cara baca file HTML
declare module '*.html' {
  const content: string;
  export default content;
}

// (Opsional) Mengajarkan TS cara baca SCSS (kalau nanti mau import style juga)
declare module '*.scss' {
  const content: string;
  export default content;
}