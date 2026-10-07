import FileGrid from './FileGrid'
import type { FileItem } from './FileGrid'

interface Props { onOpenFile: (f: FileItem) => void }

const FILES: FileItem[] = [
  { name: 'Dev Setup', text: ['My Development Setup','━'.repeat(55),'','OS              Windows 11 + WSL2 (Ubuntu)','Editor          VS Code + Cursor','Terminal        Windows Terminal / zsh','Browser         Chrome (dev) / Edge (work)','','TOOLS','─'.repeat(55),'Version Control   Git + GitHub','Package Manager   pnpm','DB Client         TablePlus','API Testing       Bruno','Design            Figma'].join('\n') },
  { name: 'Reading List', text: ['Reading List','━'.repeat(55),'','CURRENTLY READING','─'.repeat(55),'  • The Pragmatic Programmer — Hunt & Thomas','  • Designing Data-Intensive Applications — Kleppmann','','WANT TO READ','─'.repeat(55),"  • Clean Architecture — Robert C. Martin","  • System Design Interview — Alex Xu"].join('\n') },
  { name: 'Goals 2026', text: ['Goals — 2026','━'.repeat(55),'','TECHNICAL','─'.repeat(55),'  [x] Ship M-Pesa Finance Tracker as PWA','  [ ] Launch Restaurant Engine beta','  [ ] Learn Rust (basics)','  [ ] Contribute to an open-source project','','CAREER','─'.repeat(55),'  [ ] Land a fullstack role at a product company','  [ ] Build in public — share more on LinkedIn'].join('\n') },
  { name: 'Nairobi Tech Scene', text: ['The Nairobi Tech Scene — Notes','━'.repeat(55),'','Nairobi is one of the best cities in Africa to be','a developer right now. The ecosystem is growing fast.','','NOTABLE COMPANIES','─'.repeat(55),'  • Safaricom — M-Pesa, the gold standard of fintech','  • Andela — remote engineering talent platform',"  • Africa's Talking — telco APIs for Africa"].join('\n') },
]

export default function DocumentsContent({ onOpenFile }: Props) {
  return <FileGrid files={FILES} label="documents" onOpenFile={onOpenFile} />
}
