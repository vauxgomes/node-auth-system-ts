// Made with ❤️ by Vaux

import { app } from './app'
import dotenv from 'dotenv'

dotenv.config({ quiet: true }as any)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`
                  ▄   ▄ ▗▞▀▜▌█  ▐▌▄   ▄ 
Made with love by █   █ ▝▚▄▟▌▀▄▄▞▘ ▀▄▀  
                   ▀▄▀            ▄▀ ▀▄ 
    `)
  console.log(`🚀 Server started on port ${PORT}!`)
})
