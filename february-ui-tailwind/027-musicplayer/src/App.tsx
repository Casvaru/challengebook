import './App.css'
import iconBack from './assets/iconArrowBack.svg'
import iconPLayList from './assets/iconPlayList.svg'
import iconLowVolumen from './assets/iconLowVolumen.svg'
import iconHightVolumen from './assets/iconHightVolumen.svg'
import iconHeart from './assets/icon-heart.svg'
import iconLoop from './assets/iconLoop.svg'
import iconRepeat from './assets/iconRepeat.svg'
import iconPlayMusic from './assets/iconPlayMusic.svg'
import iconNextMusic from './assets/iconNextMusic.svg'
import iconBackMusic from './assets/iconBackMusic.svg'

function App () {
  return (
    <section className='grid place-items-center bg-slate-800 min-h-screen'>
      <div className='w-72 h-[550px] bg-slate-100 rounded-3xl hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-900'>
        <span className='flex justify-between p-4'>
          <img className='cursor-pointer hover:opacity-80' src={iconBack} alt='icon arrrow back' />
          <img className='cursor-pointer hover:opacity-80' src={iconPLayList} alt='menu dots vertical rounded' />
        </span>
        <picture>
          <img className='animate-spin-slow duration-1000 rounded-full h-48 w-48 m-auto mt-2 object-cover shadow-slate-500 shadow-md' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5PMEDRUHUVYXKFJEnfvCHAAAAA%26pid%3DApi&f=1&ipt=e4f8b2a0e0937712b96bc173cf21bf0c981ebe778d8083bdf0dda6f61c30de86&ipo=images' alt='cover album gorillaz plastic beach' />
        </picture>
        <h2 className='mt-8 font-bold text-center'>Rhinestone Eyes</h2>
        <h2 className='mt-1 font text-center'>Gorillaz</h2>
        <div className='pt-3'>
          <div className='w-5/6 h-1.5 rounded-full bg-slate-300 m-auto relative after:h-1.5 after:w-2/4 after:bg-blue-600 after:absolute after:rounded-full before:h-4 before:w-4 before:rounded-full before:bg-slate-400 before:absolute before:z-10 before:right-0 before:mr-28 before:-mt-1 cursor-pointer' />
          <div className='flex justify-between w-5/6 m-auto'>
            <span className='text-xs'>1:32</span>
            <span className='text-xs'>3:21</span>
          </div>
        </div>
        <div className='mt-5'>
          <picture className='flex justify-center gap-3'>
            <img className='w-13 p-4 h-auto rounded-full cursor-pointer hover:bg-blue-200 duration-200' src={iconBackMusic} alt='icon back music' />
            <img className='w-13 p-2 h-auto bg-blue-500 bg-opacity-50 hover:bg-opacity-100 duration-200 rounded-full cursor-pointer' src={iconPlayMusic} alt='icon play music' />
            <img className='w-13 p-4 h-auto rounded-full cursor-pointer hover:bg-blue-200 duration-200' src={iconNextMusic} alt='icon next music' />
          </picture>
        </div>
        <span className='flex justify-center mt-5'>
          <picture>
            <img src={iconLowVolumen} alt='icon low volumen' />
          </picture>
          <input className='w-52' type='range' />
          <picture>
            <img src={iconHightVolumen} alt='icon low volumen' />
          </picture>
        </span>
        <div className='p-3'>
          <picture className='flex justify-between'>
            <img className='cursor-pointer' src={iconHeart} alt='icon heart love' />
            <img className='cursor-pointer' src={iconRepeat} alt='icon heart love' />
            <img className='cursor-pointer' src={iconLoop} alt='icon heart love' />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default App
