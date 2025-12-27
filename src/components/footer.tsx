import { themes } from '@/config/theme';

export default function Footer() {
  const themeConfig = themes.dark;
  
  return (
    <footer style={{ backgroundColor: themeConfig.background, color: themeConfig.text }} className="p-4">
      <p className="text-center">© 2025 Steradian Architects. All rights reserved.</p>
    </footer>
  )
}