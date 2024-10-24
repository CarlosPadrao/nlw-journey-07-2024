import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export function DestinationAndDateStep({ closeGuestsInput, openGuestsInput, isGuestsInputOpen }: DestinationAndDateStepProps) {
  return (
    <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape'>
      <div className='flex items-center gap-2 flex-1'>
        <MapPin className="size-5 text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" name="" placeholder='Para onde você vai?' id=""  className='bg-transparent text-lg placeholder-zinc-400 outline-none'/>
      </div>

      <div className='flex items-center gap-2 max-w-56'>
        <Calendar className='size-5 text-zinc-400' />
        <input disabled={isGuestsInputOpen} type="text" name="" placeholder='Quando?' id=""  className='bg-transparent text-lg placeholder-zinc-400 outline-none'/>
      </div>

      <div className="w-px h-6 bg-zinc-800 mr-4"></div>

      {isGuestsInputOpen ? (
        <button onClick={closeGuestsInput} className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>Alterar local/data <Settings2 className='size-5' /></button>
      ) : (
        <button onClick={openGuestsInput} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>Continuar <ArrowRight className="size-5 text-lime-950" /></button>
      )}
    </div>
  )
}