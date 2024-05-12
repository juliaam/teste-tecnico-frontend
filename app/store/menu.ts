import { MenuService } from "../services/menu"

export async function getDayTime(){
    return await MenuService.getMenuByDaytime()
}
