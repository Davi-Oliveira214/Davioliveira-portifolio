import Skills from './components/Sessoes/SkillsSessao.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sessoes/SobreSessao.jsx'
import Projetos from './components/Sessoes/ProjetosSessao.jsx'
import Educacao from './components/Sessoes/FormacaoSessao.jsx'
import Rodape from './components/Rodape.jsx'
import Menu from './components/Header.jsx'
import { useEffect } from 'react'

export default function App() {
   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entity) => {
               if (entity.isIntersecting) {
                  entity.target.classList.add('fade-in-up')
                  observer.unobserve(entity.target)
               }
            })
         },
         { threshold: 0.25 },
      )

      document.querySelectorAll('section, footer').forEach((el) => {
         el.style.opacity = '0'
         observer.observe(el)
      })

      return () => observer.disconnect()
   }, [])

   return (
      <>
         <Hero />
         <Menu />
         <main className='flex flex-col flex-1 py-7 gap-7'>
            <Skills />
            <Projetos />
            <Educacao />
            <Sobre />
         </main>
         <Rodape />
      </>
   )
}
