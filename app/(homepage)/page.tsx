// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'

export default function Page() {
  return (
    <div>

      <Link href='/about' _hover={{ color: 'blue.500' }}>
        About
      </Link>
      <div className='bg-red-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti commodi rerum doloremque! Eaque, quidem aliquid beatae alias nobis distinctio ducimus magnam labore expedita veniam officia rerum, possimus quia quasi. Natus itaque maxime, quo hic provident illo reiciendis saepe ipsam eligendi maiores consectetur laboriosam laudantium ullam id voluptas magnam voluptatem dolorum soluta quidem animi expedita? Accusamus molestiae incidunt ad dolorem blanditiis adipisci, minima nam cupiditate eos similique itaque quo, quam temporibus doloremque saepe, aliquid ratione vero nulla laborum alias! Qui cum, officia placeat quas fugiat amet pariatur, ut, incidunt dolorum ipsam laboriosam at aspernatur sint quibusdam voluptatem a voluptatibus repudiandae alias id. Provident atque odit id ut repellat aperiam quibusdam placeat mollitia, natus laboriosam quasi accusantium, ipsam velit voluptatibus. Placeat sapiente animi exercitationem incidunt accusamus aspernatur quod! Eum ipsa magni, deserunt praesentium nostrum quam placeat necessitatibus porro accusamus nesciunt illum. Vitae sint ratione, dolore tempore, autem ut quia corrupti quos iusto iure, voluptates velit voluptatibus numquam! Ex, nesciunt necessitatibus rerum quidem saepe numquam debitis eaque voluptate tempore quo optio voluptates distinctio praesentium, dolorem mollitia eius natus ab accusamus fuga. Error adipisci vero totam id voluptate aut corporis, ut quisquam laboriosam mollitia! Provident porro doloribus excepturi nemo aperiam enim id, facere eum maiores harum, consequatur saepe aliquid corporis officia nam, assumenda delectus dolores exercitationem eaque consectetur unde molestiae. Dolores mollitia ratione fugit, dolor nihil iste quaerat aut illum culpa aliquam molestias.
      </div>
    </div>
  )
}