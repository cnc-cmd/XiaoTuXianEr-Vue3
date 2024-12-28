import httpInstance from "@/utils/http";


export function GetCategory() {
    return httpInstance({
        url: 'home/category/head'
    })
}