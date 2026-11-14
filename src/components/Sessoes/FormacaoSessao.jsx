import { formacao } from '../../data/formacao'
import CardFormacao from '../cards/CardFormacao'
import Titulo from '../Titulos'

export default function FormacaoSessao() {
   return (
      <section className='w-full px-4' id='formacao'>
         <Titulo texto={'Formação'} />
         <ol className='flex px-2 py-3 gap-3 flex-wrap max-h-60 overflow-y-scroll scrollbar-thin scrollbar-thumb-deep-space-blue-900 snap-mandatory snap-y scroll-smooth flex-col-reverse'>
            {formacao.map((f) => (
               <CardFormacao key={f.id} infomacoes={f} />
            ))}
         </ol>
      </section>
   )
}
