import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from 'lucide-react'
import { useState } from 'react'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  return (
    <div className='h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center'>
      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er" />
          <p className='text-zinc-300 text-lg'>Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape'>
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className="size-5 text-zinc-400" />
              <input disabled={isGuestsInputOpen} type="text" name="" placeholder='Para onde você vai?' id=""  className='bg-transparent text-lg placeholder-zinc-400 outline-none'/>
            </div>

            <div className='flex items-center gap-2 max-w-56'>
              <Calendar className='size-5 text-zinc-400' />
              <input disabled={isGuestsInputOpen} type="text" name="" placeholder='Quando?' id=""  className='bg-transparent text-lg placeholder-zinc-400 outline-none'/>
            </div>

            <div className="w-px h-5 bg-zinc-800 mr-4"></div>

            {isGuestsInputOpen ? (
              <button onClick={closeGuestsInput} className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>Alterar local/data <Settings2 className='size-5' /></button>
            ) : (
              <button onClick={openGuestsInput} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>Continuar <ArrowRight className="size-5 text-lime-950" /></button>
            )}
          </div>

          {isGuestsInputOpen && (
              <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape'>
                <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1 text-left'>
                  <UserRoundPlus className="size-5 text-zinc-400" />
                  <span className='text-zinc-400 text-lg flex-1'>Quem estará na viagem?</span>
                </button>

                <div className="w-px h-5 bg-zinc-800 mr-4"></div>

                <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>Confirmar viagem <ArrowRight className="size-5 text-lime-950" /></button>
              </div>
          )}
        </div>

        <p className='text-sm text-zinc-500'>
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br/>
          com nossos <a className='text-zinc-300 underline' href="#">termos de uso</a> e <a className='text-zinc-300 underline' href="#">políticas de privacidade</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
          <div className='w-full max-w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900'>
            <h2>Selecionar convidados</h2>
          </div>
        </div>
      )}
    </div>
  )
}