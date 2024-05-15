const faviconUrl = '/favicon.ico';

export const metadata = {
  title: 'КНАУ | Абитуриенты',
  description: 'Абитуриенты',
  icons: faviconUrl,
};

export default function Layout({ children }) {
  return <div>{children}</div>;
}