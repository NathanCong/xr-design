import Demo from '@/Demo.svelte'
import { mount } from 'svelte'

const target: HTMLElement = document.getElementById('root') as HTMLElement

const app = mount(Demo, { target })

export default app
