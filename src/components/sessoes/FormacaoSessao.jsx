import { formacao } from '../../data/formacao'
import CardFormacao from '../cards/CardFormacao'
import Titulo from '../Titulos'

export default function FormacaoSessao() {
   const formacaoOrdenada = formacao.sort((a, b) => b.fim.localeCompare(a.fim))

   return (
      <section className='w-full px-4 [--horizontal:70px]' id='formacao'>
         <Titulo texto={'Formação'} />
         <ol className='flex px-2 py-3 gap-3 flex-wrap max-h-60 overflow-y-scroll scrollbar-thin scrollbar-thumb-deep-space-blue-900 snap-mandatory snap-y scroll-smooth'>
            {formacaoOrdenada.map((f) => (
               <CardFormacao key={f.id} infomacoes={f} />
            ))}
         </ol>
      </section>
   )
}
