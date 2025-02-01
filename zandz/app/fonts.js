import { Lato, Merienda, Raleway, Anek_Gujarati, Poppins, Lora } from 'next/font/google'

export const lato = Lato({
    weight: ['400', '700'],
    subsets: ['latin']
})

export const raleway = Raleway({
    weight: ['400', '600', '700'],
    subsets: ['latin']
})

export const anek_gujarati = Anek_Gujarati({
    weight: ['400', '600', '700'],
    subsets: ['latin']
})

export const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export const lora = Lora({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});