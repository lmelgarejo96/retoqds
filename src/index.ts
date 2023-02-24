import { Server } from "./server"
import matrix from "./matrix"

const main = () => {
  new Server(3200).setInitialConfig([matrix]).start()
}

main()